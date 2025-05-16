// src/pages/index.js
import LandingSection from '@/components/home-page/LandingSection'
import TicketSection from '@/components/home-page/TicketSection'
import TotalTicketSection from '@/components/home-page/TotalTicketsSection'
import FeedBackSection from '@/components/home-page/FeedBackSection'
import SfcGear from '@/components/home-page/SfcGear'
import SupportSection from '@/components/home-page/SupportSection'
import SponsorsSection from '@/components/home-page/SponsorSection'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
     <Head>
        {/* Basic tags */}
        <title>SFN 2025 – Official Solar Fight Night Website</title>
        <meta
          name="description"
          content="Join us for SFN 2025: the ultimate entertainment experience with electrifying performances, community-driven impact, and official merch."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="SFN 2025 – Official Solar Fight Night Website" />
        <meta
          property="og:description"
          content="Experience mind‑blowing performances and support renewable energy initiatives at Solar Fight Night 2025."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/" />
        <meta property="og:image" content="https://your-domain.com/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SFN 2025 – Official Solar Fight Night Website" />
        <meta
          name="twitter:description"
          content="Get your tickets for SFN 2025 and join thousands of fans for a night to remember."
        />
        <meta name="twitter:image" content="https://your-domain.com/twitter-image.png" />

        {/* Optional: favicon, theme-color, etc. */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

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
