import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { useRef } from "react";

const Hero = () => {
  const { name, titles, tagline, socials, resume } = portfolioData.hero;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden relative"
    >
      {/* 3D Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8 text-primary border-primary/20 shadow-neon-purple/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Forward-Thinking Developer
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-[1.1]">
            <span className="text-gray-500/50 block text-2xl md:text-3xl mb-4 font-medium tracking-tight">I Am</span>
            <span className="neon-text block mb-2">{name}</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-bold text-gray-400 dark:text-gray-500 mb-10 h-8 flex items-center gap-3">
            <span className="text-primary font-mono text-lg opacity-50">&gt;_</span>
            <Typewriter
              options={{
                strings: titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium border-l-2 border-primary/20 pl-6">
            {tagline}
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group px-12 shadow-2xl flex items-center gap-3"
            >
              Explore Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href={resume} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline backdrop-blur-md flex items-center gap-3"
            >
              Resume
              <Download size={16} />
            </motion.a>
          </div>

          <div className="flex gap-5">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ y: -8, color: 'var(--primary)', scale: 1.1 }}
                  className="p-4 glass-card rounded-2xl text-gray-500 hover:text-primary transition-all shadow-xl group border-white/5"
                  aria-label={social.label}
                >
                  <Icon size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* 3D Interactive Card - Hidden on mobile, scaled on tablet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative hidden lg:flex items-center justify-center p-4 md:p-12 perspective-1000"
        >
          <motion.div 
            whileHover={{ rotateX: 10, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="relative glass-card p-3 rotate-3 shadow-[0_50px_100px_-20px_rgba(139,92,246,0.3)] border-white/20 active:scale-95 transition-all duration-500 max-w-full"
          >
            <div className="w-[300px] xl:w-[350px] h-[450px] xl:h-[500px] bg-[#020617] rounded-3xl overflow-hidden relative group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
              
              {/* Dynamic Design Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] opacity-[0.03] font-black neon-text select-none pointer-events-none">
                {name.charAt(0)}
              </div>

              {/* Virtual Coding Terminal UI */}
              <div className="p-8 h-full flex flex-col">
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="font-mono text-[11px] space-y-4">
                  <p className="text-primary/60 italic">// Core Competencies</p>
                  <div className="space-y-2">
                    <p className="text-secondary"><span className="text-gray-600">const</span> skills = [</p>
                    <p className="pl-4 text-gray-300">"Next.js", "AI Integration",</p>
                    <p className="pl-4 text-gray-300">"Distributed Systems",</p>
                    <p className="pl-4 text-gray-300">"Modern UI/UX"</p>
                    <p className="text-secondary">];</p>
                  </div>
                  
                  <div className="pt-8">
                    <p className="text-primary/60 italic">// Current Vibe</p>
                    <p className="text-gray-300">status: <span className="text-accent-blue animate-pulse">"BUILDING_FUTURE"</span></p>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span className="tracking-widest">FPS: 60</span>
                    <span className="tracking-widest">MS: 16.6</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-5 w-24 h-24 glass-card rounded-3xl flex items-center justify-center p-4 border-primary/30 shadow-neon-purple z-20"
          >
            <div className="w-full h-full rounded-2xl bg-primary/20 animate-pulse" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
