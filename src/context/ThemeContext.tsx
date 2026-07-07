// src\context\ThemeContext.tsx

import React, { createContext, useContext, useState } from "react"
import { useColorScheme } from "react-native"

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useColorScheme() // Check if device is already in dark mode
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === "dark")

  const toggleTheme = () => setIsDarkMode((prev) => !prev)

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
