"use client";

import { useState } from "react";
import {
    ArrowDown,
    ArrowUpRight,
    Braces,
    Code2,
    ExternalLink,
    Github,
    Layers3,
    Mail,
    Menu,
    MonitorSmartphone,
    Sparkles,
    X,
} from "lucide-react";
import {
    experience,
    profile,
    projects,
    skillGroups,
} from "../data/portfolio";

const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
];

function ProjectVisual({ project }) {
    const styles = {
        rose: "project-visual rose",
        indigo: "project-visual indigo",
        emerald: "project-visual emerald",
        blue: "project-visual blue",
    };

    return (
        <div className={styles[project.accent]}>
            <div className="browser-bar">
                <span />
                <span />
                <span />
                <div className="browser-address" />
            </div>

            {project.accent === "rose" && (
                <div className="bakery-ui">
                    <div className="mini-brand">VELVETY</div>
                    <div className="cupcake-stage">
                        <div className="cupcake">
                            <div className="frosting" />
                            <div className="cake" />
                        </div>
                        <div>
                            <p>Handmade treats</p>
                            <strong>Made a little sweeter.</strong>
                            <div className="mini-button" />
                        </div>
                    </div>
                </div>
            )}

            {(project.accent === "indigo" || project.accent === "blue") && (
                <div className="dashboard-ui">
                    <div className="side-rail">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="dashboard-main">
                        <div className="dash-title" />
                        <div className="dash-cards">
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className="dash-table">
                            <i />
                            <i />
                            <i />
                            <i />
                        </div>
                    </div>
                </div>
            )}

            {project.accent === "emerald" && (
                <div className="github-ui">
                    <div className="search-line">
                        <span>github username</span>
                        <i>Search</i>
                    </div>
                    <div className="github-profile">
                        <div className="avatar-placeholder">A</div>
                        <div>
                            <strong>Areeba</strong>
                            <span>@AdaBugHunter</span>
                            <div className="profile-lines">
                                <i />
                                <i />
                            </div>
                        </div>
                    </div>
                    <div className="repo-lines">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            )}
        </div>
    );
}

function SectionHeading({ eyebrow, title, copy }) {
    return (
        <div className="section-heading">
            <p>{eyebrow}</p>
            <h2>{title}</h2>
            {copy && <span>{copy}</span>}
        </div>
    );
}

