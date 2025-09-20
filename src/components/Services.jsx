import React from 'react'

const services = [
  {
    title: '🏡 Residential Skip Bin Hire',
    desc: 'Perfect for spring cleaning, moving house, or getting rid of garden waste. We deliver bins right to your driveway so you can clear out clutter with ease.',
    img: '/s1.jpg',
  },
  {
    title: '👷‍♂️ Construction & Renovation Bins',
    desc: 'Heavy-duty bins built for concrete, bricks, timber, and rubble. Keep your job site clean and safe with same-day delivery and flexible pick-up schedules.',
    img: '/s2.jpg',
  },
  {
    title: '🏢 Commercial Skip Bin Hire',
    desc: 'From office cleanouts to ongoing waste management, we provide reliable skip bins for businesses of all sizes — no contracts, no hassle.',
    img: '/s3.jpg',
  },
  {
    title: '🌱 Green Waste Removal',
    desc: 'We don’t just dump — we recycle. Our team ensures that as much of your waste as possible is diverted from landfill, keeping costs down and helping the environment.',
    img: '/s4.jpg',
  },
]

function ServiceCard({ title, desc, img }) {
  return (
    <article className="
      group relative flex flex-col rounded-3xl border border-green-200 bg- shadow-sm overflow-hidden 
      transform transition duration-500 hover:shadow-lg hover:scale-[1.02]
    ">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-green-700/10 to-transparent" />
      </div>
      <div className="p-6 flex grow flex-col">
        <h3 className="text-xl md:text-2xl font-extrabold text-green-800">{title}</h3>
        <p className="mt-3 text-slate-700 flex-grow">{desc}</p>
        <div className="mt-6">
          <a 
            href="#book" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* animated blurred blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      {/* subtle grid background */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full opacity-10 text-green-200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-5 py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black text-center">Services</h2>
        <p className="mt-4 text-lg text-green-700 max-w-2xl text-center">
          Affordable, fast and reliable skip bin solutions for every project.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
