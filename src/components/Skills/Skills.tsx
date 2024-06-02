//npm modules
import { useContext } from 'react'
//utils
import { ThemeContext } from '../../contexts/ThemeContext'
import { DATABASES_HOSTING, FRAMEWORKS_AND_LIBRARIES, LANGUAGES, OTHERS } from '../../utils/ui'
//css
import styles from './Skills.module.scss'

const Skills = () => {
  const { theme } = useContext(ThemeContext)

  const sections = [
    { name: 'Languages', data: LANGUAGES },
    { name: 'FrameWorks & Libraries', data: FRAMEWORKS_AND_LIBRARIES},
    { name: 'Databases & Hosting', data: DATABASES_HOSTING},
    { name: 'Others', data: OTHERS},
  ]

  return ( 
    <div className={styles.container} data-theme={theme}>
      {sections.map(section =>    
        <div className={styles.skillContainer}> 
          <div className={styles.contentCon}>
            <h1>{section.name}</h1>
            <div>
              {section.data.map(item =>
                <span key={item.name}>
                  <img src={item.icon} />
                  <p>{item.name}</p>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills