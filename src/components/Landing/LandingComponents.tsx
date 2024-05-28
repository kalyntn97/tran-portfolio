import { NavLink } from "react-router-dom"
import { navLinks } from "../../utils/ui"
import styles from '../../pages/Landing/Landing.module.scss'

export const LinkSection = () => {
  return (
    <div className={styles.slideLinkCon}>
      {navLinks.map(link => 
        <NavLink to={link.href} data-replace={link.title} className={styles.slideLink}><span>{link.title}</span></NavLink>
      )}
    </div>
  )
}

