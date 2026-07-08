# Requirements (consegna finale)

Il file **`README.md`** va nella **root** del repository GitHub ed è **obbligatorio** per la consegna finale.

Deve includere almeno:

- Nome progetto e autore
- **Come installare e avviare il progetto** (passo passo):
  1. `git clone <url-repo>`
  2. `cd <nome-cartella>`
  3. `npm install`
  4. `npx expo start` (poi `a` per Android / QR per Expo Go)
- Prerequisiti (Node.js LTS, Expo Go su device/emulatore)
- Endpoint API usati (link documentazione TheMealDB)
- Utenti mock per test login (tabella sopra)
- **Deep linking:** path configurato (es. `meal/:idMeal`) + comando di test `exp://...`
- Link al **Google Doc** (screenshot lab **13–22**)
- Scelta stato globale e motivazione
- Edge case gestiti (rete, login fallito, lista vuota, preferiti, deep link invalido)
- Eventuali feature opzionali 20–21

---

## Checklist checkpoint (9 luglio)

- [ ] Repository su **GitHub** (tuo account)
- [ ] App avvia con `npx expo start` senza errori
- [ ] **Login** funziona con i **3 utenti mock**
- [ ] Dopo login: **avatar rotondo** + **nome** utente visibili (lab 07)
- [ ] Lista piatti da API **italiana** con stati loading/error/success
- [ ] Dettaglio con `lookup.php?i=`
- [ ] **Ricerca** sulla lista
- [ ] **Preferiti** in AsyncStorage (`app:v1:favs`)
- [ ] Navigazione Lista → Dettaglio → Impostazioni + **logout**
- [ ] **Deep linking** (lab 14): URL `exp://` apre dettaglio con `idMeal` valido
- [ ] **Retry** su errore API
- [ ] Stato globale (Context/Zustand) per sessione o preferiti
- [ ] Almeno **2** accorgimenti accessibilità
- [ ] File **`PROGRESS.md`** con **tutti gli screenshot** richiesti
- [ ] **Google Doc** con screenshot lab **13–22** + link in `PROGRESS.md`

---

## Checklist consegna finale (fine semestre 4)

- [ ] Tutto quanto sopra, rifinito e documentato
- [ ] Link repository caricato su **FAD**
- [ ] **`README.md`** in root con **installazione e avvio** (`npm install`, `npx expo start`)
- [ ] (Opzionale) notifiche o feature native lezioni 20–21

# 📜 Google Doc

Come alla **verifica intermedia** (screenshot lab **01–11**), nel **progetto individuale** inserite nel Google Doc **uno screenshot per lab 13–22**: la funzione della **Italian Meals App** che realizza quel laboratorio / quella lezione.

1. Aprite il **Google Doc** condiviso ([🔗 link](https://docs.google.com/document/d/1RXdJJVh4GlMYAngYksM9MLcUvdgkYoO3lizdgMCK36Y/edit?tab=t.0#heading=h.wu29v8o1b6lm))
2. Per ogni **lab 13–22**, inserite titolo, **screenshot** e 1–2 righe di spiegazione
3. Inserite lo **stesso link** in `PROGRESS.md` e su **FAD**

| Lab    | Cosa mostrare nello screenshot                                   |
| ------ | ---------------------------------------------------------------- |
| **13** | Navigazione + parametri route (`idMeal` → dettaglio)             |
| **14** | Deep link `meal/:idMeal` (anche terminale `exp://` se possibile) |
| **15** | API TheMealDB + loading / error / success / Retry                |
| **16** | Preferiti in **AsyncStorage** (`app:v1:favs`)                    |
| **17** | Stato globale (Context o Zustand)                                |
| **18** | **StyleSheet** / Flexbox responsive                              |
| **19** | Accessibilità e/o tema                                           |
| **20** | Feature nativa (opzionale) o «non implementato»                  |
| **21** | Notifica locale (opzionale) o «non implementato»                 |
| **22** | Panoramica app finale consegnata                                 |
