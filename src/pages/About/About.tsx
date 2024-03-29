//npm modules
import { useContext } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
import { motion } from 'framer-motion'
//components
import Skills from '../../components/Skills/Skills'
//contexts
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './About.module.scss'
//assets
import avatar from '/assets/images/avatar.jpeg'
import circleDown from '/assets/icons/circledown.svg'
import circleDownWhite from '/assets/icons/circledown-white.png'
import circleUp from '/assets/icons/circleup.svg'
import circleUpWhite from '/assets/icons/circleup-white.png'
import resume from '/Tran_Nguyen_Resume.pdf'

type IProps = {
  handleShowNavAndFooter: () => void
}

const About: React.FC<IProps> = (props) => {
  const { theme } = useContext(ThemeContext)

  props.handleShowNavAndFooter()

  const handleClick = () => {
    scroll.scrollToTop({ offset: -70, duration: 500, smooth: true })
  }

  const variants = {
    container : {
      animate: { transition: { staggerChildren: 0.2 } },
      exit: { opacity: 0, y: '-100%', transition: { duration: 0.5 } }
    },
    h1: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    about: {
      initial: { scale: 0 },
      animate: { scale: 1, transition: {duration: 1 } }
    }
  }
  

  return (
      <motion.div className={styles.container} data-theme={theme}
        variants={variants.container}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <section
          title='About Section'
          id='section1'
          className={styles.section}
          style={{ minHeight: `80vh`, height: 'fit-content'}}
        >
          <motion.h1 variants={variants.h1} className={styles.heading}>Who I am</motion.h1>
          <motion.div variants={variants.about} key='about' className={styles.aboutContainer}>
            <div className={styles.photoContainer}>
              <img src={avatar} alt='an avatar' />
              <button><a href={resume} target={'_blank'}>RESUME</a></button>
            </div>
            <div className={styles.textContainer}>
              <div>
                <p>Hi! My name is Tran. I am a Software Engineer dedicated to creating user-friendly and whimsical designs that spark joy and smiles. </p>
                <p>With a previous background in biotech and a passion for art, I am committed to crafting delightful digital experiences that seamlessly blend analytical power and creativity</p>
                <p>When I am not <span>
                  <Link
                    to="section2"
                    smooth={true}
                    offset={-70}
                    duration={500}
                    > 
                    coding
                  </Link>
                </span> I love to play with my dog and two cats. I also like drawing, coffee, going to concerts, and listening to podcasts.</p>
              </div>
            </div>
          </motion.div>
          <span className={styles.linkContainer}>
            <Link
              to="section2"
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.arrow}
              > 
                <img 
                  src={theme === 'blossom' ? circleDown : circleDownWhite} 
                  alt="a downward arrow" 
                />
            </Link>
            <button onClick={handleClick}>
              <img 
                src={theme === 'blossom' ? circleUp : circleUpWhite} 
                alt="an upward arrow" 
              />
            </button>
          </span>
        </section>

        <section
          title='Skills Section'
          id='section2'
          className={styles.section}
          style={{ height: 'fit-content' }}
        >
          <h1 className={styles.heading}>Skills</h1>
          <Skills />  
        </section>
      </motion.div>
  )

}
 
export default About