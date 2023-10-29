//components
import Skills from '../../components/Skills/Skills'
//css
import styles from './About.module.scss'

const About = () => {

  return (
    <main className={styles.container}>
      <h1>About</h1>
      <h1>Skills</h1>
      <Skills />
    </main>
  )

}
 
export default About