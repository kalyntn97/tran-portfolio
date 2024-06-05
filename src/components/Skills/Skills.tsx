//npm modules
import { useContext, useState } from 'react'
//utils
import { ThemeContext } from '../../contexts/ThemeContext'
import { DATABASES_HOSTING, FRAMEWORKS_AND_LIBRARIES, LANGUAGES, OTHERS } from '../../utils/ui'
//css
import styles from './Skills.module.scss'

const Skills = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false])
  const { theme } = useContext(ThemeContext)

  const sections = [
    { name: 'Languages', data: LANGUAGES },
    { name: 'FrameWorks & Libraries', data: FRAMEWORKS_AND_LIBRARIES},
    { name: 'Databases & Hosting', data: DATABASES_HOSTING},
    { name: 'Others', data: OTHERS},
  ]
  
  return ( 
    <div className={styles.container} data-theme={theme}>
      {sections.map((section, index) =>    
        <div className={`${hoverStates.some(s => s) && hoverStates[index] === false && styles.notHovered}, ${styles.skillContainer}`} onMouseEnter={() => setHoverStates(prev => prev.map((v, i) => index === i ? true : v))} onMouseLeave={() => setHoverStates(prev => prev.map((v, i) => index === i ? false : v))}> 
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