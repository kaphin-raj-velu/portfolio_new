import { Github, Linkedin, Mail, Code2, Database, Layout, Cpu, Brain, Trophy, GraduationCap, Briefcase, Award, Globe, MessageSquare } from 'lucide-react';
import icon1 from '../assets/image.png';
export const portfolioData = {
  hero: {
    name: "Kaphin Raj Velu G K",
    titles: ["Full Stack Developer", "AI Enthusiast", "UI/UX Designer"],
    tagline: "Building intelligent, scalable, and impactful digital solutions",
    resume: "https://drive.google.com/file/d/1VauA23RpdEwS2pTfEpFGwZS1eb_h8fLU/view?usp=sharing",
    socials: [
      { icon: Linkedin, link: "https://www.linkedin.com/in/kaphin123/", label: "LinkedIn" },
      { icon: Github, link: "https://github.com/kaphin-raj-velu", label: "GitHub" },
      { icon: Mail, link: "mailto:kaphinraj@gmail.com", label: "Email" },
    ]
  },
  about: {
    text: "Computer Science student with hands-on experience in frontend development, AI-based applications, and full-stack web projects. Skilled in building responsive web interfaces, integrating APIs, and developing intelligent systems using NLP models. Hackathon finalist with strong problem-solving skills and real-world project experience.",
    stats: [
      { label: "CGPA", value: "8.57" },
      { label: "Projects", value: "5+" },
      { label: "Awards", value: "2" },
    ]
  },
  skills: [
    { name: "Languages", items: ["C", "C++", "Python", "JavaScript", "TypeScript"], icon: Code2, progress: 90 },
    { name: "Web Development", items: ["React", "Node.js", "HTML", "CSS", "Tailwind"], icon: Layout, progress: 95 },
    { name: "Databases", items: ["MongoDB", "MySQL"], icon: Database, progress: 85 },
    { name: "Core Skills", items: ["DSA", "OOPs", "Problem Solving"], icon: Brain, progress: 90 },
    { name: "AI & ML", items: ["NLP", "BERT", "Transformers", "FastAPI"], icon: Cpu, progress: 80 },
    { name: "Tools", items: ["Git", "GitHub", "Blender"], icon: Globe, progress: 85 },
  ],
  projects: [
    {
      title: "AI Pre-Interview Question Audit Tool",
      date: "Mar 2026 – Apr 2026",
      description: "AI system to detect bias, discrimination, and legal risks in interview questions. Suggests safer and unbiased alternatives.",
      tech: ["React", "Node.js", "MongoDB", "FastAPI", "BERT", "NLP"],
      category: "AI",
      links: { github: "https://github.com/STACK_OVERLODE_VORTEX_20", demo: "https://drive.google.com/file/d/1wF5uc4UBOpA_uG859iWanWhPLps3WCPh/view" },
      image: "https://images.unsplash.com/photo-1591453089816-0fbb971bac45?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Smart Food Ordering System",
      date: "Oct 2025 – Dec 2025",
      description: "Voice-enabled platform for visually impaired users with real-time audio feedback for seamless ordering.",
      tech: ["HTML", "CSS", "JS", "Node.js", "MySQL", "Web Speech API"],
      category: "Full Stack",
      links: { github: "https://github.com/BITEBURST-main", demo: "https://drive.google.com/file/d/1t0sTzzz69Ttmzl3zN8DZotpwMhCUGlp2/view" },
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "AI Career Counsellor Chatbot",
      date: "Jan 2026 – May 2026",
      description: "Multilingual chatbot (7 languages) for career guidance. Provides personalized career paths and roadmaps.",
      tech: ["TypeScript", "FastAPI", "Python", "MongoDB", "Gemini API"],
      category: "AI",
      links: { github: "https://github.com/ai-career-counsellor", demo: "https://drive.google.com/file/d/1yCLGh2WEVxfPmakRZL_CvXr59Fs5yCpN/view" },
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    },
  {
  title: "LifelineID – Emergency Medical QR Platform",
  date: "Jun 2026 – Aug 2026",
  description: "Full-stack emergency medical QR platform with AI-powered first responder guidance, secure patient management, QR code generation & scanning, admin dashboard, analytics, and MongoDB integration.",
  tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Google Gemini API",
    "Framer Motion",
    "Recharts"
  ],
  category: "Full Stack",
  links: {
    "github": "https://github.com/QR_-BASED_EMERGENCY-_MEDICAL-_ID",
    "demo": "https://lifelineid-app.onrender.com/"
  },
 image: icon1
}
  ],
  experience: [
    {
      role: "Front-End Developer Intern",
      company: "Syntecxhub",
      period: "Jan 2026 – Feb 2026",
      description: "Built mini projects using HTML, CSS, JavaScript. Improved responsive design and UI/UX skills."
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (CSE)",
      institution: "Kumaraguru College of Technology, Coimbatore",
      period: "Sep 2024 – May 2028",
      stats: "CGPA: 8.57"
    }
  ],
  achievements: [
    { 
      title: "Mahatma Gandhi Scholarship (MG Award)", 
      description: "Kumaraguru College Of Technology. Awarded for outstanding academic performance and maintaining a high CGPA." 
    },
    { 
      title: "Vortex-2.0-Hackathon-Shiv Nadar University", 
      description: "Awarded ₹2000 for AI interview bias-detection tool. (Mar-2025) - (Mar-2026)" 
    }
  ],
  certifications: [
    "DBMS (Infosys Springboard)",
    "Full Stack Masterclass (NoviTech R&D)",
    "Blender 3D Modeling (Coursera)",
    "HTML & CSS (Infosys Springboard)"
  ],
  contact: {
    email: "kaphinraj@gmail.com",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf6K33UhQuFe68fDr6wF2VlC5yQHHRM-E-OBltCeE4j5DypcA/viewform",
    links: {
      github: "https://github.com/kaphin-raj-velu",
      linkedin: "https://www.linkedin.com/in/kaphin123/"
    }
  }
};
