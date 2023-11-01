//css
import styles from './ProjectCard.module.scss'
//import data
import { Project } from '../../data/projectContent'
//assets
import gitHubIcon from '../../assets/icons/github.svg'
import noteIcon from '../../assets/icons/note.svg'



const ProjectCard = ({ project }: Project) => {
  const handleClick = () => {

  }


  return ( 
    <main className={styles.container}>
      <div className={styles.header}>
        <div className={styles.linkWrapper}>
          <a href={project.url} target={'_blank'} className={styles.hover}>
            <h2>{project.title}</h2>
          </a>
        </div>
        <div className={styles.linkContainer}>
          <a href={project.gitHubUrl} target={'_blank'}><img src={gitHubIcon} alt='a GitHub icon'/></a>
          <a href={project.planningUrl} target={'_blank'}><img src={noteIcon} alt='a note icon'/></a>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={project.img[0]} alt={`A screenshot of ${project.title}`}/>
        </div>
        <div className={styles.movingContainer}>
          <p className={styles.intro}>{project.intro}</p>
          <button onClick={handleClick}>See more</button>
        </div>
        <div className={styles.detailContainer}>
          <p>Languages: {project.languages.map((l, idx) => <li key={idx}>{l}</li>)}</p>
          <p>Technology: {project.technology.map((l, idx) => <li key={idx}>{l}</li>)}</p>
        </div>
      </div>
    </main>
   )
}
 
export default ProjectCard