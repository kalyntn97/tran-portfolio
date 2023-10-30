//npm modules
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
//contexts
import { ThemeContext } from './contexts/ThemeContext'
//pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import ProjectList from './pages/ProjectList/ProjectList'
import Contact from './pages/Contact/Contact'
//css
import styles from './App.module.scss'

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  
  return ( 
    <main className={styles.container} data-theme={theme}>
      <NavBar />
      <ThemeSwitcher />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<ProjectList />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </main>
   )
}
  
export default App


