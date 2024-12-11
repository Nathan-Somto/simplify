import SectionHeader from '@/components/section-header'
import PricingCard from '@/components/pricing-card'
import { pricing as data } from '@/constants'
import { motion } from 'framer-motion'
import StaggeredSlideUp from '@/animations/staggered-slide-up'
export default function Pricing() {
    return (
        <section id="pricing" className='section-container'>
            <SectionHeader
                badge='dark'
                message='Simple pricing'
                heading='Unlock Your Growth'
                para='From creative design to technical solutions, our services define industry excellence.'
                sectionName='pricing'
            />
            <StaggeredSlideUp
                stagger={0.213}
                delay={0.2}

                renderChildren={({ parentVariant, childVariant, animate, initial }) => (
                    <motion.div
                        variants={parentVariant}
                        initial={initial}
                        whileInView={animate}
                        viewport={{ once: true }}
                        className='grid lg:grid-cols-3 gap-5'>
                        {
                            data.map((item, index) => (
                                <motion.div
                                    variants={childVariant}
                                    key={item.btnType + index}>
                                    <PricingCard
                                        badgeText={item.badgeText}
                                        badgeType={index % 2 === 0 ? 'accent' : 'dark'}
                                        btnType={item.btnType}
                                        description={item.description}
                                        features={item.features as unknown as string[]}
                                        price={item.price}
                                    />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                )}
            />
        </section>
    )
}
