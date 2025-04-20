'use client'

import image1 from '../../../public/newsletter.svg'
import image2 from '../../../public/ticket.svg'
import mssn from '@/../../public/mssn.svg'
import side from '@/../../public/sidemssn.svg'
import Image from 'next/image'


import React, { useState, useEffect } from 'react'

interface DiscussionSlide {
  title: string
  content: string
  image: string
}

interface dataType {
  title: string;
  value: string;
}

const data: dataType[] = [
  {
    title: 'Attendees',
    value: '1000+'
  },
  {
    title: 'Scholars & Thought Leaders',
    value: '10+'
  },
  {
    title: 'Positive Ratings',
    value: '85%'
  },
  {
    title: 'Anticipate 2.0 Edition',
    value: '96%'
  }
]


const discussionSlides: DiscussionSlide[] = [
  {
    title: "Heart Piercing Discussions",
    content: "Imagine a gathering where the words of Allah resonate through the air, touching your soul in ways you never thought possible. At The Qur’an Crescendo, our session of heart-piercing discussions, led by renowned scholars, will leave you captivated and inspired. Join us for a unique experience that will forever change your perspective on the Qur'an and its profound impact on your life.",
    image: image1.src
  },
  {
    title: "Exploring Meanings of The Qur’an",
    content: "Embark on a journey of spiritual discovery as our expert speakers delve into the depths of the Qur'an, guiding you through the intricate meanings and timeless wisdom contained within its verses. At The Qur’an Crescendo you will gain a deeper understanding of Allah's message and its relevance to your life today.",
    image: image2.src
  },
  {
    title: "Understanding & Applying the Qur’an",
    content: "Discover the practical wisdom and guidance found within the Qur'an where you will learn how to integrate its teachings into your daily life and unlock the potential for spiritual growth and transformation. Through engaging discussions and interactive workshops, you will find valuable insights to deepen your connection with the Words of Allah.",
    image: image1.src
  },
  {
    title: "Enjoying Beautiful Recitations",
    content: "Experience the beauty and power of the Qur'an through captivating recitations from renowned qaris as they share their talents to transport you to a realm of spiritual tranquillity. Immerse yourself in the melodic rhythms and heartfelt expressions of the Words of Allah at The Qur’an Crescendo.",
    image: image2.src
  }
]

export const Logs = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isSmallScreen) {
      const timer = setInterval(() => {
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isSmallScreen])



  return (
    <div className="mx-auto px-4 py-16 bg-[#F0F5F6]">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-extrabold">
          TQC 1.0 in Numbers
        </h2>
        <div className="flex flex-col items-start mx-9 lg:grid lg:grid-cols-4 md:grid-cols-2 lg:mx-24">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <div className="w-1 h-16 bg-[#0017AF] mb-2"></div>
              <div>
                {(() => {
                  const [first, ...rest] = item.title.split(' ');
                  return (
                    <p className="text-black text-lg">
                      {first}<br />
                      {rest.join(' ')}
                    </p>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-extrabold">
          Sponsors/Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:mx-24 gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-8">
              <Image src={side} alt={""} />
              <div>
                <Image src={mssn} alt={""} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
