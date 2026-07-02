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
import LoadingView from "./src/components/LoadingView"
import { colors } from "./src/theme/tokens"
import HeaderBtns from "./src/components/HeaderBtns"

const useIsSignedIn = () => {
  const { user } = useAuth()
  return !!user
}

const useIsSignedOut = () => {
  return !useIsSignedIn()
}

const Stack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: colors.textLight
  },
  screens: {
    Home: {
      if: useIsSignedIn,
      screen: Home,
      linking: { path: "home" },
      options: {
        title: "Italian Meals",
        headerRight: () => <HeaderBtns navActions={["settings"]} />
      }
    },
    Favorites: {
      if: useIsSignedIn,
      screen: Favorites,
      linking: { path: "favorites" },
      options: {
        title: "Your Favorites",
        headerRight: () => <HeaderBtns navActions={["settings"]} />
      }
    },
    Details: {
      if: useIsSignedIn,
      screen: Details,
      linking: { path: "details/:id" },
      options: {
        title: "Recipe",
        headerRight: () => <HeaderBtns navActions={["settings"]} />
      }
    },
    Settings: {
      if: useIsSignedIn,
      screen: Settings,
      linking: { path: "settings" },
      options: {
        headerRight: () => <HeaderBtns />
      }
    },
    Login: {
      if: useIsSignedOut,
      screen: Login,
      linking: { path: "login" },
      options: {
        headerShown: false
      }
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
          <NavigationGuard />
        </FavoritesProvider>
      </AuthProvider>
    </SafeAreaProvider>
  )
}

function NavigationGuard() {
  const { isLoading } = useAuth()
  // If the app is still loading the user session from local storage, prevent rendering the navigator.
  // This prevents deep linking from failing when checking protected routes during boot.
  if (isLoading) {
    return <LoadingView />
  }
  return <Navigation linking={linking} />
}
