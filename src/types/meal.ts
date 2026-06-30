export type LoadStatus = "idle" | "loading" | "success" | "error"

export interface MealSummary {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export interface MealDetail extends MealSummary {
  strInstructions: string
  strIngredient1: string
}

export interface MealsListState {
  status: LoadStatus
  items: MealSummary[]
  message: string
}

export interface MealDetailState {
  status: LoadStatus
  meal: MealDetail | null
  message: string
}
