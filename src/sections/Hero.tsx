import Badge from "@/components/badge"
import { users } from "@/constants"
import { motion, Variants } from "framer-motion"


export default function Hero() {
    const parentVariants: Variants = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const childVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                type: 'spring',
                bounce: 0.15,
            }
        }
    }
    return (
        <motion.section
            id="hero-section"
            variants={parentVariants}
            initial='hidden'
            animate='visible'
            className="min-h-screen max-w-[1200px] mx-auto pt-40 flex-shrink-0 tablet:pt-44  flex justify-center flex-col overflow-hidden">
            <motion.div

            >
                <motion.div variants={childVariants}>
                    <Badge message="Powered by Imagination" />
                </motion.div>
                <motion.h1 variants={childVariants} className='text-4xl leading-[44px] sm:text-5xl tablet:text-6xl sm:leading-[56px] instrument-sans w-[90%] tablet:w-[80%] text-balance !font-medium tracking-normal mx-auto text-center tablet:leading-[72px]'>
                    Elevating Your Brand with Innovative Design
                </motion.h1>
                <motion.p variants={childVariants} className='mt-3.5 text-center mx-auto inter leading-[24px] max-w-[450px] text-subtitle '>At Simplify, we blend artistry and strategy to create designs that not only captivate but also elevate.</motion.p>
            </motion.div>
            <motion.div
                variants={childVariants}
                className='mt-10 flex tablet:flex-row flex-col gap-y-3 tablet:gap-y-0 items-center gap-x-3 justify-center'>
                <button className='btn btn-secondary w-[80%] flex-shrink-0 tablet:w-fit'>Our Work</button>
                <button className='btn btn-primary w-[80%] flex-shrink-0 tablet:w-fit'>Schedule a Call</button>
            </motion.div>
            <motion.div
                variants={childVariants}
                className="flex items-center gap-x-3 mt-10 max-w-[450px] mx-auto "
            >
                {/* user image where the next imag is slightly above the next to towards the left */}

                <div className='w-[120px] relative  h-[40px]'>
                    {users.map((user, index) => (
                        <img
                            key={index}
                            src={user.avatar}
                            alt={user.name}
                            style={{
                                left: `${index * 1.5}rem`,
                                zIndex: `${3 + index * 3}`
                            }}
                            className={`rounded-full inline-block absolute size-10 border-2 border-secondary`}
                        />
                    ))}
                </div>
                <p className="text-sm text-secondary-foreground">100+ People gave us 5/5 Stars</p>
            </motion.div>
        </motion.section>
    )
}
