/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function PortfolioUI({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-10 p-4">
      {projects.map((project) => (
        <div
          key={project.key}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-4 rounded shadow-md items-center"
        >
          {/* Content on the left */}
          <div>
            <h2 className="text-xl font-bold">{project.title}</h2>
              {project.technologies?.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm shadow"
                >
                  {tech}
                </div>
              ))}
            <p className="mt-2">{project.description}</p>
            <Link to={project.link} className="text-blue-500 mt-4 block">
              View Site
            </Link>
            <Link to={project.gitHub} className="text-blue-500 mt-2 block">
              View GitHub Repo
            </Link>
          </div>

          {/* Image on the right */}
          <div>
            <img
              src={project.img}
              alt={`Project`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
