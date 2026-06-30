import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, Text } from "react-native"
import { useAuth } from "../context/AuthContext"
import { styles } from "../theme/styles"
import Avatar from "../components/Avatar"

export default function Settings() {
  console.log("settings 1")
  const { user } = useAuth()
  if (!user) return null

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Avatar uri={user.avatarUri} />
          <Text style={styles.title}>Welcome back, {user.name}!</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
