import { testimonials as data } from '@/constants'
import SectionHeader from '@/components/section-header'
import Carousel from '@/components/carousel'
import TestimonialCard from '@/components/testimonial-card'
import SlideUp from '@/animations/slide-up'
export default function Testimonials() {
    return (
        <section id="testimonials" className="section-container bg-neutral overflow-x-hidden">
            <SectionHeader
                badge='dark'
                heading='What People are Saying'
                message='Our Customers'
                para=''
                sectionName='testimonials'
            />
            <div className='w-full h-[150%] flex flex-col gap-12'>
                <SlideUp
                    initialY={80}
                    delay={0.22}
                    duration={0.95}
                >
                    <Carousel
                        className='!h-48 overflow-hidden'
                        customData={data.slice(0, 5)}
                        columnGap={10}
                        stopOnHover
                        renderData={(item, _, onHoverStart, onHoverEnd) => (
                            <TestimonialCard
                                item={item}
                                onHoverStart={onHoverStart}
                                onHoverEnd={onHoverEnd}
                            />
                        )}
                    />
                </SlideUp>
                <SlideUp
                    initialY={80}
                    delay={0.32}
                    duration={0.95}
                >
                    <Carousel
                        className='!h-48 overflow-hidden'
                        customData={data.slice(5)}
                        columnGap={10}
                        stopOnHover
                        direction='right'
                        renderData={(item, _, onHoverStart, onHoverEnd) => (
                            <TestimonialCard
                                item={item}
                                onHoverStart={onHoverStart}
                                onHoverEnd={onHoverEnd}
                            />
                        )}
                    />
                </SlideUp>
            </div>
        </section>
    )
}
