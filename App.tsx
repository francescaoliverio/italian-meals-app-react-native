// App.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStaticNavigation } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { FavoritesProvider } from "./src/context/FavoritesContext"
import { AuthProvider, useAuth } from "./src/context/AuthContext"
import Home from "./src/screens/Home"
import Details from "./src/screens/Details"
import Favorites from "./src/screens/Favorites"
import Settings from "./src/screens/Settings"
import Login from "./src/screens/Login"
import LogoutButton from "./src/components/LogoutButton"

const useIsSignedIn = () => {
  const { user } = useAuth()
  return !!user
}

const useIsSignedOut = () => {
  return !useIsSignedIn()
}

const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      if: useIsSignedIn,
      screen: Home,
      linking: { path: "home" },
      options: {
        title: "Italian Meals",
        headerRight: () => <LogoutButton />
      }
    },
    Favorites: {
      if: useIsSignedIn,
      screen: Favorites,
      linking: { path: "favorites" },
      options: {
        title: "Your Favorites",
        headerRight: () => <LogoutButton />
      }
    },
    Details: {
      if: useIsSignedIn,
      screen: Details,
      linking: { path: "details/:id" },
      options: { title: "Recipe" }
    },
    Settings: {
      if: useIsSignedIn,
      screen: Settings,
      linking: { path: "settings" }
    },
    Login: {
      if: useIsSignedOut,
      screen: Login,
      linking: { path: "login" }
    }
  }
})

const linking = { prefixes: ["italianmealsapp://"] }

const Navigation = createStaticNavigation(Stack)

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AuthProvider>
        <FavoritesProvider>
          <Navigation linking={linking} />
        </FavoritesProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}
