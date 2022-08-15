import { motion } from 'framer-motion';

const MainTitle = () => {
    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 1.2
                    }
                }
            }}
        >
            Inter-Views
        </motion.h1>
    )
}

export default MainTitle