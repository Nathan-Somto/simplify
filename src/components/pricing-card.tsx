import DarkBadge from "./dark-badge"

interface Props {
    price: string | number
    description: string
    btnType: 'secondary' | 'primary' | 'accent'
    features: string[]
    badgeType: 'accent' | 'dark'
    badgeText: string
}
export default function PricingCard({ price, description, btnType, features, badgeType, badgeText }: Props) {
    return (
        <div className='bg-secondary shadow-lg rounded-lg px-6 pb-8 py-6 flex flex-col justify-between h-auto flex-1 border border-[rgb(224_224_230)]'>
            <div>
                <div className='text-center mb-4'>
                    {badgeType === 'accent' ? <DarkBadge
                        message={badgeText}
                        className="!text-accent !bg-neutral"
                    /> :
                        <DarkBadge message={badgeText}
                        />}
                </div>
                <div className='text-4xl mt-5 font-semibold text-left  border-b border-[rgb(224_224_230)] pb-5 mb-5'>{price} <span className="text-sm text-subtitle">per month</span></div>
                <div className="flex flex-col gap-y-5">
                <div className='text-left max-w-[520px] lg:h-[40px] text-subtitle inter text-sm opacity-80'>{description}</div>
                <button className={`btn btn-${btnType} w-full`}>Schedule a Call</button>
                </div>
                <ul className='mt-5 space-y-2'>
                    <li className="!mb-4 text-sm font-medium text-subtitle">Key features</li>
                    {features.map((feature, index) => (
                        <li key={index} className='flex items-center space-x-2'>
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
                            <span className="text-sm font-medium text-subtitle">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}