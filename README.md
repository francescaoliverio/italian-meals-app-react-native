# Italian Meals App

App mobile realizzata con **Expo / React Native** per il progetto finale del corso di React Native presso ITS, corso in Web & Mobile App Development.

**Author:** Francesca Oliverio

**GitHub:** [→ ItalianMealsApp](https://github.com/francescaoliverio/italian-meals-app-react-native.git)

---

## Descrizione

Italian Meals App permette di esplorare piatti della cucina italiana tramite l'API [TheMealDB](https://www.themealdb.com/), salvare i preferiti in locale, cercare tra i piatti e visualizzare i dettagli di ogni ricetta. L'accesso avviene tramite login mock con utenti predefiniti.

---

## Installazione e avvio

### Prerequisiti

- [Node.js LTS](https://nodejs.org/)
- [Expo Go](https://expo.dev/go)

### Passi

```bash
git clone https://github.com/francescaoliverio/italian-meals-app-react-native.git
cd ItalianMealsApp
npm install
npx expo start
```

---

## Utenti mock (login di test)

| Email                     | Password    |
| ------------------------- | ----------- |
| mario.rossi@student.it    | React2026!  |
| giulia.bianchi@student.it | Expo2026!   |
| luca.verdi@student.it     | Mobile2026! |

L'autenticazione è interamente locale — nessuna API esterna di login, le credenziali sono confrontate con un array mock in `services/auth.ts`.

---

## API utilizzate

Dati forniti da [TheMealDB](https://www.themealdb.com/documentation) (API gratuita per uso didattico, test key `1`).

---

## Deep Linking

Questa app supporta deep linking sia per custom app scheme che per Expo dev URL.

### Custom scheme

- `italianmealsapp://home`
- `italianmealsapp://favorites`
- `italianmealsapp://details/53014`
- `italianmealsapp://settings`
- `italianmealsapp://login`

### Expo dev URLs

- `exp://172.20.10.7:8081/--/home`
- `exp://172.20.10.7:8081/--/favorites`
- `exp://172.20.10.7:8081/--/details/53014`
- `exp://172.20.10.7:8081/--/settings`
- `exp://172.20.10.7:8081/--/login`

> N.B. Sostituisci `172.20.10.7:8081` con il tuo local Expo host se è diverso.

---

## Stato globale

Lo stato dei preferiti è gestito tramite **React Context** (`FavoritesContext`), per garantire che il toggle di un preferito sia immediatamente sincronizzato tra tutte le schermate che lo mostrano (Home, Details), senza dover propagare aggiornamenti manualmente o ricaricare da `AsyncStorage` ad ogni focus.

Allo stesso modo, la sessione utente (dati di login, avatar, nome) è gestita tramite **`AuthContext`**, così che ogni schermata possa accedere ai dati dell'utente loggato e gestire il logout senza prop-drilling.

Anche il tema (dark mode / light mode) è gestito con **`ThemeContext`**.
