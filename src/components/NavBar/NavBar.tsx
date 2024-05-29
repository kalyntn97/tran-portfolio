//npm modules
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { motion } from "framer-motion"
//context
import { ThemeContext } from "../../contexts/ThemeContext"
//components
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
//utils
import { getIconSource, navLinks } from "../../utils/ui"
//css
import styles from './NavBar.module.scss'

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext)
  const mode = theme === 'blossom' ? 'light' : 'dark'
  const logo = getIconSource('logo', mode)
  const menu = getIconSource('menu', mode)

  const closeMenu = () => {
    setOpen(false)
  }

  const variants = {
    container: { 
      animate: { transition: { duration: 0.5 } },
      exit: { y: '-100%', opacity: 0 }
    },
    link: { 
      initial: { y: '-100%', opacity: 0}, 
      animate: { y: 0, opacity: 1 }, 
    },
    menu: {
      initial: { scale: 0, }, 
      animate: { scale: 1, originY: 0, transition: { delayChildren: 0.2, staggerChildren: 0.1, duration: 0.5 } },
      exit: { scale: 0 }
    }
  }

  const NavLinks = () => (
    <motion.div variants={variants.menu} className={styles.menuCon}>
      {navLinks.map(link =>
        <motion.div variants={variants.link} key={link.name}>
          <NavLink to={link.href} onClick={closeMenu}>
            <img src={link.icon}/>{link.name}
          </NavLink>
        </motion.div>
      )}
    </motion.div>
  )

  return ( 
    <motion.div className={styles.navbar} data-theme={theme} key='nav'
      variants={variants.container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className={styles.leftContainer}>
        <motion.div variants={variants.link}>
          <NavLink to='/'>
            <img className={styles.favicon} src={logo} />
          </NavLink>
        </motion.div>
        <motion.div variants={variants.link} key='theme'>
          <ThemeSwitcher />
        </motion.div>
      </div>

      <div className={styles.rightContainer}>
        <motion.div variants={variants.link} className={styles.portrait}>
          <button onClick={() => setOpen(!open)}>
            <img src={menu} className={styles.menuIcon} />
          </button>
          {open && <NavLinks />}
        </motion.div>

        <div className={styles.landscape}>
          <NavLinks />
        </div>
      </div>
    </motion.div>
  )
}
 
export default NavBar