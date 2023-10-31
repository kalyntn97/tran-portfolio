//npm modules
import { Link } from 'react-router-dom'
//css
import styles from './ProjectCard.module.scss'
//import data
import { Project } from '../../data/projectContent'

const ProjectCard = ({ project }: Project) => {
  
  return ( 
    <main className={styles.container}>
      <div className={styles.header}>
        <h2>{project.title}</h2>
        <div className={styles.linkContainer}>
          <a href={project.gitHubUrl} target={'_blank'}>GitHub</a>
          <a href={project.url} target={'_blank'}>Deployment</a>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <p>Languages: {project.languages.map(l => <li>{l}</li>)}</p>
        <p>Technology: {project.technology.map(l => <li>{l}</li>)}</p>
        <a href={project.planningUrl} target={'_blank'}>Planning Materials</a>
        <img src='' alt={`A screenshot of ${project.title}`}/>
      </div>
    </main>
   )
}
 
export default ProjectCard