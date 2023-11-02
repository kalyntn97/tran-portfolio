//css
import styles from './ProjectCardExpanded.module.scss'
//assets
import gitHubIcon from '../../assets/icons/github.svg'
import noteIcon from '../../assets/icons/note.svg'

const ProjectCardExpanded = ({ project }) =>  {
  return ( 
    <main className={styles.container}>
      <div className={styles.leftColumn}>
        <img src={project.img} alt={`A screenshot of ${project.title}`}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.header}>
          <div className={styles.linkWrapper}>
            <a href={project.url} target={'_blank'} className={styles.hover}>
              <h1>{project.title}</h1>
            </a>
          </div>
          <div className={styles.linkContainer}>
            <a href={project.gitHubUrl} target={'_blank'}><img src={gitHubIcon} alt='a GitHub icon'/></a>
            <a href={project.planningUrl} target={'_blank'}><img src={noteIcon} alt='a note icon'/></a>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.introContainer}>
            <h2 className={styles.intro}>{project.intro}</h2>
          </div>
          <div className={styles.details}>
            <h3>Built with</h3>
            <div>
              {project.languages?.map(l => 
                <li>{l}</li>
              )}
            </div>
            <h3>&</h3>
            <div>
              {project.technology?.map(t => 
                <li>{t}</li>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
 
export default ProjectCardExpanded