import SectionHeader from '@/components/section-header'
import { works } from '@/constants'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Arrow from '@/assets/up-right-arrow.svg'
import SlideUp from '@/animations/slide-up'
export default function RecentWork() {
    const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
    return (
        <section id="works" className='section-container'>
            <SectionHeader
                message='Recent Works'
                heading='Crafting Digital Success with Simplify'
                para='From creative design to technical solutions, our services define industry excellence.'
                badge='dark'
                sectionName='recent-works'
            />
            <div className='grid sm:grid-cols-2 min-[800px]:grid-cols-4 gap-5 grid-rows-2'>
                {
                    works.map((item, index) =>
                        <SlideUp
                            key={item.src + index}
                            delay={index * 0.115}
                            initialY={75}
                            duration={1.2}
                            className={`!h-[300px] relative cursor-pointer  overflow-hidden rounded-lg 
                                ${index === 0 ?
                                    'min-[800px]:col-span-2' :
                                    index >= 1 && index <= 2
                                        ? 'col-span-1' :
                                        index >= 3 && index <= 4 ?
                                            'min-[800px]:col-span-2' :
                                            index >= 5 && index <= 8 ?
                                                'col-span-1'
                                                : 'min-[800px]:col-span-2'
                                }`}
                        >
                            <motion.figure

                                onMouseEnter={() => {
                                    setHoverIndex(index)
                                }}
                                onMouseLeave={() => {
                                    setHoverIndex(null)
                                }}
                                className='h-full w-full'
                            >
                                <img src={item.src} alt={item.alt} className='h-full w-full object-cover' />
                                <AnimatePresence>
                                    {hoverIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className='absolute inset-0 flex items-center justify-center bg-secondary/25 '>
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 20, opacity: 0 }}
                                                className='bg-secondary rounded-md size-8 grid place-items-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 '>
                                                <motion.img

                                                    src={Arrow}
                                                    alt='up right arrow'
                                                    className='size-5'
                                                />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.figure>
                        </SlideUp>
                    )
                }
            </div>
        </section>
    )
}
