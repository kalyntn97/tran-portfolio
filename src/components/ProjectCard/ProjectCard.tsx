//npm modules
import { useContext } from 'react'
//components
import { ThemeContext } from '../../contexts/ThemeContext'
//types & utils
import { Project } from '../../data/projectContent'
import { getIconSource } from '../../utils/ui'
//css
import styles from './ProjectCard.module.scss'

type Props = {
  handleOpen: (val: string) => void,
  project: Project,
  id: string,
  index: number
}

interface ProjectLinksProps {
  project: Project
  mode: 'light' | 'dark'
}

export const ProjectLinks = ({ project, mode }: ProjectLinksProps) => (
  <div className={styles.linkContainer}>
    <a href={project.gitHubUrl} target={'_blank'}>
      <img src={getIconSource('github', mode)} alt='a GitHub icon'/>
    </a>
    <a href={project.planningUrl} target={'_blank'}>
      <img src={getIconSource('note', mode)} alt='a note icon'/>
    </a>
  </div>
)

const ProjectCard: React.FC<Props> = ({ project, handleOpen, index }) => {
  const { theme } = useContext(ThemeContext)
  const mode = theme === 'blossom' ? 'light' : 'dark'

  const handleClick = (id: string) => {
    handleOpen(id)
  }

  return ( 
    <div className={`${styles.container} ${styles[`floating-${index + 1}`]}`}>
      <div className={styles.header}>
        <div className={styles.linkWrapper} data-theme={theme}>
          <a href={project.url} target={'_blank'} className={styles.hover}>
            <h2>{project.title}</h2>
          </a>
        </div>
        <ProjectLinks project={project} mode={mode} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={project.img[0]} alt={`A screenshot of ${project.title}`}/>
        </div>
        <div className={styles.movingContainer} onClick={() => handleClick(project.id)}>
          <p className={styles.intro}>{project.intro}</p>
          <button className={styles.seeMore}>
            <span className={styles.circle} aria-aria-hidden='true'></span>
            <span className={styles.btnText}>See more</span>
          </button>
        </div>
      </div>
    </div>
   )
}
 
export default ProjectCard