import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { name, socials } = portfolioData.hero;
  
  return (
    <footer className="relative py-20 overflow-hidden border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <motion.a
              href="#"
              className="text-3xl font-black neon-text tracking-tighter inline-block mb-6 uppercase"
            >
              {name}
            </motion.a>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-8 font-medium">
              Building intelligent digital solutions with a focus on AI integration and modern user experiences. Let's create something extraordinary.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: 'var(--primary)', scale: 1.1 }}
                    className="p-4 glass-card rounded-2xl text-gray-500 hover:text-primary transition-all border-white/5 shadow-xl"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400 mb-8 px-4">Navigation</h4>
            <div className="space-y-4 px-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-bold text-gray-500 hover:text-primary transition-colors hover:translate-x-2 duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400 mb-8 px-4">Contact</h4>
            <div className="space-y-4 px-4 font-medium">
               <span className="block text-sm text-gray-500">Tamil Nadu, India</span>
               <a href="mailto:kaphinraj@gmail.com" className="block text-sm text-gray-300 hover:text-primary transition-colors">kaphinraj@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">
            © 2026 {name}. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-widest uppercase">
            Design with <Heart size={14} className="text-red-500 animate-pulse fill-red-500" /> for the future
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary group"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
