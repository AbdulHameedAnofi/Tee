'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import newsletter from '../../../public/newsletter.svg'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
  }

  const handleRedirect = () => {
    window.open("https://tally.so/r/w5GZ4d", "_blank")
  }

  return (
    <section className="py-12 px-4 md:py-20 bg-[#101028]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:-space-x-8 min-h-[400px] md:min-h-[500px] bg-white rounded-3xl lg:mx-24">
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12 my-6 md:my-10">
          <div className="max-w-md mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-[#0017AF]">
              Transformed
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6">
              Newsletter
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              Subscribe to the TQC Newsletter "Transformed"
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              {/* <Input
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-md border border-gray-200 focus:border-[#0017AF] focus:ring-1 focus:ring-[#0017AF]"
                required
              /> */}
              <Button
                type="submit"
                className="h-12 px-6 md:px-8 bg-[#0017AF] hover:bg-[#0000DD] text-white font-medium rounded-md transition-colors"
                onClick={handleRedirect}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-64 md:h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <img
            src={newsletter.src}
            alt="TQC Conference speakers"
            className="absolute inset-0 w-full h-full object-cover rounded-b-3xl md:rounded-r-3xl"
          />
        </div>
      </div>
    </section>
  )
}

export const Newsletter = () => {
  return (
    <div className="bg-[#E3E7FF]">
      <NewsletterSection />
    </div>
  )
}
