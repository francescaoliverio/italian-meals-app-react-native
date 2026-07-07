// src\components\MealFilters.tsx

import React from "react"
import { View, Text, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStyles } from "../theme/styles"

interface MealFiltersProps {
  activeFilter: "all" | "favorites"
}

export default function MealFilters({ activeFilter }: MealFiltersProps) {
  const styles = useStyles()
  const navigation = useNavigation<any>()

  const handleNavigate = (routeName: "Home" | "Favorites") => {
    // Avoid triggering navigation if already in the selected screen
    if ((routeName === "Home" && activeFilter === "all") || (routeName === "Favorites" && activeFilter === "favorites")) return
    // Reset the navigation history to prevent screens from piling up in the stack
    // `navigation.navigate` would trap the user in a backward-forward navigation loop
    navigation.reset({ index: 0, routes: [{ name: routeName }] })
  }

  return (
    <View style={styles.filtersContainer}>
      <Pressable onPress={() => handleNavigate("Home")} style={({ pressed }) => [styles.filter, activeFilter === "all" ? styles.filterFilled : styles.filterOutlined, pressed && { opacity: 0.7 }]}>
        <Text style={activeFilter === "all" ? styles.textLight : styles.text}>All</Text>
      </Pressable>

      <Pressable onPress={() => handleNavigate("Favorites")} style={({ pressed }) => [styles.filter, activeFilter === "favorites" ? styles.filterFilled : styles.filterOutlined, pressed && { opacity: 0.7 }]}>
        <Text style={activeFilter === "favorites" ? styles.textLight : styles.text}>Favorites</Text>
      </Pressable>
    </View>
  )
}
