import { useState } from 'react'
import SideNav from './navigation/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className=" h-screen w-screen">
      <SideNav />
      <div className="flex ml-55 px-5  h-screen">
        <main className="bg-[#1a1a1a] pt-10 rounded-sm flex-1 overflow-y-auto">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App
