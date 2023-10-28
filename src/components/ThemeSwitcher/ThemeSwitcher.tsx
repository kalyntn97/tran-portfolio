//npm modules
import { useContext } from "react"
//contexts
import { ThemeContext } from "../../contexts/ThemeContext"
//assets
import redFlower from '../../assets/images/red-flower.png'
//css
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher: React.FC = () => {
  const { theme, useTheme } = useContext(ThemeContext)
  const handleUseTheme = (e) => {
    const theme = e.target.innerText
    useTheme(theme)
  }
  return ( 
    <div data-theme={theme} className={styles.container}>
      <button onClick={handleUseTheme}><img src={redFlower} />blossom</button>
      <button onClick={handleUseTheme}>starry</button>
    </div>
   )
}
 
export default ThemeSwitcher