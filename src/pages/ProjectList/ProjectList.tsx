//npm modules
import { useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'
//components
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectCardExpanded from '../../components/ProjectCard/ProjectCardExpanded'
//css
import styles from './ProjectList.module.scss'
import './Modal.css'
//data
import { projects } from '../../data/projectContent'
import { Project } from '../../data/projectContent'

type IProps = {
  handleShowNavAndFooter: () => void
}

const ProjectList: React.FC<IProps>= (props) => {
  props.handleShowNavAndFooter()
  
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState<Project | undefined>(undefined)

  const handleOpen = (id: string) => {
    setOpen(true)
    setIsClicked(projects.find(p => p.id === id))
  }
  const handleClose = () => {
    setOpen(false)
    setIsClicked(undefined)
  }
  
  const container = {
    animate: { transition: { delayChildren: 0.5, staggerChildren: 0.3 } },
    exit: { y: '-100%', opacity: 0, transition: { duration: 0.5 } }
  }

  const card = {
    initial: { y: '100vh' },
    animate: { y: 0 },
  }

  return ( 
    <motion.div variants={container} key='container' className={styles.container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {projects.map((project: Project, idx) =>
        <motion.div variants={card} className={styles.cardContainer} key={idx}>
          <ProjectCard id={project.id} project={project} handleOpen={handleOpen}/>
        </motion.div>
      )}
      {isClicked && 
        <Modal
          closeTimeoutMS={500}
          isOpen={open}
          onRequestClose={handleClose}
          id={`${isClicked.id}-${isClicked.title}`}
          style={{
            content: {
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              width: '60vw',
              height: '80vh',
              border: 'none',
              borderRadius: '1em',
            },
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)'
            }
          }}
        >
          <ProjectCardExpanded id={`${isClicked.id}-${isClicked.title}`} project={isClicked}/>
          <button onClick={handleClose} className='close-btn fill'>
            <span>Go back</span>
          </button>
        </Modal> 
      }
    </motion.div>
   )
}
 
export default ProjectList