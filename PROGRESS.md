# Progress - Italian Meals App

**Author:** Francesca Oliverio  
**Repo:** [github.com/francescaoliverio/italian-meals-app-react-native](https://github.com/francescaoliverio/italian-meals-app-react-native)  
**Last Updated:** 2026-07-08

This document tracks the development progress and architectural milestones for the Italian Meals application.

## 📸 App Screenshots

1. **Login**
   - Controlled login form
   - Access only with valid mock credentials
   - Display an error message for invalid credentials

![Login](./docs/screenshots/01-login.png)

---

2. **Profile Header**
   - Display a circular avatar (`Image` inside a container with `borderRadius` and `overflow: hidden`)
   - Show the logged-in user's name (following the Lab 07 pattern)
   - Visible in the list or settings screen

![Profile Header](./docs/screenshots/02-profile.png)

---

3. **Meal List**
   - Display meals using a `FlatList`
   - Fetch data from the Italian API
   - Handle the following states:
     - Loading
     - Error
     - Success
     - Empty (if applicable)

![Meal List](./docs/screenshots/03-list.png)

---

4. **Search / Filter**
   - Controlled text input
   - Filter the meal list in real time
   - Follow the controlled form approach from Labs 07–11

![Search](./docs/screenshots/04-search.png)

---

5. **Details**
   - Fetch meal data from `lookup.php?i={idMeal}`
   - Display:
     - Meal image
     - Meal title
     - Instructions or ingredients

![Details](./docs/screenshots/05-details.png)

---

6. **Favorites**
   - Toggle meals as favorites
   - Persist favorites using `AsyncStorage`
   - Storage key: `app:v1:favs`

![Favorites](./docs/screenshots/06-favorites.png)

---

7. **Settings**
   - Logout button that returns the user to the login screen
   - Display the user's avatar
   - Display the user's name
   - Optional theme setting

![Settings](./docs/screenshots/07-settings.png)

---

8. **Error State**
   - Show a network/API error screen
   - Include a **Retry** button
   - Capture a screenshot of this state

![Error State](./docs/screenshots/08-error.png)

---

9. **Deep Link**
   - Support opening the meal details screen via `meal/:idMeal`
   - Capture a screenshot showing the deep-linked details screen
   - Show the terminal with a successful `exp://` command

![Deep Link](./docs/screenshots/09-deeplink.png)

---

## 🔐 Mock Users (Login Credentials)

| Email                     | Password    |
| ------------------------- | ----------- |
| mario.rossi@student.it    | React2026!  |
| giulia.bianchi@student.it | Expo2026!   |
| luca.verdi@student.it     | Mobile2026! |

## 📝 Notes

- Global Context managed with Context (Auth, Favorites, Theme)