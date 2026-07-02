// src\components\HeaderBtns.tsx

import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../context/AuthContext"
import HeaderButton from "./HeaderButton"

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
      {navActions.includes("settings") && <HeaderButton iconName="settings-outline" onPress={settings} />}
      <HeaderButton iconName="log-out-outline" onPress={logout} />
    </>
  )
}
