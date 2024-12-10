import SlideUp from '@/animation/slide-up';


export default function Footer() {
    return (
        <footer className="text-center py-8 max-w-[1200px] overflow-hidden mx-auto flex flex-col gap-y-5">
            <SlideUp
                initialY={30}
                easing={[0.12, 0, 0.39, 0]}
                duration={0.4}
                className='max-w-[700px] mx-auto'
                >

            <a
                href="mailTo:hello@simplify.com"
                target="_blank"
                className="text-3xl font-medium text-center"
            >
                hello@simplify.com
            </a>
                </SlideUp>
            <SlideUp
                initialY={30}
                easing={[0.12, 0, 0.39, 0]}
                duration={0.4}
                delay={0.12}
                className="flex justify-center flex-col gap-y-1.5  max-w-[700px] mx-auto"
                >
           
                <p className="text-xs text-subtitle pr-2 ">
                    Designed by
                    <a
                        href="https://stylokit.com"
                        target="_blank"
                        className="inline-block mx-1.5"
                    >
                        {' '}
                        Stylokit
                    </a>
                </p>
                <p className="text-xs text-subtitle ml-2">
                    Developed by
                    <a
                        href="https://somtochi-dev.vercel.app"
                        target="_blank"
                        className="inline-block ml-1.5 mr-0.5"
                    >
                        {' '}
                        Nathan Somto
                    </a>
                    - © {new Date().getFullYear()}
                </p>
            
            </SlideUp>
            <figure className="flex justify-center overflow-hidden mt-2 mx-auto h-12 max-w-[700px]">
                <SlideUp
                className='!size-10'
                initialY={30}
                easing={[0.12, 0, 0.39, 0]}
                duration={0.4}
                initialOpacity={1}
                >
                <svg
                    className="w-10 h-10 rounded-lg block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <path
                        d="M 8 32 C 3.582 32 0 32 0 32 L 0 0 C 0 0 3.582 0 8 0 L 24 0 C 28.418 0 32 0 32 0 L 32 32 C 32 32 28.418 32 24 32 Z"
                        fill="rgb(112,90,248)"
                        className="!fill-[var(--accent)]"
                    />
                    <g transform="translate(8 8)" id="ss9605340551_2">
                        <path d="M 0 16 L 0 0 L 16 0 L 16 16 Z" fill="transparent" />
                        <path
                            d="M 3.333 10.333 L 3.333 0 L 0 2.667 L 0 12.693 L 8.333 16 L 11.333 13.333 Z"
                            fill="rgb(255,255,255)"
                        />
                        <path
                            d="M 12.667 5.667 L 12.667 16 L 16 13.333 L 16 3.307 L 7.667 0 L 4.667 2.667 Z"
                            fill="rgb(255,255,255)"
                        />
                    </g>
                </svg>
                </SlideUp>
            </figure>
        </footer>
    );
}
