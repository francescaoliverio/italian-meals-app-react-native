// src\screens\Login.tsx

import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import Button from "../components/Button"
import { useStyles } from "../theme/styles"

type StatusType = "" | "loading" | "error" | "success"

export default function Login() {
  const styles = useStyles()
  const navigation = useNavigation<any>()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<StatusType>("")

  const emailOk = email.includes("@")
  const canSubmit = emailOk && password
  const isLoading = status === "loading"

  function onSubmit() {
    setSubmitted(true)
    if (canSubmit) {
      setStatus("loading")
      setTimeout(() => {
        const success = login(email, password)
        if (success) {
          setStatus("success")
        } else {
          setStatus("error")
        }
      }, 1000)
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.centeredContainer}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Email:</Text>
            <TextInput placeholder="Please enter your email" style={[styles.input, submitted && !emailOk && styles.inputError]} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
            {submitted && !emailOk && <Text style={styles.errorText}>Email must include '@'</Text>}
            <Text style={styles.label}>Password:</Text>
            <TextInput placeholder="Please enter your password" style={[styles.input, submitted && !password && styles.inputError]} onChangeText={setPassword} secureTextEntry={true} />
            {submitted && !password && <Text style={styles.errorText}>The password is needed</Text>}
            <Button title={isLoading ? "Loading..." : "Login"} disabled={!canSubmit || isLoading} onPress={onSubmit} />
            {status === "error" && <Text style={[styles.statusText]}>❌ Wrong credentials.</Text>}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
