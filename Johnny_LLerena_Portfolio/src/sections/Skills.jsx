//section for the skills of the portfolio site
import SectionContainer from "../components/SectionContainer";

function Skills() {
    return(
        <SectionContainer id="skills" heading="My Skills">
            <ul className="list-disc list-inside text-white space-y-1 pl-6">
                <p>
                    <span className="font-bold">Languages:</span> JavaScript, TypeScript, Python, Java, HTML/CSS, C#, C++
                </p>
                <p>
                    <span className="font-bold">Frameworks/Libraries:</span> React, Next.js, Node.js, Express.js, Django, Bootstrap, Tailwind CSS
                </p>
                <p>
                    <span className="font-bold">Tools:</span> Git/GitHub, VS Code, Linux (Ubuntu), AWS, Docker, Wireshark
                </p>
                <p>
                    <span className="font-bold">Databases:</span> PostgreSQL, MySQL, MongoDB, Firebase
                </p>
                <p>
                    <span className="font-bold">Security:</span> Security+, Network Security, Penetration Testing, SIEM, Vulnerability Assessment
                </p>
                <p>
                    <span className="font-bold">Other:</span> Fluent in English and Spanish
                </p>
            </ul>
        </SectionContainer>
    );
}

export default Skills