import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";
import { useRef } from "react";

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="skills" ref={containerRef} className="section-padding overflow-hidden">
      <SectionHeader title="Skills" subtitle="A surgical selection of technologies powering my digital architecture." />
      
      <motion.div 
        style={{ scale }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {portfolioData.skills.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotateY: 10, rotateX: -5 }}
              className="glass-card p-8 md:p-12 group hover:-translate-y-4 transition-all duration-700 relative overflow-hidden perspective-1000 bg-white/5 dark:bg-black/20"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-1000 rotate-12 group-hover:rotate-0">
                <Icon size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="p-5 bg-primary/10 rounded-[1.5rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-xl border border-primary/20">
                    <Icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-primary/80 group-hover:text-primary transition-colors">{category.progress}%</div>
                    <div className="text-[8px] uppercase font-black tracking-widest text-gray-500">Expertise</div>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">{category.name}</h3>
                
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2 bg-black/40 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white group-hover:border-primary/40 transition-all duration-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="relative h-2 w-full bg-white/5 dark:bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "circOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent-purple rounded-full shadow-neon-purple"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
