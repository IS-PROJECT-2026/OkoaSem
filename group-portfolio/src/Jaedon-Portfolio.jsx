import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Terminal, Briefcase, Code2, ExternalLink, Mail,
  MapPin, GraduationCap, Smartphone, Shield, Cpu, Music, Gamepad2,
  Dumbbell, Brain, Blocks, Database, Server, ChevronRight, Sparkles,
  Globe, Layers, Monitor
} from 'lucide-react';

const Github = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────────────────── */
const PROFILE = {
  firstName: 'Jaedon',
  fullName: 'Jaedon Jeremiel Kenaniah Munyua',
  shortName: 'Jaedon Munyua',
  role: 'Informatics & Computer Science Undergraduate',
  tagline: 'I am an Informatics and Computer Science undergraduate with a strong foundation in software engineering, system design, and applied AI.',
  email: 'tyejaedon@gmail.com',
  phone: '+254762181219',
  website: 'https://github.com/tyejaedon/',
  github: 'https://github.com/tyejaedon/',
  university: 'Strathmore University',
  degree: 'Bachelor of Informatics and Computer Science (BICS)',
  year: 'Undergraduate',
  location: 'Nairobi, Kenya',
  focus: 'Software Engineering · System Design · Applied AI',
};

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'systems', label: 'Systems' },
  { id: 'life', label: 'Life' },
  { id: 'contact', label: 'Contact' },
];

const TECH_STACK = [
  {
    category: 'Languages',
    icon: Smartphone,
    color: '#2dd4bf',
    items: ['Kotlin (Jetpack Compose)', 'Python', 'Java', 'C++', 'JavaScript (React, Vite)', 'Assembly (8085)', 'HTML/CSS'],
  },
  {
    category: 'Web & Mobile',
    icon: Code2,
    color: '#8b5cf6',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Material UI', 'Android Studio'],
  },
  {
    category: 'Data & Backend',
    icon: Database,
    color: '#d4af6a',
    items: ['Firebase', 'MySQL', 'MongoDB (Mongoose)', 'MERN Stack'],
  },
  {
    category: 'Systems & AI',
    icon: Brain,
    color: '#f472b6',
    items: ['Linux', 'DNS', 'Cryptography (AES, RSA)', 'Markov Chains', 'HCI (Double Diamond)'],
  },
];

const PROJECTS = [
  {
    id: 'cherish-watoto',
    title: 'Web Developer & Learning Support',
    subtitle: 'Cherish Watoto Center · Feb 2025 – Mar 2025',
    description: 'Designed and deployed a responsive React-based website for the Change Mtaa Initiative and delivered interactive learning activities for Grade One students to strengthen communication skills.',
    tags: ['React', 'Education', 'Community Impact', 'Web Development'],
    link: 'https://github.com/tyejaedon/',
    accent: '#2dd4bf',
    icon: Briefcase,
  },
  {
    id: 'journey-church',
    title: 'Production Switcher',
    subtitle: 'Journey Church, Newark, DE · 2022',
    description: 'Operated live video switching systems for weekly audiences exceeding 1,000 viewers and optimized live-stream reliability and viewer engagement.',
    tags: ['Broadcast Systems', 'Live Streaming', 'Operations'],
    link: 'https://github.com/tyejaedon/',
    accent: '#d4af6a',
    icon: Monitor,
  },
  {
    id: 'iso-20022-research',
    title: 'Financial Interoperability Research',
    subtitle: 'Strathmore University · Oct 2025 – Present',
    description: 'Researching ISO 20022 as a bridge between cryptocurrency and traditional financial systems.',
    tags: ['ISO 20022', 'FinTech', 'Research', 'Interoperability'],
    link: 'https://github.com/tyejaedon/',
    accent: '#8b5cf6',
    icon: Globe,
  },
  {
    id: 'waste-management',
    title: 'Web-Based Waste Management System',
    subtitle: 'Academic Project · 2025',
    description: 'Built a MERN-stack platform for urban waste logistics using MongoDB aggregation pipelines.',
    tags: ['MERN', 'MongoDB', 'Logistics', 'Full Stack'],
    link: 'https://github.com/tyejaedon/',
    accent: '#f472b6',
    icon: Database,
  },
  {
    id: 'operations-ai',
    title: 'Operations Research & AI',
    subtitle: 'Academic Focus · 2025',
    description: 'Applied Markov Chains and input-output models to optimize operational workflows.',
    tags: ['Markov Chains', 'Operations Research', 'AI'],
    link: 'https://github.com/tyejaedon/',
    accent: '#34d399',
    icon: Brain,
  },
];

