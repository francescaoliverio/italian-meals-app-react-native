// src\components\ThemeToggle.tsx

import React from "react"
import { Switch, Text, View } from "react-native"
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
    <View style={styles.settingContainer}>
      <Text style={styles.text}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} ios_backgroundColor={value ? colors.primary : colors.border} trackColor={{ false: colors.border, true: colors.primary }} thumbColor={value ? "#fff" : "#eee"} />
    </View>
  )
}
