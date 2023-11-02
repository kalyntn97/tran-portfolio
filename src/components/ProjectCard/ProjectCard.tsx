//css
import styles from './ProjectCard.module.scss'
//assets
import gitHubIcon from '../../assets/icons/github.svg'
import noteIcon from '../../assets/icons/note.svg'

const ProjectCard = (props) => {
  const handleClick = (e, id) => {
    props.handleOpen(id)
  }

  return ( 
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={styles.linkWrapper}>
          <a href={props.project.url} target={'_blank'} className={styles.hover}>
            <h2>{props.project.title}</h2>
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a href={props.project.gitHubUrl} target={'_blank'}><img src={gitHubIcon} alt='a GitHub icon'/></a>
          <a href={props.project.planningUrl} target={'_blank'}><img src={noteIcon} alt='a note icon'/></a>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={props.project.img[0]} alt={`A screenshot of ${props.project.title}`}/>
        </div>
        <div className={styles.movingContainer} onClick={(e) => handleClick(e, props.project.id)}>
          <p className={styles.intro}>{props.project.intro}</p>
          <button><p>See more →</p></button>
        </div>
      </div>
    </main>
   )
}
 
export default ProjectCard