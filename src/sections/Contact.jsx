import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Rocket, Send } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { email, formUrl, links } = portfolioData.contact;

  return (
    <section id="contact" className="section-padding">
      <SectionHeader title="Let's Work Together 🚀" subtitle="Have a project in mind or just want to say hi? My inbox is always open." />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-8">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-8 group"
            >
              <div className="p-5 glass-card rounded-3xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl border-primary/20">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Send an Email</p>
                <a href={`mailto:${email}`} className="text-2xl font-black hover:text-primary transition-colors tracking-tight">{email}</a>
              </div>
            </motion.div>

            <div className="pt-10 border-t border-white/5 space-y-8">
               <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Connect with me</h4>
               <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={links.linkedin}
                    target="_blank"
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl text-gray-300 hover:text-secondary hover:border-secondary/40 transition-all font-bold"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </motion.a>
                  <motion.a
                    href={links.github}
                    target="_blank"
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl text-gray-300 hover:text-white hover:border-white/20 transition-all font-bold"
                  >
                    <Github size={20} /> GitHub
                  </motion.a>
               </div>
            </div>
          </div>

          <div className="p-8 glass-card border-dashed border-primary/30 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 text-primary/10 rotate-12 group-hover:rotate-0 transition-transform">
                <Rocket size={100} />
             </div>
             <p className="text-xl font-bold mb-4 relative z-10">Available for freelance & full-time roles.</p>
             <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium relative z-10">
               Passionate about building AI-powered Web apps and solving complex problems. Let's create something impactful together.
             </p>
             <a href={`mailto:${email}`} className="btn-primary inline-flex py-3 px-8 text-sm relative z-10">
                Start a Conversation
             </a>
          </div>
        </motion.div>

        {/* Google Form Integration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent-purple/20 blur-2xl -z-10 rounded-[3rem]" />
          
          <div className="glass-card p-4 rounded-[2.5rem] border-white/10 shadow-2xl h-[500px] md:h-[650px] overflow-hidden group">
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white/5 relative">
               <iframe 
                 src={formUrl} 
                 className="w-full h-full border-none" 
                 title="Contact Form"
               >
                 Loading…
               </iframe>
               
               {/* "Premium" overlay when not focused/hovered */}
               <div className="absolute bottom-4 right-4 group-hover:opacity-0 transition-opacity">
                   <div className="px-5 py-3 glass-card rounded-2xl border-primary/30 flex items-center gap-3 animate-bounce">
                      <Send size={18} className="text-primary" />
                      <span className="text-xs font-bold text-white tracking-widest uppercase">Quick Connect</span>
                   </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
