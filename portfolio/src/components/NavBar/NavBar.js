import React from "react";
import './NavBar.css';

import resume from "../assets/resume-new.pdf";
import  Logo  from "../assets/tan-logo-b.png";
import Contact from "../assets/Contact-1.png";
import { Link, scroller } from "react-scroll";
import { motion } from "framer-motion";
import { navLinksAnimation } from "../animationSettings";

const NavBar = () => {

    const scrollToElement = (elementId) => {
        setTimeout(() => {
            scroller.scrollTo(elementId, {
                duration: 1000,
                smooth: true,
                offset: -120, // Adjust as needed
            });
        }, 1); // Adjust delay as needed
    };
    
    return (
       
        <nav className="navbar">
            
            <motion.div className="logo-anim" {...navLinksAnimation}>
            <img src={ Logo } alt="logo" className="logo" />
            </motion.div>

            <motion.div className="nav-links" {...navLinksAnimation}>
                <Link onClick={() => scrollToElement('Home')} className="linkMenuItem">Home</Link>
                <Link onClick={() => scrollToElement('About')} className="linkMenuItem">About</Link>
                <Link onClick={() => scrollToElement('Projects')} className="linkMenuItem" >Project</Link>
                <Link onClick={() => scrollToElement('Photography')} className="linkMenuItem" >Photography</Link>
                <a href={resume} target="_blank" className="linkMenuItem">Resume</a>
            </motion.div>
            <motion.div className="contact-links" {...navLinksAnimation}>
                <button onClick={() => scrollToElement('Contact')} className="Contact-btn"> <img src={ Contact } alt="Contact" className="Contact-img" />Contact Me</button>
            </motion.div>
        </nav>
        
    );
}

export default NavBar;