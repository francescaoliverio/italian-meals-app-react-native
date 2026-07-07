// src\components\FavoriteBtn.tsx

import { Pressable, Text } from "react-native"
import { useFavorites } from "../context/FavoritesContext"
import { useColors } from "../theme/styles"

interface Props {
  idMeal: string
}

export default function FavoriteBtn({ idMeal }: Props) {
  const colors = useColors()
  const { favoriteIds, toggleFavorite } = useFavorites()
  const active = favoriteIds.includes(idMeal)

  return (
    <Pressable onPress={() => toggleFavorite(idMeal)}>
      <Text style={{ fontSize: 24, color: colors.primary }} accessibilityRole="button" accessibilityLabel="Add to favorites">
        {active ? "♥" : "♡"}
      </Text>
    </Pressable>
  )
}
