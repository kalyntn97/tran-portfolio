import React from 'react'

//css
import styles from './ProjectCardExpanded.module.scss'

const ProjectCardExpanded = React.forwardRef(({ project }, ref) =>  {
  return ( 
    <main className={styles.container}>
      <h1>{project.name}</h1>
    </main>
  )
})
 
export default ProjectCardExpanded