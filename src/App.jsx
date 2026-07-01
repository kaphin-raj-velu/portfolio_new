import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      <CustomCursor />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center p-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
               <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-spin border-t-primary shadow-neon-purple" />
               <div className="absolute inset-0 flex items-center justify-center text-3xl font-black neon-text">K</div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-primary font-mono text-xs tracking-[0.5em] uppercase animate-pulse"
            >
              Initializing Digital Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Floating UI Elements */}
      <div className="fixed right-8 bottom-8 z-40 flex flex-col gap-4">
        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-4 glass-card rounded-2xl text-primary hover:bg-primary hover:text-white transition-all shadow-neon-purple border-primary/20 group"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Persistent Social Sidebar (Desktop) */}
      <div className="fixed left-8 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6 after:w-px after:h-24 after:bg-gradient-to-t after:from-primary/50 after:to-transparent">
        {portfolioData.hero.socials.map((social, i) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.link}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 + i * 0.1 }}
              whileHover={{ scale: 1.2, color: 'var(--primary)' }}
              className="text-gray-500 hover:text-primary transition-all p-2"
              aria-label={social.label}
            >
               <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
