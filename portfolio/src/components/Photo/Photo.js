import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import RightArrow from "../assets/right-arrow.svg";
import LeftArrow from "../assets/left-arrow.svg";
import img1 from "../assets/Photo/img1.jpg";
import img2 from "../assets/Photo/img2.jpg";
import img3 from "../assets/Photo/img3.jpg";
import img5 from "../assets/Photo/img5.jpg";
import img6 from "../assets/Photo/img6.jpg";
import img10 from "../assets/Photo/img10.jpg";
import img11 from "../assets/Photo/img11.jpg";
import img12 from "../assets/Photo/img12.jpg";  
import img13 from "../assets/Photo/img13.jpg";
import img14 from "../assets/Photo/img14.jpg";
import img15 from "../assets/Photo/img15.jpg";
import img16 from "../assets/Photo/img16.jpg";
import img17 from "../assets/Photo/img17.jpg";
import img18 from "../assets/Photo/img18.jpg";
import img19 from "../assets/Photo/img19.jpg";
import img20 from "../assets/Photo/img20.jpg";
import img21 from "../assets/Photo/img21.jpg";
import img22 from "../assets/Photo/img22.jpg";
import img23 from "../assets/Photo/img23.jpg";
import img24 from "../assets/Photo/img24.jpg";
import img25 from "../assets/Photo/img25.jpg";
import img26 from "../assets/Photo/img26.jpg";
import img27 from "../assets/Photo/img27.jpg";
import img28 from "../assets/Photo/img28.jpg";
import img29 from "../assets/Photo/img29.jpg";
import img30 from "../assets/Photo/img30.jpg";
import img31 from "../assets/Photo/img31.jpg";
import img32 from "../assets/Photo/img32.jpg";
import img33 from "../assets/Photo/img33.jpg";
import img34 from "../assets/Photo/img34.jpg";
import img35 from "../assets/Photo/img35.jpg";
import img36 from "../assets/Photo/img36.jpg";




import "./Photo.css";

const Photo = () => {

    const images = [img1, img2, img3, img5, img6, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,img31, img32, img33, img34, img35, img36 ];
    const [mainImageIndex, setMainImageIndex] = useState(0);

    

    const handleLeftClick = () => {
        if (mainImageIndex > 0) {
            setMainImageIndex(mainImageIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (mainImageIndex < images.length - 1) {
            setMainImageIndex(mainImageIndex + 1);
        }
    };

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

    return (

        <div ref={ref}>

            <div className="planet-photo-1"/>
            <div className="planet-photo-2"/>  

            <motion.section id="Photography" animate={controls} ref={ref}>

                <span className="title">Photography</span>


                <div className="gallery-container">

                    <button style={{ border: 'none', outline: 'none' }} onClick={handleLeftClick}>
                        <img src={LeftArrow} className="button-l-r" alt="Left" />
                    </button>

                    <div className="gallery">
                    <AnimatePresence mode='wait'>
                        <motion.img
                            className="main"
                            key={mainImageIndex}
                            src={images[mainImageIndex]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                    </div>
                    <button style={{ border: 'none', outline: 'none' }} onClick={handleRightClick}>
                        <img src={RightArrow} className="button-l-r" alt="Right" />
                    </button>
                </div>

            </motion.section>
        </div>
    );
}
export default Photo;