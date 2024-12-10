import React from 'react'
import Logo from '../assets/logo.svg'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'
const links = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Faqs', href: '#faqs' }
]
export default function Navbar() {
    const matches = useMediaQuery('(min-width: 650px)');
    const [isOpen, setIsOpen] = React.useState(false)
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = React.useState('up')
    const [figWidth, setFigWidth] = React.useState<number | null>(null);
    const [renderCount, setRenderCount] = React.useState(0);
    const dontScrollToTop = React.useRef(false);
    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 100) {
            if (!isOpen) {
                setScrollDirection('down')
            }
        }
        else {
            setScrollDirection('up')
        }
        if (renderCount === 0) {
            setRenderCount(1)
        }
    })
    return (
        <nav
            className={`fixed top-0 bg-transparent max-w-[1200px] ${isOpen ? '!bg-secondary' : 'bg-transparent'} inset-x-0 z-[10000] mx-auto w-full pt-3 pb-5 ${scrollDirection === 'up' || matches ? 'px-6' : ''}  h-20 `}
        >
            <motion.div
                transition={
                    renderCount === 0 ?
                        {
                            duration: 0.5,
                            ease: 'easeInOut'
                        }
                        : { duration: 0.5, ease: 'easeIn' }}
                initial={
                    renderCount === 0 ?
                        { opacity: 0 } :
                        {
                            width: '100%',
                            opacity: 1,
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            borderRadius: 0
                        }}
                animate={renderCount === 0 ? { opacity: 1 } : scrollDirection === 'up' ?
                    {
                        width: '100%',
                        opacity: 1, backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        borderRadius: 0
                    } : {
                        width: matches ? 600 : '95%',
                        opacity: [0.5, 1],
                        backgroundColor: '#fff',
                        borderColor: '#c9c9d2',
                        borderRadius: 20
                    }}
                className={`flex mx-auto items-center min-w-[90%] min-[800px]:min-w-fit justify-between
                ${scrollDirection === 'down' ? 'border pt-3 pr-3 pl-3.5  gap-x-4  pb-3 h-min shadow-md'
                        : ' h-14'}`}
            >
                <figure
                    className='flex items-center gap-x-2 overflow-hidden w-max'
                >
                    <img
                        src={Logo}
                        alt="simplify logo"
                        className='size-8 rounded-md flex-shrink-0' />
                    <motion.figcaption
                        className='text-2xl font-semibold'
                        initial={figWidth === null ? undefined : { width: figWidth }}
                        animate={figWidth === null ? undefined : scrollDirection === 'up' ? { width: figWidth } : { width: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        ref={(curr) => {
                            setFigWidth(curr?.offsetWidth ?? 0);
                        }}
                    >Simplify</motion.figcaption>
                </figure>
                <AnimatePresence
                    onExitComplete={() => {
                        setTimeout(() => {
                            if(!dontScrollToTop){  
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }
                            else {
                                dontScrollToTop.current = false;
                            }
                        }, 0)
                    }}
                >
                    {
                        isOpen && (
                            <motion.ul
                                key="nav-links"
                                initial={{
                                    opacity: 0.5,
                                    height: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: '100vh',
                                }}
                                transition={{
                                    duration: 0.35
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        delay: 0.65,
                                        duration: 0.6
                                    }

                                }}
                                className={`
                          w-full inset-x-0  
                          tablet:hidden  
                          h-[calc(100vh-5rem)] 
                          fixed 
                          top-[5rem] 
                          bg-background  
                          z-[500] `}
                            >
                                {links.map((link, index) => (
                                    <motion.li key={link.name}
                                        initial={{
                                            y: 45,
                                            opacity: 0
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: (0.09 * index) + 0.35,
                                            ease: "easeIn"
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1
                                        }}
                                        exit={{
                                            y: -45,
                                            opacity: 0,
                                            transition: {
                                                duration: 0.3,
                                                delay: (0.12 * index),
                                            }
                                        }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setScrollDirection('down');
                                                dontScrollToTop.current = true;
                                            }}
                                            className='text-sm px-6 py-3 w-full block !no-underline tablet:inline-block font-medium !text-subtitle hover:bg-neutral  tablet:px-3 tablet:py-2 tablet:rounded-md'
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.button
                                    initial={{
                                        y: 45,
                                        opacity: 0
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay: 0.65,
                                        ease: "easeIn"
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    exit={{
                                        y: -45,
                                        opacity: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.65,
                                        }
                                    }}
                                    className='btn btn-primary absolute bottom-[100px] inset-x-0 max-w-[90%] mx-auto'>
                                    Contact Us
                                </motion.button>
                            </motion.ul>
                        )
                    }
                </AnimatePresence>

                <ul
                    key="nav-links"

                    className={`
                         tablet:flex hidden tablet:relative tablet:top-auto w-full  tablet:flex-[0.5] ${scrollDirection === 'up' ? 'tablet:flex-[0.5] tablet:gap-x-2.5' : 'tablet:gap-x-1'}  tablet:justify-center   tablet:items-center     tablet:bg-transparent z-[500] tablet:h-auto`}
                >
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`text-sm px-6 py-3 !no-underline  w-full block tablet:inline-block font-medium !text-subtitle ${scrollDirection === 'down' ? 'hover:bg-neutral' : 'hover:bg-gray-200'}   tablet:px-3 tablet:py-2 tablet:rounded-md`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center'>
                    <button className='btn btn-primary hidden   tablet:flex flex-shrink-0 max-w-[180px] py-1.5'>Contact Us</button>
                    {/* Animated hamburger menu */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:bg-neutral tablet:hidden ml-3 p-2 rounded-full size-8 grid place-items-center"
                        data-isopen={isOpen}
                        onClick={() => {
                            if (!isOpen) {
                                setScrollDirection('up')
                            }
                            setIsOpen(!isOpen)
                        }}
                    >
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={isOpen ? { rotate: 45, marginBottom: 0, y: 4 } : { rotate: 0 }}
                            className='w-4 h-[2px] bg-foreground block mb-[2px] mx-auto'
                        />
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={isOpen ? { rotate: -45, marginBottom: 0, y: -4 } : { rotate: 0 }}
                            className='w-4 h-[2px] bg-foreground block mx-auto' />
                    </motion.button>
                </div>
            </motion.div>
        </nav>
    )
}
