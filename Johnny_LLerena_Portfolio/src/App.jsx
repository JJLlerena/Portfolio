import { useState } from 'react'
import SideNav from './Navigation/Navbar';
import About from './Components/About';
import styles from './styles.module.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={mainStyles}>
      <SideNav/>
      <About/>
    </div>
  )
}

export default App
