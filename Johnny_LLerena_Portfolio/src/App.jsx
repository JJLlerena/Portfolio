import { useState } from 'react'
import SideNav from './Navigation/Navbar';
import About from './Components/About';
import styles from './styles.module.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const mainStyles = {
    height: '100vh',
    width: '100%',
    display: 'flex',
  };

  return (
    <div className="flex">
      <SideNav />
    </div>
  )
}

export default App
