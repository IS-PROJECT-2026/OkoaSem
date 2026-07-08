import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Briefcase, User, Cpu } from 'lucide-react';

const StevenPortfolio = () => {
  // --- STEVEN'S DATA CONFIGURATION ---
  const profileData = {
    firstName: "Steven",
    fullName: "Steven Yabann",
    role: "Systems & Machine Learning Engineer",
    tagline: "Architecting high-performance compiler infrastructure, accelerated ML pipelines, and distributed edge intelligence systems.",
    about: "I am a computer science student and Research Assistant at Strathmore University specializing in low-level software optimization and machine learning operations. From building Siamese CNNs to bypass memory-intensive bottlenecks to designing communication-efficient federated learning systems for industrial infrastructure, I thrive at the convergence of heavy backend systems and AI.",
    email: "steven.yabann@strathmore.edu",
    github: "https://github.com/Steven-Yabann", 
  };

  const skills = [
    { category: "Programming Languages", items: ["C++", "Python", "Golang", "SQL", "JavaScript", "HTML/CSS"] },
    { category: "Systems & Infrastructure", items: ["LLVM", "LLVM Enzyme", "Docker", "Git", "Postman", "Vite"] },
    { category: "Data & Machine Learning", items: ["PyTorch", "NumPy", "Pandas", "ONNX", "Matplotlib", "Power BI"] },
    { category: "Frameworks & APIs", items: ["FastAPI", "Django REST", "Node.js", "Express", "React", "Jetpack Compose"] }
  ];

  const projects = [
    {
      id: 1,
      title: "Federated Learning for Hydropower Predictive Maintenance",
      description: "Designing a communication-efficient federated learning system for KenGen's hydropower infrastructure across the Seven Forks cascade. Solves data heterogeneity and strict cybersecurity constraints using gradient compression and asynchronous aggregation on geographically isolated edge nodes.",
      tags: ["Python", "PyTorch", "MQTT", "Edge AI", "Distributed Systems"],
      link: "#"
    },
    {
      id: 2,
      title: "Accelerated Gradual Pattern Mining with Siamese CNNs",
      description: "Developed a Siamese CNN architecture in PyTorch to optimize Gradual Pattern (GP) mining. Transformed multi-variate data into spatial representations, replacing memory-intensive bitwise-AND operations and drastically cutting memory overhead on large scale data streams.",
      tags: ["PyTorch", "CNN", "Systems Optimization", "Research"],
      link: "#"
    },
    {
      id: 3,
      title: "Real-time MLOps Stream Classifier",
      description: "Built and deployed an end-to-end inference pipeline to interpret and classify live data streams. Integrated rigorous model monitoring, drift evaluation, and automated retraining triggers to maintain structural reliability over evolving data distributions.",
      tags: ["MLOps", "Model Monitoring", "Data Pipelines", "Inference Engineering"],
      link: "#"
    }
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
            {profileData.firstName}<span className="text-indigo-500">.</span>
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
              Systems & Machine Learning
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{profileData.firstName}</span>.
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-500 mb-8 max-w-4xl">
            {profileData.role}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            {profileData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Briefcase size={20} />
              Explore Engineering Projects
            </a>
            <a 
              href={profileData.github}
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
                {profileData.about}
              </p>
              <div className="flex gap-4">
                <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href={profileData.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <Github size={28} />
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Cpu size={24} />
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
              <Code2 size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
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
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
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
            Whether discussing low-level engineering optimizations, scalable inference systems, or distributed machine learning paradigms—reach out and let's optimize something beautiful.
          </p>
          <a 
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
          
          <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm flex items-center gap-1">
              Designed & Built by <span className="text-slate-300 font-medium">{profileData.fullName}</span>
            </div>
            <div className="flex gap-6">
              <a href={profileData.github} className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href={profileData.linkedin} className="text-slate-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StevenPortfolio;