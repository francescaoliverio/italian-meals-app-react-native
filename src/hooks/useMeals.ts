// src\hooks\useMeals.ts

import { useCallback, useEffect, useState } from "react"
import { MealsListState } from "../types/meal"
import { fetchItalianMeals } from "../services/mealsApi"

export function useMeals() {
  const [state, setState] = useState<MealsListState>({
    status: "loading",
    items: [],
    message: ""
  })

  const loadMeals = useCallback(async () => {
    setState({ status: "loading", items: [], message: "" })
    try {
      const data = await fetchItalianMeals()
      if (!data || data.length === 0) {
        setState({
          status: "error",
          items: [],
          message: "No meals available"
        })
        return
      }
      setState({ status: "success", items: data, message: "" })
    } catch (error) {
      setState({
        status: "error",
        items: [],
        message: "Network error. Please try again."
      })
    }
  }, [])

  useEffect(() => {
    loadMeals()
  }, [])

  return {
    status: state.status,
    items: state.items,
    message: state.message,
    reload: loadMeals
  }
}
