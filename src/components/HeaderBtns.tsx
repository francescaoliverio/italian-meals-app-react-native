// src\components\HeaderBtns.tsx

import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../context/AuthContext"
import IconButton from "./IconButton"

type NavAction = "settings" | null

interface HeaderBtnsProps {
  navActions?: NavAction[]
}

export default function HeaderBtns({ navActions = [] }: HeaderBtnsProps) {
  const navigation = useNavigation<any>()
  const settings = () => navigation.navigate("Settings")
  const { logout } = useAuth()
  return (
    <>
      {navActions.includes("settings") && <IconButton iconName="settings-outline" onPress={settings} />}
      <IconButton iconName="log-out-outline" onPress={logout} />
    </>
  )
}
