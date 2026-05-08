import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "KILIFIVET Veterinary Chatbot",
    category: "Web App",
    tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    liveLink: "https://kilifivet.onrender.com",
    description:
      "A web-based veterinary chatbot that helps livestock farmers get preliminary guidance on animal health issues by describing symptoms. It suggests possible diseases, treatment, prevention, and referral guidance.",
    highlights: [
      "English and Swahili response support",
      "Rule-based disease matching and scoring",
      "Admin dashboard for managing disease knowledge",
      "Referral support for severe cases",
    ],
  },
  
  {
    title: "Scented Serenade E-commerce App",
    category:"E-commerce",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    liveLink: "https://scented-serenade.vercel.app",
    description:
       "An interactive e-commerce web application for showcasing and selling perfume products. The project presents products in a clean online store format and allows users to browse items easily.",
    highlights: [
      "Responsive e-commerce interface",
    "Product display and shopping experience",
    "Deployed online using Vercel",
    "Clean UI suitable for a perfume brand",
    ],
  },
];

const skills = [
  { name: "Web Development",  items: ["HTML", "CSS", "JavaScript", "Flask","React"] },
  { name: "Programming",  items: ["Python", "JavaScript"] },
  { name: "Databases",  items: ["MySQL", "Relational Design"] },
  { name: "Data & ML",  items: ["Pandas", "Scikit-learn", "Jupyter", "Basic ML"] },
];

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => scrollToSection("Home")} className="text-xl font-bold tracking-tight">
            Portfolio<span className="text-cyan-400">.</span>
          </button>

          <div className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-sm text-slate-300 transition hover:text-cyan-400">
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="block w-full py-3 text-left text-slate-300">
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Software Development Student</p>
              <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
                Hi, I’m Rama. <br /> Welcome to my portfolio.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
                I am interested in web development, database systems, and machine learning. I enjoy creating useful applications such as chatbots, web apps and database-driven systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("Projects")} className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1">
                  View Projects
                </button>
                <button onClick={() => scrollToSection("Contact")} className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400">
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">About Me</p>
              <h2 className="text-4xl font-bold">A learner focused on building useful solutions.</h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-8 text-slate-300">
              <p>
                I am a Software Development student who recently completed my final semester. I have experience working with Python, Flask, MySQL, HTML, CSS and JavaScript . My main interest is developing practical web-based systems that can support users in solving everyday problems.
              </p>
              <p className="mt-5">
                I am currently building my work experience and looking for an attachment opportunity where I can learn from experienced developers, contribute to real projects, and strengthen my technical skills.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Skills</p>
          <h2 className="mb-10 text-4xl font-bold">Technologies I've work with</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {skills.map((skill) => (
              <motion.div whileHover={{ y: -8 }} key={skill.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-3xl">{skill.icon}</div>
                <h3 className="mb-4 text-xl font-bold">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-sm text-slate-300">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Projects</p>
              <h2 className="text-4xl font-bold">Selected Work</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? "bg-cyan-400 text-slate-950" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.article layout key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-400">{project.category}</span>
                  {project.liveLink ? (
  <a
    href={project.liveLink}
    target="_blank"
    rel="noreferrer"
    className="text-slate-500 transition hover:text-cyan-400"
  >
    ↗
  </a>
) : (
  <span className="text-slate-500">↗</span>
)}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
                <p className="mb-5 text-slate-300">{project.description}</p>
                <ul className="mb-5 space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 to-white/5 p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Contact</p>
            <h2 className="mb-4 text-4xl font-bold">Let’s connect</h2>
            <p className="mb-8 max-w-2xl text-slate-300">
              I am currently open to attachment opportunities, mentorship, and junior-level software development experience.
            </p>
            <div className="grid gap-4 md:grid-cols-4">
              <a href="mapingarama@gmail.com" className="rounded-2xl bg-slate-950/70 p-4 transition hover:-translate-y-1"><span className="mb-3 block text-2xl text-cyan-400"></span> Email: Mapingarama@gmail.com</a>
              <a href="tel:+254700221672" className="rounded-2xl bg-slate-950/70 p-4 transition hover:-translate-y-1"><span className="mb-3 block text-2xl text-cyan-400"></span> Phone: +254700221672</a>
              <a 
  href="https://github.com/MapingaRP" 
  target="_blank" 
  rel="noreferrer"
  className="rounded-2xl bg-slate-950/70 p-4 transition hover:-translate-y-1"
>
  <span className="mb-3 block text-2xl text-cyan-400"></span>
  GitHub: MapingaRP
</a>
<a 
  href="https://www.linkedin.com/in/rama-paul/" 
  target="_blank" 
  rel="noreferrer"
  className="rounded-2xl bg-slate-950/70 p-4 transition hover:-translate-y-1"
>
  <span className="mb-3 block text-2xl text-cyan-400"></span>
  LinkedIn: Rama Paul
</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Built with React.
      </footer>
    </div>
  );
}
