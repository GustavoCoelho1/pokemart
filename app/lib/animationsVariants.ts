import { Variants } from 'framer-motion';

export const disappearVariants = {
    show: {
        display: 'flex',
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.3,
        },
    },

    hide: {
        opacity: 0,
        transition: { duration: 0.3 },
        transitionEnd: { display: 'none' },
    },
} as Variants;
