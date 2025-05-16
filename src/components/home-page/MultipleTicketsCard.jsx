// src/components/home-page/MultipleTicketsCard.js
import Image from 'next/image'
import Button from '@/components/fields/button'

export default function MultipleTicketsCard({
  imgSrc,    // a string, e.g. "/photos/multi1.png"
  title,
  date,
  location,
}) {
  return (
    <div className="w-full max-w-[365px] h-[490px] text-white rounded-[20px] mx-auto flex flex-col items-center space-y-4">
      
      {/* Image Section */}
      <div className="relative w-full h-[350px] p-2">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="absolute left-0 top-0 z-10 rounded-xl object-cover"
        />

        {/* Yellow Info Box */}
        <div className="relative z-20 bg-primary p-5 flex gap-x-7 items-center rounded-[15px] text-black shadow-md">
          <div className="font-medium leading-6 space-y-1">
            <div>Date</div>
            <div>Location</div>
          </div>
          <div className="font-medium text-[18px] leading-6 space-y-1">
            <div>:</div>
            <div>:</div>
          </div>
          <div className="font-medium text-[18px] leading-6 space-y-1">
            <div>{date}</div>
            <div>{location}</div>
          </div>
        </div>
      </div>

      {/* Event Title */}
      <div className="text-center [font-size:clamp(24px,2vw,28px)] font-semibold">
        {title}
      </div>

      {/* CTA Button */}
      <Button
        text="Get Your Ticket Now"
        height="h-[46px]"
        width="w-[280px]"
        bgColor="bg-transparent"
        textColor="text-white"
        textSize="text-[16px]"
        border="border-[1px]"
        borderColor="border-white"
      />
    </div>
  )
}
