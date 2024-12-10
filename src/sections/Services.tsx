import SlideUp from '@/animation/slide-up'
import UserLoop from '@/assets/user-loop.svg'
import DarkBadge from '@/components/dark-badge'
import SectionHeader from '@/components/section-header'
import { services as topCard } from '@/constants'
export default function Services() {
    return (
        <section id="services" className='section-container'>
            <SectionHeader
                message='Our Services'
                sectionName='services'
                heading='Expert Services That Define Our Excellence.'
                para='From creative design to technical solutions, our services define industry excellence.'
            />
            <div className='grid grid-cols-2 gap-7 w-full'>
                {
                    topCard.map((item, index) => (
                        <div className='card !rounded-2xl !col-span-2 tablet:!col-span-1 !p-2.5' key={item.heading + index}>
                            <SlideUp
                                duration={0.44}
                                delay={0.012 * (index + 1)}
                                easing={[0.12, 0, 0.39, 0]}
                            >
                                <figure className='h-[300px] w-full overflow-hidden rounded-lg'>
                                    <img src={item.image} className='h-full w-full object-center object-cover' />
                                </figure>
                            </SlideUp>
                            <figure className='bg-secondary shadow-md rounded-md size-12 p-2 grid place-items-center relative left-4 -top-6 z-[8]'>
                                <img src={item.icon} className='size-8 object-cover' />
                            </figure>
                            <SlideUp
                                initialY={40}
                                duration={0.45}
                                delay={0.01 * (index + 1)}
                                easing={[0.12, 0, 0.39, 0]}
                                className='px-5'
                            >
                                <h4>{item.heading}</h4>
                                <p className='text-subtitle mt-5'>{item.text}</p>
                            </SlideUp>
                            <SlideUp
                                initialY={50}
                                duration={0.5}
                                delay={0.01 * (index + 1)}
                                easing={[0.12, 0, 0.39, 0]}
                                className='px-5 pb-5 mt-5'
                            >
                                {
                                    item.perks.map(item =>
                                        <div key={item} className='flex  gap-3 mb-2 text-sm font-medium text-subtitle'>
                                            {/* Check mark Svg Embed */}
                                            <svg
                                                width={20}
                                                height={20}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256"
                                                focusable="false"
                                                color="rgb(97 97 107)"
                                                fill="rgb(97 97 107)"
                                                className='opacity-80'
                                            >
                                                <g color="rgb(97 97 107)">
                                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></g>
                                            </svg>
                                            <p>{item}</p>
                                        </div>)
                                }
                            </SlideUp>
                        </div>
                    ))
                }
                <div className='col-span-2 card grid gap-8 grid-cols-1 sm:grid-cols-[60px_1fr] sm:gap-2'>
                    <SlideUp
                        duration={0.45}
                        initialY={40}
                        delay={0.012}
                        easing={[0.12, 0, 0.39, 0]}
                    >
                        <figure className='bg-secondary shadow-md border border-gray-300 rounded-md size-12 p-2 grid place-items-center'>
                            <img src={UserLoop} alt="user loop icon" />
                        </figure>
                    </SlideUp>
                    <SlideUp
                        initialY={40}
                        duration={0.45}
                        delay={0.012}
                        easing={[0.12, 0, 0.39, 0]}
                        className='sm:px-5'
                    >
                        <DarkBadge message='5days/ week' className='mb-2.5' />
                        <h4>Our Subscription Replaces up to 3 People</h4>
                        <p className='text-subtitle my-3 max-w-[520px]'>Our company is full of skilled designers and developers specialized in different niches.</p>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}
