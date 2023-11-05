//npm modules
import { useContext, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
//contexts
import { ThemeContext } from './contexts/ThemeContext'
//pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import ProjectList from './pages/ProjectList/ProjectList'
import Contact from './pages/Contact/Contact'
//css `
import styles from './App.module.scss'

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()
  const [showNavAndFooter, setShowNavAndFooter] = useState(false)
  const handleShowNavAndFooter = () => {
    setShowNavAndFooter(true)
  }
  const handleHideNavAndFooter = () => {
    setShowNavAndFooter(false)
  }


  return ( 
    <main className={styles.container} data-theme={theme}>
      {showNavAndFooter && <NavBar />}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing handleHideNavAndFooter={handleHideNavAndFooter} />} />
          <Route path='/about' element={<About handleShowNavAndFooter={handleShowNavAndFooter}/>}/>
          <Route path='/projects' element={<ProjectList handleShowNavAndFooter={handleShowNavAndFooter}/>}/>
          <Route path='/contact' element={<Contact handleShowNavAndFooter={handleShowNavAndFooter}/>}/>
        </Routes>
      </AnimatePresence>
      {showNavAndFooter && <Footer />}
    </main>
   )
}
  
export default App


