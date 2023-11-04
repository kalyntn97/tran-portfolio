//npm modules
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher'
//css
import styles from './Landing.module.scss'
//assets
import sleepingCat from '../../assets/images/sleepingCat.png'

const Landing = (props) => {
  props.setShowNavAndFooter(false)
  const { theme } = useContext(ThemeContext)

  return ( 
    <main className={styles.container} data-theme={theme}>
      <ThemeSwitcher />
      <div className={styles.laptop}>
        <div className={styles.screen}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <div className={styles.roundBtn}></div>
              <div className={styles.roundBtn}></div>
              <div className={styles.roundBtn}></div>
            </div>
            <div className={styles.windowBody}>
              <div className={styles.header}>
                <h1>Tran Nguyen</h1>
                <h2>a software engineer</h2>
              </div>
              <div className={styles.linkContainer}>
                <NavLink to='/about' data-replace='more about me'><span>more about me</span></NavLink>
                <NavLink to='/projects' data-replace='my projects'><span>my projects</span></NavLink>
                <NavLink to='/contact' data-replace='contact me'><span>contact me</span></NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.keyboard}></div>
      </div>
      <div className={styles.table}></div>
      <div className={styles.image}><img src={sleepingCat} alt="a sleeping cat" /></div>
    </main>
  )
}
 
export default Landing