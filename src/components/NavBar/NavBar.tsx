//npm modules
import { NavLink } from "react-router-dom"
//css
import styles from './NavBar.module.scss'


const NavBar = () => {
  return ( 
    <main className={styles.container}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact Me</NavLink>
    </main>
  )
}
 
export default NavBar