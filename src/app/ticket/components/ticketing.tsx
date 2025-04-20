'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"

interface TicketCount {
    adult: number
    vendor: number
    child: number
}

export const TicketBlock = () => {
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
        < section className="bg-[#F3F4FF] py-16" >
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


                <Button onClick={() => {
                    console.log('Purchasing tickets:', ticketCounts)
                    window.alert('Tickets purchased successfully!')
                    window.location.href = '/checkout'
                }} className="w-full py-6 text-lg bg-white hover:bg-gray-50 text-black">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Complete Purchase
                </Button>
            </div>
        </section >
    )
}