// src\components\ThemeToggle.tsx

import React from "react"
import { Switch, Text, View, StyleSheet } from "react-native"
import { useColors, useStyles } from "../theme/styles"

interface ThemeToggleProps {
  label: string
  value: boolean
  onValueChange: (value: boolean) => void
}

export default function ThemeToggle({ label, value, onValueChange }: ThemeToggleProps) {
  const colors = useColors()
  const styles = useStyles()

  return (
    <View style={styles.filtersContainer}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} trackColor={{ false: colors.border, true: colors.primary }} thumbColor={value ? "#fff" : "#eee"} />
    </View>
  )
}
