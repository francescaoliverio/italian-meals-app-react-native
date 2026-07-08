// src/components/HeaderButton.tsx

import { Pressable } from "react-native"
import { colors, spacing } from "../theme/tokens"
import { Ionicons } from "@expo/vector-icons"

interface HeaderButtonProps {
  iconName: React.ComponentProps<typeof Ionicons>["name"]
  onPress: () => void
  color?: string
  size?: number
}

export default function HeaderButton({ iconName, onPress, color = colors.textLight, size = 24 }: HeaderButtonProps) {
  return (
    <Pressable onPress={onPress} style={{ padding: spacing.md, justifyContent: "center", alignItems: "center", marginVertical: -10 }}>
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  )
}
