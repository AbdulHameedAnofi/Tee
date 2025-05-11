'use client'


import Image from 'next/image'
import arrow from '@/../../public/arrow.svg'

interface PerkCardProps {
  title: string
  descriptions: string[]
  color?: string
}

export const PerkCard: React.FC<PerkCardProps> = ({
  title,
  descriptions,
  color = '#000000',
}) => {
  return (
    <div className="bg-white rounded-3xl p-10 h-full flex flex-col justify-between">
      <h2 className="md:text-2xl mdtext-3xl font-semibold tracking-tight" style={{ color }}>
        {title}
      </h2>
      <div className="mt-4 text-base text-[#646363] space-y-4">
        {descriptions.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}


export const Perks = () => {
  const perksData = [
    {
      title: 'Where Hearts Converge',
      color: '#0017AF',
      descriptions: [
        'The Qur\'an Crescendo is an annual conference created to celebrate the Qur\'an, showcase the different aspects of it, and explore its transformative power in our lives.',
        'It brings together top scholars & hearts from all over the world for a one-day experience that takes people closer to The Book.'
      ]
    },
    {
      title: 'An Experience Like Never Before',
      color: '#629DFF',
      descriptions: [
        'The Qur\'an Crescendo is an annual conference created to celebrate the Qur\'an, showcase the different aspects of it, and explore its transformative power in our lives.',
        'It brings together top scholars & hearts from all over the world for a one-day experience that takes people closer to The Book.'
      ]
    },
    {
      title: 'The Greatest Miracle',
      color: '#101010',
      descriptions: [
        'The biggest tragedy facing Muslims all over the world today is the lack of understanding & application of the Qur\'an.',
        'We have the greatest miracle ever given to mankind, yet we\'ve not been able to utilize its transformative power in our daily life. This is the problem The Qur\'an Crescendo is solving.'
      ]
    }
  ]

  return (
    <div className="mx-auto px-10 py-16 md:py-24 bg-[#F0F5F6]">
      <div className="mx-auto space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-48">
          <div className="flex items-start gap-6 rounded-3xl p-6">
            <Image className='' src={arrow} alt='target' />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              What To Look Forward To At The Qur'an Crescendo
            </h1>
          </div>
          {perksData.map((perk, index) => (
            <PerkCard
              key={index}
              title={perk.title}
              descriptions={perk.descriptions}
              color={perk.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
