import Logo from "../assets/Portfolio_Logo.svg";
import "./navbar.css";
import SecNav from "../components/SecNav";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function SideNav() {
  function Logobox (){
    return(
      <div className="flex flex-col place-content-center 
        justify-items-center text-center gap-6 h-[30vh]"
      > 
        <img 
          className='h-25  cursor-pointer'
          onClick={() => window.location.href = "/"} 
          src={Logo} 
          alt="logo"
        />
        <p className="text-green-500"> Johnny Llerena</p>
      </div>
    );
  }
  function NavContent(){
    return(
      <div className="flex flex-col gap-5 mt-10">
        <SecNav href="#about" text="About" />
        <SecNav href="#skills" text="Skills" /> 
        <SecNav href="#projects" text="Projects" />
        <SecNav href="#contact" text="Contact" />
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
      <div className="h-full flex flex-col 
        text-gray-400 text-[.7rem] place-content-center gap-4">
          <div className="text-center mb-5">
          <p><strong>Looking for a junior developer?</strong></p>
          <p><strong>Let's talk.</strong></p>
          </div>
          <div className="flex flex-col gap-1 ">
          <SocialLinks href="mailto:Johnnyjllerena@gmail.com" Logo={FaEnvelope} text="Johnnyjllerena@gmail.com" />
          <SocialLinks href="https://linkedin.com/in/johnnyjllerena/" Logo={FaLinkedin} text="johnnyjllerena" />
          <SocialLinks href="https://github.com/JJLlerena" Logo={FaGithub} text="JJLlerena" />
          </div>
      </div>
    );
  }
  
  
  

  return (
    <div className="w-60 h-screen bg-[#1a1a1a] fixed flex flex-col">
      <div>
        <Logobox />
        <NavContent />
      </div>  
      <NavFoot />
    </div>
  );
}
export default SideNav;

