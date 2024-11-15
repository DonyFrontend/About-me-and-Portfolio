import { Variants } from "framer-motion";

const variants: Variants = {
    hidden: {
        opacity: 0,
        translateY: 25
    },
    animate: {
        transition: {
            duration: 0.8
        }
    },
    whileInView: {
        opacity: 1,
        translateY: 0
    }
}

export default variants;