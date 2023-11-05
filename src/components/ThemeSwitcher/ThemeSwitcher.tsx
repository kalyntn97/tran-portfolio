//npm modules
import { useContext, useState } from "react"
import { motion } from "framer-motion"
//contexts
import { ThemeContext } from "../../contexts/ThemeContext"
//assets
// import redFlower from '/assets/images/red-flower.png'
//css
import styles from './ThemeSwitcher.module.scss'



const ThemeSwitcher: React.FC = () => {
  const { theme, useTheme } = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(false)
  //for future implentation of >2 themes
  // const handleUseTheme = (e) => {
  //   const theme = e.target.id
  //   console.log(e.target)
  //     useTheme(theme)
  //   }
  const toggleDarkMode = () => {
    if (theme === 'blossom') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTheme('starry') 
      setIsDark(true)
    } else {  
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTheme('blossom')
      setIsDark(false)
    }
  }
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  return ( 
    <div className={styles.switch} data-theme={theme} onClick={toggleDarkMode}>
      <motion.div className={styles.handle} layout transition={spring} />
      {/* <button onClick={handleUseTheme} id='blossom'>⚘</button>
      <button onClick={handleUseTheme} id='starry'>✰</button> */}
    </div>
   )
}
 
export default ThemeSwitcher