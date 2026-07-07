// src\components\LoadingView.tsx

import { ActivityIndicator, View } from "react-native"
import { useStyles } from "../theme/styles"

export default function LoadingView() {
  const styles = useStyles()

  return (
    <View style={styles.centeredContainer}>
      <ActivityIndicator size="large" color="#f24" />
    </View>
  )
}
