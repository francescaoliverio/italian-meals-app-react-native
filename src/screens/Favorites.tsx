// src\screens\Favorites.tsx

import { useNavigation } from "@react-navigation/native"
import { useMemo } from "react"
import { useMeals } from "../hooks/useMeals"
import { useFavorites } from "../context/FavoritesContext"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, Pressable, Text, View } from "react-native"
import Button from "../components/Button"
import MealCard from "../components/MealCard"
import ErrorView from "../components/ErrorView"
import LoadingView from "../components/LoadingView"
import { styles } from "../theme/styles"

export default function Favorites() {
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
      <SafeAreaView style={styles.centeredContainer}>
        <Text style={styles.title}>Oh no!</Text>
        <Text style={styles.text}>You haven't added any recipes to your favorites yet. Go back to recipes to discover your next favorite dish!</Text>
        <Button onPress={() => navigation.navigate("Home")} title="Back to Recipes" />
      </SafeAreaView>
    )
  }
  // ----- Favorites -----
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={
          <View style={styles.filtersContainer}>
            <Pressable onPress={() => navigation.navigate("Home")} style={({ pressed }) => [styles.filterOutlined, pressed && { opacity: 0.7 }]}>
              <Text style={styles.text}>All</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.filterFilled, pressed && { opacity: 0.7 }]}>
              <Text style={styles.textLight}>Favorites</Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() => {
              navigation.navigate("Details", { id: item.idMeal })
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}
