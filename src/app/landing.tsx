'use client'

import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Testimonial } from "./components/testimonial"
import { Support } from "./components/support"
import { Faq } from "./components/faq"
import { Ticket } from "./components/ticket"
import { Newsletter } from "./components/newsletter"
import { Perks } from "./components/perks"
import { Logs } from "./components/log"
import { Carousel } from "./components/carousel"
import image1 from '@/../../public/car1.svg'



import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion"
import { useRef } from "react"

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxImage({ id }: { id: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

    // Different layers of motion
    const yBg = useParallax(scrollYProgress, 100)
    const yMid = useParallax(scrollYProgress, 200)
    const yFg = useParallax(scrollYProgress, 300)
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

    return (
        <section className="img-container" ref={ref}>
            <motion.div
                className="layer bg"
                style={{ y: yBg }}
            />
            <motion.div
                className="layer mid"
                style={{ y: yMid }}
            >
                <img src={image1.src} alt={`City ${id}`} />
            </motion.div>
            <motion.h2
                className="layer fg"
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ y: yFg }}
            >
                {`#00${id}`}
            </motion.h2>
        </section>
    )
}


function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            position: relative;
            scroll-snap-align: start;
            overflow: hidden;
            background: #101010;
        }

        .layer {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .layer.bg {
            background: linear-gradient(to bottom, #000000, #1a1a1a);
            z-index: 0;
        }

        .layer.mid {
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .layer.mid img {
            max-height: 80vh;
            width: auto;
            border-radius: 1rem;
            filter: brightness(1.1) contrast(1.05);
        }

        .layer.fg {
            z-index: 2;
            color: #8df0cc;
            font-size: 5rem;
            font-weight: bold;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            mix-blend-mode: difference;
        }

        @media (max-width: 500px) {
            .layer.fg {
                font-size: 2rem;
            }
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform-origin: 0%;
        }

        .scroll-hint {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            color: #8df0cc;
            font-size: 2rem;
            opacity: 0.7;
        }

    `}</style>
    )
}

export default function Parallax() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div id="parallax-enhanced">
            {[].map((id) => (
                // <ParallaxImage key={id} id={id} />
                // <Carousel />
                <div></div>
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <motion.div
                className="scroll-hint"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                ↓
            </motion.div>

            <StyleSheet />
        </div>
    )
}


export const Landing = () => {
    return (
        <div className="">
            <Hero />
            <Parallax />
            <Perks />
            <Carousel />
            <Logs />
            <Testimonial />
            <Ticket />
            <Newsletter />
            <Faq />
            {/* <Support /> */}
            <Footer />
        </div>
    )
}