/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PortfolioUI({ projects, title = "Projects" }) {
  const navigate = useNavigate();
  const [enlargedImg, setEnlargedImg] = useState(null);

  return (
    <>
      {/* Enlarged Image Modal */}
      {enlargedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setEnlargedImg(null)}
        >
          <img
            src={enlargedImg}
            alt="Enlarged project"
            className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-blue-400 bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="p-6 sm:p-10 w-full">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        {/* Self-contained slideshow box — scrollbar sits just under the cards */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-5">
          <div className="projects-scroll flex flex-col sm:flex-row gap-6 sm:overflow-x-auto sm:snap-x sm:snap-mandatory sm:pb-4">
          {projects.map((project) => (
            <div
              key={project.key}
              className="group relative flex flex-col w-full sm:w-72 sm:flex-shrink-0 sm:snap-start bg-white/90 rounded-2xl shadow-xl border border-transparent hover:border-blue-500 hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
                  onClick={() => setEnlargedImg(project.img)}
                />
              </div>
              <div className="flex flex-col flex-1 justify-between p-5">
                <div>
                  <h3
                    className="text-xl font-bold mb-3 text-blue-900"
                    view-transition-name={`project-title-${project.key}`}
                  >
                    {project.title}
                  </h3>
                  {/* Tech badges */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    className="w-full px-3 py-2 text-sm bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform"
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    Read More
                  </button>
                  <button
                    className="w-full px-3 py-2 text-sm border border-blue-400 text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, "_blank");
                    }}
                  >
                    Visit Live Site
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
