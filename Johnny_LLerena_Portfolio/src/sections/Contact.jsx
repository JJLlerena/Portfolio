//section containing contact information and a contact form
import SectionContainer from "../components/SectionContainer";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function Contact() {
    return(
        <SectionContainer id="contact" heading="Contact Me" extra="justify-items-center space-y-3">
            <h2 className="text-white ">Let's Connect!</h2>
            <p className="text-white">Looking for a junior developer? Let's talk.</p>
            <div className="flex gap-6">
                <a href="mailto:Johnnyjllerena@gmail.com" className="flex items-center gap-2">
                    <FaEnvelope className="text-white" />
                    <span className="text-white">Johnnyjllerena@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/johnnyjllerena/" className="flex items-center gap-2">
                    <FaLinkedin className="text-white" />
                    <span className="text-white">LinkedIn</span>
                </a>
                <a href="https://github.com/JJLlerena" className="flex items-center gap-2">
                    <FaGithub className="text-white" />
                    <span className="text-white">GitHub</span>
                </a>
            </div>
        </SectionContainer>
    );
}

export default Contact 