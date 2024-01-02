
import "./Projects.css";
import React, { useEffect } from "react";
import JavaLogo from "../assets/Logo-lang/j-s.svg";
import dis from "../assets/Logo-lang/dis.png";
import react from "../assets/Logo-lang/react.png";
import JavaSciptLogo from "../assets/Logo-lang/1492.png";
import GoogleTrans from "../assets/Logo-lang/Google.png";

import bot from "../assets/bot.png";
import fin from "../assets/fin.png";

import { motion, useAnimation } from "framer-motion";
import { useScrollAnimation } from '../animationSettings';
import { useInView } from 'react-intersection-observer';



const Projects = () => {

    

    const { controls, ref } = useScrollAnimation();
    const projects = [
        { title: 'Discord Translation bot', 
          description: 'Within Discord servers, this Discord bot offers translation services. It can use the Google Cloud Translation API to translate text into a number of different languages.', 
          image: bot, 
          languages: [react, dis, JavaLogo, JavaSciptLogo, GoogleTrans]     
        },
        { title: 'Personal Finance App', 
        description: 'Discover our Personal Finance Management System: a secure, user-friendly platform that turns your spending data into clear, actionable visuals.  Your path to a clearer financial future starts here.', 
        image: fin, 
        languages: [react, dis, JavaLogo, JavaSciptLogo, GoogleTrans]     
    },
    { title: 'Personal Finance App', 
        description: 'Discover our Personal Finance Management System: a secure, user-friendly platform that turns your spending data into clear, actionable visuals.  Your path to a clearer financial future starts here.', 
        image: fin, 
        languages: [react, dis, JavaLogo, JavaSciptLogo, GoogleTrans]     
    },
        
        
    ];

    return(
        <>
            <div className="planet-projects-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}/>

            <div className="planet-projects-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}/>

            <motion.section id="Projects" animate={controls} ref={ref}>

                <span className="Projects-heading">Projects</span>
                
                <div className="Projects-container">
                    
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <img className="Project-img" src={project.image} alt={project.title} />
                            <div className="project-details">
                                <h2 className="Project-title">{project.title}</h2>
                                <p className="Project-description">{project.description}</p>
                            </div>
                            <div className="project-lang">
                                <div className="github-text-container">
                                    <p className="github-text">github repo →</p>
                                </div>
                                <div className="project-logo-container">
                                    {project.languages && project.languages.map((language, index) => (
                                        <img className="project-logo" key={index} src={language} alt="" />
                                    ))}
                                </div>
                            </div>      
                        </div>                    
                    ))}
                </div>
            </motion.section>
        </>
    )
};

export default Projects;