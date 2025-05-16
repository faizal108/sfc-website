// src/components/cards/SponsorCard.jsx
import Image from 'next/image'

export default function SponsorCard({
  showTopHeading = false,
  showDescription = false,
  sponsors = [],
  topHeading,
  title,
  description,
}) {
  return (
    <div className="bg-black text-white py-10 px-4 text-center">
      {showTopHeading && (
        <h4 className="text-primary text-sm font-semibold tracking-widest uppercase">
          {topHeading}
        </h4>
      )}

      <h2 className="text-3xl font-bold mt-2 mb-4 uppercase">
        {title}
      </h2>

      {showDescription && (
        <p className="max-w-3xl mx-auto text-sm text-gray-300">
          {description}
        </p>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-6 w-full mx-auto">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="
              bg-white rounded-xl p-4 flex items-center justify-center
              shadow hover:scale-105 transition
              w-[140px] h-[130px] sm:w-[160px] sm:h-[150px]
              md:w-[180px] md:h-[170px] lg:w-[200px] lg:h-[185px]
            "
          >
            <Image
              src={sponsor.logoSrc}
              alt={`Sponsor ${idx + 1}`}
              width={160}
              height={140}
              className="object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
