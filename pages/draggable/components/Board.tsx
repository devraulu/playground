import { motion } from 'motion/react';
import React, { useRef } from 'react';

export default function Board() {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            className='relative h-[calc(100svh_*_0.99)] w-full overflow-hidden'
        >
            <motion.div
                drag
                dragConstraints={ref}
                className='text-6xl font-semibold absolute text-nowrap cursor-grab '
                dragSnapToOrigin={false}
                dragElastic={0.0}
                dragTransition={{ bounceDamping: 25, bounceStiffness: 100 }}
                dragMomentum={false}
                initial={{
                    top: '45%',
                    left: '50%',
                    translate: '-50%',
                }}
                animate={{
                    translateY: [-5, 10],
                    translateX: [-2, 3],
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        // repeatDelay: 0.4,
                        ease: 'easeInOut',
                    },
                }}
            >
                Hello, World!
            </motion.div>
        </motion.div>
    );
}
