import React, { useRef } from 'react';
import styles from './animations-grid.module.css';
import clsx from 'clsx';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'motion/react';

export default function AnimationsGrid() {
    const draggableContainerRef = useRef<HTMLDivElement>(null);
    const scrollableDivRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollableDivRef,
        offset: ['end start', 'end end'],
    });

    // useMotionValueEvent(scrollYProgress, 'change', latest => {
    //     console.log('page scroll:', latest);
    // });

    const clipPath = useTransform(
        scrollYProgress,
        [1, 0],
        [`inset(95% 0px 0px 0px)`, `inset(0% 0px 0px 0px)`],
    );

    return (
        <div className={styles.animationsGridContainer}>
            <motion.section
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.35,
                        },
                    },
                }}
                initial={'hidden'}
                animate={'show'}
                className={styles.animationGrid}
            >
                <GridBox>
                    <motion.div
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'circOut',
                            delay: 0.2,
                        }}
                        className='w-20 aspect-square bg-sky-500 rounded-lg'
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'circOut',
                            delay: 0.2,
                        }}
                        className='w-20 aspect-square bg-yellow-500 rounded-full'
                    ></motion.div>
                </GridBox>
                <GridBox>
                    <motion.div
                        animate={{
                            scale: [1, 2, 1.5, 1],
                            rotate: [0, 90, 45 * 3, 0],
                            borderRadius: ['0%', '10%', '50%', '5%'],
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                times: [0, 0.2, 0.8, 1],
                            },
                        }}
                        className='w-1/3 aspect-square bg-pink-600 drop-shadow-xl'
                    ></motion.div>
                </GridBox>
                <GridBox>
                    <motion.button
                        initial='initial'
                        variants={{
                            initial: {
                                color: 'var(--color-amber-50)',
                                backgroundColor: 'var(--color-gray-950)',
                                '--tw-ring-color': 'var(--color-pink-400)',
                            },
                            hovered: {
                                scale: 1.05,
                                color: [null, 'var(--color-stone-950)'],
                                backgroundColor: [
                                    null,
                                    'var(--color-amber-50)',
                                ],
                                '--tw-ring-color': [
                                    null,
                                    'hsl(from var(--color-pink-700) h s l)',
                                ],
                            },
                            tapped: { scale: 0.95 },
                        }}
                        whileTap={'tapped'}
                        whileHover={'hovered'}
                        transition={{ bounceDamping: 10, bounceStiffness: 50 }}
                        className='bg-gray-950 ring-pink-400 ring-3 text-amber-50 flex justify-center items-center rounded-full py-2.5 px-5 gap-2 text-2xl shadow-lg'
                    >
                        <motion.svg
                            variants={{
                                initial: {
                                    fill: 'var(--color-amber-300)',
                                    stroke: 'var(--color-amber-50)',
                                },
                                hovered: {
                                    rotate: [-10, 8, -8, 10, 0],
                                    fill: [
                                        'var(--color-amber-400)',
                                        'var(--color-amber-600)',
                                    ],
                                    stroke: [
                                        'var(--color-amber-200)',
                                        'var(--color-amber-400)',
                                    ],
                                    transformOrigin: 'bottom center',
                                    transition: {
                                        duration: 0.4,
                                        ease: 'easeOut',
                                    },
                                },
                            }}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='var(--color-amber-400)'
                            stroke='var(--color-amber-200)'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='lucide lucide-star'
                        >
                            <path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
                        </motion.svg>
                        yes!
                    </motion.button>
                </GridBox>
                <GridBox ref={draggableContainerRef}>
                    <motion.div
                        className='w-1/3 aspect-square rounded-lg bg-purple-800'
                        drag
                        whileDrag={{
                            scale: 1.05,
                        }}
                        dragConstraints={draggableContainerRef}
                        dragElastic={{
                            top: 0.2,
                            bottom: 0.2,
                            left: 0.1,
                            right: 0.1,
                        }}
                        dragSnapToOrigin
                        dragTransition={{
                            bounceStiffness: 700,
                            bounceDamping: 10,
                        }}
                    />
                </GridBox>
                <GridBox ref={scrollableDivRef}>
                    <div className='w-40 aspect-square bg-stone-950/70 rounded-xl'>
                        <motion.div
                            className='h-full w-full bg-stone-200 rounded-xl'
                            style={{
                                clipPath,
                            }}
                        />
                    </div>
                </GridBox>
                <GridBox></GridBox>
            </motion.section>
        </div>
    );
}

const GridBox = ({
    children,
    ref,
}: {
    children?: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement | null>;
}) => (
    <motion.div
        ref={ref}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className={clsx(styles.gridBox, 'aspect-square')}
    >
        {children}
    </motion.div>
);
