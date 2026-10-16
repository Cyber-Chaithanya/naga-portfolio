import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ArrowUp, Download, Github, Menu, X, MapPin, GraduationCap, Languages, Code2, GitBranch, Check, Star, Award, Mail, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalculatorVisual, PythonMark } from "@/components/portfolio-visuals";
import { profile, projects, certificates, resumeUrl } from "@/lib/portfolio";
import portraitAsset from "@/assets/naga-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Naga Chaithanya | Python Developer Portfolio" },
      { name: "description", content: "Explore the Python projects, technical skills, education, and certifications of Naga Chaithanya, a Diploma CSE student seeking software development internships." },
      { property: "og:title", content: "Naga Chaithanya | Python Developer Portfolio" },
      { property: "og:description", content: "Practical Python projects, technical skills, and the learning journey of Naga Chaithanya — Diploma CSE student, aspiring Python developer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});
const navigation = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];
const externalProps = { target: "_blank", rel: "noopener noreferrer" };

function ResumeButton({ className = "" }: { className?: string }) {
  if (resumeUrl) return <Button variant="outline" className={`resume-button ${className}`} asChild><a href={resumeUrl} download><Download/>Download Resume</a></Button>;
  return <span title="Resume PDF has not been provided yet"><Button variant="outline" className={`resume-button ${className}`} disabled aria-label="Download Resume — PDF not yet provided"><Download/>Download Resume</Button></span>;
}
function SectionLabel({ children }: { children: React.ReactNode }) { return <div className="section-label">{children}</div>; }
function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
    navigation.forEach(item => { const element = document.getElementById(item.toLowerCase()); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="wordmark" aria-label="Naga Chaithanya home"><span className="wordmark-symbol">&lt;/&gt;</span>Naga Chaithanya<span className="text-primary">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} data-active={active === item.toLowerCase()} aria-current={active === item.toLowerCase() ? "location" : undefined}>{item}</a>)}</nav>
        <div className="header-resume"><ResumeButton/></div>
        <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<ResumeButton/>{!resumeUrl && <span className="text-xs text-muted-foreground">Resume PDF pending</span>}</nav>}
    </header>
    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-grid">
          <div className="reveal">
            <div className="availability"><span className="status-dot"/>Open to internships & part-time opportunities</div>
            <p className="hero-intro">HELLO, I'M <span>NAGA CHAITHANYA</span></p>
            <h1>Building practical<br/>solutions with <span>Python.</span></h1>
            <p className="hero-description">I’m Naga Chaithanya, a Diploma Computer Science and Engineering student at Vignan University, learning through programming projects and practical problem-solving. I’m looking for Python and software development internships where I can contribute, learn, and grow.</p>
            <div className="hero-actions"><Button asChild><a href="#projects">Explore My Projects<ArrowUpRight/></a></Button><Button variant="outline" asChild><a href="#contact">Contact Me<ArrowRight/></a></Button></div>
            <a className="github-link" href={profile.github} {...externalProps}><Github size={14}/>View GitHub Profile<ArrowUpRight size={12}/></a>
          </div>
          <figure className="portrait-scene">
            <img src={portraitAsset.url} alt="Portrait of Naga Chaithanya" className="portrait-image" width={900} height={1125} />
            <figcaption className="portrait-caption"><span className="status-dot"/>{profile.name} · Vadlamudi, Andhra Pradesh</figcaption>
          </figure>
        </div>
        <div className="hero-bottom"><span><MapPin/>Vadlamudi, Andhra Pradesh, India</span><span><GraduationCap/>Diploma CSE Student · Aspiring Python Developer</span></div>
      </section>
      <section id="about" className="section"><div className="container about-grid">
        <div className="about-copy"><SectionLabel>01 / About me</SectionLabel><h2>Curiosity, turned into code.</h2><p>I’m a second-year Diploma CSE student at <strong>Vignan University</strong> with a genuine interest in Python, software development, and practical programming.</p><p>I like understanding how my code works—not just getting it to run. I’m learning by solving problems and building projects that I can explain, improve, and share. Alongside my education, I’m looking for internships and suitable part-time opportunities to learn from real projects and experienced developers.</p></div>
        <div className="about-facts"><div className="fact"><GraduationCap/><div><span>Currently studying</span><strong>Diploma CSE · 2nd Year</strong></div></div><div className="fact"><Code2/><div><span>Current focus</span><strong>Python & practical problem-solving</strong></div></div><div className="fact"><Languages/><div><span>Languages</span><strong>English & Telugu</strong></div></div><div className="fact"><Briefcase/><div><span>Looking for</span><strong>Internships & part-time opportunities</strong></div></div></div>
      </div></section>
      <section id="skills" className="section"><div className="container"><SectionLabel>02 / Technical skills</SectionLabel><h2>A focused foundation.</h2><p className="section-subtitle">The tools I’m using as I build my programming skills.</p><div className="skills-grid"><div className="skill-category"><h3>PROGRAMMING</h3><div className="skill-items"><div className="skill-item"><PythonMark/>Python</div><div className="skill-item"><span className="c-icon">C</span>C fundamentals</div></div></div><div className="skill-category"><h3>TOOLS & VERSION CONTROL</h3><div className="skill-items"><div className="skill-item"><GitBranch className="git-icon"/>Git</div><div className="skill-item"><Github/>GitHub</div></div></div></div></div></section>
      <section id="projects" className="section"><div className="container"><div className="section-heading-row"><div><SectionLabel>03 / Selected work</SectionLabel><h2>Learning by building.</h2><p className="section-subtitle">A practical project. A step forward.</p></div><a className="text-link" href={profile.github} {...externalProps}>View GitHub<ArrowUpRight size={14}/></a></div>
        {projects.map(project => <article className="project-card" key={project.name}><CalculatorVisual/><div className="project-copy"><div className="featured-label"><Star size={12}/>FEATURED PROJECT</div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><ul className="project-features">{["Arithmetic, decimals & parentheses", "Common arithmetic operators", "Division-by-zero handling"].map(feature => <li key={feature}><Check/>{feature}</li>)}</ul><div className="project-actions"><Button variant="outline" asChild><a href={project.source} {...externalProps}><Github/>View Source Code<ArrowUpRight/></a></Button><Dialog><DialogTrigger asChild><Button variant="ghost">Project Details<ArrowRight/></Button></DialogTrigger><DialogContent className="portfolio-modal"><div className="featured-label">PYTHON / GUI PROJECT</div><DialogTitle>{project.name}</DialogTitle><DialogDescription className="leading-relaxed">{project.description}</DialogDescription><p className="modal-note">Built with Python and Tkinter, this project turns arithmetic expressions into results through a graphical interface. Its source includes a tokenizer and expression parser.</p><h3 className="text-sm font-semibold">Implemented features</h3><ul className="project-features">{project.features.map(feature => <li key={feature}><Check/>{feature}</li>)}</ul><p className="modal-note">The calculator shown on this portfolio is an illustrative representation, not a screenshot of the actual application.</p><Button asChild><a href={project.source} {...externalProps}><Github/>View Source Code<ArrowUpRight/></a></Button></DialogContent></Dialog></div></div></article>)}
      </div></section>
      <section id="certifications" className="section"><div className="container"><SectionLabel>04 / Certifications & training</SectionLabel><h2>Investing in the fundamentals.</h2><p className="section-subtitle">Structured learning to support hands-on practice.</p><div className="credentials-grid">{certificates.map(certificate => <article className="credential" key={certificate.title}>{certificate.image ? <Dialog><DialogTrigger asChild><button type="button" className="credential-thumb" aria-label={`View certificate: ${certificate.title} — ${certificate.provider}`}><img src={certificate.image.url} alt={certificate.image.alt} loading="lazy" width={1754} height={1241} /><span className="credential-thumb-label">View certificate<ArrowUpRight size={11}/></span></button></DialogTrigger><DialogContent className="certificate-modal"><div className="featured-label">CERTIFICATE</div><DialogTitle>{certificate.title}</DialogTitle><DialogDescription>{certificate.provider} · {certificate.result.join(" · ")}{certificate.session ? ` · ${certificate.session}` : ""}</DialogDescription><img src={certificate.image.url} alt={certificate.image.alt} /></DialogContent></Dialog> : <div className="credential-icon"><Award/></div>}<div className="credential-body"><p className="credential-provider">{certificate.provider}</p><h3>{certificate.title}</h3><p className="credential-result">{certificate.elite ? <><span className="elite">{certificate.result[0]}</span><span>·</span><span>{certificate.result[1]}</span></> : certificate.result.join(" · ")}</p>{certificate.session && <p className="credential-session">{certificate.session}</p>}</div></article>)}</div></div></section>
      <section id="education" className="section"><div className="container education-grid"><div><SectionLabel>05 / Education</SectionLabel><h2>Where it all starts.</h2><div className="education-detail"><GraduationCap/><div><h3>Diploma in Computer Science and Engineering</h3><p>Vignan University<br/>Vadlamudi, Andhra Pradesh, India</p><div className="education-meta"><span>Expected completion: <strong>2028</strong></span><span>Academic score: <strong>89.50%</strong></span></div></div></div></div><div className="campus"><SectionLabel>Campus involvement</SectionLabel><h3>Prompt Engineering Coordinator</h3><p>College campus responsibility — recognized with a Certificate of Appreciation at Agentic AI Day 2026, 29 August 2026.</p></div></div></section>
      <section id="opportunities" className="section opportunity-band"><div className="container opportunity-grid"><div><SectionLabel>06 / What's next</SectionLabel><h2>Ready to learn. Ready to contribute.</h2><p className="section-subtitle">I’m currently studying and welcome opportunities compatible with my academic schedule.</p></div><ul className="opportunity-list"><li><ArrowUpRight/>Python development internships</li><li><ArrowUpRight/>Software development internships</li><li><ArrowUpRight/>Suitable part-time technical opportunities</li></ul></div></section>
      <section id="contact" className="section"><div className="container contact-grid"><div><SectionLabel>07 / Get in touch</SectionLabel><h2>Let’s start a conversation.</h2><p className="section-subtitle">Have an internship or a suitable part-time opportunity?<br/>I’d love to discuss how I can learn and contribute.</p><div className="contact-resume"><ResumeButton/>{!resumeUrl && <p className="resume-note">Resume PDF not yet available.</p>}</div></div><div className="contact-list"><a className="contact-link" href={`mailto:${profile.email}`}><Mail/><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight/></a><a className="contact-link" href={`tel:+91${profile.phone}`}><Phone/><span><small>PHONE</small><strong>{profile.phone}</strong></span><ArrowUpRight/></a><a className="contact-link" href={profile.github} {...externalProps}><Github/><span><small>GITHUB</small><strong>github.com/Cyber-Chaithanya</strong></span><ArrowUpRight/></a></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><span><span className="footer-name">Naga Chaithanya</span> · Built with curiosity & care.</span><div className="footer-right"><span>© 2026 Naga Chaithanya</span><a href="#home">Back to top<ArrowUp size={12}/></a></div></div></footer>
  </>;
}
