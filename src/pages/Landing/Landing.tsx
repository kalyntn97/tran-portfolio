//npm modules
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'
import ContactLinks from '../../components/ContactLinks/ContactLinks'
//css
import styles from './Landing.module.scss'
//assets
import sleepingCat from '/assets/images/cat.png'
import { LinkSection } from '../../components/Landing/LandingComponents'


type IProps = {
  handleHideNavAndFooter: () => void
}

const Landing: React.FC<IProps> = (props) => {
  props.handleHideNavAndFooter()

  const { theme } = useContext(ThemeContext)
  

  const variants = {
    container: {
      animate: {
        transition: { staggerChildren: 1 } 
      },
      exit: { width: 0, height: 0, x: '50%', y: '50%', opacity: 0 }
    },
    laptop: {
      initial: { y: -100, x: -750 },
      animate: { x: 0, y: 0 },
    },
    image: { 
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    windowBody : {
      animate: {
        transition: { delayChildren: 0.2, staggerChildren: 0.5 }
      }
    },
  }
  const fadeInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }
  

  return (
    <motion.div className={styles.container} data-theme={theme}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={variants.container}
    > 
      <div className={styles.themeSwitch}>
        <ThemeSwitcher />
      </div>
      <div className={styles.landscape}>
        <motion.div variants={variants.laptop} key='laptop' className={styles.laptop}>
          <div className={styles.screen}>
            <div className={styles.window}>
              <div className={styles.windowBar}>
                <div className={styles.roundBtn} />
                <div className={styles.roundBtn} />
                <div className={styles.roundBtn} />
              </div>
              <motion.div variants={variants.windowBody} key='windowBody' className={styles.windowBody}>
                <motion.div variants={fadeInFromLeft} key='header' className={styles.header}>
                  <h1>Tran Nguyen</h1>
                  <h2>software engineer</h2>
                </motion.div>
                <div className={styles.linkSection}>
                  <div className={styles.linkContainerLandscape}>
                    <LinkSection />
                  </div>
                  <ContactLinks />
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.keyboard}>
            <div className={styles.keys} />
            <div className={styles.mouse} />
          </div>
        </motion.div>
        <img src={sleepingCat} alt="a sleeping cat" className={styles.image} />
      </div>
      //* portrait & small screen
      <div className={styles.portrait}>
        <div className={styles.header}>
          <h1>Tran Nguyen</h1>
          <h2>software engineer</h2>
        </div>
        <div className={styles.linkContainerPortrait}>
          <LinkSection />
        </div>
        <ContactLinks />
      </div>
    </motion.div>
 
  )
}
 
export default Landing