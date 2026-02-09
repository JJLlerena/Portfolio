//section containing contact information and a contact form
import SectionContainer from "../components/SectionContainer";

function Contact() {
    return(
        <SectionContainer id="contact" background="bg-red-500">
            <h1 className="text-3xl font-bold text-white">Contact Me</h1>
            <p className="text-white mt-4">Feel free to reach out to me via email at johnnyllerena@example.com</p>
        </SectionContainer>
    );
}

export default Contact 