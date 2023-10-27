//npm modules
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
//components
import NavBar from './components/NavBar/NavBar'
//pages
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
//css
import './App.scss'
import { ThemeContext } from './contexts/ThemeContext'

const App: React.FC = () => {
  const { theme, toggleTheme} = useContext(ThemeContext)
  return ( 
    <>
      <NavBar />
      <h1>Test</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'blossom' ? 'starry' : 'blossom'} mode
      </button>
    </>
   )
}
 
export default App


