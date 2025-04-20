'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function OrderSummary() {
  const [email, setEmail] = useState('')
  const [promoCode, setPromoCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing payment with email:', email)
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="rounded-2xl overflow-hidden shadow-lg">

        <div className="bg-[#0000FF] text-white p-8">
          <h1 className="text-3xl font-medium text-center">
            Order Summary
          </h1>
        </div>

        <div className="bg-white p-8">
          <h2 className="text-2xl font-medium mb-8">
            The Qur'an Crescendo
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-600">1 Adult Ticket</span>
              <span className="font-medium">#7,000</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="text-gray-600">Fees</span>
              <span className="font-medium">#7,000</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="font-medium">Total</span>
              <span className="font-medium">#7,000</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-md border border-gray-200"
                required
              />
              <Button
                type="button"
                variant="outline"
                className="px-6 text-[#0000FF] border-[#0000FF] hover:bg-[#0000FF] hover:text-white"
                onClick={() => {
                  console.log('Applying promo code:', promoCode)
                }}
              >
                Apply Code
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#0000FF] hover:bg-[#0000DD] text-white font-medium rounded-md"
            >
              Proceed to Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}