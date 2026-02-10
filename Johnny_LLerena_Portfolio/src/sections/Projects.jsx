//section containing project information and a list of projects
import SectionContainer from "../components/SectionContainer";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return(
        <SectionContainer id="projects" heading="My Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                    title="Portfolio Website"
                    description="Personal portfolio built with React and Tailwind CSS. Single-page design with smooth navigation, project showcases, and responsive layout."
                    tech="React, Tailwind CSS, Vite"
                    github="https://github.com/yourusername/portfolio"
                />
                <ProjectCard
                    title="Dubla Garage Doors LLC"
                    description="WordPress website for a garage door service company. Designed responsive layout, integrated contact forms, and optimized for local SEO."
                    tech="WordPress, Elementor, PHP"
                    live="https://dublagaragedoors.com"
                />
                <ProjectCard
                    title="Mr Impact Windows & Doors Delivery LLC"
                    description="WordPress site for an impact windows and doors installer. Built mobile-friendly interface with service galleries and lead capture functionality."
                    tech="WordPress, Elementor, PHP"
                    live="https://www.mrimpactdoors.org"
                />
            </div>
        </SectionContainer>
    );
}

export default Projects