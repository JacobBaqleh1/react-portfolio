/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function PortfolioUI({ projects }) {
  return (
    <div className=" gap-10 mt-4 ">
      {projects.map((project) => (
        <div
          key={project.key}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 border shadow-md   "
        >
          {/* Content on the left */}
          <div className="flex flex-col justify-start pr-8">
            <h2 className="text-3xl font-extrabold m-4">{project.title}</h2>
            <div className="flex flex-wrap gap-4 m-4">
              {project.technologies?.map((tech, index) => (
                <div
                  key={index}
                  className="bg-black text-white px-2 py-1 rounded text-sm shadow dark:bg-white dark:text-black"
                >
                  {tech}
                </div>
              ))}
            </div>
            <p className="mt-2 text-2xl">{project.description}</p>
            <Link to={project.link} className="relative w-40 h-16 border border-gray-400 rounded-md my-16 ml-8">
              <button
                className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 transition-transform duration-300 hover:translate-x-0 hover:-translate-y-0 bg-blue-400 text-white px-4 py-2 rounded-md w-40 h-16 text-xl font-bold"
              >
                View Project
              </button>
            </Link>
            {/* <Link to={project.gitHub} className="text-blue-500 mt-2 block">
              View GitHub Repo
            </Link> */}
          </div>

          {/* Image on the right */}
          <div>
            <Link to={project.link}>
              <img
                src={project.img}
                alt={`Project`}
                className="w-full h-auto rounded-md object-cover mt-10 pl-4"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
