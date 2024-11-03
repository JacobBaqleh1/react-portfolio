/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function PortfolioUI({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap p-4">
      {projects.map((project) => (
        <div key={project.key} className="border p-4 rounded shadow-md">
          <img
            src={project.img}
            alt={`Project`}
            className="w-full h-auto rounded-md object-cover"
          ></img>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={project.link} className="text-blue-500 mt-2 block">
            View Site
          </Link>
          <Link to={project.gitHub} className="text-blue-500 mt-2 block">
            View GitHub Repo
          </Link>
        </div>
      ))}
    </div>
  );
}
