import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";
import { useRef } from "react";

const About = () => {
  const { text, stats } = portfolioData.about;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="about" ref={targetRef} className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
           style={{ y }}
           className="relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-[80px] -z-10 rounded-full" />
          <SectionHeader title="About Me" subtitle="Bridging the gap between human curiosity and artificial intelligence." />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-400 dark:text-gray-500 text-lg leading-relaxed font-medium">
              {text}
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-10 px-8 py-10 glass-card rounded-[2.5rem] border-white/5 bg-white/5 dark:bg-black/20">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-black neon-text mb-2 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-500 group-hover:text-primary transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ rotate }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative lg:block hidden"
        >
          <div className="glass-card p-4 rounded-[3rem] border-white/20 shadow-2xl relative z-10 overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent group-hover:opacity-30 transition-opacity" />
             <div className="aspect-[4/5] bg-[#020617] rounded-[2.5rem] flex items-center justify-center p-12 border border-white/5">
                <div className="text-[200px] font-black opacity-[0.03] select-none group-hover:scale-110 transition-transform duration-1000">AI</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                   <div className="w-24 h-[2px] bg-primary/40 rounded-full animate-pulse" />
                   <div className="w-32 h-[2px] bg-secondary/40 rounded-full animate-pulse delay-700" />
                   <div className="w-20 h-[2px] bg-accent-purple/40 rounded-full animate-pulse delay-1000" />
                </div>
             </div>
          </div>
          {/* Parallax Floating Accents */}
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass-card rounded-full border-primary/20 blur-sm -z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
