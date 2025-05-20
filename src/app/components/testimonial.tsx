'use client'

import { Quote } from 'lucide-react'
import { useRef } from 'react'
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  MotionValue
} from "framer-motion"

interface Testimonial {
  quote: string
  author: string
}

export const Testimonial = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "That was one of my best weekends, because to be honest, I've never attended a one-day soul inspiring conference like that ever",
      author: "Shukunah Garba"
    },
    {
      quote: "That was one of my best weekends, because to be honest, I've never attended a one-day soul inspiring conference like that ever",
      author: "Abdullah Biden"
    },
    {
      quote: "That was one of my best weekends, because to be honest, I've never attended a one-day soul inspiring conference like that ever",
      author: "AbdurRahman Olisa"
    },
    {
      quote: "That was one of my best weekends, because to be honest, I've never attended a one-day soul inspiring conference like that ever",
      author: "Haneef Adisa"
    }
  ]

  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <section className="mx-auto px-4 py-16 md:py-24 bg-[#101028] relative overflow-hidden ">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 text-white">
        What People Have Said
      </h2>

      <svg className="absolute top-10 left-6 w-16 h-16 rotate-[-90deg]" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-[#0b1011] stroke-[10%] fill-none" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-white stroke-[10%] fill-none"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <motion.ul
        ref={ref}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="flex overflow-x-scroll gap-6 px-6 py-10 snap-x snap-mandatory scroll-bar"
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className="min-w-[300px] max-w-sm bg-white rounded-2xl p-6 relative snap-center shrink-0"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full bg-[#101028] flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <blockquote className="mt-8 text-black">
              <p className="text-gray-800 text-lg leading-relaxed">{testimonial.quote}</p>
              <footer className="mt-4">
                <hr className="border-t border-black my-2" />
                <cite className="text-gray-900 font-medium not-italic">{testimonial.author}</cite>
              </footer>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  )

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      )
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      )
    }
  })

  return maskImage
}
