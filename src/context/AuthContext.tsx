import { createContext, useContext, useState, useEffect } from "react"
import { loadUserStorage, saveUserStorage, removeUserStorage } from "../services/storage"
import { validateLogin } from "../services/auth"

type User = {
  email: string
  name: string
  avatarUri: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function bootAuth() {
      const savedUser = await loadUserStorage()
      if (savedUser) setUser(savedUser)
      setIsLoading(false)
    }
    bootAuth()
  }, [])

  const login = (email: string, password: string) => {
    const foundUser = validateLogin(email, password)
    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name, avatarUri: foundUser.avatarUri }
      setUser(userData)
      saveUserStorage(userData)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    removeUserStorage()
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
