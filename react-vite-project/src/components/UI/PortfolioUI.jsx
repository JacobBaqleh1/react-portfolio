/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PortfolioUI({ projects }) {
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
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10 w-full ">
        {projects.map((project) => (
          <div
            key={project.key}
            className="group relative flex flex-col min-h-[32rem] bg-white/80 rounded-2xl shadow-xl border border-transparent hover:border-blue-500 hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={`Project`}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-pointer"
                onClick={() => setEnlargedImg(project.img)}
              />
            </div>
            <div className="flex flex-col flex-1 justify-between p-6">
              <div>
                <h2
                  className="text-2xl font-bold mb-2 text-blue-900"
                  view-transition-name={`project-title-${project.key}`}
                >
                  {project.title}
                </h2>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                {/* Tech badges */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
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

              <div className="flex gap-3">
                <button
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform"
                  onClick={e => {
                    e.stopPropagation();
                    window.open(project.link, "_blank");
                  }}
                >
                  Visit Live Site
                </button>
                {project.gitHub && (
                  <button
                    className="flex-1 px-4 py-2 bg-gray-900 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform flex items-center justify-center gap-2"
                    onClick={e => {
                      e.stopPropagation();
                      window.open(project.gitHub, "_blank");
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}
