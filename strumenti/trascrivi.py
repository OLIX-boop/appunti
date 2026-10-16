"""Trascrive in Markdown + LaTeX i PDF scritti a mano dei docenti, con l'API di Gemini.

Serve a risparmiare token: Claude legge il testo trascritto invece delle immagini delle pagine,
e guarda un'immagine solo per i punti segnati come dubbi.

Uso (dalla cartella del repository):
    python strumenti/trascrivi.py "geometria/materiale/07 ....pdf"
    python strumenti/trascrivi.py "analisi/materiale/Lezione 9.pdf" --pagine 1-20
    python strumenti/trascrivi.py file.pdf --prova          # nessuna chiamata all'API

La chiave si legge dalla variabile d'ambiente GEMINI_API_KEY (su Windows anche da quella
impostata con `setx`, senza riavviare). Non va mai scritta nel codice né nel repository.

Il risultato va in trascrizioni/<materia>/<nome del pdf>.md (cartella esclusa da git).
Ogni pagina è salvata appena pronta: se lo script si interrompe, rilanciandolo riparte dalle
pagine mancanti. Con --rifai si ritrascrivono anche quelle già fatte.
"""
import argparse
import os
import re
import sys
import time
from pathlib import Path

import pymupdf

# gemini-2.5-flash è stato ritirato per i nuovi utenti (ottobre 2026). Se anche questo sparisce:
# `python strumenti/trascrivi.py --modelli` elenca quelli disponibili, poi --modello o GEMINI_MODEL.
MODELLO = os.environ.get("GEMINI_MODEL", "gemini-3.8-flash")

# Stringa raw: dentro ci sono comandi LaTeX come \begin, che altrimenti diventerebbero escape.
PROMPT = r"""Sei un trascrittore. L'immagine è una pagina di appunti universitari di matematica
scritti a mano da un docente (in italiano). Trascrivila FEDELMENTE in Markdown.

Regole:
- Trascrivi tutto, nell'ordine della pagina. Non riassumere, non spiegare, non risolvere,
  non aggiungere introduzioni o commenti tuoi.
- Formule in LaTeX: $...$ in linea, $$...$$ per quelle su riga propria. Matrici con
  \begin{bmatrix}...\end{bmatrix}; matrici complete [A|b] con \left[\begin{array}{cc|c}...\end{array}\right].
  Vettori sottolineati o con la freccia: \mathbf{v} oppure \vec v, come nell'originale.
- Mantieni titoli ed etichette del docente così come sono scritti: «Def.», «Teorema 2»,
  «Proposizione 1», «Osservazione», «Esempio B3», «Dimostrazione», «Soluzione», e il numero
  di pagina cerchiato in alto se c'è (scrivilo come: [p. 12]).
- Le frecce fra matrici con le operazioni di riga (es. R_2 - 2R_1) vanno trascritte.
- Testo barrato: ~~testo~~. Se qualcosa è corretto a mano o riscritto sopra (spesso in un
  altro colore), scrivi la versione finale e aggiungi subito dopo [corretto: prima c'era ...].
- Disegni e grafici: una riga [Figura: descrizione breve di cosa mostra, con le etichette].
- Se una parola, un indice, un segno o un numero non è leggibile con sicurezza, scrivi la
  lettura più probabile seguita da [?].
- Se ti sembra che il docente abbia commesso un errore, NON correggerlo: trascrivi com'è e
  aggiungi [!? possibile refuso: motivo in poche parole].
"""

MARCATORE = re.compile(r"^<!-- pagina (\d+) -->$", re.M)


def chiave_api():
    k = os.environ.get("GEMINI_API_KEY")
    if not k and sys.platform == "win32":
        try:  # variabile impostata con setx: è nel registro anche se questo processo non la vede
            import winreg
            with winreg.OpenKey(winreg.HKEY_CURRENT_USER, "Environment") as h:
                k = winreg.QueryValueEx(h, "GEMINI_API_KEY")[0]
        except OSError:
            k = None
    if not k:
        sys.exit("Manca la chiave: imposta la variabile d'ambiente GEMINI_API_KEY (vedi in cima al file).")
    return k


def intervallo(spec, n):
    if not spec:
        return list(range(1, n + 1))
    pagine = set()
    for parte in spec.split(","):
        a, _, b = parte.partition("-")
        a, b = int(a), int(b or a)
        pagine.update(range(max(1, a), min(n, b) + 1))
    return sorted(pagine)


