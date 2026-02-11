import { Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "../assets/Portfolio_Logo.svg";
import "./navbar.css";


function SideNav() {
 
    return (
      <div className="w-[250px] h-screen bg-[#1a1a1a] fixed">
        <div className="bg-white">
          <div className=" flex flex-col justify-items-center text-center gap-1"> 
            <img className="-my-10 " onClick={() => window.location.h} src={Logo} alt="logo"/>
            <p className="text-green-500"> Johnny Llerena</p>
          </div>
          <div>
            <div>
              <a className="navLink" href="#about">About</a>
              <a className="navLink" href="#skills">Skills</a> 
              <a className="navLink" href="#projects">Projects</a>
              <a className="navLink" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SideNav;