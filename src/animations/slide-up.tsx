// a slide up in view animation with framer motion
import { motion } from 'framer-motion';
import React from 'react'
interface Props {
    children: React.ReactNode
    duration?: number
    delay?: number
    easing?: number[]
    initialY?: number
    initialOpacity?: number
    className?: string
}
export default function SlideUp({ children, delay, duration, easing, initialY, className, initialOpacity }: Props) {
    return (
        <motion.div
            initial={{
                y: initialY || 100,
                opacity: initialOpacity || 0
            }}
            whileInView={{ 
                y: 0, 
                opacity: 1 
            }}
            transition={{
                duration: duration || 0.8,
                delay: delay || 0,
                ease: easing || [0.6, -0.05, 0.01, 0.99]
            }}
            viewport={{
                amount: 'some',
                once: true
            }}
            className={`${className ?? 'w-fit  h-fit'}`}
        >
            {children}
        </motion.div>
    )
}

