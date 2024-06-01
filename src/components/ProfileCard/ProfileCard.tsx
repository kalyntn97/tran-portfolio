import React, { useContext } from 'react'
//assets
import avatar from '/assets/images/avatar.png'
import resume from '/Tran_Nguyen_Resume.pdf'
//utils
import { links } from '../../utils/utils'
import { getIconSource } from '../../utils/ui'
import { ThemeContext } from '../../contexts/ThemeContext'
//styles
import styles from './ProfileCard.module.scss'


const ProfileCard = () => {
  const { theme } = useContext(ThemeContext)

  const mode = theme === 'blossom' ? 'light' : 'dark'

  return (
    <div className={styles.profileCard} data-theme={theme}>
      <div className={styles.contact}>
        {links.map(link =>
          <img key={link.name} src={getIconSource(link.name, mode)} />
        )}
      </div>
      <div className={styles.profilePic}>
        <img src={avatar} alt='an avatar' />
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <span className={styles.name}>Tran Nguyen</span>
          <span className={styles.title}>Full Stack Software Engineer</span>
        </div>
        <div className={styles.footer}>
          <a className={styles.resumeBtn} href={resume} target={'_blank'}>RESUME</a>
        </div>
      </div>
  </div>
  )
}

export default ProfileCard