'use client'


import { Button } from "@/components/ui/button"
import Image from "next/image";
import tick from '../../../public/tick.svg'

import React from 'react';
import { FadeIn } from "@/components/uis/FadeIn";
import { Container } from "@/components/Container";

// const TicketCard: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="relative flex space-x-4">
//         {/* Ticket Background */}
//         <div className="w-80 h-48 bg-blue-600 text-white rounded-lg shadow-lg relative p-5 transform rotate-3">
//           <div className="absolute inset-0 bg-blue-800 opacity-20 rounded-lg"></div>

//           {/* Ticket Border */}
//           <div className="absolute inset-0 border-2 border-white rounded-lg p-4 transform scale-95">
//             <h2 className="text-3xl font-bold">TQC 2.0</h2>
//             <p className="text-lg mt-2">Lagos, Nigeria</p>
//             <p className="text-sm mt-1">2025</p>
//           </div>

//           {/* Perforation Edge - Left */}
//           <div className="absolute top-0 left-0 h-full w-4 bg-gray-200 rounded-r-full transform -translate-x-2">
//             <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mx-auto"></div>
//           </div>
//         </div>

//         {/* Ticket Foreground */}
//         <div className="w-80 h-48 bg-gray-100 text-black rounded-lg shadow-lg relative p-5 -rotate-3">
//           <p className="text-sm font-bold">ID NO: 01234567</p>
//           <p className="text-md font-semibold mt-2">ADMITS ONE</p>
//           <p className="text-sm mt-1">Lagos, Nigeria | 2025</p>

//           {/* Perforation Edge - Right */}
//           <div className="absolute top-0 right-0 h-full w-4 bg-gray-200 rounded-l-full transform translate-x-2">
//             <div className="h-2 w-2 bg-gray-100 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-gray-100 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-gray-100 rounded-full mt-2 mx-auto"></div>
//             <div className="h-2 w-2 bg-gray-100 rounded-full mt-2 mx-auto"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Ticket;




const TicketCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="relative transform rotate-3">

        <div className="w-80 h-44 bg-blue-700 text-white rounded-lg shadow-xl relative p-4">

          <div className="border-2 border-white p-3 rounded-md">
            <h2 className="text-2xl font-bold mb-1">TQC 2.0</h2>
            <p className="text-sm">Lagos, Nigeria</p>
            <p className="text-xs mt-1">2025</p>
          </div>

          <div className="absolute -left-4 top-0 h-full w-6 flex flex-col justify-between items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 bg-gray-200 rounded-full"
              ></div>
            ))}
          </div>

          <div className="absolute -right-4 top-0 h-full w-6 flex flex-col justify-between items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 bg-gray-200 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="w-80 h-44 bg-white text-black rounded-lg shadow-lg absolute top-3 left-3 p-4">
          <p className="text-sm font-bold">ID NO: 01234567</p>
          <p className="text-md font-semibold mt-2">ADMITS ONE</p>
          <p className="text-sm mt-1">Lagos, Nigeria | 2025</p>

          <div className="absolute -left-4 top-0 h-full w-6 flex flex-col justify-between items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 bg-white rounded-full"
              ></div>
            ))}
          </div>

          <div className="absolute -right-4 top-0 h-full w-6 flex flex-col justify-between items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2 w-2 bg-white rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};





export const Ticket = () => {
  return (
    <section className="mx-auto px-20 py-16 md:py-24 bg-[#F0F5F6]">
      <Container>
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-wider">
                  SECURE YOUR SPOT NOW
                  <div className="w-28 mt-1 h-2 bg-[#0017AF]" />
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  GET YOUR{' '}
                  <br />
                  <span className="text-[#0017AF]">TICKET</span>{' '}
                  TODAY!
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Witness heart-piercing discussions, explore the meanings
                  of the Qur'an, and immerse yourself in beautiful recitations.
                </p>
                <p>
                  Secure your spot at TQC and embark on a spiritual journey
                  like no other.
                </p>
              </div>

              <Button
                className="bg-[#0017AF] hover:bg-[#0000DD] text-white px-8 py-6 text-lg rounded-md"
              >
                Buy Ticket
              </Button>
            </div>

            {/* <div className="relative">
          <div className="absolute top-4 right-4 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[#0000FF] rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-[#0000FF] rounded-lg transform -rotate-3 opacity-20"></div>
            </div>
          </div> */}

            {/* <div className="relative bg-[#0000FF] text-white p-8 rounded-lg shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold mb-2">TQC 2.0</h3>
                <p className="text-blue-200">Lagos, Nigeria</p>
                <p className="text-blue-200">2025</p>
              </div>
              
              <div className="flex flex-col items-end space-y-1">
                <div className="w-16 h-1 bg-blue-300 rounded"></div>
                <div className="w-12 h-1 bg-blue-300 rounded"></div>
                <div className="w-8 h-1 bg-blue-300 rounded"></div>
              </div>
            </div>

            <div className="absolute -right-4 top-0 bottom-0 w-8">
              <div className="h-full w-full relative">
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200"></div>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-4 h-[1px] bg-gray-200"
                    style={{ top: `${(i + 1) * 5}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div> */}
            <Image src={tick} alt="d" />
            {/* </div> */}
          </div>
          {/* <TicketCard /> */}
        </FadeIn>
      </Container>
    </section>
  )
}