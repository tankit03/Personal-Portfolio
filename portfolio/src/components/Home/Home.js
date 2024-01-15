import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { HeroLinksAnimation } from "../animationSettings";
import vector from "../assets/Vector.png";


const Hero = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);   
     

    const pulseAnimation = {
        scale: [1, 1.2, 1],
        transition: {
            duration: 1,
            repeat: Infinity
        }
    };

    return(
        
        
        <section id="Home">
            

           
            <motion.div className="intro-links" {...HeroLinksAnimation}>
                <div className="planet1"/>
            </motion.div>
            <motion.div className="intro-links" {...HeroLinksAnimation}>
                <div className="planet2"/>
            </motion.div>
            <motion.div className="intro-content" {...HeroLinksAnimation}>
                <span className="intro-title">Hey, this is Tanish!</span>
                <span class="intro-subtext">Aspiring in AI & Machine Learning | Computer Science Major at Oregon State University</span>
                
                <div className="intro-small">
                    <span className="intro-time"><strong>Based in Portland</strong> - {time}</span> {/* add time here */}
                    <span className="intro-status"><strong>Status</strong> - Open to Work</span>
                </div>

                <motion.img 
                src={vector} 
                alt="scroll" 
                className="intro-scroll" 
                animate={pulseAnimation}
            />
               
            </motion.div>
        </section>
    )
}

export default Hero;