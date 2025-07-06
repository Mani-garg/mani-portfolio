import { useEffect, useState } from "react";
import axios from "axios";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function AchievementCards() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/achievements")
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error("Error loading achievements", err));
  }, []);

  return (
    <section
      className="w-full bg-gradient-to-r from-[#0b0f1c] to-[#161b30] py-16 px-6 md:px-12"
      id="achievements"
    >
      <h2 className="text-4xl font-bold text-center mb-2 text-white">My Achievements</h2>
      <p className="text-center text-cyan-500 text-lg mb-10">Some of My Major Achievements</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-[#131a2e] border border-[#2c3658] rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{ach.title}</h3>
            <p className="text-sm text-gray-300 font-medium mb-4">{ach.issuer}</p>

            {ach.link && (
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 font-medium hover:underline"
              >
                View Credential <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
