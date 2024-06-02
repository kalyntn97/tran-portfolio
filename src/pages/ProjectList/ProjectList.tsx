//npm modules
import { useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'
//components
import ProjectCardExpanded from '../../components/ProjectCard/ProjectCardExpanded'
import Carousel from '../../components/Carousel/Carousel'
//css
import styles from './ProjectList.module.scss'
import './Modal.css'
//data
import { projects } from '../../data/projectContent'
import { Project } from '../../data/projectContent'
import { FILTERS } from '../../utils/ui'

type IProps = {
  handleShowNavAndFooter: () => void
}



const ProjectList: React.FC<IProps>= (props) => {
  props.handleShowNavAndFooter()
  const filters = FILTERS.map(f => f.name)
  const [filteredProjects, setFilteredProjects] = useState(projects.length > 0 ? projects : [])
  const [activeFilters, setActiveFilters] = useState(filters)
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


  return ( 
    <motion.div variants={container} key='container' className={styles.container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* {projects.map((project: Project, idx) =>
        <motion.div variants={card} className={styles.cardContainer} key={idx}>
          <ProjectCard id={project.id} project={project} handleOpen={handleOpen}/>
        </motion.div>
      )} */}
      <div className={styles.filterContainer}>
        <button onClick={() => setActiveFilters(filters)}
          className={`${styles.filterButton} ${activeFilters.length === filters.length ? styles.activeButton : styles.inactiveButton}`}
        >
          <span className={styles.filterText}>All</span>
        </button>
        {FILTERS.map(f =>
          <button onClick={() => setActiveFilters(prev => activeFilters.includes(f.name) ? activeFilters.filter(a => a !== f.name) : [...prev, f.name])}
            className={`${styles.filterButton} ${activeFilters.includes(f.name) ? styles.activeButton : styles.inactiveButton}`}
          >
            <span className={styles.filterText}>{f.name}</span>
          </button>
        )}
      </div>

      <Carousel cards={projects} type='project' cardSize='md' onOpenCard={handleOpen} />

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
              width: '80vw',
              height: '90vh',
              maxWidth: '90vw',
              maxHeight: '90vh',
              border: 'none',
              borderRadius: '1em',
            },
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.5)'
            },
          }}
        >
          <ProjectCardExpanded key={`${isClicked.id}-${isClicked.title}`} project={isClicked} handleClose={handleClose}/>
         
        </Modal> 
      }
    </motion.div>
   )
}
 
export default ProjectList