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


              <button
                className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform"
                onClick={e => {
                  e.stopPropagation();
                  window.open(project.link, "_blank");
                }}
              >
                Visit Live Site
              </button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}
