//npm modules
import { useContext } from 'react'
// import { useState } from 'react'
// import useMeasure from 'react-use-measure'
// import { useSpring, animated } from '@react-spring/web'
//utils
import { ThemeContext } from '../../contexts/ThemeContext'
import { DATABASES_HOSTING, FRAMEWORKS_AND_LIBRARIES, LANGUAGES, OTHERS } from '../../utils/ui'
//css
import styles from './Skills.module.scss'

const Skills = () => {
  // const [progress, setProgress] = useState(0)
  // const [ref, { width }] = useMeasure()
  // const props = useSpring({width: width*progress})
  // const handleLoadingBar = () => {
  //   if (progress === 1 ) {
  //     setProgress(0)
  //   } else {
  //     setProgress(progress + 0.25)     
  //   }
  // }
  const { theme } = useContext(ThemeContext)

  const sections = [
    { name: 'Languages', data: LANGUAGES },
    { name: 'FrameWorks & Libraries', data: FRAMEWORKS_AND_LIBRARIES},
    { name: 'Databases & Hosting', data: DATABASES_HOSTING},
    { name: 'Others', data: OTHERS},
  ]

  return ( 
    <div className={styles.container} data-theme={theme}>
      {/* <div ref={ref} className={styles.loadingBar} onClick={handleLoadingBar}>
          <animated.div className={styles.fill} style={props} />
          <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div> */}
        {sections.map(section =>    
          <div className={styles.skillContainer}> 
            <div className={styles.contentCon}>
              <h1>{section.name}</h1>
              <div>
                {section.data.map(item =>
                  <span key={item.name} co>
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