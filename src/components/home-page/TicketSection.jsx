// src/components/home-page/TicketSection.js
import MultipleTicketsCard from '@/components/home-page/MultipleTicketsCard'
import SingleTicketsCard   from '@/components/home-page/SingleTicketCard'

const tickets = [
  {
    imgSrc: '/photos/multi1.png',
    date: 'April 12, 2025',
    location: 'Los Angeles, CA',
    title: 'SFC Music Fest 2025',
  },
  {
    imgSrc: '/photos/multi2.png',
    date: 'June 8, 2025',
    location: 'Miami, FL',
    title: 'SFC Dance Battle Royale',
  },
  {
    imgSrc: '/photos/multi3.png',
    date: 'August 22, 2025',
    location: 'New York, NY',
    title: 'SFC Rock & Roll Night',
  },
]

export default function TicketSection() {
  return (
    <section className="px-4 py-12 flex flex-col gap-y-14 text-white rounded-xl max-w-screen-xl mx-auto">
      <h2 className="text-[36px] sm:text-3xl font-bold text-center">
        EXPERIENCE THE BEST OF SFC LIVE!
      </h2>

      <div className="flex flex-wrap gap-8">
        {tickets.map((t, idx) => (
          <MultipleTicketsCard
            key={idx}
            imgSrc={t.imgSrc}
            date={t.date}
            location={t.location}
            title={t.title}
          />
        ))}

        {/*
        If you need the single‑ticket variant later, you can uncomment this:
        <SingleTicketsCard
          imgSrc="/photos/multi1.png"
          title="Event Coming Soon!"
          date="April 12, 2025"
          location="Los Angeles, CA"
          description="Join us for an unforgettable music festival featuring top artists and bands from around the world. Experience live performances, food trucks, and a vibrant atmosphere."
          // buttonSeen={false}
        />
        */}
      </div>
    </section>
  )
}
