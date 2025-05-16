// src/components/home-page/TotalTicketSold.js
import Image from 'next/image'

export default function TotalTicketSold({
  backgroundImage,
  iconImage,
  heading,
  count,
  subText,
  bgColor = 'bg-secondary',
}) {
  return (
    <div className={`relative flex-grow min-w-80 sm:min-h-[240px] min-h-[200px] ${bgColor} rounded-tr-[40px] rounded-bl-[40px] flex justify-start items-center px-5 py-6 overflow-hidden`}>
      {/* Background */}
      {backgroundImage && (
        <div className="absolute top-[30px] right-[30px] w-24 h-24">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Icon & Text */}
      <div className="flex gap-x-[25px]">
        {iconImage && (
          <div className="w-[50px] h-[50px] relative">
            <Image src={iconImage} alt="" fill className="object-contain" />
          </div>
        )}
        <div className="text-white w-[350px]">
          {heading && <h3 className="text-[16px] font-medium">{heading}</h3>}
          {count && <h2 className="[font-size:clamp(40px,5vw,50px)] font-bold">{count}</h2>}
          {subText && <p className="[font-size:clamp(14px,5vw,18px)] font-light">{subText}</p>}
        </div>
      </div>
    </div>
  )
}
