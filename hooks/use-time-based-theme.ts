"use client"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export function useTimeBasedTheme() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // Only set auto theme if user hasn't manually selected a theme
    if (theme === "system") {
      const hour = new Date().getHours()
      
      // Dark mode: 18:00 - 06:00 (6 PM to 6 AM)
      // Light mode: 06:00 - 18:00 (6 AM to 6 PM)
      if (hour >= 18 || hour < 6) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
  }, [setTheme, theme])

  return { theme, setTheme }
}