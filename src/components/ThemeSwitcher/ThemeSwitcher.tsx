import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const ThemeSwitcher: React.FC = () => {
  const { theme, useTheme } = useContext(ThemeContext)
  const handleUseTheme = (e) => {
    const theme = e.target.innerText
    useTheme(theme)
  }
  return ( 
    <div data-theme={theme}>
      <button onClick={handleUseTheme}>blossom</button>
      <button onClick={handleUseTheme}>starry</button>
    </div>
   )
}
 
export default ThemeSwitcher