import { motion } from "framer-motion";

const animasi = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Transition  = ({children} : {children: any}) => {
    return (
        <motion.div
            variants={animasi}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default Transition; 