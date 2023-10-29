//npm modules
import { NavLink } from "react-router-dom"
import { useContext } from "react"
//context
import { ThemeContext } from "../../contexts/ThemeContext"
//css
import styles from './NavBar.module.scss'
//assets
import favicon from '../../assets/icons/favicon.svg'
import orangeFlower from '../../assets/images/orange-flower.png'
import purpleFlower from '../../assets/images/purple-flower.png'
import yellowFlower from '../../assets/images/yellow-flower.png'

const NavBar = () => {
  const { theme } = useContext(ThemeContext)
  return ( 
    <nav className={styles.navbar} data-theme={theme}>
      <NavLink to='/'><img className={styles.favicon} src={favicon} /></NavLink>
      <NavLink to='/contact'><img src={orangeFlower} />Contact Me</NavLink>
      <NavLink to='/projects'><img src={purpleFlower} />Projects</NavLink>
      <NavLink to='/about'><img src={yellowFlower}/>About</NavLink>
    </nav>
  )
}
 
export default NavBar