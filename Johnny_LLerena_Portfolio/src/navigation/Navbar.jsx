import Logo from "../assets/Portfolio_Logo.svg";
import "./navbar.css";
import SecNav from "../components/SecNav";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function SideNav() {
 
    return (
      <div className="w-50 h-screen bg-[#1a1a1a] fixed">
        <div className="">
          <div className=" 
            flex flex-col
            place-content-center 
            justify-items-center
            text-center gap-6
            h-[30vh]
            bg-yellow-500
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
        <div className="justify-items-center space-y-5">
            <p className="text-white">Looking for a junior developer? Let's talk.</p>
            <div className="flex gap-6">
                <a href="mailto:Johnnyjllerena@gmail.com" className="flex items-center gap-2">
                    <FaEnvelope className="text-white size-5" />
                    <span className="text-white">Johnnyjllerena@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/johnnyjllerena/" className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-500 size-5" />
                    <span className="text-white">linkedin.com/in/johnnyjllerena/</span>
                </a>
                <a href="https://github.com/JJLlerena" className="flex items-center gap-2">
                    <FaGithub className="text-white size-5" />
                    <span className="text-white">github.com/JJLlerena</span>
                </a>
            </div> 
        </div>
      </div>
    );
}
export default SideNav;