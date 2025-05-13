"use client";

import image1 from "../../../public/car1.svg";
import image2 from "../../../public/car2.svg";
import image3 from "../../../public/car3.svg";
import image4 from "../../../public/car4.svg";

import React, { useState, useEffect } from "react";

interface DiscussionSlide {
  title: string;
  content: string;
  image: string;
}

const discussionSlides: DiscussionSlide[] = [
  {
    title: "Heart Piercing Discussions",
    content:
      "Imagine a gathering where the words of Allah resonate through the air, touching your soul in ways you never thought possible. At The Qur’an Crescendo, our session of heart-piercing discussions, led by renowned scholars, will leave you captivated and inspired. Join us for a unique experience that will forever change your perspective on the Qur'an and its profound impact on your life.",
    image: image1.src,
  },
  {
    title: "Exploring Meanings of The Qur’an",
    content:
      "Embark on a journey of spiritual discovery as our expert speakers delve into the depths of the Qur'an, guiding you through the intricate meanings and timeless wisdom contained within its verses. At The Qur’an Crescendo you will gain a deeper understanding of Allah's message and its relevance to your life today.",
    image: image2.src,
  },
  {
    title: "Understanding & Applying the Qur’an",
    content:
      "Discover the practical wisdom and guidance found within the Qur'an where you will learn how to integrate its teachings into your daily life and unlock the potential for spiritual growth and transformation. Through engaging discussions and interactive workshops, you will find valuable insights to deepen your connection with the Words of Allah.",
    image: image3.src,
  },
  {
    title: "Enjoying Beautiful Recitations",
    content:
      "Experience the beauty and power of the Qur'an through captivating recitations from renowned qaris as they share their talents to transport you to a realm of spiritual tranquillity. Immerse yourself in the melodic rhythms and heartfelt expressions of the Words of Allah at The Qur’an Crescendo.",
    image: image4.src,
  },
];
export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      const timer = setInterval(() => {
        setCurrentSlide(
          (prevSlide) => (prevSlide + 1) % discussionSlides.length
        );
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isSmallScreen]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="mx-auto px-4 py-32 bg-[#101028]">
      {isSmallScreen ? (
        <div className="flex flex-col space-y-12">
          {discussionSlides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="flex gap-4 mb-4">
                  <div className="w-1 bg-white" />
                  <h2 className="text-2xl text-white font-medium">
                    {slide.title}
                  </h2>
                </div>
                <p className="text-white leading-relaxed">{slide.content}</p>
              </div>
              <div className="w-full sm:w-1/3 relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative lg:mx-28">
          {discussionSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex gap-4 mb-6">
                    <div className="w-1 bg-white" />
                    <h2 className="text-4xl text-white font-bold">
                      {(() => {
                        const [first, ...rest] = slide.title.split(" ");
                        return (
                          <>
                            {first}
                            <br />
                            {rest.join(" ")}
                          </>
                        );
                      })()}
                    </h2>
                  </div>
                  <p className="text-white leading-relaxed line-clamp-5">
                    {slide.content}
                  </p>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-14 cursor-pointer">
            {discussionSlides.map((_, index) => (
              <button
                key={index}
                className={`w-1/5 rounded-full cursor-pointer ${
                  index === currentSlide
                    ? "bg-white h-0.9"
                    : "bg-gray-600 h-0.5"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
