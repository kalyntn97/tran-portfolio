//npm modules
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'
//css
import styles from './Landing.module.scss'
//assets
import sleepingCat from '../../assets/images/sleepingCat.png'

const Landing: React.FC = (props) => {
  props.setShowNavAndFooter(false)
  const { theme } = useContext(ThemeContext)
  const variants = {
    container: {
      animate: { 
        transition: { staggerChildren: 1 } 
      },
    },
    laptop: {
      initial: { y: -100, x: -750 },
      animate: { y: 0 },
      exit: { y: -100 },
    },
    image: { 
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit : { opacity: 0 }
    },
    windowBody : {
      animate: {
        transition: { delayChildren: 0.2, staggerChildren: 0.5 }
      }
    },
    header : {
      initial: { opacity: 0, x: -100 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 }
    },
    links : { 
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 }
    }
  }
  

  return (
    <motion.div className={styles.container} data-theme={theme}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants.container}
    >
      <ThemeSwitcher />
      <motion.div variants={variants.laptop} key={'laptop'} className={styles.laptop}>
        <div className={styles.screen}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <div className={styles.roundBtn}></div>
              <div className={styles.roundBtn}></div>
              <div className={styles.roundBtn}></div>
            </div>
            <motion.div variants={variants.windowBody} key={'windowBody'} className={styles.windowBody}>
              <motion.div variants={variants.header} key={'header'} className={styles.header}>
                <h1>Tran Nguyen</h1>
                <h2>a software engineer</h2>
              </motion.div>
              <motion.div variants={variants.links} key={'links'} className={styles.linkContainer}>
                <NavLink to='/about' data-replace='more about me'><span>more about me</span></NavLink>
                <NavLink to='/projects' data-replace='my projects'><span>my projects</span></NavLink>
                <NavLink to='/contact' data-replace='contact me'><span>contact me</span></NavLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className={styles.keyboard}></div>
      </motion.div>
      <div className={styles.table}></div>
      <motion.div variants={variants.image} key={'image'} className={styles.image}><img src={sleepingCat} alt="a sleeping cat" /></motion.div>
    </motion.div>
  )
}
 
export default Landing