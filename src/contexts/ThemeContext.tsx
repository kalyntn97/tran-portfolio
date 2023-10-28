//npm modules
import { createContext, useState } from "react"

type Theme = 'blossom' | 'starry'
type ThemeContext = { 
    theme: Theme,
    useTheme: (theme: Theme) => void
  }
export const ThemeContext = createContext<ThemeContext>( {} as ThemeContext )

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('blossom')
  const useTheme = (theme: Theme) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, useTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

