import { Image, Text, View } from "react-native"
import { useStyles } from "../theme/styles"
import { useState } from "react"

export default function Avatar({ uri }: { uri: string }) {
  const styles = useStyles()
  const [failed, setFailed] = useState(false)

  return (
    <View style={{ alignItems: "center" }}>
      {failed ? (
        <View style={styles.avatar}>
          <Text style={{ fontSize: 40 }}>?</Text>
        </View>
      ) : (
        <Image source={{ uri }} style={styles.avatar} onError={() => setFailed(true)} />
      )}
    </View>
  )
}
