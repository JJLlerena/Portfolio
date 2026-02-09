import { useState } from 'react'
import SideNav from './navigation/Navbar';
import About from './sections/About';
import Contact from './sections/Contact';
import Work from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className=" h-screen w-screen">
      <SideNav />
      <main className="ml-[250px] p-10" >
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App
