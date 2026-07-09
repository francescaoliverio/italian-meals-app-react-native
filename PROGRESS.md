# Progress - Italian Meals App

**Author:** Francesca Oliverio  
**Repo:** [github.com/francescaoliverio/italian-meals-app-react-native](https://github.com/francescaoliverio/italian-meals-app-react-native)  
**Last Updated:** 2026-07-08

This document tracks the development progress and architectural milestones for the Italian Meals application.

## 📜 Google Doc

Shared Google Doc: ([🔗 link](https://docs.google.com/document/d/1RXdJJVh4GlMYAngYksM9MLcUvdgkYoO3lizdgMCK36Y/))

## 📸 App Screenshots

|                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Splash Screen                                                | Login Screen                                                 |
| ![Splash](./docs/screenshots/00-splash.png)                  | ![Login](./docs/screenshots/01-login.png)                    |
| Settings Screen                                              | Details Screen                                               |
| ![Settings](./docs/screenshots/02-settings.png)              | ![Details](./docs/screenshots/06-details.png)                |
| Home Screen                                                  |
| ![Home 01](./docs/screenshots/03-home-01.png)                | ![Home 02](./docs/screenshots/03-home-02.png)                |
| Search Screen                                                |
| ![Search 01](./docs/screenshots/04-search-01.png)            | ![Search 02](./docs/screenshots/04-search-02.png)            |
| Favorites Screen                                             |
| ![Favorites 01](./docs/screenshots/05-favorites-01.png)      | ![Favorites 02](./docs/screenshots/05-favorites-02.png)      |
| Deep Linking                                                 |
| ![Deep Linking 01](./docs/screenshots/07-deeplinking-01.png) | ![Deep Linking 02](./docs/screenshots/07-deeplinking-02.png) |

---

## 🔐 Mock Users (Login Credentials)

| Email                     | Password    |
| ------------------------- | ----------- |
| mario.rossi@student.it    | React2026!  |
| giulia.bianchi@student.it | Expo2026!   |
| luca.verdi@student.it     | Mobile2026! |

## 📝 Notes

### 💾 Context

- Global Context managed with Context (Auth, Favorites, Theme)

### 👁️‍🗨️ Accessibility

```js
<Pressable onPress={() => toggleFavorite(idMeal)}>
  <Text accessibilityRole="button" accessibilityLabel="Add to favorites">
    {active ? "♥" : "♡"}
  </Text>
</Pressable>
```

### 🔗 Deep Linking

```js
const Stack = createNativeStackNavigator({
  screenOptions: ({ navigation }) => ({
    // [...]
  }),
  screens: {
     Home: {
        if: useIsSignedIn,
      screen: Home,
      linking: { path: "home" },
       // [...]
    },
    Favorites: {
       if: useIsSignedIn,
      screen: Favorites,
      linking: { path: "favorites" },
       // [...]
    },
    Details: {
       if: useIsSignedIn,
      screen: Details,
      linking: { path: "details/:id" },
       // [...]
    },
    Settings: {
       if: useIsSignedIn,
      screen: Settings,
      linking: { path: "settings" },
       // [...]
    },
    Login: {
       if: useIsSignedOut,
      screen: Login,
      linking: { path: "login" },
       // [...]
    }
  }
})

const linking = { prefixes: ["italianmealsapp://", "exp://172.20.10.7:8081/--/"] }

const Navigation = createStaticNavigation(Stack)

export default function App() {
  return (
   {/* ... */}
      <NavigationGuard />
   {/* ... */}
  )
}

function NavigationGuard() {
  const { isLoading } = useAuth()
  if (isLoading) {
    return <LoadingView />
  }
  return <Navigation linking={linking} />
}
```
