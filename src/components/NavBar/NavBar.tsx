//npm modules
import { NavLink } from "react-router-dom"
import { useContext } from "react"
//context
import { ThemeContext } from "../../contexts/ThemeContext"
//css
import styles from './NavBar.module.scss'
//assets
import orangeFlower from '../../assets/images/orange-flower.png'
import purpleFlower from '../../assets/images/purple-flower.png'
import yellowFlower from '../../assets/images/yellow-flower.png'
import redFlower from '../../assets/images/red-flower.png'


const NavBar = () => {
  const { theme } = useContext(ThemeContext)
  return ( 
    <nav className={styles.navbar} data-theme={theme}>
      <NavLink to='/'><img src={redFlower} /></NavLink>
      <NavLink to='/about'><img src={yellowFlower}/>About</NavLink>
      <NavLink to='/projects'><img src={purpleFlower} />Projects</NavLink>
      <NavLink to='/contact'><img src={orangeFlower} />Contact Me</NavLink>
    </nav>
  )
}
 
export default NavBar