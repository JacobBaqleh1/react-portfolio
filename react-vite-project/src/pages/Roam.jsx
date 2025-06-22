import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
export default function Roam() {
  const project = {
    title: "ROAM",
    live: "https://your-roam-live-site.com", // Replace with your actual live site URL
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
    summary:
      "ROAM is a full-stack web application designed to help users discover and explore national parks across the United States. With an interactive map, personalized profiles, and community-driven reviews, ROAM makes planning your next adventure easy and fun.",
    features: [
      "Search for parks by state or name",
      "User authentication and personalized profiles",
      "Save favorite parks and write reviews",
      "Interactive map interface",
    ],
    role: "Solo Developer",
  };

  const navigate = useNavigate();

  return (
    <div className="bg-[#324154] min-h-screen py-12 px-4">
      <article className="max-w-3xl mx-auto text-white">
        <h1 className="text-5xl font-extrabold text-blue-200 mb-4 tracking-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-900 px-3 py-1 rounded text-xs font-semibold shadow"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-lg text-blue-100 leading-relaxed mb-6">
          {project.summary}
        </p>
        <h2 className="text-2xl font-bold text-blue-100 mb-2 mt-8">
          Key Features
        </h2>
        <ul className="mb-8 text-blue-100 list-disc list-inside">
          {project.features.map((feature, idx) => (
            <li key={idx} className="mb-1">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mb-8 text-blue-100">
          <span className="font-semibold">Role:</span> {project.role}
        </div>
        <button
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
          onClick={() => window.open(project.live, "_blank")}
        >
          Visit Live Site
        </button>
      </article>
    </div>
  );
}
