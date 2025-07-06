import { useEffect, useState } from "react";
import axios from "axios";

export default function ExperienceTimeline() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/experience")
      .then((res) => setExperience(res.data))
      .catch((err) => console.error("Error loading experience", err));
  }, []);

  const formatDate = (date) => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#0f111a] to-[#1c2242] text-white py-16" id="experience">
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="text-white">My</span>{" "}
        <span className="text-blue-400">Experience</span>
      </h2>

      <div className="space-y-10 px-4 sm:px-6 lg:px-12 xl:px-24">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row md:items-start gap-6 bg-gradient-to-r from-[#0f111a] to-[#1c2242] border border-blue-600 rounded-lg p-6 shadow-md"
          >
            {/* Left: Company */}
            <div className="md:w-1/4 w-full text-blue-300 font-semibold text-lg md:text-right md:pr-6 border-b md:border-b-0 border-blue-500 pb-2 md:pb-0">
              {exp.company}
            </div>

            {/* Right: Rest of the content */}
            <div className="md:w-3/4 w-full">
              <p className="text-sm text-blue-400 mb-1">
                {formatDate(exp.start_date)} – {formatDate(exp.end_date)}
              </p>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-300 italic">{exp.location}</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
