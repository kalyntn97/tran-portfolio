//css
import styles from './Skills.module.scss'
//assets
import javascript from '../../assets/icons/javascript.svg'
import typeScript from '../../assets/icons/typescript.svg'
import python from '../../assets/icons/python.svg'
import html5 from '../../assets/icons/html5.svg'
import css3 from '../../assets/icons/css3.svg'
import sass from '../../assets/icons/sass.svg'
import react from '../../assets/icons/react.svg'
import mongoDB from '../../assets/icons/mongodb.svg'
import postgreSQL from '../../assets/icons/postgresql.svg'
import express from '../../assets/icons/expressjs.svg'
import django from '../../assets/icons/django.svg'

const Skills = () => {
  return ( 
    <main className={styles.container}>
      <div className={styles.skillContainer}>
        <h1>Languages</h1>
        <div>
          <span><img src={javascript} /><p>JavaScript</p></span>
          <span><img src={typeScript} /><p>TypeScript</p></span>
          <span><img src={python} /><p>Python3</p></span>
        </div>
      </div>

      <div className={styles.skillContainer}>
        <h1>Databases</h1>
        <div>
          <span><img src={mongoDB} /></span>
          <span><img src={postgreSQL} /></span>
        </div>
      </div>

      <div className={styles.skillContainer}>
        <h1>Frameworks</h1>
        <div>
          <span><img src={express} /></span>
          <span><img src={django} /></span>
        </div>
      </div>

      <div className={styles.skillContainer}>
        <h1>Others</h1>
        <div>
          <span><img src={react} /><p>React</p></span>
          <span><img src={html5} /><p>HTML5</p></span>
          <span><img src={css3} /><p>CSS3</p></span>
          <span><img src={sass} /><p>Sass & SCSS</p></span>
        </div>
      </div>

    </main>
   )
}
 
export default Skills