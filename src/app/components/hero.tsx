"use client";

import Image from "next/image";
import tqc from "../../../public/tqc.svg";
import basmad from "../../../public/basmad.svg";
import { Amiri_Quran, Cinzel } from "next/font/google";
import quraan from "@/../../public/quran.svg";
import { Button } from "@/components/ui/button";
// import { Cinzel } from "next/font/google";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu } from "lucide-react";
// import date from "@/../../public/date.svg";
import time from "@/../../public/time.svg";
import location from "@/../../public/location.svg";
import { useSplitTextAnimation } from "./split";

const amiri = Amiri_Quran({ subsets: ["arabic"], weight: "400" });
const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });

interface INav {
  href: string;
  name: string;
}

const navList: INav[] = [
  { href: "/schedule", name: "Schedule" },
  { href: "/team", name: "Team" },
  { href: "/gallery", name: "Gallery" },
];

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quranRef = useRef<HTMLHeadingElement>(null);
  const crescendoRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useSplitTextAnimation(quranRef, 0);
  useSplitTextAnimation(crescendoRef, 0.5);
  useSplitTextAnimation(taglineRef, 1);

  return (
    <>
      <div className="min-h-screen relative bg-[#101028] text-white">
        {/* <Container className="">
                    <FadeIn> */}
        <div>
          <nav className="relative z-20 flex justify-between items-center px-3 py-4 md:px-24">
            <div className="flex items-center gap-4">
              {/* <motion.img
                src={basmad.src}
                alt="Basmad"
                className="h-10 md:h-12 block md:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              /> */}
              {/* <motion.div
                className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              > */}
              <img
                src="https://res.cloudinary.com/dt7jocfde/image/upload/tqc_aiymlx.svg"
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              {/* </motion.div> */}
            </div>

            <div className="hidden md:flex gap-8">
              {navList.map(({ name, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white text-base tracking-wide hover:text-blue-300 transition-all"
                  // initial={{ opacity: 0, y: -10 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {name}
                </a>
              ))}
            </div>

            {/* <motion.div
              className="hidden sm:flex"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            > */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="md:block hidden bg-[#353D59] text-white text-base font-normal border-[0.8px] border-white transition-all"
              >
                <a href="https://dynaraise.com/thequrancrescendo">Donate</a>
              </Button>
              <Button
                variant="outline"
                className="bg-[#CBEFFB] text-[#0017AF] hover:text-white text-base font-normal hover:bg-blue-700/80 transition-all"
              >
                <a href="https://bitooqoh.com/explore/quran-crescendo">
                  Get Tickets
                </a>
              </Button>
            </div>
            {/* </motion.div> */}

            <button
              className="md:hidden z-40 relative"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!isOpen && <Menu size={28} />}
            </button>
          </nav>
        </div>
        {/* <AnimatePresence> */}
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed  top-0 right-0 w-3/4 h-full bg-[#1A1A40] z-30 shadow-2xl flex flex-col p-6 space-y-6"
          >
            <X
              size={28}
              className="absolute right-4"
              onClick={() => setIsOpen(false)}
            />
            {navList.map(({ name, href }, index) => (
              <motion.a
                key={index}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white uppercase font-medium tracking-widest hover:text-blue-400 w-fit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {name}
              </motion.a>
            ))}
            <Button
              variant="outline"
              className="bg-[#CBEFFB] text-[#0017AF] hover:bg-blue-700/80 transition-all"
            >
              <a href="https://dynaraise.com/thequrancrescendo" target="_blank">
                Donate
              </a>
            </Button>
          </motion.div>
        )}
        {/* </AnimatePresence> */}
        {/* </div> */}
        <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-20 pb-12">
          <div className="text-center">
            <p
              className={`${cinzel.className} text-xl font-extrabold md:text-2xl text-[#CBEFFB]/90`}
            >
              A Global Qur'an Conference
            </p>
            {/* <div className="inline-flex items-center justify-center">
                            <h1 ref={quranRef} className={`${cinzel.className} text-4xl md:text-6xl lg:text-7xl text-[#CBEFFB] font-serif tracking-wide`}>
                                THE QUR'AN
                            </h1>
                            <div className="rectangle-with-pentagon-end">
                                <span className="ml-2 text-lg font-bold md:text-xl bg-[#CBEFFB] text-black px-1 py-1 align-top">2.0</span>
                            </div>

                        </div>
                        <div className="mt-4">
                            <h2 ref={crescendoRef} className={`${cinzel.className} text-6xl text-base md:text-8xl lg:text-9xl text-[#CBEFFB] font-extrabold tracking-wider`}>
                                CRESCENDO
                            </h2>
                        </div>
                        <p ref={taglineRef} className={`${cinzel.className} mt-6 text-xl md:text-2xl text-[#CBEFFB]/90 max-w-3xl mx-auto`}>
                            ...Where Hearts Converge
                        </p> */}
            <img
              src="https://res.cloudinary.com/dt7jocfde/image/upload/TQCsign_oqfbtv.svg"
              alt="tqcsign"
            />
          </div>

          <div className="mt-20">
            <div className="flex flex-col xl:flex-row gap-20">
              <img
                src="https://ik.imagekit.io/sanni507/hero1.svg?updatedAt=1749421871828"
                className=""
                alt="conference-gallery"
              />
              <img
                // src="/hero2.svg"
                src="https://ik.imagekit.io/sanni507/hero2.svg?updatedAt=1749421873701"
                className="hiden xlblock"
                alt="conference-gallery"
              />
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center justify-center gap-12 text-center text-[#CBEFFB] text-2xl lg:flex-row lg:gap-28">
              <div className="flex flex-col items-center gap-4">
                <img src="/date.svg" alt="Date" />
                <h1>25th - 29th of June, 2025</h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src="/time.svg" alt="Time" />
                <h1>8:00 AM - 4:00 PM</h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image src={location} alt="Location" />
                <h1 className="max-w-80">
                  Bayelsa Hall, Digital Bridge Institute, Cappa, Oshodi, Lagos
                </h1>
              </div>
            </div>
          </div>

          <div className="relative z-10 md:px-12 lg:px-36 ">
            <div className="xl:w-[806px] w-full relative bg-white xl:m-20 mt-16 p-2 md:p-10 flex flex-col lg:flex-row items-center gap-12 shadow-lg xl:-mb-48 md:rounded-[20px]">
              <div className="flex-1 z-20">
                <div
                  className={`${amiri.className} md:text-2xl md:text3xl text-black font-arabic text-center lg:text-right leading-loose mb-4`}
                >
                  الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ
                  أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                </div>
                <p className="text-[#1E1E1E] text-base md:text-lg text-center mt-4 px4 md:px12 lg:px24">
                  Those who have believed and whose hearts are assured by the
                  remembrance of Allah. Unquestionably, by the remembrance of
                  Allah, hearts are reassured.
                </p>
              </div>

              <div className="hidden lg:block w-1 h-12 mt-6 bg-[#0017AF]"></div>

              <div className="max-w-xs mt-6 flex justify-center z-1">
                <img
                  src="https://res.cloudinary.com/dt7jocfde/image/upload/quran_gfj9se.svg"
                  alt="Qur'an"
                  className="h-auto"
                />
              </div>
            </div>
          </div>
        </main>
        {/* </FadeIn>
                </Container> */}
      </div>
    </>
  );
};
