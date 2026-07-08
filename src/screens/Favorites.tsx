// src\screens\Favorites.tsx

import { useNavigation } from "@react-navigation/native"
import { useMemo } from "react"
import { useMeals } from "../hooks/useMeals"
import { useFavorites } from "../context/FavoritesContext"
import { FlatList, Text, View } from "react-native"
import Button from "../components/Button"
import MealCard from "../components/MealCard"
import MealFilters from "../components/MealFilters"
import LoadingView from "../components/LoadingView"
import ErrorView from "../components/ErrorView"
import { useStyles } from "../theme/styles"

export default function Favorites() {
  const styles = useStyles()

  // ===== Navigation =====
  const navigation = useNavigation<any>()

  // ===== Load Meals =====
  const { status, items, message, reload } = useMeals()

  // ===== Load Favorites =====
  const { favoriteIds } = useFavorites()

  // ===== Filter Favorites =====
  const favoriteMeals = useMemo(() => {
    return items.filter((meal) => favoriteIds.includes(meal.idMeal))
  }, [items, favoriteIds])

  // ===== Return Views =====
  // ----- Loading -----
  if (status === "loading") return <LoadingView />
  // ----- Error -----
  if (status === "error") return <ErrorView message={message} onRetry={reload} />
  // ----- No Favorites -----
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.title}>Oh no!</Text>
        <Text style={styles.text}>You haven't added any recipes to your favorites yet. Go back to recipes to discover your next favorite dish!</Text>
        <Button onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })} title="Back to Recipes" />
      </View>
    )
  }
  // ----- Favorites -----
  return (
    <View style={styles.safeAreaView}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={<MealFilters activeFilter="favorites" />}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() => {
              navigation.navigate("Details", { id: item.idMeal })
            }}
          />
        )}
      />
    </View>
  )
}
