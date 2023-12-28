import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const navLinksAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5, duration: 2 }
};

export const HeroLinksAnimation = {
    initial: { opacity: 0}, // Start from the left
    animate: { opacity: 1}, // Move to the set position
    transition: { delay: 0.5, duration: 2 }
};



