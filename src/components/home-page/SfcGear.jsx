// src/components/home-page/SfcGear.js
import SfcCard from '@/components/home-page/GearCard'

const gearItems = [
  {
    imageSrc: '/photos/t-shirt.png',
    title: 'SFC 2025 LIMITED EDITION T-SHIRT',
    subtitle: 'PREMIUM FABRIC WITH BOLD EVENT BRANDING.',
  },
  {
    imageSrc: '/photos/cap.png',
    title: 'SFC LOGO SNAPBACK CAP',
    subtitle: 'STYLISH HEADWEAR FOR TRUE SFC FANS.',
  },
  {
    imageSrc: '/photos/hoodie.png',
    title: 'COLLECTOR’S HOODIE SFC',
    subtitle: 'COZY, SLEEK, AND A MUST-HAVE FOR SUPPORTERS.',
  },
  {
    imageSrc: '/photos/bag.png',
    title: 'SFC EVENT BACKPACK',
    subtitle: 'SPACIOUS, DURABLE, AND PERFECT FOR EVERYDAY USE.',
  },
]

export default function SfcGear() {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 rounded-2xl bg-white home-gear-mask">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black">
          OFFICIAL SFC GEAR
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 place-items-center">
        {gearItems.map((item, idx) => (
          <SfcCard
            key={idx}
            imageSrc={item.imageSrc}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  )
}
