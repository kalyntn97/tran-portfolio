
import React, { useState } from 'react'
import Modal from 'react-modal'
//components
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectCardExpanded from '../../components/ProjectCard/ProjectCardExpanded'
//css
import styles from './ProjectList.module.scss'
//data
import { projects } from '../../data/projectContent'
import { Project } from '../../data/projectContent'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ProjectList= () => {
  const ref = React.createRef()
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState({})

  const handleOpen = (id) => {
    setOpen(true)
    setIsClicked(projects.find(p => p.id === id))
  }
  const handleClose = () => {
    setOpen(false)
    setIsClicked({})
  }

  return ( 
    <main className={styles.container} id='main'>
      {projects.map( (project: Project, idx) =>
        <div className={styles.cardContainer} key={idx}>
          <ProjectCard key={idx} project={project} handleOpen={handleOpen}/>
        </div>
      )}

      <Modal
        isOpen={open}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel='Project Modal'
      >
        {isClicked && <ProjectCardExpanded project={isClicked} ref={ref} />}
      </Modal> 
    </main>
   )
}
 
export default ProjectList