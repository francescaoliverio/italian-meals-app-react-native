// src\components\ErrorView.tsx

import { Text, View } from "react-native"
import { styles } from "../theme/styles"
import Button from "./Button"

interface Props {
  message: string
  onRetry: () => void
}

export default function ErrorView({ message, onRetry }: Props) {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.errorText}>{message}</Text>
      <Button onPress={onRetry} title="Retry" />
    </View>
  )
}
