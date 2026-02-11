//section containing contact information and a contact form
import SectionContainer from "../components/SectionContainer";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
function Contact() {
    return(
        <SectionContainer id="contact" heading="Lets Connect!" extra="justify-items-center space-y-5">
            <p className="text-white">Looking for a junior developer? Let's talk.</p>
            <div className="flex gap-6">
                <a href="mailto:Johnnyjllerena@gmail.com" className="flex items-center gap-2">
                    <FaEnvelope className="text-white size-5" />
                    <span className="text-white">Johnnyjllerena@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/johnnyjllerena/" className="flex items-center gap-2">
                    <FaLinkedin className="text-white size-5" />
                    <span className="text-white">linkedin.com/in/johnnyjllerena/</span>
                </a>
                <a href="https://github.com/JJLlerena" className="flex items-center gap-2">
                    <FaGithub className="text-white size-5" />
                    <span className="text-white">github.com/JJLlerena</span>
                </a>
            </div>
        </SectionContainer>
    );
}

export default Contact 