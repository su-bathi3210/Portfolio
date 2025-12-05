import React, { useState, useEffect } from 'react';
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

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const allProjects = [
        {
            title: "E Bird ( WorkFlow & Document Tracking)",
            description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            techTags: ["React", "MongoDb", "Java", "Postman", "SpringBoot"],
            imageUrl: EBird,
            linkUrl: "",
            type: "webApp"
        },
        {
            title: "Aethrix Software",
            description: "Founded and operate Aethrix Software, delivering tailored software solutions by understanding client requirements and providing optimal outcomes. Focused on translating client needs into high-quality, efficient applications, ensuring maximum satisfaction and impact.",
            techTags: ["React", "EmailJs", "Vite", "CSS", "MongoDb",],
            imageUrl: Aethrix,
            linkUrl: "https://github.com/su-bathi3210/AethrixSoftware",
            type: "website"
        },
        {
            title: "4X4 AutoMotive Service pvt (ltd)",
            description: "Developed an interactive web application for 4x4 Automotive Service, enabling customers to view their vehicle service details and receive cost and time estimates, improving transparency and enhancing the overall service experience.",
            techTags: ["React", "EmailJs", "Vite", "CSS", "MongoDb",],
            imageUrl: Automotive,
            linkUrl: "https://github.com/su-bathi3210/4X4-AUTOMOTIVE-SERVICE",
            type: "website"
        },
        {
            title: "Dermaluxe AI Personalized SKincare",
            description: "Developed an AI-driven platform that delivers personalized skincare product recommendations tailored to individual user profiles and preferences. Designed and implemented an interactive admin interface, enabling content management, article posting, and direct engagement with user queries to enhance the overall user experience.",
            techTags: ["React", "CSS", "python", "Mon", "java", "Postman"],
            imageUrl: Dermaluxe,
            linkUrl: "https://github.com/su-bathi3210/Dermaluxe",
            type: "website"
        },
        {
            title: "ABC Restaurant",
            description: "Developed an interactive restaurant platform that allows customers to browse the menu, place orders, manage reservations, and track their cart, enhancing customer service, streamlining operations, and driving increased bookings.",
            techTags: ["React", "MongoDb", "JAVA", "CSS", "Postman"],
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
        <>
            {showSplash && (
                <div className={`splash-screen ${!showSplash ? 'fade-out' : ''}`}>
                    <div className="splash-content">
                        <h1 className="splash-name">Subathi Kumarasinghe</h1>
                        <p className="splash-role">Associate Software Engineer</p>
                        <div className="loading-bar"></div>
                    </div>
                </div>
            )}

            <div className="home-layout animated-background">
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
        </>
    );
};

export default Home;