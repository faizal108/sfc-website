// src/components/home-page/LandingSection.js
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/fields/button'

export default function LandingSection() {
  return (
    <section className="relative w-full h-screen overflow-x-hidden home-landing-mask">
      {/* Background image: using next/image with fill for auto optimization */}
      <div className="absolute inset-0">
        <Image
          src="/photos/ihj.jpg"
          alt="SFN 2025 Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4 gap-[50px] w-full max-w-[1200px] mx-auto top-1/2 -translate-y-1/2">
        <h1 className="uppercase w-full [line-height:clamp(50px,5vw,70px)] [font-size:clamp(40px,5vw,60px)] font-bold">
          SFN 2025 – The Ultimate Entertainment Experience Is Here!
        </h1>

        <p className="w-full leading-[32px] max-w-[920px] text-[22px] font-normal">
          Get ready for a night filled with mind‑blowing performances,
          electrifying music, and an atmosphere like no other! The countdown to
          SFN 2025 has begun. Don’t miss your chance to be part of the action.
        </p>

        <Link href="/ticket" passHref>
          <Button text="Buy Tickets Now" height="h-[48px]" width="w-[200px]" />
        </Link>
      </div>
    </section>
  )
}
