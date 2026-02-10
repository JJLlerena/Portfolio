//component for individual project cards in the Projects section

function ProjectCard({ title, description, tech, github, demo, live }) {
  return (
    <div className="bg-gray-800 p-6 rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-400 mb-4">{tech}</p>
      <div className="flex gap-4">
        {github && <a href={github} className="text-blue-400">GitHub</a>}
        {demo && <a href={demo} className="text-blue-400">Live Demo</a>}
        {live && <a href={live} className="text-blue-400">Live Site</a>}
      </div>
    </div>
  );
}

export default ProjectCard;