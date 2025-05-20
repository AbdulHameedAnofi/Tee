"use client";

import image1 from "../../../public/newsletter.svg";
import image2 from "../../../public/ticket.svg";
import mssn from "@/../../public/mssn.svg";
import side from "@/../../public/sidemssn.svg";
import Image from "next/image";

import React, { useState, useEffect, useRef } from "react";

interface dataType {
  title: string;
  value: string;
}

const data: dataType[] = [
  { title: "Attendees", value: "1000+" },
  { title: "Scholars & Thought Leaders", value: "10+" },
  { title: "Positive Ratings", value: "85%" },
  { title: "Anticipate 2.0 Edition", value: "96%" },
];

const logos = [mssn, side]
const partners = Array.from({length: 6 }, (_,i)=>({
  src: logos[i%2],
  alt: i%2 === 0? "MSSN": "Side MSSN"
}))

const useCountUp = (target: string, start = 0, duration = 1000) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const match = target.match(/^(\d+)(\D*)$/);
    if (!match) return setDisplay(target);

    const [_, numberStr, suffix] = match;
    const number = parseInt(numberStr, 10);
    const steps = 30;
    const increment = Math.ceil(number / steps);
    let current = start;
    let count = 0;

    const interval = setInterval(() => {
      current += increment;
      count++;
      if (current >= number || count >= steps) {
        clearInterval(interval);
        setDisplay(number.toString() + suffix);
      } else {
        setDisplay(current.toString() + suffix);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target, start, duration]);

  return display;
};

const useTypewriter = (target: string, speed = 50, enabled = true) => {
  const [text, setText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setText("");
      return;
    }

    setText("");
    index.current = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + target.charAt(index.current));
      index.current++;

      if (index.current >= target.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, enabled]);

  return text;
};

export const Logs = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      data.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * 600);
      });
    }
  }, [isSmallScreen]);

  return (
    <div className="mx-auto px-4 py-16 bg-[#F0F5F6]">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold">
          TQC 1.0 in Numbers
        </h2>

        {/* {isSmallScreen ? (
          <div className="flex flex-col items-center justify-center gap-8">
            {data.map((item, index) => {
              const value = visibleItems.includes(index)
                ? useCountUp(item.value)
                : "0";

              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 justify-center transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h3 className="text-4xl font-bold text-center">{value}</h3>
                  <p className="text-lg text-center">
                    <div className="w-[5px] h-12 bg-[#0017AF] my-3"></div>
                    {item.title.split(" ")[0]}
                    <br />
                    {item.title.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              );
            })}
          </div>
        ) : ( */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:mx-24">
            {data.map((item, index) => {
              const value = useCountUp(item.value);
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3"
                >
                  <h3 className="text-6xl font-light">{value}</h3>
                  <div className="w-[5px] h-12 bg-[#0017AF] mb-2"></div>
                  <p className="text-black text-lg">
                    {item.title.split(" ")[0]}
                    <br />
                    {item.title.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              );
            })}
          </div>
        {/* )} */}
      </div>

      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-semibold">
          Sponsors/Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 lg:mx-24 gap-6">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center gap-8">
              <Image src={partner.src} alt={partner.alt} />
            </div>
          ))}
          {/* {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-8"
            >
              <Image className='hidden md:block' src={side} alt="Sponsor logo" />
              <Image src={mssn} alt="Partner logo" />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
