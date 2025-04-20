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

export const Landing = () => {
    return (
        <div className="">
            <Hero />
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