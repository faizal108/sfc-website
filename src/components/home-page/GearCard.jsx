// src/components/home-page/SfcCard.js
import Image from 'next/image'

export default function SfcCard({ imageSrc, title, subtitle }) {
  return (
    <div className="w-full max-w-[565px] flex flex-col items-center p-4 mx-auto">
      <div className="relative w-[270px] h-[270px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-lg object-contain"
          priority={false}
        />
      </div>
      <div className="text-center mt-6 px-2">
        <h2 className="text-black text-[30px] sm:text-[24px] md:text-[28px] font-bold">
          {title}
        </h2>
        <p className="text-black text-[18px] sm:text-[16px] mt-2 font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
