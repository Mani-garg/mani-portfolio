import { useEffect, useState } from "react";
import axios from "axios";

export default function EducationList() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/education")
      .then((res) => setEducation(res.data))
      .catch((err) => console.error("Failed to load education", err));
  }, []);

  return (
    <section className="w-full bg-[#0f172a] text-white py-16" id="education">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-white">My</span>{" "}
        <span className="text-blue-400">Education</span>
      </h2>

      <div className="space-y-8 px-4 sm:px-6 lg:px-12 xl:px-24">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-[#1e293b] border border-blue-600 rounded-lg p-6 shadow-md"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-300">{edu.degree}</h3>
              <p className="text-sm text-gray-400">
                {edu.start_year} – {edu.end_year}
              </p>
            </div>
            <p className="text-md font-medium text-white">{edu.institution}</p>
            <p className="text-sm text-blue-400 mt-1">Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
