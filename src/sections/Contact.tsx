import SlideUp from '@/animations/slide-up'
import { works } from '@/constants'

export default function Contact() {
    return (
        <SlideUp
            duration={0.7}
            initialY={150}
            easing={[0.12, 0, 0.39, 0]}
        >
            <section id="contact" className='section-container' >
                <div className='bg-neutral w-full px-5  tablet:!pl-0 py-2 flex-col tablet:flex-row  mx-auto rounded-[32px] tablet:min-h-80 flex tablet:items-center justify-between gap-3 tablet:gap-24'>
                    <div className='space-y-6 pr-0 tablet:pl-10 pt-10 pb-10 tablet:w-[60%]  flex-shrink-0 max-w-[550px] '>
                        <h1 className='font-medium text-4xl leading-[44px] sm:text-5xl tablet:text-6xl sm:leading-[56px]  tablet:leading-[72px] '>Let’s Get to Work.</h1>
                        <p className='text-subtitle'>Subscribe to a plan to request as many designs as you’d like for one monthly fee.</p>
                        <button className='btn btn-accent'>Schedule a Call</button>
                    </div>
                    <figure className='flex-1  flex-shrink-0 self-stretch  '>
                        <img src={works[0].src} alt={works[0].alt} className='min-h-[300px]  h-full tablet:min-h-min object-center  object-cover rounded-xl grayscale' />
                    </figure>
                </div>
            </section>
        </SlideUp>
    )
}
