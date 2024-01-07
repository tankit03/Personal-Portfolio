import emailjs from 'emailjs-com';
import "./Contact.css";

import React, {useState} from "react";
import { motion, useAnimation  } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import GitIcon from "../assets/icons/github-icon.png";
import InstaIcon from "../assets/icons/insta-icon.png";
import LinkIcon from "../assets/icons/linkedlin-icon.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_0dj2edo', 'template_8q7xb0s', { name, email, message }, 'JIClxrfQnlk1DiLOQ')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });

    setName("");
    setEmail("");
    setMessage("");
  }

  const controls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.45,
    });


    React.useEffect(() => {
        if (inView) {
            controls.start({ scale: 1, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: .7, transition: { duration: 0.5 } });
        }
    }, [controls, inView]);



  return (

    <div ref={ref}>

        <div className="planet-contact-1"/>
        <div className="planet-contact-2"/>    

        <motion.form id="Contact" onSubmit={handleSubmit} animate={controls} ref={ref}>

            <span className="contact-title">Contact Me</span>
            <div className="contact-container">
                <span className="contact-title-Iphone">Contact Me</span>
                <motion.input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name 🧐"
                  required
                  whileHover={{ scale: 1.1 }}
                />
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email 📧"
                  required
                  whileHover={{ scale: 1.1 }}
                />
                <motion.textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type here 💬"
                  required
                  whileHover={{ scale: 1.1 }}
                />

                <motion.input 
                type="submit" 
                value="Send 😁" 
                whileHover= {{ scale: 1.1 }}/> 

                  <div className="social-container">
                <motion.a href="https://www.instagram.com/tanishisolgy/" className="Insta--Button"
                whileHover={{ scale: 1.1 }}>
                <img src={InstaIcon} alt="Email" className="insta--Icon" />
                </motion.a>

                <motion.a href="https://github.com/tankit03" className="Git--Button"
                whileHover={{ scale: 1.1 }}>
                <img src={GitIcon} alt="Email" className="git--Icon" />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/tanish-hupare/" className="Git--Button"
                whileHover={{ scale: 1.1 }}>
                <img src={LinkIcon} alt="Email" className="link--Icon" />
                </motion.a>
              </div>
            </div>

            
       
        </motion.form>
    </div>
  )
};

export default Contact;