import { Hero } from "./components/hero"
import { Perks } from "./components/perks"
import { Logs } from "./components/log"
import { FramerParallaxSection } from "./components/paral"

export const Landing = () => {
    return (
        <div style={{ scrollSnapType: "y mandatory", overflowY: "scroll", height: "100vh" }}>
            <FramerParallaxSection
                id="hero"
                foreground={<Hero />}
                background={<h1 className="giant-bg-text">Hero</h1>}
                backdropColor="#000"
            />

            <FramerParallaxSection
                id="perks"
                foreground={<Perks />}
                background={<h1 className="giant-bg-text">Perks</h1>}
                backdropColor="#0a0a0a"
                distance={400}
            />

            <FramerParallaxSection
                id="logs"
                foreground={<Logs />}
                background={<div className="sparkle-bg">✨</div>}
                backdropColor="#111"
                distance={500}
            />
        </div>
    )
}
