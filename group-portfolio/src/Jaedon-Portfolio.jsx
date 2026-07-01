import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Briefcase, User, ChevronRight } from 'lucide-react';

const JaedonPortfolio = () => {
  // --- JAEDON'S DATA CONFIGURATION ---
  // Jaedon, update this object with your actual details!
  const jaedonData = {
    firstName: "Jaedon",
    fullName: "Jaedon", // Add your last name here if you'd like
    role: "Software Engineer",
    tagline: "Architecting scalable web applications and designing immersive digital experiences.",
    about: "I'm a passionate software engineer focused on building robust, intuitive, and dynamic user experiences. With a strong foundation in modern web technologies, I bridge the gap between seamless front-end interfaces and efficient back-end architectures. When I'm not writing code, I'm exploring new tech stacks or optimizing my current workflows.",
    email: "jaedon@example.com", // Replace with your email
    github: "https://github.com", // Replace with your GitHub
    linkedin: "https://linkedin.com", // Replace with your LinkedIn
  };

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "REST APIs"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] }
  ];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      description: "A comprehensive financial visualization tool providing real-time market data, portfolio tracking, and predictive analytics using machine learning.",
      tags: ["React", "TypeScript", "Tailwind", "Chart.js"],
      link: "#"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "A full-stack application leveraging OpenAI's API to help creators generate optimized blog posts, social media captions, and marketing copy.",
      tags: ["Next.js", "Node.js", "OpenAI", "MongoDB"],
      link: "#"
    },
    {
      id: 3,
      title: "DevConnect Platform",
      description: "A social network specifically designed for developers to share code snippets, collaborate on open-source projects, and find mentorship.",
      tags: ["React", "Firebase", "Express", "WebSockets"],
      link: "#"
    }
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = ['home', 'about', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <Terminal className="text-indigo-500" size={24} />
            {jaedonData.firstName}<span className="text-indigo-500">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['home', 'about', 'projects'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`capitalize transition-colors hover:text-indigo-400 ${
                  activeSection === item ? 'text-indigo-500' : 'text-slate-400'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 text-sm font-medium"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-12">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{jaedonData.firstName}</span>.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-500 mb-8 max-w-4xl">
            {jaedonData.role}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            {jaedonData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Briefcase size={20} />
              View My Work
            </a>
            <a 
              href={jaedonData.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-900 text-slate-300 border border-slate-800 px-8 py-4 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </section>

        {/* About & Skills Section */}
        <section id="about" className="py-24 border-t border-slate-800/50">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <User size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">About Me</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                {jaedonData.about}
              </p>
              <div className="flex gap-4">
                <a href={jaedonData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href={jaedonData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Github size={28} />
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Code2 size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">Technical Arsenal</h3>
              </div>
              <div className="space-y-8">
                {skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="text-slate-200 font-semibold mb-4 text-lg">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, index) => (
                         <span 
                          key={index} 
                          className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-slate-800/50">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
              <Briefcase size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h4>
                    <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h4>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. Let's build something amazing together.
          </p>
          <a 
            href={`mailto:${jaedonData.email}`}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
          
          <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm flex items-center gap-1">
              Designed & Built by <span className="text-slate-300 font-medium">{jaedonData.fullName}</span>
            </div>
            <div className="flex gap-6">
              <a href={jaedonData.github} className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href={jaedonData.linkedin} className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;