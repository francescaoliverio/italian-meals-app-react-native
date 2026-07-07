// src\theme\tokens.ts

export const colors = {
  primary: "#ff2244",
  textLight: "#ffffff",
}

export const lightColors = {
  error: "#ff4422",
  primary: "#ff2244",
  background: "#ffffff",
  textPrimary: "#222222",
  textSecondary: "#444444",
  textLight: "#ffffff",
  border: "#aaaaaa"
}

export const darkColors = {
  error: "#ff4422",
  primary: "#ff2244",
  background: "#222222",
  textPrimary: "#ffffff",
  textSecondary: "#cccccc",
  textLight: "#222222",
  border: "#424242"
}

export const getColors = (isDarkMode: boolean) => (isDarkMode ? darkColors : lightColors)

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32
}

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  round: 100
}
