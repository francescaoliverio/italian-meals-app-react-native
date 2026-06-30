// src\components\LoadingView.tsx

import { ActivityIndicator, View } from "react-native"
import { styles } from "../theme/styles"

export default function LoadingView() {
  return (
    <View style={styles.centeredContainer}>
      <ActivityIndicator size="large" color="#50f" />
    </View>
  )
}
