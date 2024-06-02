import { NavLink } from "react-router-dom"
import { navLinks } from "../../utils/ui"
import styles from '../../pages/Landing/Landing.module.scss'
//assets
import resume from '/Tran_Nguyen_Resume.pdf'

export const LinkSection = () => {
  return (
    <div className={styles.slideLinkCon}>
      {navLinks.map(link => 
        <NavLink key={link.name} to={link.href} data-replace={link.title} className={styles.slideLink}><span>{link.title}</span></NavLink>
      )}
      {/* <a href={resume} target={'_blank'} className={styles.slideLink} data-replace='resume'><span>resume</span></a> */}
    </div>
  )
}

export const HeaderSection = () => {
  return (
    <div className={styles.header}>
      <h1>Tran Nguyen</h1>
      <h2>software engineer</h2>
    </div>
  )
}

