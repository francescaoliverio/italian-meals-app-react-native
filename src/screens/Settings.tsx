// src\screens\Settings.tsx

import { ScrollView, Text, View } from "react-native"
import Avatar from "../components/Avatar"
import ThemeToggle from "../components/ThemeToggle"
import { useAuth } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext"
import { useStyles } from "../theme/styles"

export default function Settings() {
  const styles = useStyles()
  const { isDarkMode, toggleTheme } = useTheme()
  const { user } = useAuth()
  if (!user) return null

  return (
    <View style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Avatar uri={user.avatarUri} />
        <Text style={styles.title}>{user.name}</Text>
        <View style={styles.containerDashed}>
          <Text style={styles.subtitle}>Edit your app settings</Text>
          <ThemeToggle label="Dark Mode" value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </ScrollView>
    </View>
  )
}
