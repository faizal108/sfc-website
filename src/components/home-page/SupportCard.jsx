// src/components/home-page/SupportCard.jsx
'use client'

import Image from 'next/image'

export default function SupportCard({
  imageSrc,       // <-- expect this prop
  title,
  description,
  showButton = true,
  locationShow = true,
  location,
  buttonText = 'Donate',
  onDonateClick,
}) {
  return (
    <div className="p-4 w-[270px] sm:w-[280px] md:w-[300px] text-white flex flex-col items-center">
      {/* Image section */}
      <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center">
        {locationShow && (
          <p className="text-primary text-[16px] font-[400] mb-1">
            {location}
          </p>
        )}
        <h2 className="text-[20px] sm:text-xl font-semibold mb-1">
          {title}
        </h2>
        <p className="text-[16px] sm:text-base font-normal">
          {description}
        </p>
        {showButton && (
          <button
            onClick={onDonateClick}
            style={{
              borderTopLeftRadius: '15px',
              borderBottomRightRadius: '15px',
            }}
            className="bg-transparent border border-primary px-4 py-2 mt-4"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}
