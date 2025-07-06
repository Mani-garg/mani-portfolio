import { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Failed to load projects", err));
  }, []);

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-r from-[#0f111a] to-[#1c2242] text-white">
      {/* Section Heading */}
      <div className="relative mb-14 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold z-10 relative">
          PROJECTS
        </h2>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-8xl font-extrabold text-white opacity-10 select-none tracking-widest">
          PROJECTS
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-[#0f111a] to-[#1c2242] border border-gray-700 rounded-xl shadow-md p-6 hover:border-blue-500 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-blue-400 mb-2">
              {project.tech_stack}
            </p>

            <p className="text-sm text-gray-400 mb-2">
              {project.date_range}
            </p>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex gap-3">
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white bg-gray-800 px-4 py-1.5 rounded-md hover:bg-black transition"
                >
                  <FaGithub className="text-xs" />
                  GitHub
                </a>
              )}

              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-400 underline hover:text-blue-500 transition"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
