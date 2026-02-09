//React component for the about section of the portfolio site
import SectionContainer from "../components/SectionContainer";
import Profileimg from '../assets/Profile_Placeholder.jpeg';

function About() {
    return(
        <SectionContainer id="about" heading="Hey, I'm Johnny!" background="bg-black">
            <img src={Profileimg} alt="Profile Picture" className="w-32 h-32 rounded-full mx-auto my-4" />
            <p className="text-white my-2">CS grad from FIU currently working as a repair tech in the Keys while transitioning back into software development. I picked up my Security+ cert recently and I'm building out this portfolio to showcase what I can do with React and JavaScript.</p>
            <p className="text-white">The security background helps me think about building applications the right way from the start, and years of troubleshooting broken systems, whether it's vehicles, equipment, or code, taught me how to actually debug instead of just throwing fixes at problems.</p>
            <p className="text-white">When I'm not coding, I'm either gaming or out fishing offshore. If you're hiring junior devs or just want to talk tech, hit me up.</p>

        </SectionContainer>

    );
}

export default About