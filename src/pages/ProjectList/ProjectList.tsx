//npm modules
import { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { motion } from 'framer-motion'
//components
import ProjectCardExpanded from '../../components/ProjectCard/ProjectCardExpanded'
import Carousel from '../../components/Carousel/Carousel'
import Loader from '../../components/Loader/Loader'
//css
import styles from './ProjectList.module.scss'
import './Modal.css'
//utils & types
import { ThemeContext } from '../../contexts/ThemeContext'
import { FILTERS } from '../../utils/ui'
import { Project } from '../../data/projectContent'
//data
import { projects } from '../../data/projectContent'

type IProps = {
  handleShowNavAndFooter: () => void
}

const ProjectList: React.FC<IProps>= (props) => {
  props.handleShowNavAndFooter()
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState<Project | undefined>(undefined)

  const { theme } = useContext(ThemeContext)

  const handleOpen = (id: string) => {
    setOpen(true)
    setIsClicked(projects.find(p => p.id === id))
  }
  const handleClose = () => {
    setOpen(false)
    setIsClicked(undefined)
  }
  
  useEffect(() => {
    setLoading(true)
    if (activeFilter) {
      setFilteredProjects(() => {
        const filtered = projects.filter(p => {
          if (activeFilter === 'Full Stack') return !!p.fullStack
          else return p.mainTechnology.includes(activeFilter)
        })
        setLoading(false)
        return filtered
      })
    } else {
      setFilteredProjects(()=> {
        setLoading(false)
        return projects
      })
    }
  }, [activeFilter])
 
  const variants = {
    container: {
      animate: { transition: { delayChildren: 0.5, staggerChildren: 1 } },
      exit: { x: '-100%', opacity: 0, transition: { duration: 0.5 } }
    },
    heading: {
      initial: { x: '100%' },
      animate: { x: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } },
    },
  }

  return ( 
    <motion.div data-theme={theme} variants={variants.container} key='container' className={styles.container}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={variants.heading} className={styles.filterContainer}>
        <button onClick={() => setActiveFilter(null)} className={`${styles.filterButton} ${activeFilter === null && styles.activeAll}`}>
          <span className={styles.all}>All</span>
        </button>
        {FILTERS.map(f =>
          <button key={f.name} onClick={() => setActiveFilter(f.name)} className={`${styles.filterButton} ${activeFilter === f.name ? styles.activeButton : styles.inactiveButton}`}>
            <span className={styles.tag}>{f.name}</span>
            <img src={activeFilter === f.name ? f.activeIcon : f.icon} />
          </button>
        )}
      </motion.div>
        {loading ? <Loader />
          : <Carousel cards={filteredProjects} type='project' cardSize='md' onOpenCard={handleOpen} />
        }
      
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
              maxWidth: '90vw',
              maxHeight: '90vh',
              border: 'none',
              borderRadius: '1em',
              backgroundColor: `${theme === 'blossom' ? 'white' : '#495563'}`,
            },
            overlay: {
              zIndex: 20,
              backgroundColor: 'rgba(0,0,0,0.5)'
            },
          }}
          className='modal'
        >
          <ProjectCardExpanded key={`${isClicked.id}-${isClicked.title}`} project={isClicked} handleClose={handleClose}/>
        </Modal> 
      }
    </motion.div>
   )
}

export default ProjectList