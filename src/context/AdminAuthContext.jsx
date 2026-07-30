import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AdminAuthContext = createContext()
export const useAdminAuth = () => useContext(AdminAuthContext)

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('jinat_admin_token')
    if (token) {
      api.me()
        .then(setAdmin)
        .catch(() => localStorage.removeItem('jinat_admin_token'))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    const data = await api.login(email, password)
    localStorage.setItem('jinat_admin_token', data.token)
    setAdmin(data.admin)
  }

  const logout = () => {
    localStorage.removeItem('jinat_admin_token')
    setAdmin(null)
  }

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AdminAuthContext.Provider>
  )
}
