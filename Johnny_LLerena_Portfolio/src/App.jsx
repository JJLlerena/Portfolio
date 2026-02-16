import { useState } from 'react'
import SideNav from './navigation/Navbar';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="flex h-screen w-screen bg-[#2e2e2e] text-white overflow-auto ">
      <SideNav />
        <main className="flex flex-col ml-60  overflow-auto space-y-20">
          <About />
          <Skills />
          <Projects />
        </main>
    </div>
  );
}

export default App
