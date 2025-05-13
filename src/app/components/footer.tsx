"use client";
import { Phone, Mail, Youtube, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cres from "@/../../public/cres.svg";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  const socialLinks = [
    {
      icon: InstagramLogoIcon,
      href: "#",
      label: "Instagram",
    },
    {
      icon: XIcon,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
    },
    {
      icon: Phone,
      href: "#",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="py-10 bg-[#101028] px-[106px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center">
              <Link href="/" className="text-[#0000FF] font-serif">
                <div className="flex items-center gap-1">
                  <Image src={cres} alt="" />
                </div>
              </Link>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-white hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-3 h-3" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-base text-white text-center">
            © 2024 <span className="font-medium">The Qur'an Crescendo</span> |
            All Rights Reserved
          </div>

          <div className="fle flex-col items-end gap-4">
            <div className="flex flex-col items-end text-lg text-white">
              <a href="tel:+2348123456789" className="hover:text-[#0000FF]">
                +234 (0) 8123456789
              </a>
              <a href="tel:+2349012345678" className="hover:text-[#0000FF]">
                +234 (0) 9012345678 
              </a>
              <a
                href="mailto:quran.crescendo@gmail.com"
                className="hover:text-[#0000FF]"
              >
                quran.crescendo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
