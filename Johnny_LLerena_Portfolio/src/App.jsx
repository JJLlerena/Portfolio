import { useState } from 'react'
import SideNav from './navigation/Navbar';
import About from './sections/About';
import Styles from './styles.module.css';
import Body from './sections/Body';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="bg-white h-screen w-screen">
      <SideNav />
    </div>
  )
}

export default App
