import { testimonials } from '@/constants'
interface Props {
    item: typeof testimonials[number]
    onHoverStart: () => void;
    onHoverEnd: () => void;
}
export default function TestimonialCard({ item, onHoverStart, onHoverEnd }: Props) {
    return (
        <article
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className='bg-secondary rounded-lg h-44 max-w-[360px] p-6  shadow-md'
        >
            <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                    <div className='flex gap-x-4'>
                        <img src={item.img} alt={item.username} className="rounded-full h-12 w-12" />
                        <div>
                            <h4 className='text-base'>{item.username}</h4>
                            <p className="text-subtitle text-sm">{item.at}</p>
                        </div>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        className='size-5  group hover:!fill-blue-500'
                        fill="rgb(201, 201, 210)" >
                        <g
                            fill="rgb(201, 201, 210)"
                            className='group-hover:!fill-blue-500'
                        >
                            <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z">
                            </path>
                        </g>
                    </svg>
                </div>
                <p className='text-sm text-subtitle'>{item.message}</p>
            </div>
        </article>
    )
}
