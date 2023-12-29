import React from "react";
import "./About.css";
import { motion, useAnimation  } from "framer-motion";
import portrait1 from "../assets/portrait1.jpg";

const About = () => {
    return(

        <div>
            <div className="planet-center-1"/>
            <div className="planet-center-2"/>
            <section id="About">
                
                
                
                <span className="About-title">About Me</span>
                <span className="About-subtitle">Trying to figure me out ?</span>
                

                <div className="About-details">
                    <span className="About-discrip">Driven by a passion for technology and a knack for creative problem-solving, I am currently pursuing a Bachelor's degree in Computer Science with a minor in Finance at Oregon State University. My educational journey has been a rich tapestry of diverse courses, ranging from "Integral Design Engineering and Problem Solving" to "Introduction to Computer Science," providing me with a well-rounded foundation in both technical and business-related disciplines.
                    <br/><br/>
                    Outside the work, I immerse myself in a world of hobbies that balance my academic pursuits. 📷 Photography allows me to capture the beauty of fleeting moments, while my love for traveling ✈️ takes me to new destinations, enriching my perspective of different cultures. In the kitchen, I enjoy the art of cooking 🍳, experimenting with flavors to create culinary delights. My adventurous spirit is further fueled by rock climbing 🧗, a hobby that challenges me physically and mentally, pushing my limits amidst nature's grandeur.
                    </span>
                    <motion.img 
                        src={portrait1} 
                        alt="potrait" 
                        className="About-img"
                        whileHover={{ scale: 1.1 }} // Add this line
                    />
                    
                </div>
                

            </section>
        </div>


    )
}

export default About;