def leggi_esistenti(percorso):
    """Pagine già trascritte nel file .md: {numero: testo}."""
    if not percorso.exists():
        return {}
    testo = percorso.read_text(encoding="utf-8")
    pezzi = MARCATORE.split(testo)
    return {int(pezzi[i]): pezzi[i + 1].strip("\n").removesuffix("---").strip() for i in range(1, len(pezzi) - 1, 2)}


def scrivi(percorso, titolo, pagine):
    corpo = "\n\n---\n\n".join(f"<!-- pagina {n} -->\n{pagine[n]}" for n in sorted(pagine))
    percorso.write_text(f"# {titolo}\n\n{corpo}\n", encoding="utf-8")


def trascrivi_pagina(client, types, immagine, modello):
    attesa = 20
    for tentativo in range(6):
        try:
            r = client.models.generate_content(
                model=modello,
                contents=[types.Part.from_bytes(data=immagine, mime_type="image/jpeg"), PROMPT],
                config=types.GenerateContentConfig(temperature=0),
            )
            return (r.text or "").strip()
        except Exception as e:  # limite del piano gratuito o errore temporaneo del server
            msg = str(e)
            if "404" in msg and "NOT_FOUND" in msg:
                sys.exit(f"Il modello {modello} non è disponibile. Elenca quelli attivi con --modelli "
                         "e scegline uno con --modello oppure con la variabile GEMINI_MODEL.")
            if tentativo < 5 and any(s in msg for s in ("429", "RESOURCE_EXHAUSTED", "503", "500", "UNAVAILABLE")):
                print(f"   limite o errore temporaneo, riprovo fra {attesa} s", flush=True)
                time.sleep(attesa)
                attesa = min(attesa * 2, 300)
                continue
            raise


def main():
    ap = argparse.ArgumentParser(description="Trascrive un PDF scritto a mano con Gemini.")
    ap.add_argument("pdf", nargs="?")
    ap.add_argument("--modelli", action="store_true", help="elenca i modelli Flash disponibili ed esce")
    ap.add_argument("--pagine", help="es. 1-20 oppure 3,5,8-10 (numerazione del PDF)")
    ap.add_argument("--modello", default=MODELLO)
    ap.add_argument("--dpi", type=int, default=150)
    ap.add_argument("--pausa", type=float, default=4.0, help="secondi fra una pagina e l'altra")
    ap.add_argument("--rifai", action="store_true", help="ritrascrive anche le pagine già fatte")
    ap.add_argument("--prova", action="store_true", help="renderizza soltanto, senza chiamare l'API")
    a = ap.parse_args()

    if a.modelli:
        from google import genai
        client = genai.Client(api_key=chiave_api())  # tenuto in una variabile: l'elenco arriva a pagine
        for m in client.models.list():
            if "flash" in m.name and "generateContent" in (getattr(m, "supported_actions", None) or []):
                print(m.name.removeprefix("models/"))
        return
    if not a.pdf:
        ap.error("indica il PDF da trascrivere")

    pdf = Path(a.pdf).resolve()
    radice = Path(__file__).resolve().parent.parent
    try:
        materia = pdf.relative_to(radice).parts[0]
    except ValueError:
        materia = "altro"
    uscita = radice / "trascrizioni" / materia / (pdf.stem + ".md")
    uscita.parent.mkdir(parents=True, exist_ok=True)

    doc = pymupdf.open(pdf)
    pagine = leggi_esistenti(uscita)
    da_fare = [n for n in intervallo(a.pagine, doc.page_count) if a.rifai or n not in pagine]
    print(f"{pdf.name}: {doc.page_count} pagine, da trascrivere {len(da_fare)} -> {uscita.relative_to(radice)}")

    if a.prova:
        for n in da_fare[:3]:
            jpg = doc[n - 1].get_pixmap(dpi=a.dpi).tobytes("jpeg")
            print(f"   pagina {n}: {len(jpg) // 1024} KB")
        return

    from google import genai
    from google.genai import types
    client = genai.Client(api_key=chiave_api())

    for k, n in enumerate(da_fare):
        jpg = doc[n - 1].get_pixmap(dpi=a.dpi).tobytes("jpeg")
        print(f"   pagina {n} ({k + 1}/{len(da_fare)})", flush=True)
        pagine[n] = trascrivi_pagina(client, types, jpg, a.modello)
        scrivi(uscita, pdf.name, pagine)  # salvataggio a ogni pagina: si può interrompere e riprendere
        if k + 1 < len(da_fare):
            time.sleep(a.pausa)

    dubbi = sum(t.count("[?]") for t in pagine.values())
    refusi = sum(t.count("[!?") for t in pagine.values())
    print(f"Fatto. Letture incerte [?]: {dubbi}; possibili refusi [!?]: {refusi}.")


if __name__ == "__main__":
    main()
