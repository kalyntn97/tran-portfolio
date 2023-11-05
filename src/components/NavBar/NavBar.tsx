//npm modules
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { motion } from "framer-motion"
//context
import { ThemeContext } from "../../contexts/ThemeContext"
//components
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
//css
import styles from './NavBar.module.scss'
//assets
import favicon from '../../assets/icons/favicon.svg'
import faviconWhite from '../../assets/icons/favicon-white.svg'
import orangeFlower from '../../assets/images/orange-flower.png'
import purpleFlower from '../../assets/images/purple-flower.png'
import yellowFlower from '../../assets/images/yellow-flower.png'

const NavBar = () => {
  const { theme } = useContext(ThemeContext)

  const variants = {
    container: { 
     animate: { transition: { staggerChildren: 0.2 } }
    },
    left: {
      animate: {
        transition: { staggerChildren: 0.1 }
      }
    },
    right: {
      animate: {
        transition: { staggerChildren: 0.1 }
      }
    }
  }

  const fadeInFromTop = {
    initial: { y: -100, opacity: 0},
    animate: { y: 0, opacity: 1},
    exit: { y: 100, opacity: 0 }
  }


  

  return ( 
    <motion.div className={styles.navbar} data-theme={theme} key='nav'
      variants={variants.container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div className={styles.leftContainer} key='left' variants={variants.left}>
        <motion.div variants={fadeInFromTop} key='logo'>
          <NavLink to='/'>
            <img 
              className={styles.favicon} 
              src={theme === 'blossom' ? favicon : faviconWhite} 
            />
          </NavLink>
        </motion.div>
        <motion.div variants={fadeInFromTop} key='theme'>
          <ThemeSwitcher />
        </motion.div>
      </motion.div>
      <motion.section className={styles.rightContainer} key='right' variants={variants.right}>
        <motion.div variants={fadeInFromTop} key='link-1'>
          <NavLink to='/about'><img src={yellowFlower}/>About</NavLink>
        </motion.div>
        <motion.div variants={fadeInFromTop} key='link-2'>
          <NavLink to='/projects'><img src={purpleFlower} />Projects</NavLink>
        </motion.div>
        <motion.div variants={fadeInFromTop} key='link-3'>
          <NavLink to='/contact'><img src={orangeFlower} />Contact Me</NavLink>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
 
export default NavBar