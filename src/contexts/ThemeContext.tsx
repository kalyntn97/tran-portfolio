//npm modules
import { createContext, useState } from "react"

type Theme = 'blossom' | 'starry'
type ThemeContext = { 
    theme: Theme,
    toggleTheme: () => void
  }
export const ThemeContext = createContext<ThemeContext>( {} as ThemeContext )

export const ThemeProvider: React.FC = ( { children } ) => {
  const [theme, setTheme] = useState<Theme>('blossom')
  const toggleTheme = () => {
    setTheme(theme === 'blossom' ? 'starry' : 'blossom')
  }
  const backgroundColor = theme === "blossom" ? "#FFF" : "#333"
  const color = theme === "blossom" ? "#333" : "#FFF"
  
  document.body.style.backgroundColor = backgroundColor
  document.body.style.color = color

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

