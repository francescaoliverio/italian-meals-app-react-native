// src\screens\Home.tsx

import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, Pressable, Text, View } from "react-native"
import LoadingView from "../components/LoadingView"
import ErrorView from "../components/ErrorView"
import MealCard from "../components/MealCard"
import { useMeals } from "../hooks/useMeals"
import { styles } from "../theme/styles"

export default function Home() {
  // ===== Navigation =====
  const navigation = useNavigation<any>()

  // ===== Load Meals =====
  const { status, items, message, reload } = useMeals()

  // ===== Return Views =====
  // ----- Loading -----
  if (status === "loading") return <LoadingView />
  // ----- Error -----
  if (status === "error") return <ErrorView message={message} onRetry={reload} />
  // ----- Home -----
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={
          <View style={styles.filtersContainer}>
            <Pressable style={({ pressed }) => [styles.filterFilled, pressed && { opacity: 0.7 }]}>
              <Text style={styles.textLight}>All</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Favorites")} style={({ pressed }) => [styles.filterOutlined, pressed && { opacity: 0.7 }]}>
              <Text style={styles.text}>Favorites</Text>
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
