import React from 'react'

const benefits = [
  {
    img: '/bins1.jpg',  
    title: '🚛 Same-Day Delivery & Pick-Up',
    desc: 'Don’t wait around! We offer fast, same-day delivery and flexible pick-up times so your project runs on schedule.'
  },
  {
    img: '/bin4.jpg',
    title: '💲 Transparent & Affordable Pricing',
    desc: 'No hidden fees. No surprises. Just simple, upfront pricing that beats the competition.'
  },
  {
    img: '/bins3.jpg',  
    title: '♻️ Eco-Friendly Waste Disposal',
    desc: 'We care about the environment. Your waste is sorted and recycled wherever possible, reducing landfill impact.'
  },
  {
    img: '/bins2.jpg',  
    title: '🛠️ Bins for Every Job',
    desc: 'From small household clean-ups to large construction projects, we’ve got skip bins in all sizes to suit your needs.'
  },
]

function BenefitItem({ img, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition hover:shadow-2xl hover:-translate-y-1 duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay icon */}
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 6v.01" />
          </svg>
        </div>
      </div>
      {/* Text */}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function Benefits() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-0 w-64 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#34D399" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#6EE7B7" />
        </svg>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900 mb-14">
          Save Time. Save Money.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <BenefitItem key={i} {...b} />
          ))}
        </div>
      </div>
    </section>
  )
}
