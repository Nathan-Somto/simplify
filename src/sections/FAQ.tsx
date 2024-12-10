import StaggeredSlideUp from '@/animation/staggered-slide-up'
import SectionHeader from '@/components/section-header'
import { faqs } from '@/constants'
import { motion } from 'framer-motion'
export default function FAQ() {
    return (
        <section id="faqs" className="section-container">
            <SectionHeader
                heading='Explore Our FAQs'
                message=''
                badge='none'
                para='Find quick answers to commonly asked questions about Landify. Have a question not listed?'
                sectionName='faqs'
            />
            <StaggeredSlideUp
                duration={0.7}
                stagger={0.2}
                easing={[0.68, -0.6, 0.32, 1.6]}
                renderChildren={({ parentVariant, animate, childVariant, initial }) =>
                (
                    <motion.div
                        variants={parentVariant}
                        initial={initial}
                        whileInView={animate}
                        className='grid min-[800px]:grid-cols-3 gap-8 item-center'>
                        {faqs.map(item => (
                            <motion.div key={item.heading}
                                variants={childVariant}
                            >
                                <h4 className='text-base mb-2'>{item.heading}</h4>
                                <p className='text-subtitle text-sm max-w-[520px]'>{item.para}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )
                }
            />
        </section>
    )
}
