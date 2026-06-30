// App.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStaticNavigation } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { FavoritesProvider } from "./src/context/FavoritesContext"
import Home from "./src/screens/Home"
import Details from "./src/screens/Details"
import Favorites from "./src/screens/Favorites"

const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      linking: { path: "home" },
      options: { title: "Italian Meals" }
    },
    Favorites: {
      screen: Favorites,
      linking: { path: "favorites" },
      options: { title: "Your Favorites" }
    },
    Details: {
      screen: Details,
      linking: { path: "details/:id" },
      options: { title: "Recipe" }
    }
  }
})

const linking = { prefixes: ["italianmealsapp://"] }

const Navigation = createStaticNavigation(Stack)

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <FavoritesProvider>
        <Navigation linking={linking} />
      </FavoritesProvider>
    </SafeAreaProvider>
  )
}
