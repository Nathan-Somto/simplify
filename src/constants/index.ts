import allworks from '@/assets/all-works.avif'
import landify from '@/assets/landify.webp'
import plantify from '@/assets/platify.webp'
import taskify from '@/assets/taskify.avif'
import dailyHub from '@/assets/daily-hub.png'
import codify from '@/assets/codify.png'
import protify from '@/assets/protify.png'
import nexusAi from '@/assets/nexus-ai.png'
import flowboard from '@/assets/flowboard.png'
import flexify from '@/assets/flexify.png'
import agentify from '@/assets/agentify.png'
import Infinite from '@/assets/infinity.svg'
import Flash from '@/assets/flash.svg'
import Cup from '@/assets/cup.svg'
import FigmaArt from '@/assets/figma-art.webp'
import Figma from '@/assets/figma.svg'
import FramerArt from '@/assets/framer-art.webp'
import Framer from '@/assets/framer.svg'
const testimonials = [
    {
        "username": "Alex Designs",
        "img": "https://framerusercontent.com/images/CpUP6742s0yOxa2FViEZj4Hyg.png",
        "at": "@alexDesigns",
        "message": "Simplify transformed my design workflow! Instant content\n                suggestions and real-time collaboration make it a game-changer."
    },
    {
        "username": "WebDev Guru",
        "img": "https://framerusercontent.com/images/Mp7qaShG98j2qmmBNdftQVFjYag.png",
        "at": "@webdevguru",
        "message": "Incorporating Simplify Framer into our web development process\n                has streamlined collaboration."
    },
    {
        "username": "Code Master",
        "img": "https://framerusercontent.com/images/lCDNLZd1sSMabjZPgob2SiXcI4g.png",
        "at": "@codemaster",
        "message": "Simplify's efficiency in generating code snippets is unmatched.\n                Seamless integration, time-saving."
    },
    {
        "username": "Olivia Reynolds",
        "img": "https://framerusercontent.com/images/LkTwMB8InbXpdD5Q0Zs6YMkc.png",
        "at": "@oliviareynolds",
        "message": "Simplify brings a touch of magic to UX design. Real-time design\n  suggestions and on-the-go creativity? A design wizard in your\n                toolkit."
    },
    {
        "username": "Creative Mind",
        "img": "https://framerusercontent.com/images/DqlCOuEt50xoB9OtRSkK9tDWTjQ.png",
        "at": "@creativemind",
        "message": "Simplify unleashes creativity on a new level. Dynamic content\n  generation in Figma? Yes, please!"
    },
    {
        "username": "Ava Turner",
        "img": "https://framerusercontent.com/images/MlkB8xZzBt2nrKMk9gnXsVZKNQ.png",
        "at": "@avaturner",
        "message": "For startups, time is crucial. Simplify's speed and efficiency\n                have proven invaluable, allowing rapid iteration and staying\n                agile."
    },
    {
        "username": "Tech Enthusiast",
        "img": "https://framerusercontent.com/images/4BOyyyAr19l3IIdBpPXnr4aB6a0.png",
        "at": "@techenthusiast",
        "message": "Simplify transformed my design workflow! Instant content\n                suggestions and real-time collaboration make it a game-changer."
    },
    {
        "username": "Mia Foster",
        "img": "https://framerusercontent.com/images/acYHYh6pwrjOxUyQErb3AeTQmI.png",
        "at": "@miafoster",
        "message": "Optimized response times of Simplify are a game-changer. Quick\n                iterations and tailored solutions make it."
    },
    {
        "username": "Marketing Pro",
        "img": "https://framerusercontent.com/images/2Y7D9JS4krqAwKQy2bnTL8Hqfg.png",
        "at": "@marketingpro",
        "message": "Simplify understands content creation. A partner that crafts\n                engaging copy, making my content strategy smarter."
    },
    {
        "username": "Lucas Carter",
        "img": "https://framerusercontent.com/images/VvJRqHbstJ1omlSa1cx7P7YEjo.png",
        "at": "@lucascarter",
        "message": "Simplify elevates our marketing strategy. Instantly generate\n                compelling copy to enhance campaigns. Keeping us ahead of the\n                curve."
    }
]
const works = [
    {
        src: allworks,
        alt: 'all works',
        href: ''
    },
    {
        src: dailyHub,
        alt: 'daily hub',
        href: ''
    },
    {
        src: codify,
        alt: 'codify',
        href: ''
    },
    {
        src: protify,
        alt: 'protify',
        href: ''
    },
    {
        src: nexusAi,
        alt: 'nexus ai',
        href: ''
    },
    {
        src: flowboard,
        alt: 'flowboard',
        href: ''
    },
    {
        src: flexify,
        alt: 'flexify',
        href: ''
    },
    {
        src: agentify,
        alt: 'agentify',
        href: ''
    },
    {
        src: landify,
        alt: 'landify',
        href: ''
    },
    {
        src: plantify,
        alt: 'plantify',
        href: ''
    },
    {
        src: taskify,
        alt: 'taskify',
        href: ''
    }
];
const faqs = [
    {
        "heading": "How fast will I receive my Webflow website?",
        "para": "Depending on the size of the website it usually takes between 2-5\n              weeks to design and develop a website."
    },
    {
        "heading": "Do you also do branding like logo design?",
        "para": "Depending on the size of the website it usually takes between 2-5\n              weeks to design and develop a website."
    },
    {
        "heading": "Is Simplify suitable for small businesses?",
        "para": "Absolutely! Scalable features cater to small businesses, ensuring\n              adaptability and efficiency in various operations."
    },
    {
        "heading": "What programs do you use for design?",
        "para": "We work in a wide range of design software, including Figma,\n              Photoshop, Illustrator, After Effects, Canva, and many others."
    },
    {
        "heading": "Are there any refunds if I don't like the service?",
        "para": "Because we deliver custom design work it’s not possible to issue a\n              refund."
    },
    {
        "heading": "Do you work at our company?",
        "para": "It may feel like it but we do not work at your company however we\n              do stay in close touch to make sure we provide the best service\n              possible."
    }
];
const pricing = [
    {
        'price': "$3,999",
        "features": [
            "Unlimited requests",
            "Unlimited revisions",
            "Unlimited brands",
            "Unlimited team members",
            "Cancel anytime",
            "24-48h Delivery",
            "Free Shutterstock Images"
        ],
        "monthText": "per month",
        "badgeText": "Unlimited design",
        "btnText": "Schedule a call",
        "btnType": "secondary",
        "description": "Package includes only Unlimited Designs"
    },
    {
        'price': '$2,999',
        "features": [
            "Unlimited requests",
            "Unlimited revisions",
            "Unlimited brands",
            "Unlimited team members",
            "Cancel anytime",
            "24-48h Delivery",
            "40+ Premium plugins"
        ],
        "badgeText": "Unlimited dev",
        "btnType": "primary",
        "monthText": "per month",
        "btnText": "Schedule a call",
        "description": "Package includes only Unlimited Development"
    },
    {
        'price': '$5,999',
        "features": [
            "Unlimited requests",
            "Unlimited revisions",
            "Unlimited brands",
            "Unlimited team members",
            "Cancel anytime",
            "24-48h Delivery",
            "40+ Premium plugins"
        ],
        "badgeText": "Unlimited dev & design",
        "btnType": "accent",
        "monthText": "per month",
        "btnText": "Schedule a call",
        "description": "Package includes Everything in Unlimited Designs and Development"
    }
] as const
const users = [
    {
        name: 'sarah dayan',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/35.jpg'
    },
    {
        name: 'john doe',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/15.jpg'
    },
    {
        name: 'jane doe',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/female/15.jpg'
    },
    {
        name: 'john smith',
        avatar: 'https://xsgames.co/randomusers/assets/avatars/male/25.jpg'
    }
]
const features = [
    {
        icon: Infinite,
        heading: 'Unlimited Service',
        text: 'Subscribe to a plan and request as many designs as you like for a flat monthly fee.'
    },
    {
        icon: Flash,
        heading: 'Fast Delivery',
        text: 'We’ll complete your task in approximately one to two business days.'
    },
    {
        icon: Cup,
        heading: 'Superb Quality',
        text: `We'll do whatever it takes to meet your requirements until you are 100% satisfied.`
    }
]
const services = [
    {
        image: FigmaArt,
        icon: Figma,
        heading: 'Design',
        text: 'Subscribe to a plan and request as many designs as you like for a flat monthly fee.',
        perks: [
            'web design',
            'UI & UX Design',
            'App Design',
            'Icongraphy',
            'Product design'
        ]
    },
    {
        image: FramerArt,
        icon: Framer,
        heading: 'Development',
        text: 'Subscribe to a plan and request as many designs as you like for a flat monthly fee.',
        perks: [
            'No code development',
            'Web development',
            'Framer development',
            'App development',
            'Software solutions'
        ]
    }
]
export {
    works,
    testimonials,
    faqs,
    pricing,
    users,
    features,
    services
}