const HARDWARE = [
  { label: 'Galaxy Z Flip 5', detail: 'SM-F731N · CSC flashed', icon: Smartphone },
  { label: 'Galaxy S22', detail: 'SM-S901U · US model', icon: Smartphone },
  { label: 'Galaxy Watch 4', detail: 'Daily wearable', icon: Monitor },
  { label: 'ItemSpaceBuds Z ANC', detail: 'Audiophile earbuds', icon: Music },
  { label: 'HP 245 G9 Notebook', detail: 'Primary dev machine', icon: LaptopIcon },
];

function LaptopIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"/><path d="M22 16H2"/><path d="M7 20h10"/>
    </svg>
  );
}

const LIFESTYLE_TABS = [
  {
    id: 'audio',
    label: 'Audiophile',
    icon: Music,
    content: 'Curates a local library of high-fidelity 16-bit and 24-bit FLAC files. Explores digital signal processing (DSP) to elevate TigerPlayer\'s playback quality — where engineering meets passion for sound.',
    highlights: ['FLAC 16/24-bit', 'DSP Pipelines', 'TigerPlayer', 'Local Library Curation'],
  },
  {
    id: 'gaming',
    label: 'Gaming',
    icon: Gamepad2,
    content: 'Plays on PS4 and mobile — from soul-crushing boss fights to open-world epics. A library spanning AAA titles and casual mobile hits.',
    highlights: ['Dark Souls 3', 'Horizon Zero Dawn', 'God of War Ragnarök', 'Assassin\'s Creed', 'Batman', 'Subway Surfers City'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    icon: Dumbbell,
    content: 'Structured push and pull weight training routines tracked via Alpha Progression. Trains at Smart Gyms — including the Junction Mall location — with discipline and measurable progress.',
    highlights: ['Push / Pull Split', 'Alpha Progression', 'Smart Gyms', 'Junction Mall'],
  },
  {
    id: 'mind',
    label: 'Organize',
    icon: Sparkles,
    content: 'Uses mymind.com to capture and organize digital inspiration. Explores property development opportunities around Nairobi — blending tech ambition with real-world vision.',
    highlights: ['mymind.com', 'Digital Curation', 'Property Development', 'Nairobi'],
  },
];

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Cursor Glow ────────────────────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[1] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
      style={{ background: 'radial-gradient(circle, rgba(212,175,106,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)' }}
    />
  );
}

