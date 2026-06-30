// src\context\FavoritesContext.tsx

import { createContext, useContext, useEffect, useState } from "react"
import { loadFavoriteIds, saveFavoriteIds } from "../services/storage"

interface FavoritesContextValue {
  favoriteIds: string[]
  toggleFavorite: (idMeal: string) => void
}

const FavoritesContext = createContext<FavoritesContextValue>({
  favoriteIds: [],
  toggleFavorite: () => {}
})

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])

  useEffect(() => {
    loadFavoriteIds().then(setFavoriteIds)
  }, [])

  function toggleFavorite(idMeal: string) {
    const nextIds = favoriteIds.includes(idMeal) ? favoriteIds.filter((id) => id !== idMeal) : [...favoriteIds, idMeal]

    setFavoriteIds(nextIds)
    void saveFavoriteIds(nextIds)
  }

  return <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite }}>{children}</FavoritesContext.Provider>
}

export function useFavorites() {
  return useContext(FavoritesContext)
}
