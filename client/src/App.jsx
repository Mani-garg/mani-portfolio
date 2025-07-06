import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import HeaderInfo from "./components/HeaderInfo";

import SkillGrid from "./components/SkillGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationList from "./components/EducationList";
import AchievementCards from "./components/AchievementCards";
import ProjectList from "./components/ProjectList";
import ContactForm from "./components/ContactForm";


// 💡 Reusable fade-up wrapper
const FadeSection = ({ id, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 space-y-24">
       <section id="top">
  <HeaderInfo />
</section>


        
        <FadeSection id="skills">
          <SkillGrid />
        </FadeSection>

        <FadeSection id="projects">
          <ProjectList />
        </FadeSection>

        <FadeSection id="experience">
          <ExperienceTimeline />
        </FadeSection>

        <FadeSection id="education">
          <EducationList />
        </FadeSection>

        <FadeSection id="achievements">
          <AchievementCards />
        </FadeSection>

        <FadeSection id="contact">
          <ContactForm />
        </FadeSection>
      </main>
    </div>
  );
}
