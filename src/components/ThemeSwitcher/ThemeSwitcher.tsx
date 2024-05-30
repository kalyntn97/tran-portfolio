//npm modules
import { useContext } from "react"
import { motion } from "framer-motion"
//contexts
import { ThemeContext } from "../../contexts/ThemeContext"
//css
import styles from './ThemeSwitcher.module.scss'

const themes = {
  blossom: '/assets/icons/sun.png',
  starry: '/assets/icons/moon.png',
}

const ThemeSwitcher: React.FC = () => {
  const { theme, useTheme } = useContext(ThemeContext)
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
    } else {  
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTheme('blossom')
    }
  }
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  return ( 
    <div className={styles.switch} data-theme={theme} onClick={toggleDarkMode}>
      <motion.div className={styles.handle} layout transition={spring}>
        <img src={themes[theme]} />
      </motion.div>
    </div>
   )
}
 
export default ThemeSwitcher