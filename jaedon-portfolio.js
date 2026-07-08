const PROFILE = {
  firstName: "Jaedon",
  fullName: "Jaedon Jeremiel Kenaniah Munyua",
  shortName: "Jaedon Munyua",
  role: "Informatics & Computer Science Undergraduate",
  tagline:
    "I am an Informatics and Computer Science undergraduate with a strong foundation in software engineering, system design, and applied AI.",
  email: "tyejaedon@gmail.com",
  phone: "+254762181219",
  website: "https://github.com/tyejaedon/",
  github: "https://github.com/tyejaedon/",
  university: "Strathmore University",
  degree: "Bachelor of Informatics and Computer Science (BICS)",
  year: "Undergraduate",
  location: "Nairobi, Kenya",
};

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "systems", label: "Systems" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

const TECH_STACK = [
  {
    category: "Languages",
    items: [
      "Kotlin (Jetpack Compose)",
      "Python",
      "Java",
      "C++",
      "JavaScript (React, Vite)",
      "Assembly (8085)",
      "HTML/CSS",
    ],
  },
  {
    category: "Web & Mobile",
    items: ["React", "Node.js", "Express", "Tailwind CSS", "Material UI", "Android Studio"],
  },
  {
    category: "Data & Backend",
    items: ["Firebase", "MySQL", "MongoDB (Mongoose)", "MERN Stack"],
  },
  {
    category: "Systems & AI",
    items: ["Linux", "DNS", "Cryptography (AES, RSA)", "Markov Chains", "HCI (Double Diamond)"],
  },
];

const PROJECTS = [
  {
    title: "Web Developer & Learning Support",
    subtitle: "Cherish Watoto Center · Feb 2025 - Mar 2025",
    description:
      "Designed and deployed a responsive React-based website for the Change Mtaa Initiative and delivered interactive learning activities for Grade One students to strengthen communication skills.",
    tags: ["React", "Education", "Community Impact", "Web Development"],
  },
  {
    title: "Production Switcher",
    subtitle: "Journey Church, Newark, DE · 2022",
    description:
      "Operated live video switching systems for weekly audiences exceeding 1,000 viewers and optimized live-stream reliability and viewer engagement.",
    tags: ["Broadcast Systems", "Live Streaming", "Operations"],
  },
  {
    title: "Financial Interoperability Research",
    subtitle: "Strathmore University · Oct 2025 - Present",
    description:
      "Researching ISO 20022 as a bridge between cryptocurrency and traditional financial systems.",
    tags: ["ISO 20022", "FinTech", "Research", "Interoperability"],
  },
  {
    title: "Web-Based Waste Management System",
    subtitle: "Academic Project · 2025",
    description:
      "Built a MERN-stack platform for urban waste logistics using MongoDB aggregation pipelines.",
    tags: ["MERN", "MongoDB", "Logistics", "Full Stack"],
  },
  {
    title: "Operations Research & AI",
    subtitle: "Academic Focus · 2025",
    description:
      "Applied Markov Chains and input-output models to optimize operational workflows.",
    tags: ["Markov Chains", "Operations Research", "AI"],
  },
];

const SYSTEM_BLOCKS = [
  {
    title: "Cloud & Deployment",
    items: ["Google Cloud Platform", "Supabase", "Namecheap DNS", "GitHub CI/CD", "Self-managed hosting"],
  },
  {
    title: "Security & Low-Level",
    items: ["UFW & iptables hardening", "RSA / AES cryptography", "8086 Assembly language", "Server security audits"],
  },
  {
    title: "Machine Learning",
    items: ["Kaggle datasets", "NLP pipelines", "TF-IDF vectorization", "Gaussian Mixture Models"],
  },
  {
    title: "Blockchain & IoT",
    items: ["The Hashgraph Association cert", "ESP32 microcontrollers", "Environmental sensors", "Edge-to-cloud pipelines"],
  },
];

const HARDWARE = [
  { label: "Galaxy Z Flip 5", detail: "SM-F731N · CSC flashed" },
  { label: "Galaxy S22", detail: "SM-S901U · US model" },
  { label: "Galaxy Watch 4", detail: "Daily wearable" },
  { label: "ItemSpaceBuds Z ANC", detail: "Audiophile earbuds" },
  { label: "HP 245 G9 Notebook", detail: "Primary dev machine" },
];

