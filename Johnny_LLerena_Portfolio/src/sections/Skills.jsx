//section for the skills of the portfolio site
import SectionContainer from "../components/SectionContainer";

function Skills() {
    return(
        <SectionContainer id="skills" background="bg-yellow-500">
            <h1 className="text-3xl font-bold text-white">My Skills</h1>
            <p className="text-white mt-4">Here are some of the skills I have:</p>
            <ul className="list-disc list-inside text-white mt-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
            </ul>
        </SectionContainer>
    );
}

export default Skills