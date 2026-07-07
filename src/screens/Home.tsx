// src\screens\Home.tsx

import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"
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
        ListHeaderComponent={<MealFilters activeFilter="all" />}
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
