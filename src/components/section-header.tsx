import React from 'react'
import Badge from './badge'
import DarkBadge from './dark-badge'
import SlideUp from '@/animation/slide-up'
interface Props extends Omit<React.ComponentProps<typeof SlideUp>, 'children'> {
    heading: string
    para: string
    message: string
    sectionName: string
    badge?: 'dark' | 'default' | 'none'
}
export default function SectionHeader({ heading, para, message, badge = "default", sectionName,  ...props }: Props) {
    return (
        <SlideUp {...props}>
        <div
            id={`${sectionName}-header`}
            className='text-center  max-w-[640px] mx-auto space-y-4'>
            {badge === 'none' ? null : badge === 'default' ? <Badge message={message} /> : <DarkBadge message={message} className='!max-w-fit !mx-auto' />}
            <h2>{heading}</h2>
            <p className='text-subtitle max-w-[520px] mx-auto'>{para}</p>
        </div>
        </SlideUp>
    )
}
