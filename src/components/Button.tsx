// src\components\Button.tsx

import { Pressable, Text } from "react-native"
import { styles } from "../theme/styles"

interface ButtonProps {
  title: string
  onPress: () => void
  disabled?: boolean
  style?: {}
}

export default function Button({ title, onPress, disabled = false, style = {} }: ButtonProps) {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }, disabled && { opacity: 0.5 }, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}
