import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiFigma,
  SiExpress,
} from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";

export default function SkillsShowcase() {
  return (
    <section className="bg-gradient-to-r from-[#0f111a] to-[#1c2242] text-white p-10 rounded-2xl shadow-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-sm text-gray-300 mb-6 max-w-lg leading-relaxed">
            I'm proficient in full-stack development and data analysis, with strong foundations in core computer science and modern web technologies. Here's a breakdown of my technical strengths:
          </p>

          <div className="space-y-5">
            <SkillBar label="C++ / JavaScript / Python" value={90} color="bg-blue-500" />
            <SkillBar label="Data Structures & Algorithms" value={85} color="bg-green-500" />
            <SkillBar label="React / Node / Express" value={85} color="bg-purple-500" />
            <SkillBar label="MongoDB / SQL" value={80} color="bg-pink-500" />
            <SkillBar label="Tailwind / HTML / CSS" value={75} color="bg-yellow-400" />
            <SkillBar label="Python Libraries (Pandas, NumPy)" value={80} color="bg-cyan-400" />
          </div>
        </div>

        {/* Right Column - Icons */}
        <div className="space-y-10">
          {/* Languages & Libraries */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Languages & Libraries</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <SiCplusplus title="C++" />
              <SiJavascript title="JavaScript" />
              <FaPython title="Python" />
              <SiMysql title="SQL" />
              <SiPandas title="Pandas" />
              <SiNumpy title="NumPy" />
              <MdAnalytics title="Analytics / Seaborn" />
            </div>
          </div>

          {/* Web Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Web Technologies</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <SiTailwindcss title="Tailwind CSS" />
              <FaReact title="React.js" />
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express.js" />
              <SiMongodb title="MongoDB" />
            </div>
          </div>

          {/* Data Analytics */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Data Analytics</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <MdAnalytics title="Power BI / EDA" />
              <BsBarChartFill title="Excel / Charts" />
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-4 text-3xl">
              <FaGitAlt title="Git" />
              <TbBrandVscode title="VS Code" />
              <SiFigma title="Figma" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable skill bar component
function SkillBar({ label, value, color = "bg-white" }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 ${color} rounded-full transition-all duration-700 ease-in-out`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
