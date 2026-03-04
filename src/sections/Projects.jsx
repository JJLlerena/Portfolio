//section containing project information and a list of projects
import SectionContainer from "../components/SectionContainer";

function Projects() {
    function ProjectCard({ title, description, tech, github, demo, live }) {
        return (
            <div className="bg-gradient-to-b from-[#1a1a1a] from-98% to-[#1b998b] p-6 rounded shadow shadow-[#f8f1ff]/10">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <p className="text-sm text-gray-400 mb-4">{tech}</p>
            <div className="flex gap-4">
                {github && <a href={github} className="text-[#1b998b]">GitHub</a>}
                {demo && <a href={demo} className="text-[#1b998b]">Live Demo</a>}
                {live && <a href={live} className="text-[#1b998b]">Live Site</a>}
            </div>
            </div>
        );
    }
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