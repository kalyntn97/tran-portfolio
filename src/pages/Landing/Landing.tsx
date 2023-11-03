//npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './Landing.module.scss'
//assets
import sleepingCat from '../../assets/images/sleepingCat.png'

const Landing = (props) => {
  props.setShowNavAndFooter(false)

  return ( 
    <main className={styles.container}>
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
                <NavLink to='/about'>more about me</NavLink>
                <NavLink to='/projects'>my projects</NavLink>
                <NavLink to='/contact'>contact me</NavLink>
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