const LIFESTYLE_TABS = [
  {
    id: "audio",
    label: "Audiophile",
    content:
      "Curates a local library of high-fidelity 16-bit and 24-bit FLAC files. Explores digital signal processing (DSP) to elevate TigerPlayer playback quality.",
    highlights: ["FLAC 16/24-bit", "DSP Pipelines", "TigerPlayer", "Local Library Curation"],
  },
  {
    id: "gaming",
    label: "Gaming",
    content:
      "Plays on PS4 and mobile, from soul-crushing boss fights to open-world epics, across both AAA and casual titles.",
    highlights: ["Dark Souls 3", "Horizon Zero Dawn", "God of War Ragnarok", "Assassin's Creed", "Batman", "Subway Surfers City"],
  },
  {
    id: "fitness",
    label: "Fitness",
    content:
      "Structured push and pull weight training routines tracked via Alpha Progression, with consistent progress at Smart Gyms.",
    highlights: ["Push / Pull Split", "Alpha Progression", "Smart Gyms", "Junction Mall"],
  },
  {
    id: "mind",
    label: "Organize",
    content:
      "Uses mymind.com to capture and organize digital inspiration while exploring property development opportunities around Nairobi.",
    highlights: ["mymind.com", "Digital Curation", "Property Development", "Nairobi"],
  },
];

const app = document.getElementById("app");
let activeStack = 0;
let activeLife = "audio";

function chips(items) {
  return items.map((x) => `<span class="chip">${x}</span>`).join("");
}

function sectionHeader(label, title, subtitle) {
  return `
    <div class="section-head">
      <div class="label">${label}</div>
      <h2 class="font-display">${title}</h2>
      <p class="muted">${subtitle}</p>
    </div>
  `;
}

