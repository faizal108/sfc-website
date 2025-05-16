// src/components/home-page/FeedBackSection.js
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Button from "@/components/fields/button";

const feedbacks = [
  {
    text: "“SFN 2024 Was Simply Magical! The Energy, The Artists, The Crowd—It Was An Experience Of A Lifetime!”",
    name: "Alex R.",
  },
  {
    text: "Best Event I’ve Ever Attended! The Production Quality, The Performances, And The Atmosphere Were Top-Notch.",
    name: "Jessica M.",
  },
  {
    text: "Incredible lineup and unforgettable memories. I’m already looking forward to the next one!",
    name: "Michael T.",
  },
  {
    text: "Such an amazing event! Everything was well organized, and the vibe was just perfect the vibe was just perfect..",
    name: "Rachel B.",
  },
  {
    text: "Absolutely worth it. Met so many new people and enjoyed every moment! and enjoyed every moment!",
    name: "Chris L.",
  },
  {
    text: "Absolutely worth it. Met so many new people andand enjoyed every moment!and enjoyed every moment!",
    name: "Chris L.",
  },
];

export default function FeedBackSection() {
  const containerRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')    // ← fixed here!
  const [cardsPerSlide, setCardsPerSlide] = useState(1)

  // update cardsPerSlide on mount & resize
  useEffect(() => {
    const update = () => {
      setCardsPerSlide(window.innerWidth >= 768 ? 2 : 1)
      setActiveSlide(0)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalSlides = Math.ceil(feedbacks.length / cardsPerSlide)

  const scrollToSlide = (index) => {
    if (!containerRef.current) return
    const slideWidth = containerRef.current.offsetWidth
    containerRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
    setActiveSlide(index)
  }

  const goToNext = () => {
    if (activeSlide < totalSlides - 1) {
      setSlideDirection('next')
      scrollToSlide(activeSlide + 1)
    }
  }

  const goToPrev = () => {
    if (activeSlide > 0) {
      setSlideDirection('prev')
      scrollToSlide(activeSlide - 1)
    }
  }
  
  const visible = feedbacks.slice(
    activeSlide * cardsPerSlide,
    activeSlide * cardsPerSlide + cardsPerSlide
  );

  return (
    <section className="text-white px-4 py-16 flex flex-col items-center gap-10">
      <div className="text-center max-w-full gap-5">
        <h2 className="text-[36px] md:text-[32px] font-bold">
          SEE WHY THOUSANDS LOVE SFC!
        </h2>
        <p className="text-[18px] md:text-[16px] text-gray-300 mt-2 font-medium">
          SFC isn’t just an event—it’s a movement! Check out what our past
          attendees had to say about their experiences.
        </p>
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 w-full max-w-6xl no-scrollbar"
      >
        {visible.map((feedback, idx) => (
          <div
            key={`${activeSlide}-${idx}`}
            className={`
              p-6 flex flex-col justify-between
              ${cardsPerSlide === 2 ? "md:w-[48%]" : "w-full"}
              transition-all gap-y-5
              ${
                slideDirection === "prev"
                  ? "animate-fadeSlideIn"
                  : "animate-fadeSlideOut"
              }
            `}
          >
            <Image
              src="/icons/quote.png"
              alt="quote"
              width={56}
              height={56}
              className="max-w-14 max-h-14"
            />

            <p className="text-[22px] font-medium text-start leading-8">
              {feedback.text}
            </p>

            <div className="flex justify-start items-center gap-2">
              <span className="text-white font-medium text-[18px]">
                {feedback.name}
              </span>

              <div className="bg-white h-[2px] w-24" />

              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/icons/star.png"
                    alt="star"
                    width={16}
                    height={16}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots & Arrows */}
      <div className="flex justify-between items-center w-full max-w-6xl px-4 mt-4">
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === activeSlide ? "bg-white" : "bg-white opacity-30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={goToPrev}
            disabled={activeSlide === 0}
            className="w-10 h-10 rounded-full bg-primary text-black text-[23px]
                       flex justify-center items-center disabled:bg-opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            disabled={activeSlide === totalSlides - 1}
            className="w-10 h-10 rounded-full bg-primary text-black text-[23px]
                       flex justify-center items-center disabled:bg-opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl flex flex-col items-center gap-y-12">
        <p className="text-[26px] text-white font-light leading-9">
          Did you attend last year’s event? Share your experience with us and
          get featured!
        </p>
        <Button
          text="Get Your Ticket Now"
          height="h-[48px]"
          width="w-[238px]"
          bgColor="bg-primary"
          textColor="text-black"
        />
      </div>
    </section>
  );
}
