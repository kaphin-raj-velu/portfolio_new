import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle, Trophy, Calendar } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Experience & Education */}
        <div>
          <SectionHeader title="Professional & Academic Journey" />
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-secondary/30 before:to-transparent">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-20 group"
              >
                <div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-2xl bg-dark-lighter border-2 border-primary flex items-center justify-center shadow-neon-purple group-hover:scale-110 transition-transform">
                   <Briefcase size={16} className="text-primary" />
                </div>
                <div className="glass-card p-8 group-hover:border-primary/40">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-[10px] font-black tracking-widest text-primary uppercase border border-primary/20">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-black tracking-tight">{exp.role}</h3>
                  </div>
                  <p className="text-secondary font-bold text-lg mb-4">{exp.company}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed font-medium">{exp.description}</p>
                </div>
              </motion.div>
            ))}

            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="relative pl-20 group"
              >
                <div className="absolute left-8 top-0 -translate-x-1/2 w-8 h-8 rounded-2xl bg-dark-lighter border-2 border-secondary flex items-center justify-center shadow-neon-blue group-hover:scale-110 transition-transform">
                   <GraduationCap size={16} className="text-secondary" />
                </div>
                <div className="glass-card p-8 group-hover:border-secondary/40">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full text-[10px] font-black tracking-widest text-secondary uppercase border border-secondary/20">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-black tracking-tight">{edu.degree}</h3>
                  </div>
                  <p className="text-gray-300 dark:text-gray-400 font-bold mb-4">{edu.institution}</p>
                  <div className="inline-flex items-center px-4 py-1.5 bg-white/5 dark:bg-black/20 rounded-xl text-xs text-accent-blue font-black tracking-widest border border-white/10 uppercase">
                    Grade: {edu.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-16">
          <div>
            <SectionHeader title="Distinctions" />
            <div className="grid gap-6">
              {portfolioData.achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass-card p-8 group overflow-hidden relative"
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 tracking-tight">{ach.title}</h4>
                      <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed font-medium">{ach.description}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 text-8xl opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rotate-12 group-hover:rotate-0 duration-700">
                    <Award />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Verified Certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 glass-card flex items-center gap-4 hover:border-accent-blue/40 transition-all group"
                >
                  <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue group-hover:scale-110 transition-transform">
                   <CheckCircle size={18} />
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
