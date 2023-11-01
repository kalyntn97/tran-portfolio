//css
import styles from './ProjectCard.module.scss'
//import data
import { Project } from '../../data/projectContent'
//assets
import gitHubIcon from '../../assets/icons/github.svg'
import noteIcon from '../../assets/icons/note.svg'
import { useState } from 'react'


const ProjectCard = (props) => {
  const handleClick = (id) => {
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
        <div className={styles.movingContainer}>
          <p className={styles.intro}>{props.project.intro}</p>
          <button onClick={() => handleClick(props.project.id)}><p>See more →</p></button>
        </div>
      </div>
    {/*   {showDetailView && <div className={styles.detailView}>
        <div className={styles.detailContainer}>
          <p>Languages: {project.languages.map((l, idx) => <li key={idx}>{l}</li>)}</p>
          <p>Technology: {project.technology.map((l, idx) => <li key={idx}>{l}</li>)}</p>
        </div>
      </div>} */}
    </main>
   )
}
 
export default ProjectCard