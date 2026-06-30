// src\services\storage.ts

import AsyncStorage from "@react-native-async-storage/async-storage"

// =============================
// ===== FAVORITES STORAGE =====
// =============================

export const FAVORITES_KEY = "app:v1:favs"

export async function loadFavoriteIds(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(FAVORITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : []
  } catch {
    return []
  }
}

export async function saveFavoriteIds(ids: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(ids))
  } catch {
    console.error("Error saving favorite ids")
  }
}

// ========================
// ===== AUTH STORAGE =====
// ========================

export const USER_KEY = "app:v1:user"

export async function loadUserStorage(): Promise<any | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export async function saveUserStorage(user: any): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))
  } catch {
    console.error("Error saving user session")
  }
}

export async function removeUserStorage(): Promise<void> {
  try {
    await AsyncStorage.removeItem(USER_KEY)
  } catch {
    console.error("Error removing user session")
  }
}