//npm modules
import { useContext } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
//components
import Skills from '../../components/Skills/Skills'
//contexts
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './About.module.scss'
//assets
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ScrollAnimatedSection from '../../components/ScrollAnimatedSection'

type IProps = {
  handleShowNavAndFooter: () => void
}

const About: React.FC<IProps> = (props) => {
  const { theme } = useContext(ThemeContext)

  props.handleShowNavAndFooter()


  const variants = {
    container : {
      initial: { x: '100%', opacity: 0},
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, delayChildren: 0.5 } },
      exit: { x: '-100%', opacity: 0, transition: { duration: 0.5 } }
    },
    left: {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
    },
    right: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } }
    },
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
          <h1 className={styles.heading}>Who I am</h1>
          <div className={styles.aboutContainer}>
            <motion.div variants={variants.left} className={styles.textContainer}>
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
            </motion.div>
            <motion.div variants={variants.right} className={styles.profileContainer}>
              <ProfileCard />
            </motion.div>
          </div>
        </section>

        <section
          title='Skills Section'
          id='section2'
          className={styles.section}
          style={{ height: 'fit-content' }}
        >
          <ScrollAnimatedSection index={1}>
            <h1 className={styles.heading}>Skills</h1>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection index={2}>
            <Skills />
          </ScrollAnimatedSection>
        </section>
      </motion.div>
  )

}
 
export default About