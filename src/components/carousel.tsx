import { useAnimate, useMotionValue, motion, AnimationPlaybackControls } from 'framer-motion'
import React from 'react'
interface Image {
  src: string
  alt: string
}
interface Props<T extends object | Image> {
  className?: string
  duration?: number
  slowDuration?: number
  infinite?: boolean
  stopOnHover?: boolean
  columnGap?: number
  customData?: T[]
  direction?: 'right' | 'left'
  images?: Image[]
  renderData?: (item: T, index: number, onHoverStart: () => void, onHoverEnd: () => void) => React.ReactNode
  renderImage?: (image: Image, index: number, onHoverStart: () => void, onHoverEnd: () => void) => React.ReactNode
}
export default function Carousel<T extends object | Image>({
  className,
  duration = 25,
  infinite = true,
  stopOnHover = false,
  slowDuration = 45,
  columnGap = 8,
  images,
  customData,
  renderImage,
  renderData,
  direction = 'left'
}: Props<T>) {
  const endPosition = React.useRef(0);
  const [animControls, setAnimControls] = React.useState<AnimationPlaybackControls | null>(null)
  const xPosition = useMotionValue(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, animate] = useAnimate();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (!containerRef.current) return
    const finalPosition = -(containerRef.current.scrollWidth / 2) - columnGap;
    endPosition.current = finalPosition;
    const animArray = direction === 'left' ? [0, finalPosition] : [finalPosition, 0]
    if (direction === 'right') {
      xPosition.set(finalPosition);
    }
    const controls = animate(xPosition, animArray, {
      duration,
      repeat: infinite ? Infinity : 0,
      ease: 'linear',
      repeatType: 'loop',
      repeatDelay: 0,
      onComplete: () => {
        xPosition.set(finalPosition);
      }
    });
    setAnimControls(controls);
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, columnGap, direction, infinite, xPosition])
  // create an array of images that is double the size.
  const doubleImages = images ? images.concat(images) : [];
  const doubleCustomData = customData ? customData.concat(customData) : null;
  const onHoverStart = () => {
    if (!animControls) return;
    if (stopOnHover) {
      animControls?.pause();
    }
    else {
      // v = d/t
      const speed = (duration / slowDuration);
      animControls.speed = speed;
    }
  }
  const onHoverEnd = () => {
    if (!animControls) return;
    if (stopOnHover) {
      animControls.play();
    }
    else {
      animControls.speed = 1;
    }
  }
  return (
    <div className={`h-full w-full overflow-x-hidden overflow-y-visible ${className ?? ''}`}>
      <motion.div style={{
        x: xPosition,
        columnGap
      }}
        className='w-full h-full flex items-center'
        ref={containerRef}
      >
        {
          doubleCustomData === null &&
          doubleImages.map((image, index) => {
            if (doubleCustomData === null) {
              return (
                <figure key={index} className='flex-shrink-0 overflow-hidden'>
                  {renderImage ?
                    renderImage(image as Image, index, onHoverStart, onHoverEnd)
                    :
                    <img src={image.src} alt={image.alt} className='w-full h-full object-cover rounded-md' />}
                </figure>
              )
            }
          })
        }
        {
          doubleCustomData !== null &&
          doubleCustomData.map((item, index) => (
            <div className="flex-shrink-0 h-fit w-fit" key={index}>
              {renderData ?
                renderData(item, index, onHoverStart, onHoverEnd)
                :
                <pre>{JSON.stringify(item)}</pre>
              }
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}
