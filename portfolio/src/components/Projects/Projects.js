import "./Projects.css";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import projects from './ProjectsData';


const Projects = () => {

    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.45,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start({ scale: .8, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: .7, transition: { duration: 0.5 } });
        }
    }, [controls, inView]);
    return(
        <>
            
            <div className="planet-projects-1"/>
            <div className="planet-projects-2"/>                        

            <motion.section id="Projects" animate={controls} ref={ref}>

                <span className="Projects-heading">Projects</span>
                
                <div className="Projects-container">
                    
                    {projects.map((project, index) => (
                        <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <motion.div className="project"
                                whileHover={{ scale: 1.05 }} 
                                transition={{ duration: 0.3 }}
                            >
                                <img className="Project-img" src={project.image} alt={project.title} />
                                <div className="project-details">
                                    <h2 className="Project-title">{project.title}</h2>
                                    <p className="Project-description">{project.description}</p>
                                </div>
                                <div className="project-lang">
                                    <div className="project-logo-container">
                                        {project.languages && project.languages.map((language, index) => (
                                            <img className="project-logo" key={index} src={language} alt="" />
                                        ))}
                                    </div>
                                </div>      
                            </motion.div>
                        </a>                    
                    ))}
                </div>
            </motion.section>
        </>
    )
};

export default Projects;