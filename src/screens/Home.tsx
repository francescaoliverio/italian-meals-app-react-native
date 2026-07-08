// src\screens\Home.tsx

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { FlatList, Keyboard, Text, View } from "react-native"
import Button from "../components/Button"
import SearchBar from "../components/SearchBar"
import MealCard from "../components/MealCard"
import MealFilters from "../components/MealFilters"
import LoadingView from "../components/LoadingView"
import ErrorView from "../components/ErrorView"
import { useMeals } from "../hooks/useMeals"
import { useStyles } from "../theme/styles"

export default function Home() {
  const styles = useStyles()

  // ===== Navigation =====
  const navigation = useNavigation<any>()

  // ===== Load Meals =====
  const { status, items, message, reload } = useMeals()

  // ===== Hook for SearchBar =====
  const [searchFilter, setSearchFilter] = useState("")

  // ===== Return Views =====
  // ----- Loading -----
  if (status === "loading") return <LoadingView />
  // ----- Error -----
  if (status === "error") return <ErrorView message={message} onRetry={reload} />
  // ----- OK -----
  // Filter meals on search (SearchBar)
  const displayedMeals = items.filter((meal) => {
    const cleanedQuery = searchFilter.trim().toLowerCase()
    // if trimmed search term is falsy, return all meals
    if (!cleanedQuery) return true
    // otherwise filter meals that include search term in strMeal
    return meal.strMeal.toLowerCase().includes(cleanedQuery)
  })
  // ----- Home -----
  return (
    <View style={styles.safeAreaView}>
      <MealFilters activeFilter="all" />
      <SearchBar
        onSearch={(text) => {
          setSearchFilter(text)
          Keyboard.dismiss()
        }}
      />
      {!displayedMeals.length ? (
        <View style={styles.centeredContainer}>
          <Text style={styles.title}>Oh no!</Text>
          <Text style={styles.text}>No meals found matching your search.</Text>
          <Button onPress={() => setSearchFilter("")} title="Reset" />
        </View>
      ) : (
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.idMeal}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => (
            <MealCard
              meal={item}
              onPress={() => {
                navigation.navigate("Details", { id: item.idMeal })
              }}
            />
          )}
        />
      )}
    </View>
  )
}
