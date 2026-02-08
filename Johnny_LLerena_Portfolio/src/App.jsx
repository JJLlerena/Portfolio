import { useState } from 'react'
import SideNav from './navigation/Navbar';
import SectionContainer from './components/SectionContainer';
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
        <SectionContainer title="About Me">
          <About />
        </SectionContainer>
        <SectionContainer title="Skills">
          <Skills />
        </SectionContainer>
        <SectionContainer title="Projects">
          <Work />
        </SectionContainer>
        <SectionContainer title="Contact">
          <Contact />
        </SectionContainer>
      </main>
    </div>
  )
}

export default App