/* ─── 3D Tilt Card ───────────────────────────────────────────────────────── */
function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 18);
    rotateX.set(-y * 18);
  }, [rotateX, rotateY]);

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`tilt-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── 3D Cube Hero ───────────────────────────────────────────────────────── */
function Cube3D() {
  const faces = ['JK', 'Dev', '22', 'BICS', 'NBO', 'Go'];
  const faceClass = ['front', 'back', 'right', 'left', 'top', 'bottom'];

  return (
    <div className="cube-scene mx-auto lg:mx-0">
      <div className="cube">
        {faces.map((face, i) => (
          <div key={i} className={`cube-face ${faceClass[i]}`}>{face}</div>
        ))}
      </div>
    </div>
  );
}

/* ─── Section Header ─────────────────────────────────────────────────────── */
function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className="mb-14"
    >
      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-3 block">{label}</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-zinc-400 text-lg max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}

/* ─── Main Portfolio ───────────────────────────────────────────────────────── */
const JaedonPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [activeStack, setActiveStack] = useState(0);
  const [activeLifeTab, setActiveLifeTab] = useState('audio');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((n) => n.id);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: GraduationCap, label: 'Education', value: PROFILE.degree },
    { icon: Brain, label: 'Focus', value: 'Applied AI & Systems' },
    { icon: MapPin, label: 'Based in', value: PROFILE.location },
    { icon: Globe, label: 'Research', value: 'ISO 20022 Interoperability' },
  ];

  return (
    <div className="relative min-h-screen text-zinc-300 selection:bg-brand-gold/30">
      <div className="mesh-bg" />
      <div className="grid-overlay" />
      <CursorGlow />

      {/* ── Navigation ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3 glass-card border-b border-white/5 shadow-lg shadow-black/20' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="font-display text-xl font-bold text-white flex items-center gap-2 group">
            <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Terminal className="text-brand-gold" size={22} />
            </motion.span>
            {PROFILE.firstName}<span className="text-brand-gold">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'text-brand-gold' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-brand-gold/10 border border-brand-gold/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-brand-gold/10 text-brand-gold border border-brand-gold/25 hover:bg-brand-gold/20 transition-all"
            >
              <Mail size={16} />
              Contact
            </a>
            <button
              type="button"
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
              onClick={() => setMobileNavOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <Layers size={22} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/5 mt-3"
            >
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileNavOpen(false)}
                    className="px-4 py-2 text-sm rounded-full bg-white/5 text-zinc-300 hover:text-brand-gold"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Hero ── */}
        <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-400">Available for collaboration</span>
                <span className="text-brand-gold">· Nairobi</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6"
              >
                {PROFILE.firstName}{' '}
                <span className="shimmer-text">Munyua</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-2xl md:text-3xl text-zinc-500 mb-6"
              >
                {PROFILE.role}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed"
              >
                {PROFILE.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-brand-ink bg-brand-gold hover:bg-brand-gold-bright transition-all shadow-lg shadow-brand-gold/20"
                >
                  View Projects
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium glass-card text-zinc-300 hover:text-white transition-all"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center"
            >
              <div
                className="absolute w-64 h-64 rounded-full blur-[80px] opacity-40"
                style={{ background: 'radial-gradient(circle, var(--gold) 0%, var(--violet) 50%, transparent 70%)', animation: 'pulse-glow 4s ease-in-out infinite' }}
              />
              <Cube3D />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-10 glass-card rounded-2xl p-5 w-full max-w-xs text-center"
              >
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Currently</p>
                <p className="font-display font-bold text-white">Financial Interoperability Research</p>
                <p className="text-sm text-zinc-400 mt-1">ISO 20022 · Crypto ↔ Traditional Finance</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="absolute bottom-8 left-6 right-6 max-w-7xl mx-auto hidden md:grid grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-brand-gold/10">
                  <stat.icon size={18} className="text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="font-semibold text-white text-sm">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-28">
          <SectionHeader
            label="Profile"
            title="The Digital Ecosystem"
            subtitle="Academic rigor, hands-on engineering skills, and a community-centered approach to digital transformation."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <TiltCard className="glass-card rounded-3xl p-8 md:p-10 h-full">
                <div className="tilt-card-inner">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">{PROFILE.fullName}</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                    I am an Informatics and Computer Science undergraduate with a strong foundation in software engineering, system design, and applied AI.
                    My experience encompasses full-stack development for non-profit initiatives and research on interoperability between cryptocurrencies and traditional financial systems.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    I embody academic rigor, hands-on engineering skills, and a focus on community-centered digital transformation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[PROFILE.degree, PROFILE.university, 'Software Engineering', 'Applied AI', 'System Design'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-4"
            >
              {[
                { icon: GraduationCap, title: 'Education', desc: `${PROFILE.degree} · ${PROFILE.university}`, color: '#8b5cf6' },
                { icon: MapPin, title: 'Location', desc: PROFILE.location, color: '#2dd4bf' },
                { icon: Globe, title: 'Research', desc: 'ISO 20022 · Crypto & Traditional Finance', color: '#d4af6a' },
                { icon: Briefcase, title: 'Community Work', desc: 'Change Mtaa Initiative · Learning Support', color: '#f472b6' },
              ].map((card, i) => (
                <motion.div key={card.title} variants={fadeUp} custom={i}>
                  <TiltCard className="glass-card rounded-2xl p-5 flex items-start gap-4 cursor-default">
                    <div className="tilt-card-inner flex items-start gap-4 w-full">
                      <div className="p-3 rounded-xl shrink-0" style={{ background: `${card.color}15`, color: card.color }}>
                        <card.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{card.title}</h4>
                        <p className="text-sm text-zinc-400">{card.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Tech Stack ── */}
        <section id="stack" className="py-28">
          <SectionHeader
            label="Dev & Tech"
            title="Technical Arsenal"
            subtitle="From Jetpack Compose to server hardening — a stack built for production, not prototypes."
          />

          <div className="grid lg:grid-cols-12 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4 space-y-2"
            >
              {TECH_STACK.map((group, i) => (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => setActiveStack(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeStack === i
                      ? 'glass-card border-brand-gold/30 text-white'
                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/3'
                  }`}
                >
                  <group.icon size={18} style={{ color: activeStack === i ? group.color : undefined }} />
                  <span className="font-medium">{group.category}</span>
                  {activeStack === i && (
                    <motion.div layoutId="stack-indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  )}
                </button>
              ))}
            </motion.div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStack}
                  initial={{ opacity: 0, x: 30, rotateY: -8 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -30, rotateY: 8 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <TiltCard className="glass-card rounded-3xl p-8 md:p-10 min-h-[320px]">
                    <div className="tilt-card-inner">
                      <div className="flex items-center gap-3 mb-8">
                        {React.createElement(TECH_STACK[activeStack].icon, {
                          size: 28,
                          style: { color: TECH_STACK[activeStack].color },
                        })}
                        <h3 className="font-display text-2xl font-bold text-white">{TECH_STACK[activeStack].category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {TECH_STACK[activeStack].items.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium border transition-all hover:scale-105 cursor-default"
                            style={{
                              background: `${TECH_STACK[activeStack].color}10`,
                              borderColor: `${TECH_STACK[activeStack].color}30`,
                              color: TECH_STACK[activeStack].color,
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                      {activeStack === 5 && (
                        <p className="mt-8 text-sm text-zinc-500 italic">
                          Team MySQL over MariaDB. Always.
                        </p>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Projects ── */}
        <section id="projects" className="py-28">
          <SectionHeader
            label="Featured Work"
            title="Projects That Ship"
            subtitle="Open-source tools and production systems — built with Kotlin, cloud infrastructure, and real-world integrations."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map((project, i) => (
              <motion.div key={project.id} variants={fadeUp} custom={i} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <TiltCard className="glass-card rounded-3xl p-8 h-full group relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 30% 20%, ${project.accent}12 0%, transparent 60%)` }}
                  />
                  <div className="tilt-card-inner relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className="p-3 rounded-xl"
                        style={{ background: `${project.accent}15`, color: project.accent }}
                      >
                        <project.icon size={22} />
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: project.accent }}>{project.subtitle}</p>
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-grow mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* ── Systems & Emerging Tech ── */}
        <section id="systems" className="py-28">
          <SectionHeader
            label="Infrastructure"
            title="Systems, Security & Emerging Tech"
            subtitle="Lower-level engineering meets cutting-edge exploration."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Server,
                title: 'Cloud & Deployment',
                color: '#d4af6a',
                items: ['Google Cloud Platform', 'Supabase', 'Namecheap DNS', 'GitHub CI/CD', 'Self-managed hosting'],
              },
              {
                icon: Shield,
                title: 'Security & Low-Level',
                color: '#f87171',
                items: ['UFW & iptables hardening', 'RSA / AES cryptography', '8086 Assembly language', 'Server security audits'],
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                color: '#60a5fa',
                items: ['Kaggle datasets', 'NLP pipelines', 'TF-IDF vectorization', 'Gaussian Mixture Models'],
              },
              {
                icon: Blocks,
                title: 'Blockchain & IoT',
                color: '#a78bfa',
                items: ['The Hashgraph Association cert', 'ESP32 microcontrollers', 'Environmental sensors', 'Edge-to-cloud pipelines'],
              },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <TiltCard className="glass-card rounded-2xl p-7 h-full">
                  <div className="tilt-card-inner">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-lg" style={{ background: `${block.color}15`, color: block.color }}>
                        <block.icon size={20} />
                      </div>
                      <h3 className="font-display font-bold text-white">{block.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                          <ChevronRight size={14} style={{ color: block.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Hardware */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12"
          >
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu size={20} className="text-brand-gold" />
              Hardware & Gear
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {HARDWARE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card rounded-xl p-4 text-center group cursor-default"
                >
                  <item.icon size={24} className="mx-auto mb-3 text-zinc-500 group-hover:text-brand-gold transition-colors" />
                  <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.detail}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-zinc-600 mt-4 text-center">
              CSC files flashed manually — zero bloatware tolerance
            </p>
          </motion.div>
        </section>

        <div className="section-divider" />

        {/* ── Lifestyle ── */}
        <section id="life" className="py-28">
          <SectionHeader
            label="Beyond Code"
            title="Life & Interests"
            subtitle="Audiophile, gamer, lifter, and organizer — the human behind the terminal."
          />

          <div className="flex flex-wrap gap-2 mb-8">
            {LIFESTYLE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveLifeTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLifeTab === tab.id
                    ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/30'
                    : 'glass-card text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {LIFESTYLE_TABS.filter((t) => t.id === activeLifeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -8 }}
                transition={{ duration: 0.4 }}
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <TiltCard className="glass-card rounded-3xl p-8 md:p-10">
                  <div className="tilt-card-inner">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-brand-gold/10">
                        <tab.icon size={24} className="text-brand-gold" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">{tab.label}</h3>
                    </div>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-3xl">{tab.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {tab.highlights.map((h, i) => (
                        <motion.span
                          key={h}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {h}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </main>

      {/* ── Contact Footer ── */}
      <footer id="contact" className="relative z-10 mt-8">
        <div className="section-divider mb-16" />
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-violet/5 pointer-events-none" />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles size={32} className="text-brand-gold" />
              </motion.div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Let&apos;s build something{' '}
                <span className="shimmer-text">extraordinary</span>
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
                Contact me for collaboration in software engineering, system design, applied AI, and impact-driven technology projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-brand-ink bg-brand-gold hover:bg-brand-gold-bright transition-all shadow-lg shadow-brand-gold/20"
                >
                  <Mail size={18} />
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium glass-card text-zinc-300 hover:text-white transition-all"
                >
                  <Smartphone size={18} />
                  {PROFILE.phone}
                </a>
                <a
                  href={PROFILE.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium glass-card text-zinc-300 hover:text-white transition-all"
                >
                  <Github size={18} />
                  Website
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
            <p>
              Designed & built by{' '}
              <span className="text-zinc-400 font-medium">{PROFILE.shortName}</span>
            </p>
            <p className="font-display text-zinc-700">
              {PROFILE.university} · {PROFILE.year} · BICS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JaedonPortfolio;
