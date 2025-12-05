import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import {
    FaLinkedin,
    FaRegEnvelope,
    FaGithub
} from 'react-icons/fa';
import { RiMessage3Line } from "react-icons/ri";
import '../App.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">

            <div className="top-icons-section">
                <div className="icon-group">
                    <a href="mailto:YOUR_EMAIL_ADDRESS" aria-label="Send Email"><RiMessage3Line className="icon" /></a>
                    <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><FaLinkedin className="icon" /></a>
                    <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><FaGithub className="icon" /></a> {/* Corrected URL for Github */}
                    <a href="mailto:YOUR_EMAIL_ADDRESS" aria-label="Send Email"><FaRegEnvelope className="icon" /></a>
                </div>
                <div className="vertical-line"></div>
            </div>

            <div className="sidebar-footer">
                <AiOutlineCopyright className="copyright-icon" />
                <span className="copyright-text">2025</span>
            </div>
        </div>
    );
}

export default Sidebar;