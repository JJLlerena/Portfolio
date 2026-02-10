//section containing project information and a list of projects
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return(
        <SectionContainer id="projects" heading="My Projects" background="bg-blue-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                    title="Portfolio Website"
                    description="Personal portfolio built with React and Tailwind"
                    tech="React, Tailwind CSS, Vite"
                    github="https://github.com/yourusername/portfolio"
                    demo="https://yoursite.com"
                />
                <ProjectCard
                    title="Dubla Garage Doors"
                    description="Built a website for a local garage door company"
                    tech="WordPress, Elementor, PHP"
                    live="https://dublagaragedoors.com"

                />
            </div>
        </SectionContainer>
    );
}

export default Projects