export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="site-header">
                <div className="nav-shell">
                    <a className="brand" href="#top" aria-label="Areeba home">
                        A<span>/</span>
                    </a>

                    <nav className="desktop-nav" aria-label="Main navigation">
                        {navItems.map(([label, href]) => (
                            <a key={href} href={href}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    <a className="header-cta" href={`mailto:${profile.email}`}>
                        Let&apos;s talk
                        <ArrowUpRight size={15} />
                    </a>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setMenuOpen((current) => !current)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {menuOpen && (
                    <nav className="mobile-nav" aria-label="Mobile navigation">
                        {navItems.map(([label, href]) => (
                            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                                {label}
                            </a>
                        ))}
                    </nav>
                )}
            </header>

            <main id="top">
                <section className="hero section-shell">
                    <div className="hero-copy">
                        <div className="availability">
                            <span />
                            Open to Frontend Developer opportunities
                        </div>

                        <p className="hero-kicker">FRONTEND DEVELOPER · REACT · NEXT.JS</p>

                        <h1>
                            Building interfaces that feel
                            <em> clear, modern & useful.</em>
                        </h1>

                        <p className="hero-text">{profile.intro}</p>

                        <div className="hero-actions">
                            <a className="primary-button" href="#projects">
                                View my work
                                <ArrowDown size={16} />
                            </a>
                            <a
                                className="secondary-button"
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github size={17} />
                                GitHub
                            </a>
                        </div>

                        <div className="hero-tech">
                            <span>React</span>
                            <span>Next.js</span>
                            <span>JavaScript</span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="hero-art" aria-hidden="true">
                        <div className="art-grid" />
                        <div className="code-window">
                            <div className="code-top">
                                <div>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <small>frontend.jsx</small>
                            </div>
                            <div className="code-body">
                                <p>
                                    <i>01</i>
                                    <span className="purple">const</span> developer = {"{"}
                                </p>
                                <p>
                                    <i>02</i>
                                    <span className="indent">name:</span>{" "}
                                    <span className="pink">&quot;Areeba&quot;</span>,
                                </p>
                                <p>
                                    <i>03</i>
                                    <span className="indent">focus:</span> [
                                </p>
                                <p>
                                    <i>04</i>
                                    <span className="double-indent pink">&quot;React&quot;</span>,
                                </p>
                                <p>
                                    <i>05</i>
                                    <span className="double-indent pink">&quot;Next.js&quot;</span>,
                                </p>
                                <p>
                                    <i>06</i>
                                    <span className="double-indent pink">
                                        &quot;Responsive UI&quot;
                                    </span>
                                </p>
                                <p>
                                    <i>07</i>
                                    <span className="indent">]</span>
                                </p>
                                <p>
                                    <i>08</i>
                                    {"}"};
                                </p>
                            </div>
                        </div>

                        <div className="floating-card card-one">
                            <MonitorSmartphone size={19} />
                            <div>
                                <strong>Responsive</strong>
                                <span>Desktop → Mobile</span>
                            </div>
                        </div>

                        <div className="floating-card card-two">
                            <Sparkles size={18} />
                            <div>
                                <strong>UI focused</strong>
                                <span>Clean & polished</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="intro-strip">
                    <div className="section-shell strip-grid">
                        <div>
                            <strong>04</strong>
                            <span>Featured projects</span>
                        </div>
                        <div>
                            <strong>React</strong>
                            <span>Component-based UI</span>
                        </div>
                        <div>
                            <strong>Next.js</strong>
                            <span>Modern frontend stack</span>
                        </div>
                        <div>
                            <strong>Git</strong>
                            <span>Version-controlled work</span>
                        </div>
                    </div>
                </section>

                <section className="section section-shell about-grid" id="about">
                    <SectionHeading eyebrow="01 · ABOUT" title="Frontend with intention." />

                    <div className="about-copy">
                        <p className="large-copy">{profile.about}</p>
                        <p>
                            I care about the details that make an interface feel professional, 
                            including spacing, visual hierarchy, 
                            responsive behavior, clear states, 
                            and intuitive interactions.
                        </p>

                        <div className="principles">
                            <div>
                                <Code2 size={18} />
                                <strong>Clean implementation</strong>
                                <span>Readable components and practical JavaScript.</span>
                            </div>
                            <div>
                                <MonitorSmartphone size={18} />
                                <strong>Responsive by default</strong>
                                <span>Layouts designed to work across screen sizes.</span>
                            </div>
                            <div>
                                <Layers3 size={18} />
                                <strong>Reusable UI</strong>
                                <span>Components and patterns instead of repeated markup.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section skills-section" id="skills">
                    <div className="section-shell">
                        <SectionHeading
                            eyebrow="02 · SKILLS"
                            title="Tools I use to build for the web."
                            copy="Focused on modern frontend development rather than a long list of technologies."
                        />

                        <div className="skill-grid">
                            {skillGroups.map((group) => (
                                <article className="skill-card" key={group.title}>
                                    <div className="skill-icon">
                                        <Braces size={20} />
                                    </div>
                                    <h3>{group.title}</h3>
                                    <div className="skill-list">
                                        {group.skills.map((skill) => (
                                            <span key={skill}>{skill}</span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section section-shell experience-grid" id="experience">
                    <SectionHeading
                        eyebrow="03 · EXPERIENCE"
                        title="Frontend development experience."
                    />

                    <div>
                        {experience.map((item) => (
                            <article className="experience-card" key={item.title}>
                                <div className="experience-label">{item.type}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <ul>
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}

                    </div>
                </section>

                <section className="section projects-section" id="projects">
                    <div className="section-shell">
                        <SectionHeading
                            eyebrow="04 · SELECTED WORK"
                            title="Frontend projects built with modern web technologies."
                        />

                        <div className="project-list">
                            {projects.map((project) => (
                                <article className="project-card" key={project.title}>
                                    <ProjectVisual project={project} />

                                    <div className="project-copy">
                                        <div className="project-meta">
                                            <span>{project.number}</span>
                                            <p>{project.category}</p>
                                            {project.status && (
                                                <small className="project-status">{project.status}</small>
                                            )}
                                        </div>

                                        <h3>{project.title}</h3>
                                        <p className="project-description">{project.description}</p>

                                        <div className="project-stack">
                                            {project.stack.map((item) => (
                                                <span key={item}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="github-more">
                            <div>
                                <Github size={23} />
                                <div>
                                    <strong>Explore more work on GitHub.</strong>
                                    <span>
                                        Additional repositories and code samples are available on my GitHub profile.
                                    </span>
                                </div>
                            </div>
                            <a href={profile.github} target="_blank" rel="noreferrer">
                                Visit GitHub
                                <ExternalLink size={15} />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <div className="section-shell contact-inner">
                        <p>05 · CONTACT</p>
                        <h2>
                            Looking for a frontend developer who cares about the
                            <em> details?</em>
                        </h2>
                        <span>
                            I&apos;m open to Frontend Developer roles focused on building
                            responsive, accessible and maintainable web experiences.
                        </span>

                        <div className="contact-actions">
                            <a className="contact-primary" href={`mailto:${profile.email}`}>
                                <Mail size={18} />
                                {profile.email}
                            </a>
                            <a
                                className="contact-secondary"
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github size={18} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className="section-shell footer-inner">
                    <div>
                        <strong>Areeba</strong>
                        <span>Frontend Developer</span>
                    </div>
                    <p>Built with Next.js + Tailwind CSS.</p>
                    <a href="#top">Back to top ↑</a>
                </div>
            </footer>
        </>
    );
}
