//npm modules
import { useContext } from 'react'
//components 
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './Footer.module.scss'
//assets
import gitHubIcon from '/assets/icons/github.svg'
import gitHubIconWhite from '/assets/icons/github-white.png'
import linkedInIcon from '/assets/icons/linkedin.svg'
import linkedInIconWhite from '/assets/icons/linkedin-white.png'
import mailIcon from '/assets/icons/envelope.svg'
import mailIconWhite from '/assets/icons/envelope-white.png'
import favicon from '/assets/icons/favicon.svg'
import faviconWhite from '/assets/icons/favicon-white.svg'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return ( 
    <main className={styles.container}>
      <img 
        className={styles.favicon} 
        src={theme === 'blossom' ? favicon : faviconWhite} 
      />
      <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=[tranhnnguyen13@gmail.com]' target='_blank'>
        <img src={theme === 'blossom' ? mailIcon : mailIconWhite} />
      </a>
      <a href='https://github.com/kalyntn97' target='_blank'>
        <img src={theme === 'blossom' ? gitHubIcon : gitHubIconWhite} />
      </a>
      <a href='https://www.linkedin.com/in/tran-huynh-nguyen/' target='_blank'>
        <img src={theme === 'blossom' ? linkedInIcon : linkedInIconWhite} />
      </a>
    </main>
   )
}
 
export default Footer