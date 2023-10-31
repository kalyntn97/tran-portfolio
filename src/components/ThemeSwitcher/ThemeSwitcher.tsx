//npm modules
import { useContext } from "react"
//contexts
import { ThemeContext } from "../../contexts/ThemeContext"
//assets
import redFlower from '../../assets/images/red-flower.png'
//css
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  const { useTheme } = useContext(ThemeContext)
  
  const handleUseTheme = (e) => {
    const theme = e.target.id
    console.log(e.target)
      useTheme(theme)
    }
  return ( 
    <div className={styles.container}>
      <button onClick={handleUseTheme} id='blossom'>⚘</button>
      <button onClick={handleUseTheme} id='starry'>✰</button>
    </div>
   )
}
 
export default ThemeSwitcher