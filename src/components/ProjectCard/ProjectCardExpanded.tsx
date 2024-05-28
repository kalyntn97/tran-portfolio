import { useContext } from 'react'
//context
import { ThemeContext } from '../../contexts/ThemeContext'
//types
import { Project } from '../../data/projectContent'
//css
import styles from './ProjectCardExpanded.module.scss'
import '../../pages/ProjectList/Modal.css'
import { ProjectLinks } from './ProjectCard'

type IProps = {
  project: Project,
  handleClose: () => void
}

const ProjectCardExpanded: React.FC<IProps> = ({ project, handleClose }) =>  {
  const { theme } = useContext(ThemeContext)
  const mode = theme === 'blossom' ? 'light' : 'dark'

  const handleClickClose = () => {
    handleClose()
  }
  return ( 
    <main className={styles.container}>
      <div className={styles.leftColumn}>
        <img src={project.img[0]} alt={`A screenshot of ${project.title}`}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.header}>
          <div className={styles.linkWrapper}>
            <a href={project.url} target={'_blank'} className={styles.hover}>
              <h1>{project.title}</h1>
            </a>
          </div>
          <ProjectLinks project={project} mode={mode} />
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.introContainer}>
            <h2 className={styles.intro}>{project.intro}</h2>
          </div>
          <div className={styles.details}>
            <h3>Built with</h3>
            <div>
              {project.mainTechnology?.map(l => 
                <li>{l}</li>
              )}
            </div>
            <h3>&</h3>
            <div>
              {project.otherTechnology?.map(t => 
                <li>{t}</li>
              )}
            </div>
          </div>
        </div>
        <button onClick={handleClickClose} className='close-btn fill'>
            <span>Go back</span>
        </button>
      </div>
    </main>
  )
}
 
export default ProjectCardExpanded