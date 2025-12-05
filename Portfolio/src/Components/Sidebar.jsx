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
                    <a href="https://wa.me/94703464165" target="_blank" rel="noopener noreferrer"
                        aria-label="Send WhatsApp Message"><RiMessage3Line className="icon" /> </a>

                    <a href="https://www.linkedin.com/in/subathi-kumarasinghe/" target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"><FaLinkedin className="icon" /></a>

                    <a href="https://github.com/su-bathi3210" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub Profile"><FaGithub className="icon" /></a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ksuba3210@gmail.com"
                        aria-label="Send Email" target="_blank" rel="noopener noreferrer"><FaRegEnvelope className="icon" /></a>
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