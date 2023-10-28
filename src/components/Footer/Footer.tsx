//css
import styles from './Footer.module.scss'
//assets
import gitHubIcon from '../../assets/icons/github.svg'
import linkedInIcon from '../../assets/icons/linkedin.svg'
import mailIcon from '../../assets/icons/envelope.svg'
import favicon from '../../../public/favicon.svg'

const Footer = () => {
  return ( 
    <main className={styles.container}>
      <img className={styles.favicon} src={favicon} />
      <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=[tranhnnguyen13@gmail.com]' target='_blank'><img src={mailIcon} /></a>
      <a href='https://github.com/kalyntn97' target='_blank'><img src={gitHubIcon} /></a>
      <a href='https://www.linkedin.com/in/tran-huynh-nguyen/' target='_blank'><img src={linkedInIcon} /></a>
    </main>
   )
}
 
export default Footer