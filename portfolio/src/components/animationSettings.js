import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const navLinksAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5, duration: 5 }
};

export const HeroLinksAnimation = {
    initial: { opacity: 0}, // Start from the left
    animate: { opacity: 1}, // Move to the set position
    transition: { delay: 0.5, duration: 3 }
};

export function useScrollAnimation() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.45,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ scale: .9, transition: { duration: 0.5 } });
        } else {
            controls.start({ scale: .7, transition: { duration: 0.5 } });
        }
    }, [controls, inView]);

    return { controls, ref };
};
