/* eslint-disable react/no-unknown-property */
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="bg-[#324154] min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-blue-300 underline">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#324154] min-h-screen py-12 px-4">
      <article className="max-w-3xl mx-auto text-white">
        <button
          onClick={() => navigate("/")}
          className="text-blue-300 hover:text-blue-100 mb-6 inline-flex items-center gap-1"
        >
          ← Back to projects
        </button>

        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-2xl shadow-2xl mb-8 border border-white/10"
        />

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-blue-200 mb-4 tracking-tight"
          view-transition-name={`project-title-${project.key}`}
        >
          {project.title}
        </h1>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-200 text-blue-900 px-3 py-1 rounded text-xs font-semibold shadow"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <h2 className="text-2xl font-bold text-blue-100 mb-2">Overview</h2>
        <p className="text-lg text-blue-100 leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Your write-up — fill in `thinking` in src/data/projects.js */}
        {project.thinking && project.thinking.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-100 mb-2">
              Behind the Build
            </h2>
            {project.thinking.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg text-blue-100 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-8">
          <button
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            onClick={() => window.open(project.link, "_blank")}
          >
            Visit Live Site
          </button>
          {project.gitHub && (
            <button
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
              onClick={() => window.open(project.gitHub, "_blank")}
            >
              View on GitHub
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
