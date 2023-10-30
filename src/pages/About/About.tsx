//npm modules
import { useContext } from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'
//components
import Skills from '../../components/Skills/Skills'
//contexts
import { ThemeContext } from '../../contexts/ThemeContext'
//css
import styles from './About.module.scss'
//assets
import avatar from '../../assets/images/avatar.jpeg'
// import downArrow from '../../assets/icons/downarrow.svg'

const About = () => {
  const { theme } = useContext(ThemeContext)
  const handleClick = () => {
    window.scrollTo(0,0)
  }

  return (
    <main className={styles.container} data-theme={theme}>
      <section
        title='About Section'
        id='section1'
        className={styles.section}
      >
        <h1 className={styles.heading}>Who I am</h1>
        <div className={styles.aboutContainer}>
          <img src={avatar} alt='an avatar' />
          <div className={styles.textContainer}>
            <div>
              <p>Hi! My name is Tran. I am a Software Engineer dedicated to create user-friendly and whimsical designs that spark joy and smiles. </p>
              <p>With a previous background in biotech and a passion for art, I am committed to craft delightful digital experiences that seamlessly blend analytical power and creativity</p>
              <p>When I am not <span>
                <Link
                  to="section2"
                  smooth={true}
                  offset={-70}
                  duration={500}
                  > 
                  coding
                </Link>
              </span> I love to play with my dog and two cats. I like drawing, walking, going to concerts, and listening to podcasts.</p>
            </div>
          </div>
        </div>
        <span className={styles.linkContainer}>
          <Link
            to="section2"
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.arrow}
            > 
          ∨
        </Link>
        <button
          onClick={handleClick}
        > 
          ∧
        </button></span>
      </section>

      <section
        title='Skills Section'
        id='section2'
        className={styles.section}
      >
        <h1 className={styles.heading}>Skills</h1>
        <Skills />  
      </section>
    </main>
  )

}
 
export default About