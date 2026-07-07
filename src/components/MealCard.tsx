// src\components\MealCard.tsx

import { Text, Image, TouchableOpacity, View } from "react-native"
import { MealSummary } from "../types/meal"
import FavoriteBtn from "./FavoriteBtn"
import { useStyles } from "../theme/styles"

interface Props {
  meal: MealSummary
  onPress: () => void
}

export default function MealCard({ meal, onPress }: Props) {
  const styles = useStyles()

  return (
    <TouchableOpacity onPress={onPress} style={[styles.containerDashed, { flexDirection: "row", alignItems: "center" }]}>
      <Image source={{ uri: meal.strMealThumb }} style={{ width: 50, height: 50, borderRadius: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.strongText}>{meal.strMeal}</Text>
      </View>
      <FavoriteBtn idMeal={meal.idMeal} />
    </TouchableOpacity>
  )
}
