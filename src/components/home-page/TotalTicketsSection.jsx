// src/components/home-page/TotalTicketSection.js
import Image from 'next/image'
import Button from '@/components/fields/button'
import TotalTicketSold from '@/components/home-page/TotalTicketSold'

const stats = [
  {
    backgroundSrc: '/icons/ButterflyBack.png',
    iconSrc:       '/icons/Butterfly.png',
    heading:       'TOTAL TICKETS SOLD',
    count:         '28,450+',
    subText:       'Thousands joining the ultimate entertainment experience!',
    bgColor:       'bg-secondary',
    alt: "Butterfly",
  },
  {
    backgroundSrc: '/icons/FlowerBack.png',
    iconSrc:       '/icons/Flower.png',
    heading:       'TOTAL REVENUE COLLECTED',
    count:         '$1,375,620',
    subText:       'Fans contributing to an unforgettable event with SCF!',
    bgColor:       'bg-secondary',
    alt: "Flower",

  },
]

export default function TotalTicketSection() {
  return (
    <section className="relative w-full min-h-screen flex justify-center md:p-[100px] nd:p-[50px] xs:p-[30px] xxxs:p-[10px]">
      {/* Top half colored background */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-primary home-totalticketsold-mask" />

      <div className="relative z-10 flex flex-col w-full justify-evenly items-center gap-12">
        {/* Header */}
        <div className="text-black flex flex-col justify-center items-center max-w-[730px] text-center px-4">
          <h2 className="text-[28px] font-bold uppercase">
            SFC 2025: Witness the Energy Unfold!
          </h2>
          <p className="text-[16px] font-normal max-w-[575px]">
            Our event is growing bigger each year! Check out the latest stats of
            ticket sales and revenue.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-8 justify-between items-center w-full flex-wrap">
          {stats.map((stat, idx) => (
            <TotalTicketSold
              key={idx}
              backgroundImage={stat.backgroundSrc}
              iconImage={stat.iconSrc}
              heading={stat.heading}
              count={stat.count}
              subText={stat.subText}
              bgColor={stat.bgColor}
              alt={stat.alt}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col justify-center items-center gap-y-8 text-center">
          <p className="text-white text-base">
            Be part of something unforgettable! Join thousands of music lovers,
            dance enthusiasts,
            <br className="hidden sm:block" />
            and event‑goers at SFN 2025.
          </p>
          <Button
            text="Get Your Ticket Now"
            height="h-[48px]"
            width="w-[238px]"
            bgColor="bg-primary"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  )
}
