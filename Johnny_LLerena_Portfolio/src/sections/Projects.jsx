//section containing project information and a list of projects


function Projects() {
    return(
        <div className="bg-yellow-500 p-10">
            <h1 className="text-3xl font-bold text-white">My Projects</h1>
            <p className="text-white mt-4">Here are some of the projects I've worked on:</p>
            <ul className="list-disc list-inside text-white mt-2">
                <li>Project 1: A web application built with React and Node.js</li>
                <li>Project 2: A mobile app developed using React Native</li>
                <li>Project 3: An open-source library for data visualization</li>
            </ul>
        </div>
    );
}

export default Projects