import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI", "Web", "Full Stack"];

  const filteredProjects = filter === "All" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  // Updated images for better visuals
  // Updated images for better visuals
const projectImages = {
  "AI Pre-Interview Question Audit Tool":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",

  "Smart Food Ordering System":
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",

  "AI Career Counsellor Chatbot":
    "https://www.nysscpa.org/images/default-source/trusted-professional-images/gettyimages-1465904803-chatgpt-chat-bot-ai-1500.jpg?Status=Master&sfvrsn=d6d9cff7_3",

  "LifelineID QR – Emergency Medical QR Platform":
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
};

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <SectionHeader 
          title="Projects" 
          subtitle="Crafting digital experiences with precision and AI innovation." 
        />
        
        <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-2xl border-white/5 self-start md:self-auto bg-white/5 dark:bg-black/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-[10px] uppercase font-black tracking-widest transition-all duration-500 ${
                filter === cat 
                  ? "bg-primary text-white shadow-neon-purple scale-105" 
                  : "text-gray-500 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
              className="glass-card group flex flex-col overflow-hidden border-white/10 hover:border-primary/40 shadow-2xl perspective-1000 bg-white/5 dark:bg-black/20"
            >
              {/* Media Hub */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={projectImages[project.title] || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6 z-20">
                   <span className="px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full text-[9px] uppercase font-black tracking-[0.2em] border border-white/10 text-white shadow-2xl">
                     {project.category}
                   </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/20 backdrop-blur-[6px] z-10">
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.demo} 
                    target="_blank"
                    className="p-5 bg-white text-dark rounded-3xl hover:bg-primary hover:text-white transition-colors shadow-[0_20px_50px_rgba(139,92,246,0.3)] flex items-center gap-3 font-black uppercase text-[10px] tracking-widest"
                  >
                    Experience Live <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="p-10 flex-grow flex flex-col relative bg-gradient-to-b from-transparent to-black/20">
                <div className="mb-4">
                   <span className="text-primary font-mono text-[9px] font-black uppercase tracking-[0.3em] opacity-60">{project.date}</span>
                </div>
                
                <h3 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors tracking-tighter leading-tight uppercase">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 dark:text-gray-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2.5 mb-10 mt-auto">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-black text-gray-500 dark:text-gray-600 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                  <a href={project.links.github} target="_blank" className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 text-gray-400 hover:text-primary transition-all group/link">
                    View on GitHub <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
