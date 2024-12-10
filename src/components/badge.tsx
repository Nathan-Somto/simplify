import React from 'react'
interface Props {
    bubbleText?: string
    message: string
}
export default function Badge({ bubbleText = 'New', message }: Props) {
    return (
        <div className='bg-pale-primary text-sm rounded-2xl pr-3.5 pl-1 py-1 font-medium max-w-fit mx-auto mb-5'>
            <span className='inline-block mr-2 bg-primary font-normal text-secondary rounded-2xl px-2'>
                {bubbleText}
            </span>
            {message}
        </div>
    )
}
