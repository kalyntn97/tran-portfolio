import { useContext } from 'react'
//utils
import { getIconSource } from '../../utils/ui'
import { links } from '../../utils/utils'
//context
import { ThemeContext } from '../../contexts/ThemeContext'
//styles
import styles from './ContactLinks.module.scss'

const ContactLinks = () => {
  const { theme } = useContext(ThemeContext)
  const mode = theme === 'blossom' ? 'light' : 'dark'

  return (
    <div className={styles.subtitleLinks}>
      {links.map(link =>
        <a key={link.name} href={link.href} target='_blank'>
          <img src={getIconSource(link.name, mode)} />
        </a>
      )}
    </div>
  )
}

export default ContactLinks