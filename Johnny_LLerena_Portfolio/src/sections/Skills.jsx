//section for the skills of the portfolio site
import SectionContainer from "../components/SectionContainer";

function Skills() {
    const skills = {
        languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS", "C#", "C++"],
        frameworks: ["React", "Next.js", "Node.js", "Express.js", "Django", "Bootstrap", "Tailwind CSS"],
        tools: ["Git/GitHub", "VS Code", "Linux (Ubuntu)", "AWS", "Docker", "Wireshark"],
        databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
        security: ["Security+", "Network Security", "Penetration Testing", "SIEM", "Vulnerability Assessment"],
        other: ["Fluent in English and Spanish"]
    };
    return(
        <SectionContainer id="skills" heading="My Skills">
            {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
          <div className="flex flex-wrap gap-2 pl-px">
            {items.map(skill => (
                <span 
                    key={skill}
                    className="
                        bg-gradient-to-tr 
                        from-[#1b998b] to-[#2b2b2b]    
                        shadow-sm shadow-[#1a1a1a] 
                        px-4 py-2 rounded-full text-sm 
                        hover:scale-125 transition  eas-in-out 
                        "    
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
        </SectionContainer>
    );
}

export default Skills