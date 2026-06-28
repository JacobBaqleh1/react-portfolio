/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const techStack = [
  { name: "React",        icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js",      icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Remix",        icon: "https://cdn.simpleicons.org/remix/white" },
  { name: "TypeScript",   icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript",   icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Node.js",      icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Express",      icon: "https://cdn.simpleicons.org/express/white" },
  { name: "GraphQL",      icon: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "MongoDB",      icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "PostgreSQL",   icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Drizzle ORM",  icon: "https://cdn.simpleicons.org/drizzle/C5F74F" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Vite",         icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "AWS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Anthropic",    icon: "https://cdn.simpleicons.org/anthropic/white" },
];

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
                  {project.gitHub && (
                    <button
                      className="w-full px-3 py-2 text-sm bg-gray-900 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.gitHub, "_blank");
                      }}
                    >
                      View on GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {title === "Projects" && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4">Technology Stack</h2>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-5 flex flex-wrap gap-4">
              {techStack.map(({ name, icon }) => (
                <div key={name} className="relative group/tech flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-200 cursor-default">
                    <img src={icon} alt={name} className="w-6 h-6" />
                  </div>
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover/tech:opacity-100 transition-opacity duration-150 z-10">
                    {name}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
