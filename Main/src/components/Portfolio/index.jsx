import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Recipe App',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Chess App',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Work Page',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
