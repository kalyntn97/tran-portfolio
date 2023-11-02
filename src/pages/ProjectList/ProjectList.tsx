
import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
//components
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectCardExpanded from '../../components/ProjectCard/ProjectCardExpanded'
//css
import styles from './ProjectList.module.scss'
import './Modal.css'
//data
import { projects } from '../../data/projectContent'
import { Project } from '../../data/projectContent'

const ProjectList= () => {
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState<Project>({})

  const handleOpen = (id) => {
    setOpen(true)
    setIsClicked(projects.find(p => p.id === id))
  }
  const handleClose = () => {
    setOpen(false)
    setIsClicked({})
  }
  
  return ( 
    <main className={styles.container}>
      {projects.map( (project: Project, idx) =>
        <div className={styles.cardContainer} key={idx}>
          <ProjectCard id={project.id} project={project} handleOpen={handleOpen}/>
        </div>
      )}
      <Modal
        closeTimeoutMS={500}
        isOpen={open}
        onRequestClose={handleClose}
        id={`${isClicked.id}-${isClicked.name}`}
        style={{
          content: {
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            width: '60vw',
            height: '80vh',
          }
        }}
      >
        <ProjectCardExpanded id={`${isClicked.id}-${isClicked.name}`} project={isClicked}/>
      </Modal> 
    </main>
   )
}
 
export default ProjectList