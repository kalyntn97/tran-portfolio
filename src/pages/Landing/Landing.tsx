//npm modules
import { useContext } from 'react'
import { motion } from 'framer-motion'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'
import ContactLinks from '../../components/ContactLinks/ContactLinks'
//css
import styles from './Landing.module.scss'
//assets
import sleepingCat from '/assets/images/cat.png'
import { HeaderSection, LinkSection } from '../../components/Landing/LandingComponents'


type IProps = {
  handleHideNavAndFooter: () => void
}

const Landing: React.FC<IProps> = (props) => {
  props.handleHideNavAndFooter()

  const { theme } = useContext(ThemeContext)
  
  const variants = {
    container: {
      animate: { transition: { staggerChildren: 0.5, duration: 1, type: "spring", stiffness: 100 } },
      exit: { x: '-100%', opacity: 0, transition: { duration: 0.5 } }
    },
    laptop: {
      initial: { y: '-100%' },
      animate: { y: 0, transition: { delayChildren: 1, type: "spring", stiffness: 100 } },
    },
    cat: { 
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    landing: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    header: {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    links: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 }
    }
  }

  return (
    <motion.div className={styles.container} data-theme={theme}
      initial='initial' animate='animate' exit='exit' variants={variants.container}
    > 
      <div className={styles.themeSwitch}>
        <ThemeSwitcher />
      </div>
      <div className={styles.landscape}>
        <motion.div variants={variants.laptop} className={styles.laptop}>   
          <div className={styles.screen}>
            <div className={styles.window}>
              <div className={styles.windowBar}>
                <div className={styles.roundBtn} />
                <div className={styles.roundBtn} />
                <div className={styles.roundBtn} />
              </div>
              <div className={styles.windowBody}>
                <motion.div variants={variants.header}>
                  <HeaderSection />
                </motion.div>
                <motion.div variants={variants.links} className={`${styles.linkSection} ${styles.linkContainerLandscape}`}>
                  <LinkSection />
                  <ContactLinks />
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles.keyboard}>
            <div className={styles.keys} />
            <div className={styles.mouse} />
          </div>
        </motion.div>
        <motion.img variants={variants.cat} src={sleepingCat} alt="a sleeping cat" className={styles.catImg} />
      </div>

      <div className={styles.portrait}>
        <motion.img variants={variants.landing} src='/assets/images/landing.png' className={styles.landingImg} />
        <motion.div variants={variants.header} className={styles.header}>
          <HeaderSection />
        </motion.div>
        <motion.div variants={variants.links} className={styles.linkSection}>
          <LinkSection />
          <div className={styles.contactLinks}>
            <ContactLinks />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
 
export default Landing