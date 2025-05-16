// src/components/home-page/SponsorsSection.jsx
import SponsorCard from '@/components/cards/sponsorCard'

const sponsorsList = [
  { logoSrc: '/photos/sponsor1.png' },
  { logoSrc: '/photos/sponsor2.png' },
  { logoSrc: '/photos/sponsor3.png' },
  { logoSrc: '/photos/sponsor4.png' },
  { logoSrc: '/photos/sponsor5.png' },
  { logoSrc: '/photos/sponsor6.png' },
]

export default function SponsorsSection() {
  return (
    <section>
      <SponsorCard
        showTopHeading={false}
        showDescription={false}
        sponsors={sponsorsList}
        title="Our Sponsors"
      />
    </section>
  )
}
