import { useState } from 'react'
import SideNav from './navigation/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Home from './sections/Home';
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="flex h-screen w-screen bg-[#2e2e2e] text-white overflow-auto ">
      <SideNav />
        <main className="flex flex-col ml-60 h-screen w-screen space-y-20">
          <Home />
          <About />
          <Skills />
          <Projects />
        </main>
    </div>
  );
}

export default App
