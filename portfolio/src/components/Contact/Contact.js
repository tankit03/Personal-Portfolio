


import emailjs from 'emailjs-com';
import "./Contact.css";

import React, {useState, useEffect} from "react";
import { motion, useAnimation  } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
            controls.start({ scale: 1.1, transition: { duration: 0.5 } });
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

                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name 🧐" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email 📧" required />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type here 💬" required />

                <input type="submit" value="Send 😁" />
                
            </div>
       
        </motion.form>
    </div>
  )
};

export default Contact;