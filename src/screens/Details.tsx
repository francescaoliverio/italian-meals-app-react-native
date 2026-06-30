// src\screens\Details.tsx

import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { fetchMealById } from "../services/mealsApi"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, ScrollView, Text, View } from "react-native"
import FavoriteBtn from "../components/FavoriteBtn"
import LoadingView from "../components/LoadingView"
import ErrorView from "../components/ErrorView"
import { MealDetailState } from "../types/meal"
import { styles } from "../theme/styles"

export default function Details() {
  const route = useRoute<any>()

  const idMeal = route.params?.id ?? "Nessun pasto corrispondente"

  const [state, setState] = useState<MealDetailState>({
    status: "loading",
    meal: null,
    message: ""
  })

  async function loadMealDetails() {
    if (!idMeal) {
      setState({ status: "error", meal: null, message: "ID pasto mancante." })
      return
    }

    setState({ status: "loading", meal: null, message: "" })
    try {
      const data = await fetchMealById(idMeal)
      if (!data) {
        setState({
          status: "error",
          meal: null,
          message: "Dettagli non trovati."
        })
        return
      }
      setState({ status: "success", meal: data, message: "" })
    } catch (error) {
      setState({
        status: "error",
        meal: null,
        message: "Errore di rete. Riprova."
      })
    }
  }

  useEffect(() => {
    loadMealDetails()
  }, [idMeal])

  if (state.status === "loading") return <LoadingView />
  if (state.status === "error") return <ErrorView message={state.message} onRetry={loadMealDetails} />

  const meal = state.meal
  if (!meal) return null

  const ingredientsArray = meal
    ? Object.keys(meal)
        .filter((key) => key.startsWith("strIngredient") && meal[key as keyof typeof meal]?.trim())
        .map((key) => meal[key as keyof typeof meal])
    : []

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        {/* Image */}
        <Image source={{ uri: meal.strMealThumb }} style={{ width: "100%", height: 200 }} />
        <View style={styles.container}>
          {/* Title + ♥ */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <FavoriteBtn idMeal={meal.idMeal} />
          </View>
          {/* Ingredients */}
          <View style={[styles.containerDashed, { gap: 0 }]}>
            <Text style={styles.subtitle}>Ingredients</Text>
            <View>
              {ingredientsArray.map((ingredient, index) => (
                <Text key={index}>• {ingredient}</Text>
              ))}
            </View>
          </View>
          {/* Instructions */}
          <View>
            <Text style={styles.subtitle}>Instructions</Text>
            <Text>{meal.strInstructions}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
