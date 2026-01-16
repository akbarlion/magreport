"use client"
import { createContext, useContext, useState } from "react"

type Role = "mahasiswa" | "dosen" | "pembimbing" | "admin"

interface RoleContextType {
  role: Role
  setRole: (role: Role) => void
  getBasePath: () => string
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("userRole") as Role) || "mahasiswa"
    }
    return "mahasiswa"
  })

  const updateRole = (newRole: Role) => {
    setRole(newRole)
    localStorage.setItem("userRole", newRole)
  }

  const getBasePath = () => `/${role}`

  return (
    <RoleContext.Provider value={{ role, setRole: updateRole, getBasePath }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (!context) {
    throw new Error("useRole must be used within RoleProvider")
  }
  return context
}