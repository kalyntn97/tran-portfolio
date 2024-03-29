//npm modules
import { useContext } from 'react'
import { motion } from 'framer-motion'
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
  
  const contact = {
    initial: { y: '100vh'},
    animate: { y: 0, transition: { delayChildren: 0.5, duration: 1 } },
    exit: { y: '-100vh' }
  }

  return ( 
    <motion.div variants={contact} key='contact' className={styles.container} data-theme={theme}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className={styles.imgContainer}>
        <Lottie animationData={catLaptop} loop={true} />
      </div>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </motion.div>
   )
}
 
export default Contact