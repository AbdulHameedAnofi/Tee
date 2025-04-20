'use client'


import Image from "next/image";
import bg from '../../../../public/ticket.svg'
import tqc from '../../../../public/tqc.svg'
import basmad from '../../../../public/basmad.svg'


import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react";

export const TicketingHero = () => {
    return (
        <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img
            src={bg.src}
            alt="Conference attendees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center gap-4 mb-12">
            <img
              src={basmad.src}
              alt="Basmad"
              className="h-12"
            />
            <img src={tqc.src} className="w-12 h-12 bg-blue-600 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-24 items-center pt-12">
            <div>
              <h1 className="text-white font-serif">
                <div className="text-4xl md:text-6xl mb-2">THE QUR'AN</div>
                <div className="text-6xl md:text-8xl font-bold">CRESCENDO</div>
              </h1>

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
    )
}