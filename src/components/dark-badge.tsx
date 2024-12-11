interface Props {
    message: string
    className?: string
}
export default function DarkBadge({ message, className = '' }: Props) {
    return (
        <div className={`bg-pale-primary text-dark-primary  rounded-2xl text-sm px-2 font-medium w-fit ${className}`}>
            <p>{message}</p>
        </div>
    )
}
