'use client'
import { Phone, Mail, Youtube, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import cres from '@/../../public/cres.svg'
import { InstagramLogoIcon } from '@radix-ui/react-icons'

export const Footer = () => {
  const socialLinks = [
    {
      icon: InstagramLogoIcon,
      href: '#',
      label: 'Instagram'
    },
    {
      icon: XIcon,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: Youtube,
      href: '#',
      label: 'YouTube'
    },
    {
      icon: Phone,
      href: '#',
      label: 'WhatsApp'
    }
  ]

  return (
    <footer className="py-8 bg-[#101028]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Link href="/" className="text-[#0000FF] font-serif">
              <div className="flex items-center gap-1">
                <Image src={cres} alt='' />
              </div>
            </Link>
          </div>

          <div className="text-lg text-white text-center">
            © 2024  <span className='font-bold'>The Qur'an Crescendo</span> for Basmad | All Rights Reserved
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex flex-col items-end text-sm text-white">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+234 (0) 8123456789, +234 (0) 9012345678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@basmad.com" className="hover:text-[#0000FF]">
                  info@basmad.com
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}