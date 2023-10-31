//components
import ProjectCard from '../../components/ProjectCard/ProjectCard'
//css
import styles from './ProjectList.module.scss'
//data
import { projects } from '../../data/projectContent'
import { Project } from '../../data/projectContent'

const ProjectList= () => {
  return ( 
    <main className={styles.container} >
      {projects.map( (project: Project) => 
        <ProjectCard id={project.id} project={project} />
      )}
    </main>
   )
}
 
export default ProjectList