// src\components\Button.tsx

import { Pressable, Text } from "react-native"
import { styles } from "../theme/styles"

interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
}

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }, disabled && { opacity: 0.5 }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}
