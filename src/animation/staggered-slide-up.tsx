// staggered slide up animation with framer motion
import { Variants } from 'framer-motion';
interface VariantVals {
    parentVariant: Variants;
    childVariant: Variants;
    initial: 'hidden'
    animate: 'visible'
}
interface Props {
    initialY?: number;
    delay?: number;
    easing?: [number, number, number, number];
    duration?: number;
    stagger?: number; // time to stagger child
    renderChildren: (vals: VariantVals) => React.ReactNode; // helps in passing the child variant to children

}
export default function StaggeredSlideUp({
    initialY = 100,
    delay = 0.5,
    easing = [0.42, 0, 0.58, 1],
    stagger = 0.1,
    duration = 0.65,
    renderChildren
}: Props) {
    const parentVariant: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    }
    const childVariant: Variants = {
        hidden: {
            opacity: 0,
            y: initialY,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: easing,
                duration
            },
        },
    };
    return (
        <>
            {renderChildren({
                parentVariant,
                childVariant,
                animate: 'visible',
                initial: 'hidden'
            })}
        </>
    );
};