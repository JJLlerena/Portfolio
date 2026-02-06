import { Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "../assets/Portfolio_Logo.svg";
import "./navbar.css";


function SideNav() {
 
    return (
      <Navbar className="sideNav">
        <Container className="sideNav-content">
          <Container className="logoBox"> 
            <img src={Logo} alt="logo" />
            <a className="text-red-400"> Johnny Llerena</a>
          </Container>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link className="navLink" href="#about">About</Nav.Link>
              <Nav.Link className="navLink" href="#skills">Skills</Nav.Link> 
              <Nav.Link className="navLink" href="#work">Work</Nav.Link>
              <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default SideNav;