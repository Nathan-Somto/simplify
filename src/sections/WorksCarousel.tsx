import Carousel from '@/components/carousel'
import React from 'react'
import { works } from '@/constants'
import Arrow from '@/assets/up-right-arrow.svg'
import { motion, AnimatePresence } from 'framer-motion'
export default function WorksCarousel() {
    const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
    return (
        <section id="works-carousel" className='flex-shrink-0 pb-24'>
            <Carousel
                columnGap={32}
                duration={30}
                images={
                    works.slice(1)
                }
                renderImage={(image, index, onHoverStart, onHoverEnd) => (
                    <div
                        onMouseEnter={() => {
                            onHoverStart();
                            setHoverIndex(index);
                        }}
                        onMouseLeave={() => {
                            onHoverEnd();
                            setHoverIndex(null);
                        }}
                        className={`min-[800px]:w-[520px] cursor-pointer w-[196px] h-[220px] min-[800px]:h-[624px] shadow-lg relative object-top rounded-lg overflow-hidden`}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className='w-full h-full object-cover'
                        />
                        <AnimatePresence>
                            {hoverIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className='absolute inset-0 flex items-center justify-center bg-black/50 '>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        className='bg-secondary rounded-md size-10 grid place-items-center absolute top-6 right-2'>
                                        <motion.img

                                            src={Arrow}
                                            alt='up right arrow'
                                            className='size-7'
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            />
        </section>
    )
}
