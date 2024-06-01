//npm modules
import { useContext } from 'react'
//components 
import { ThemeContext } from '../../contexts/ThemeContext'
import ContactLinks from '../ContactLinks/ContactLinks'
//ui
import { getIconSource } from '../../utils/ui'
//css
import styles from './Footer.module.scss'


const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const mode = theme === 'blossom' ? 'light' : 'dark'

  return ( 
    <main className={styles.container}>
      <a href='/'><img  className={styles.favicon} src={getIconSource('logo', mode)} /></a>
      <ContactLinks />
    </main>
   )
}
 
export default Footer