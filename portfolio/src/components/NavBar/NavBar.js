import React, { useState } from "react";
import './NavBar.css';

import resume from "../assets/resume-new.pdf";
import Logo from "../assets/tan-logo-b.png";

import Contact from "../assets/Contact-1.png";
import sandWhichIcon from "../assets/icons/menu-icon.png";
import Close from "../assets/icons/close-icon.png";

import { Link, scroller } from "react-scroll";
import { motion } from "framer-motion";
import { navLinksAnimation } from "../animationSettings";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const scrollToElement = (elementId) => {
        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 1000,
                smooth: true,
                offset: -120, // Adjust as needed
            });
        }, 1); // Adjust delay as needed
    };

    

    const handleToggle = () => {
        setIsOpen(!isOpen);
        const navLinks = document.querySelector('.nav-links');
        if (!isOpen) {
          navLinks.classList.add('open');
        } else {
          navLinks.classList.remove('open');
        }
      };
    
    return (
       
        <nav className="navbar">
            
            <img src={Logo} alt="Logo" className="logo"  onClick={() => window.location.reload()}/>
            

            <div onClick={handleToggle} className="menu-icon">
            < img src = { sandWhichIcon} alt = "sandWhichIcon" className="SandIcon"/>
            </div>

            <motion.div className={`nav-links ${isOpen ? "open" : ""}`} {...navLinksAnimation}>
                <img src={Close} alt="Close" onClick={handleToggle} className="close-icon" />
                <Link onClick={() => {scrollToElement('Home'); handleToggle();}} className="linkMenuItem">Home</Link>
                <Link onClick={() => {scrollToElement('About'); handleToggle();}} className="linkMenuItem">About</Link>
                <Link onClick={() => {scrollToElement('Projects'); handleToggle();}} className="linkMenuItem" >Project</Link>
                <Link onClick={() => {scrollToElement('Photography'); handleToggle();}} className="linkMenuItem" >Photography</Link>
                <a href={resume} target="_blank" className="linkMenuItem">Resume</a>
                <Link onClick={() => {scrollToElement('Contact'); handleToggle();}} className="contact-LinkMenu" >Contact Me</Link>
            </motion.div>
            <motion.div className="contact-links" {...navLinksAnimation}>
                <button onClick={() => scrollToElement('Contact')} className="Contact-btn"> <img src={ Contact } alt="Contact" className="Contact-img" />Contact Me</button>
            </motion.div>
        </nav>
        
    );
}

export default NavBar;