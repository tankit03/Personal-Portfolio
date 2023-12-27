import React from "react";
import './NavBar.css';
import  Logo  from "../assets/tan-logo-b.png";
import Contact from "../assets/Contact-1.png";
import { Link } from "react-scroll";

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <img src={ Logo } alt="logo" className="logo" />
            <div className="nav-links">
                <Link className="linkMenuItem" >Home</Link>
                <Link className="linkMenuItem" >About</Link>
                <Link className="linkMenuItem" >Project</Link>
                <Link className="linkMenuItem" >Photography</Link>
            </div>
            <button className="Contact-btn">
                <img src={ Contact } alt="Contact" className="Contact-img" />Contact Me</button>
        </nav>
        
    );
}

export default NavBar;