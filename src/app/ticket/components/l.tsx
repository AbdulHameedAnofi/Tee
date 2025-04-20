'use client'

import { useState } from 'react'
import { Clock, MapPin, Calendar, Plus, Minus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface TicketCount {
  adult: number
  vendor: number
  child: number
}

export default function LandingPage() {
  const [ticketCounts, setTicketCounts] = useState<TicketCount>({
    adult: 0,
    vendor: 0,
    child: 0
  })

  const handleTicketChange = (type: keyof TicketCount, increment: boolean) => {
    setTicketCounts(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Conference attendees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Header Logos */}
          <div className="flex justify-end gap-4 mb-12">
            <img
              src="/placeholder.svg?height=50&width=120"
              alt="Basmad"
              className="h-12"
            />
            <div className="w-12 h-12 bg-blue-600 rounded-full" />
          </div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
            <div>
              <h1 className="text-white font-serif">
                <div className="text-4xl md:text-6xl mb-2">THE QUR'AN</div>
                <div className="text-6xl md:text-8xl font-bold">CRESCENDO</div>
              </h1>

              {/* Event Details */}
              <div className="flex flex-wrap gap-6 mt-8 text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>7th of January, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Lagos Oriental Palace</span>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-2xl md:text-3xl mb-4">Where Hearts Converge</h2>
              <p className="mb-6">
                The Qur'an Crescendo is an annual conference created to celebrate the Qur'an, 
                showcase the different aspects of it, and explore its transformative power in our lives.
              </p>
              <p className="mb-8">
                It brings together top-scholars & hearts from all over the world for a one-day 
                experience that takes people closer to The Book.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Buy Ticket
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticketing Section */}
      <section className="bg-[#F3F4FF] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Ticketing Information
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Please ensure you place in your correct details to purchase a ticket.
          </p>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <Input placeholder="First Name" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input placeholder="Last Name" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input type="email" placeholder="Email Address" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <Input placeholder="Phone Number" className="w-full" />
            </div>
          </div>

          {/* Ticket Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {['adult', 'vendor', 'child'].map((type) => (
              <div key={type} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4" />
                <h3 className="text-lg font-medium mb-4 capitalize">
                  {type} Ticket
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleTicketChange(type as keyof TicketCount, false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-medium">
                    {ticketCounts[type as keyof TicketCount]}
                  </span>
                  <button
                    onClick={() => handleTicketChange(type as keyof TicketCount, true)}
                    className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Purchase Button */}
          <Button className="w-full py-6 text-lg bg-white hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Complete Purchase
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-blue-600 font-serif text-2xl">
              THE QUR'AN CRESCENDO
            </div>
            <div className="text-sm text-gray-600">
              © 2024 The Qur'an Crescendo for Basmad | All Rights Reserved
            </div>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'YouTube', 'WhatsApp'].map((social) => (
                <div
                  key={social}
                  className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center"
                >
                  <span className="sr-only">{social}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}