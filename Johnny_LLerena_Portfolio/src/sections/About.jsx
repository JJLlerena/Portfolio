//React component for the about section of the portfolio site
import Container from "react-bootstrap/Container";

function About() {
    return(
        <Container className="bg-black w-full p-10">
            <h1 className="text-3xl font-bold text-white">About Me</h1>
            <p className="text-white mt-4">I am a passionate developer with experience in building web applications using React and other modern technologies.</p>
        </Container>
    );
}

export default About