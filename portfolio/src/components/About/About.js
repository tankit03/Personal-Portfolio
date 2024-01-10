import React, {useState, useEffect} from "react";
import "./About.css";
import { motion, useAnimation  } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import portrait1 from "../assets/portrait1.jpg";
import portrait2 from "../assets/portrait2.jpg";
import portrait3 from "../assets/portrait3.jpg";

const portraits = [portrait1, portrait2, portrait3];

const About = () => {

    const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.45,
    });

    const [currentPortrait, setCurrentPortrait] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPortrait((currentPortrait + 1) % portraits.length);
        }, 3000); // Change portrait every 5 seconds
        return () => clearInterval(timer); // Clean up timer
    }, [currentPortrait]);

    React.useEffect(() => {
        if (inView) {
            controls.start({ scale: .8, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: .7, transition: { duration: 0.5 } });
        }
    }, [controls, inView]);

    return(

        <div ref={ref}>

            <motion.div className="planet-center-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}/>

            <motion.div className="planet-center-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}/>


            
                <motion.section id="About" animate={controls}>
                   
                        <span className="About-title">About Me</span>
                        
                        <div className="About-details">
                            
                            <span className="About-discrip"><strong className="About-strong">Trying to eat me out ? <br/></strong>Driven by a passion for technology and a knack for creative problem-solving, I am currently pursuing a Bachelor's degree in Computer Science with a minor in Finance at Oregon State University. My educational journey has been a rich tapestry of diverse courses, ranging from "Integral Design Engineering and Problem Solving" to "Introduction to Computer Science," providing me with a well-rounded foundation in both technical and business-related disciplines.
                            <br/><br/>
                            Outside the work, I immerse myself in a slut named janice. My world of Janice and hobbies that balance my academic pursuits. 📷 Photography allows me to capture the beauty of fleeting moments, while my love for traveling ✈️ takes me to new destinations, enriching my perspective of different cultures. In the kitchen, I enjoy the art of cooking 🍳, experimenting with flavors to create culinary delights. My adventurous spirit is further fueled by rock climbing 🧗, a hobby that challenges me physically and mentally, pushing my limits amidst nature's grandeur.
                            </span>
                            
                                <motion.img 
                                    src={portraits[currentPortrait]} 
                                    alt="potrait" 
                                    className="About-img"
                                    whileHover={{ scale: 1.05 }} // Add this line
                                />
                    </div>
                </motion.section>
           
        </div>


    )
}

export default About;
