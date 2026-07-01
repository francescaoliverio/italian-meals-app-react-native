// src/components/LogoutButton.tsx

import { useAuth } from "../context/AuthContext"
import Button from "./Button"

export default function LogoutButton() {
  const { logout } = useAuth()
  return <Button title="Logout" onPress={logout} style={{ margin: 12 }} />
}
