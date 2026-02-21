import Logo from "../assets/Portfolio_Logo.svg";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function SideNav() {
  function Logobox (){
    return(
      <div className="flex flex-col place-content-center text-center h-[30vh] gap-2"
      > 
        <img 
          className='h-25  cursor-pointer'
          onClick={() => window.location.href = "/"} 
          src={Logo} 
          alt="logo"
        />
        <p className="text-[#1b998b]"><strong>Johnny Llerena</strong></p>
      </div>
    );
  }
  function SecNav({ href, text }) {
    return (
        <div className="
            flex cursor-pointer 
            place-content-center 
            text-2xl font-bold
            p-2 border-y-3 border-[#2d2d2d]
            hover:bg-[#2d2d2d] hover:text-[#1b998b]
            " 
            onClick={() => window.location.href = href}>
            <span>{text}</span>
        </div>
    );
  }  
  function NavContent(){
    return(
      <div className="flex flex-col gap-5 mt-10">
        <SecNav href="#about" text="About" />
        <SecNav href="#skills" text="Skills" /> 
        <SecNav href="#projects" text="Projects" />
      </div>      
    );
  }
  function SocialLinks({href, Logo, text}){
    return(
      <a href={href} className="flex justify-center gap-2">
        <Logo className="text-white" />
        <span className="text-gray-400 text-[.7rem]">{text}</span>
      </a>
    );
  }
  function NavFoot(){
    return(
      <div className="
        h-full flex flex-col 
        text-gray-400 text-[.7rem] 
        place-content-center gap-4"
      >
        <div className="text-center mb-5">
          <p><strong>Looking for a junior developer?</strong></p>
          <p><strong>Let's talk.</strong></p>
        </div>
        <div className="flex flex-col gap-1 ">
          <SocialLinks 
            href="mailto:Johnnyjllerena@gmail.com" 
            Logo={FaEnvelope} 
            text="Johnnyjllerena@gmail.com" 
          />
          <SocialLinks 
            href="https://linkedin.com/in/johnnyjllerena/" 
            Logo={FaLinkedin} 
            text="johnnyjllerena" 
          />
          <SocialLinks 
            href="https://github.com/JJLlerena" 
            Logo={FaGithub} 
            text="JJLlerena" 
          />
        </div>
      </div>
    );
  }
  
  
  

  return (
    <div className="
      w-60 h-screen bg-gradient-to-t
      from-[#1a1a1a] from-10% to-[#2e2e2e]
      from-40% fixed flex flex-col 
      rounded-r-lg shadow-lg"
    >
      <div>
        <Logobox />
        <NavContent />
      </div>  
      <NavFoot />
    </div>
  );
}
export default SideNav;

