'use client'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export const Faq = () => {
    const faqs = [
      {
        question: "What is the age requirement for attending the event?",
        answer: "The event is open to all ages, but children under a certain age may require adult supervision."
      },
      {
        question: "Is there a registration fee for the event?",
        answer: "Yes, there is a registration fee to cover the costs of the event. Please visit our ticketing page to purchase your ticket."
      },
      {
        question: "What should I wear to the event?",
        answer: "Please dress modestly and comfortably. There is no specific dress code, but it is recommended to wear attire that is respectful of the Islamic culture and the spiritual nature of the event."
      },
      {
        question: "Is there parking available at the venue?",
        answer: "Yes, there is ample parking available on-site. Please follow the designated parking instructions provided by the venue."
      },
    ]
  
    return (
      <div className="w-full lg:px-24 px-8 py-32 bg-[#F0F5F6]">
        <h1 className="text-5xl font-bold text-center mb-12">FAQs</h1>
        
        <Accordion type="single" collapsible className="space-y-4 ">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none bg-white data-[state=open]:bg-white w-full px-10 shadow-md"
            >
              <AccordionTrigger className="hover:no-underline rounded-lg px-6 py-4 text-left text-[#0017AF]">
                <span className="md:text-2xl font-normal">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }