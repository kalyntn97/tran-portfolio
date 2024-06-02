//npm modules
import { useContext } from 'react'
import { animate, motion } from 'framer-motion'
import Lottie from 'lottie-react'
//components
import ContactForm from "../../components/ContactForm/ContactForm"
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './Contact.module.scss'
//assets
import catLaptop from '../../animations/catLaptop.json'

type IProps = {
  handleShowNavAndFooter: () => void
}

const Contact: React.FC<IProps> = (props) => {
  props.handleShowNavAndFooter()
  const { theme } = useContext(ThemeContext)
  
  const variants = {
    container: {
     animate: { transition: { delayChildren: 0.5, duration: 0.5, type: 'spring', stiffness: 100 } },
      exit: { x: '-100%' }
    },
    left: {
      initial: { x: '-100%' },
      animate: {x: 0 },
    },
    right: {
      initial: { x: '100%' },
      animate: {x: 0 },
    }
  }

  return ( 
    <motion.div variants={variants.container} key='contact' className={styles.container} data-theme={theme}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={variants.left} className={styles.imgContainer}>
        <Lottie animationData={catLaptop} loop={true} />
      </motion.div>
      <motion.div variants={variants.right} className={styles.formContainer}>
        <ContactForm />
      </motion.div>
    </motion.div>
   )
}
 
export default Contact