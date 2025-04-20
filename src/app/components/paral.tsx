"use client"

import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion"
import { ReactNode, useRef } from "react"

function useLayeredParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

interface FramerParallaxSectionProps {
    id: string
    foreground: ReactNode
    background?: ReactNode
    distance?: number
    backdropColor?: string
}

export function FramerParallaxSection({
    id,
    foreground,
    background,
    distance = 300,
    backdropColor = "#0e0e0e",
}: FramerParallaxSectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const fgY = useLayeredParallax(scrollYProgress, distance)
    const bgY = useLayeredParallax(scrollYProgress, distance * 0.5)

    return (
        <>
            <section
                ref={ref}
                id={id}
                className="framer-section"
                style={{ backgroundColor: backdropColor }}
            >
                {background && (
                    <motion.div className="parallax-layer background" style={{ y: bgY }}>
                        {background}
                    </motion.div>
                )}

                <motion.div className="parallax-layer foreground" style={{ y: fgY }}>
                    {foreground}
                </motion.div>
            </section>
            <StyleSheet />
        </>
    )
}

function StyleSheet() {
    return (
        <style>{`
            html, body {
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            }

            .framer-section {
                position: relative;
                height: 100vh;
                overflow: hidden;
                scroll-snap-align: start;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .parallax-layer {
                position: absolute;
                width: 100%;
                height: 100%;
                will-change: transform;
                display: flex;
                justify-content: center;
                align-items: center;
                pointer-events: none;
            }

            .foreground {
                z-index: 0;
                pointer-events: auto;
            }

            .background {
                z-index: 1;
                opacity: 0.15;
                filter: blur(6px);
            }

            .giant-bg-text {
                font-size: 20vw;
                font-weight: 900;
                color: rgba(255, 255, 255, 0.05);
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }

            .sparkle-bg {
                font-size: 10vw;
                color: rgba(255, 255, 255, 0.05);
                animation: sparkle 3s ease-in-out infinite alternate;
            }

            @keyframes sparkle {
                from { transform: scale(1) rotate(0deg); opacity: 0.1; }
                to { transform: scale(1.2) rotate(10deg); opacity: 0.2; }
            }
        `}</style>
    )
}
