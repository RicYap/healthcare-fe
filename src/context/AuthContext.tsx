import { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

type AuthContextType = {
  apiKey: string | null
  setApiKey: (key: string | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem('apiKey'))

  const updateKey = (key: string | null) => {
    if (key) localStorage.setItem('apiKey', key)
    else localStorage.removeItem('apiKey')
    setApiKey(key)
  }

  return <AuthContext.Provider value={{ apiKey, setApiKey: updateKey }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
