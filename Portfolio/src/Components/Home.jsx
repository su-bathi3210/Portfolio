import React, { useState } from 'react';
import './Home.css';

import Dermaluxe from '../Assets/Dermaluxe.png';
import Automotive from '../Assets/4X4.png';
import ABC from '../Assets/ABC.png';
import Aethrix from '../Assets/Aethrix.png';
import EBird from '../Assets/EBird.png';

const ProjectCard = ({ title, description, techTags, imageUrl, linkUrl, starCount }) => {
    return (
        <div className="project-entry">
            <div className="project-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>

            <div className="project-details">
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    <h3 className="project-title">{title} ↗</h3>
                </a>
                <p className="project-description">{description}</p>
                {starCount && (
                    <p className="project-stars">
                        ★ {starCount}
                    </p>
                )}

                <div className="stack-language">
                    {techTags.map((tag, index) => (
                        <span key={index} className="tech">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const [activeSection, setActiveSection] = useState("about");

    const [activeProjectType, setActiveProjectType] = useState("website");

    const allProjects = [
        {
            title: "Spotify Profile",
            description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            techTags: ["React", "Express", "Spotify API", "Heroku"],
            imageUrl: EBird,
            linkUrl: "",
            type: "webApp"
        },
        {
            title: "E-commerce Backend API",
            description: "A robust and scalable backend system for a modern e-commerce platform, handling user authentication, product management, and order processing using a microservices architecture.",
            techTags: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Docker"],
            imageUrl: Aethrix,
            linkUrl: "https://github.com/su-bathi3210/AethrixSoftware",
            type: "website"
        },
        {
            title: "Real-time Chat Application",
            description: "A full-stack application providing instant messaging functionality, supporting private and group chats, using WebSockets for live communication updates.",
            techTags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
            imageUrl: Automotive,
            linkUrl: "https://github.com/su-bathi3210/4X4-AUTOMOTIVE-SERVICE",
            type: "website"
        },
        {
            title: "Personal Portfolio Website",
            description: "The source code for this very website, built with a focus on responsive design, accessibility (WCAG), and modern UI/UX principles to showcase skills and projects.",
            techTags: ["React", "CSS3", "Framer Motion", "Vite", "Netlify"],
            imageUrl: Dermaluxe,
            linkUrl: "https://github.com/su-bathi3210/Dermaluxe",
            type: "website"
        },
        {
            title: "Image Classification Model Site",
            description: "A simple front-end website created to showcase the Image Classification model's output via a public API endpoint.",
            techTags: ["Python", "TensorFlow", "HTML", "CSS", "Flask"],
            imageUrl: ABC,
            linkUrl: "https://github.com/su-bathi3210/ABC_Restaurant",
            type: "website"
        }
    ];

    const websiteProjects = allProjects.filter(p => p.type === 'website');
    const webAppProjects = allProjects.filter(p => p.type === 'webApp');

    const renderContent = () => {
        switch (activeSection) {
            case "about":
                return (
                    <div className="about-section">
                        <p>
                            A motivated and detail-oriented Software Engineer with a strong passion for building accessible,
                            intuitive, and high-performance digital experiences. Skilled in full-stack development with expertise in Java,
                            Spring Boot, RESTful APIs, React.js, and database technologies such as MongoDB, MySQL, and SQL Server.
                            I enjoy creating clean, pixel-perfect interfaces while engineering reliable backend systems that follow industry
                            best practices.
                        </p>
                        <p>
                            I bring a strong foundation in software engineering principles, including OOP, MVC,
                            and modern architectural patterns. With a commitment to clean, maintainable code, I continuously
                            refine my skills through personal projects, research, and hands-on learning. Known for being a fast learner,
                            a collaborative team player, and a dependable problem solver, I thrive in environments that encourage innovation,
                            quality, and continuous improvement.
                        </p>
                        <p>
                            Dedicated to staying current with emerging technologies, I aim to contribute to
                            impactful projects that combine thoughtful design, performance, and seamless user experience.
                        </p>
                        <p className="download-section">
                            <button
                                className="download-btn"
                                onClick={() => {
                                    window.open("/Subathi Kumarasinghe.pdf", "_blank");
                                    const link = document.createElement("a");
                                    link.href = "/Subathi Kumarasinghe.pdf";
                                    link.download = "Subathi Kumarasinghe.pdf";
                                    link.click();
                                }}
                            >
                                View & Download CV
                            </button>
                        </p>
                    </div>
                );

            case "experience":
                return (
                    <div className="experience-section">
                        <div className="job-entry">
                            <div className="job-dates">
                                <p>Jun – Dec 2025</p>
                            </div>
                            <div className="job-details">
                                <h3 className="job-title">Software Engineering Intern - Full Time (06 Month)</h3>
                                <p className="job-role">Sri Lanka Telecom (SLT), Colombo</p>
                                <p className="job-description">
                                    Assisted in developing a Document Tracking System that improved workflow
                                    efficiency within the CEO’s office, while also contributing to the creation of internal web applications
                                    that enhanced overall operational processes. Additionally, gained hands-on exposure to industry-standard
                                    tools, technologies, and best practices used in enterprise-level software development.
                                </p>
                                <div className="tech-stack">
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">SpringBoot</span>
                                    <span className="tech-tag">Mongodb</span>
                                    <span className="tech-tag">Postman</span>
                                </div>
                            </div>
                        </div>

                        <div className="job-entry">
                            <div className="job-dates">
                                <p>Aug – Dec 2025</p>
                            </div>
                            <div className="job-details">
                                <h3 className="job-title">Software Developer - Part Time (04 Month)</h3>
                                <p className="job-role">Department Of Cooperative Development - Central Province</p>
                                <p className="job-description">
                                    Designed and developed web applications to streamline administrative processes within the
                                    government sector, while also supporting ongoing software solutions aimed at enhancing departmental
                                    efficiency and improving overall digital workflows.
                                </p>
                                <div className="tech-stack">
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">SpringBoot</span>
                                    <span className="tech-tag">Mongodb</span>
                                    <span className="tech-tag">Postman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "projects":
                const projectsToDisplay = activeProjectType === "website" ? websiteProjects : webAppProjects;

                return (
                    <div className="projects-section">
                        <div className="project-tabs">
                            <button
                                className={`project-tab ${activeProjectType === "website" ? "active-tab" : ""}`}
                                onClick={() => setActiveProjectType("website")}
                            >
                                Websites
                            </button>
                            <button
                                className={`project-tab ${activeProjectType === "webApp" ? "active-tab" : ""}`}
                                onClick={() => setActiveProjectType("webApp")}
                            >
                                Web Applications
                            </button>
                        </div>

                        {projectsToDisplay.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                techTags={project.techTags}
                                imageUrl={project.imageUrl}
                                linkUrl={project.linkUrl}
                            />
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="home-layout">
            <div className="home-main">
                <h2 className="name">Subathi Kumarasinghe</h2>
                <h4 className="role">Associate Software Engineer</h4>

                <ul className="menu">
                    <li
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => setActiveSection("about")}
                    >
                        ABOUT
                    </li>
                    <li
                        className={activeSection === "experience" ? "active" : ""}
                        onClick={() => setActiveSection("experience")}
                    >
                        EXPERIENCE
                    </li>
                    <li
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => {
                            setActiveSection("projects");
                            setActiveProjectType("website");
                        }}
                    >
                        PROJECTS
                    </li>
                </ul>
            </div>

            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Home;