//section containing contact information and a contact form
import SectionContainer from "../components/SectionContainer";

function Contact() {
    return(
        <SectionContainer id="contact" heading="Contact Me" background="bg-red-500">
            <p className="text-white mt-4">Feel free to reach out to me via email at johnnyllerena@example.com</p>
        </SectionContainer>
    );
}

export default Contact 