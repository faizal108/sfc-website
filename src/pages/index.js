// src/pages/index.js
import LandingSection from '@/components/home-page/LandingSection'
import TicketSection from '@/components/home-page/TicketSection'
import TotalTicketSection from '@/components/home-page/TotalTicketsSection'
import FeedBackSection from '@/components/home-page/FeedBackSection'
import SfcGear from '@/components/home-page/SfcGear'
import SupportSection from '@/components/home-page/SupportSection'
import SponsorsSection from '@/components/home-page/SponsorSection'

export default function HomePage() {
  return (
    <>
      <LandingSection />
      <TicketSection />
      <TotalTicketSection />
      <FeedBackSection />
      <SfcGear />
      <SupportSection />
      <SponsorsSection />
    </>
  )
}
