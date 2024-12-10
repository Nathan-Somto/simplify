import {features as items} from '@/constants'
import SlideUp from '@/animation/slide-up'
import StaggeredSlideUp from '@/animation/staggered-slide-up'
import { motion } from 'framer-motion'
export default function Features() {
    //const textVariant
   
    return (
        <section id="features" className="bg-secondary section-container">
            <div className='flex flex-col gap-y-8 w-full flex-1 overflow-hidden  min-[800px]:flex-row  min-[800px]:gap-x-24   '>
                <div className='overflow-hidden'>
                    <SlideUp
                        initialY={25}
                        delay={0.1}
                        duration={0.55}
                    >
                        <h2 className='max-w-[650px] w-full'>Unlock your trading potential effortlessly with Simplify.</h2>
                    </SlideUp>
                </div>
                <SlideUp
                    initialY={35}
                    delay={0.2}
                    duration={0.55}
                >

                    <p className='text-subtitle w-[90%]  max-w-[550px]'>Web design involves creating and designing websites, including layout, content, and user experience.</p>
                </SlideUp>
            </div>
            <StaggeredSlideUp
                stagger={0.23}
                renderChildren={({
                    parentVariant,
                    childVariant,
                    animate,
                    initial
                }) =>
                    <motion.div
                        variants={parentVariant}
                        initial={initial}
                        whileInView={animate}
                        className='flex gap-6 w-full min-[800px]:w-auto flex-1 min-[800px]:flex-row flex-col'>
                        {
                            items.map(item => (
                                <motion.div
                                    variants={childVariant}
                                    className='card w-full min-[800px]:w-auto flex-1' key={item.text}>
                                    <figure className='bg-secondary size-10 rounded-lg mb-6 border border-violet-200 shadow-sm p-2 grid place-items-center'>
                                        <img src={item.icon} />
                                    </figure>
                                    <h4>{item.heading}</h4>
                                    <p className='text-subtitle mt-2'>{item.text}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                }
            />
        </section>
    )
}