function render() {
  const stack = TECH_STACK[activeStack];
  const life = LIFESTYLE_TABS.find((x) => x.id === activeLife) || LIFESTYLE_TABS[0];

  app.innerHTML = `
    <nav>
      <div class="container nav-wrap">
        <a class="brand" href="#home">${PROFILE.firstName}<span class="dot">.</span></a>
        <div class="nav-links">
          ${NAV_ITEMS.map((n) => `<a href="#${n.id}" data-nav="${n.id}">${n.label}</a>`).join("")}
        </div>
      </div>
    </nav>

    <main class="container">
      <section id="home" class="section hero">
        <div>
          <div class="badge"><span class="pulse"></span> Available for collaboration · Nairobi</div>
          <h1 class="font-display">${PROFILE.firstName} <span style="color: var(--gold)">Munyua</span></h1>
          <p class="hero-role font-display">${PROFILE.role}</p>
          <p class="hero-tagline">${PROFILE.tagline}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects"><i data-lucide="arrow-right"></i> View Projects</a>
            <a class="btn" href="${PROFILE.github}" target="_blank" rel="noreferrer"><i data-lucide="github"></i> GitHub</a>
          </div>
        </div>
        <div>
          <div class="glass card">
            <small class="muted">Currently</small>
            <h3 class="font-display" style="margin: 8px 0 6px">Financial Interoperability Research</h3>
            <p class="muted" style="margin:0">ISO 20022 · Crypto ↔ Traditional Finance</p>
          </div>
          <div class="stats">
            <div class="glass stat"><small>Education</small>${PROFILE.degree}</div>
            <div class="glass stat"><small>Focus</small>Applied AI & Systems</div>
            <div class="glass stat"><small>Based in</small>${PROFILE.location}</div>
            <div class="glass stat"><small>Research</small>ISO 20022 Interoperability</div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <section id="about" class="section">
        ${sectionHeader("Profile", "The Digital Ecosystem", "Academic rigor, hands-on engineering skills, and a community-centered approach to digital transformation.")}
        <div class="about-grid">
          <article class="glass card">
            <h3 class="font-display">${PROFILE.fullName}</h3>
            <p class="muted">I am an Informatics and Computer Science undergraduate with a strong foundation in software engineering, system design, and applied AI. My experience encompasses full-stack development for non-profit initiatives and research on interoperability between cryptocurrencies and traditional financial systems.</p>
            <p class="muted">I embody academic rigor, hands-on engineering skills, and a focus on community-centered digital transformation.</p>
            <div class="chips">${chips([PROFILE.degree, PROFILE.university, "Software Engineering", "Applied AI", "System Design"])}</div>
          </article>
          <aside class="glass card">
            <p><strong>Education:</strong> ${PROFILE.degree} · ${PROFILE.university}</p>
            <p><strong>Location:</strong> ${PROFILE.location}</p>
            <p><strong>Research:</strong> ISO 20022 · Crypto & Traditional Finance</p>
            <p><strong>Community Work:</strong> Change Mtaa Initiative · Learning Support</p>
          </aside>
        </div>
      </section>

      <div class="section-divider"></div>

      <section id="stack" class="section">
        ${sectionHeader("Dev & Tech", "Technical Arsenal", "From web and mobile engineering to systems, data, and applied AI.")}
        <div class="stack-layout">
          <div class="stack-tabs">
            ${TECH_STACK.map((group, i) => `<button class="stack-tab ${i === activeStack ? "active" : ""}" data-stack="${i}">${group.category}</button>`).join("")}
          </div>
          <article class="glass card">
            <h3 class="font-display" style="margin-top:0">${stack.category}</h3>
            <div class="skills">${chips(stack.items)}</div>
          </article>
        </div>
      </section>

      <div class="section-divider"></div>

      <section id="projects" class="section">
        ${sectionHeader("Work Experience & Projects", "Projects That Ship", "Full-stack implementations, systems operations, and finance interoperability research.")}
        <div class="projects-grid">
          ${PROJECTS.map((p) => `
            <article class="glass card project">
              <div class="project-sub">${p.subtitle}</div>
              <h3 class="font-display">${p.title}</h3>
              <p>${p.description}</p>
              <div class="project-tags">${chips(p.tags)}</div>
            </article>
          `).join("")}
        </div>
      </section>

      <div class="section-divider"></div>

      <section id="systems" class="section">
        ${sectionHeader("Infrastructure", "Systems, Security & Emerging Tech", "Lower-level engineering meets cutting-edge exploration.")}
        <div class="systems-grid">
          ${SYSTEM_BLOCKS.map((b) => `
            <article class="glass card">
              <h3 class="font-display">${b.title}</h3>
              <ul class="muted">
                ${b.items.map((i) => `<li style="margin-bottom:6px">${i}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
        <article class="glass card" style="margin-top:12px">
          <h3 class="font-display" style="margin-top:0">Hardware & Gear</h3>
          <div class="hardware-grid">
            ${HARDWARE.map((h) => `<div class="glass card"><strong>${h.label}</strong><br><span class="muted">${h.detail}</span></div>`).join("")}
          </div>
          <p class="muted" style="margin-top:10px">CSC files flashed manually - zero bloatware tolerance.</p>
        </article>
      </section>

      <div class="section-divider"></div>

      <section id="life" class="section">
        ${sectionHeader("Beyond Code", "Life & Interests", "Audiophile, gamer, lifter, and organizer - the human behind the terminal.")}
        <div class="life-tabs">
          ${LIFESTYLE_TABS.map((tab) => `<button class="life-tab ${tab.id === activeLife ? "active" : ""}" data-life="${tab.id}">${tab.label}</button>`).join("")}
        </div>
        <article class="glass card">
          <h3 class="font-display" style="margin-top:0">${life.label}</h3>
          <p class="muted">${life.content}</p>
          <div class="chips">${chips(life.highlights)}</div>
        </article>
      </section>
    </main>

    <footer id="contact" class="section">
      <div class="container">
        <article class="glass footer-cta">
          ${sectionHeader("Contact", "Let's build something extraordinary", "Contact me for collaboration in software engineering, system design, applied AI, and impact-driven technology projects.")}
          <div class="contact-buttons">
            <a class="btn btn-primary" href="mailto:${PROFILE.email}"><i data-lucide="mail"></i> ${PROFILE.email}</a>
            <a class="btn" href="tel:${PROFILE.phone}"><i data-lucide="smartphone"></i> ${PROFILE.phone}</a>
            <a class="btn" href="${PROFILE.website}" target="_blank" rel="noreferrer"><i data-lucide="github"></i> Website</a>
          </div>
        </article>
        <p class="footer-note">Designed & built by ${PROFILE.shortName} · ${PROFILE.university} · ${PROFILE.year} · BICS</p>
      </div>
    </footer>
  `;

  bindEvents();
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function bindEvents() {
  document.querySelectorAll("[data-stack]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeStack = Number(btn.getAttribute("data-stack")) || 0;
      render();
    });
  });

  document.querySelectorAll("[data-life]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeLife = btn.getAttribute("data-life") || "audio";
      render();
    });
  });

  const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("data-nav") === id);
        });
      });
    },
    { threshold: 0.55 }
  );
  sections.forEach((sec) => observer.observe(sec));
}

render();
