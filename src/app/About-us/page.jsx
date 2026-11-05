import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'

export default function AboutPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative isolate overflow-hidden">
        <img src="/about_us.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="max-w-screen-xl mx-auto px-5 py-20 md:py-28">
          <h1 className="text-white text-2xl md:text-3xl font-extrabold">About Express Skip Bins</h1>

          

          <p className="mt-6 max-w-2xl text-white/90 text-md leading-relaxed">
            At <span className='text-green-500'>Express Skip Bins</span> we're proud to be one of Melbourne's trusted skip bin hire services, providing reliable, affordable, and environmentally responsible waste management solutions for homes, construction sites, and businesses. We specialize in offering a wide range of skip bins to suit projects of any size, from small clean-ups to large-scale renovations.
          </p>

           <p className="mt-6 max-w-2xl text-white/90 text-md leading-relaxed">
            We believe that our relationship with customers is the foundation of our success, and that every great service begins with a great customer experience. That's why we prioritize clear communication, transparency, and friendly support at every step because when our customers are happy so we are.
          </p>

          <p className="mt-6 max-w-2xl text-white/90 text-md leading-relaxed">
            Email: admin@expressskipbins.com
            Address: 131 Greens Road Dandenong South, Victoria 3175
          </p>

          <div className="mt-8">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-500  text-slate-900 font-bold shadow">
              HIRE A SKIP
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

   
      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-black">Our Values</h2>
          <p className="mt-6 text-center max-w-5xl mx-auto text-slate-700 leading-relaxed">
            Express <span className='text-green-500'> Skip Bins Melbourne </span> began operation years ago and has grown to encompass recycling, commercial waste management, and skip bin services that advance the cause of enhancing the environment, leading the charge for a sustainable future, and contributing to the circular economy.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Customer Focused Approach', desc: 'We welcome and satisfy the needs of our customers as if they were part of our family. We are focused on building long-term partnerships with every customer through safety, quality, and reliability.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5s1.5-1.5 4.5-1.5 4.5 1.5 4.5 1.5M6.75 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM12 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM17.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              )},
              { title: 'Quality Above All', desc: 'We strive to achieve and maintain certifications in quality, environmental and health and safety protection and seek to exceed expectations for quality and service.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M9 6.75h9M9 9.75h9M9 18.75h9" />
                </svg>
              )},
              { title: 'Continuous Improvement', desc: 'We innovate and produce sustainable solutions in waste management by continuously improving technology, processes, and procedures.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-6.75-2.25 2.25M8.75 15.75 6.5 18m8.75 0-2.25-2.25M8.75 8.25 6.5 6" />
                </svg>
              )},
              { title: 'Integrity and Transparency', desc: 'We give transparent, unbiased advice and always do what is right for the environment and our customers.', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m10.5 0h-15m15 0A2.25 2.25 0 0118 11.25v7.5A2.25 2.25 0 0115.75 21h-7.5A2.25 2.25 0 016 18.75v-7.5A2.25 2.25 0 017.5 9m0 0h9" />
                </svg>
              )},
            ].map((card) => (
              <article key={card.title} className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8">
                <div className="mb-4">{card.icon}</div>
                <h4 className="text-2xl font-extrabold text-slate-900">{card.title}</h4>
                <p className="mt-3 text-slate-700 leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
    
  )
}


