import Logo from "../assets/Portfolio_Logo.svg";
import "./navbar.css";
import SecNav from "../components/SecNav";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function SideNav() {
 
    return (
      <div className="w-55 h-screen bg-[#1a1a1a] fixed">
        <div className="h-[70%]">
          <div className=" 
            flex flex-col
            place-content-center 
            justify-items-center
            text-center gap-6
            h-[30vh]
            "
          > 
            <img 
              className='h-25  cursor-pointer'
              onClick={() => window.location.href = "/"} 
              src={Logo} 
              alt="logo"
            />
            <p className="text-green-500"> Johnny Llerena</p>
          </div>
          <div>
            <div className="flex flex-col gap-5 mt-10">
              <SecNav href="#about" text="About" />
              <SecNav href="#skills" text="Skills" /> 
              <SecNav href="#projects" text="Projects" />
              <SecNav href="#contact" text="Contact" />
            </div>
          </div>
        </div>
        <div className="flex flex-col place-items-center text-gray-400 text-[.7rem] text-xs space-y-20">
          <div className="flex flex-col text-center gap-3">
            <p><strong>Looking for a junior developer?</strong></p>
            <p><strong>Let's talk.</strong></p>
          </div>
          <div className="flex-col space-y-1 text-xs">
            <a href="mailto:Johnnyjllerena@gmail.com" className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span className="text-gray-400 text-[.7rem]">Johnnyjllerena@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/johnnyjllerena/" className="flex items-center gap-2">
                <FaLinkedin className="text-white" />
                <span className="text-gray-400 text-[.7rem]">johnnyjllerena</span>
            </a>
            <a href="https://github.com/JJLlerena" className="flex items-center gap-2">
                <FaGithub className="text-white" />
                <span className="text-gray-400 text-[.7rem]">JJLlerena</span>
            </a>
          </div> 
        </div>
      </div>
    );
}
export default SideNav;