import React from 'react';
import { motion } from 'motion/react';

export default function DeleteButton() {
    return (
        <button className='flex items-center bg-conic-[at_50%_75%] from-sky-200/50 via-blue-400/50 to-indigo-900/50 to-90% py-1 px-4 rounded-full text-xl font-semibold '>
            Delete
            <svg
                xmlns='http://www.w3.org/2000/svg'
                id='model'
                aria-hidden='true'
                viewBox='0 0 24 24'
                width='14'
            >
                <motion.g
                    stroke='currentColor'
                    strokeWidth='1.4'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                >
                    <g className='lid'>
                        <polyline points='5,8 19,8 14,8 14,5.5 10,5.5 10,8' />
                    </g>
                    <g className='bin'>
                        <polygon points='6,9 7,20 17,20 18,9' />
                        <line x1='10' y1='17' x2='10' y2='11' />
                        <line x1='14' y1='17' x2='14' y2='11' />
                    </g>
                </motion.g>
            </svg>
        </button>
    );
}
