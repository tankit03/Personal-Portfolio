import React from "react";
import './NavBar.css';
import  Logo  from "../assets/tan-logo-b.png";
import Contact from "../assets/Contact-1.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navLinksAnimation } from "../animationSettings";

const NavBar = () => {
    
    return (
       
        <nav className="navbar">
            
            <motion.div className="logo-anim" {...navLinksAnimation}>
            <img src={ Logo } alt="logo" className="logo" />
            </motion.div>

            <motion.div className="nav-links" {...navLinksAnimation}>
                <Link className="linkMenuItem" >Home</Link>
                <Link className="linkMenuItem" >About</Link>
                <Link className="linkMenuItem" >Project</Link>
                <Link className="linkMenuItem" >Photography</Link>
            </motion.div>
            <motion.div className="contact-links" {...navLinksAnimation}>
                <button className="Contact-btn"> <img src={ Contact } alt="Contact" className="Contact-img" />Contact Me</button>
            </motion.div>
        </nav>
        
    );
}

export default NavBar;