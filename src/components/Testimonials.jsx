import React from 'react'

const reviews = [
  {
    name: 'Alex Johnson',
    source: 'Google Review',
    text:
      'Express Skip Bins Melbourne, never let me down. The team is professional and deliveries are always on time. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'Eliana Aliaga',
    source: 'Google Review',
    text:
      'Hired a skip last month, service from booking to pickup was great. Friendly staff and hassle-free experience. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Shane Grahovac',
    source: 'Google Review',
    text:
      'My call was answered promptly and arranging a pickup was easy. Bin delivered and taken back as requested. Great company to deal with.',
    rating: 5,
  },
  {
    name: 'Sophie Turner',
    source: 'Google Review',
    text:
      'Affordable rates and super quick delivery. The driver placed the bin perfectly. Will book again for our next project.',
    rating: 5,
  },
]

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-1 text-green-600" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.033a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.033a1 1 0 00-1.175 0l-2.8 2.033c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-5 py-16">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          What Our <span className="text-green-600">Customers</span> Say
        </h2>

        <div className="mt-10 relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar" role="list">
            {reviews.map((r, idx) => (
              <article key={idx} className="snap-start shrink-0 w-[320px] sm:w-[380px] md:w-[420px] bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="text-green-600 text-4xl">“</div>
                <p className="mt-2 text-slate-700 leading-relaxed">{r.text}</p>
                <div className="mt-5">
                  <div className="font-semibold text-slate-900">{r.name}</div>
                  <div className="text-sm text-slate-500">{r.source}</div>
                </div>
                <div className="mt-3"><StarRow count={r.rating} /></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
