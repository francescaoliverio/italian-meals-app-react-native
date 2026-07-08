// src/components/IconButton.tsx

import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useStyles } from "../theme/styles"
import { colors } from "../theme/tokens"

interface IconButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"]
  onPress: () => void
  color?: string
  size?: number
}

export default function IconButton({ iconName, onPress, color = colors.textLight, size = 24 }: IconButtonProps) {
  const styles = useStyles()

  return (
    <Pressable onPress={onPress} style={styles.iconButton}>
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  )
}
