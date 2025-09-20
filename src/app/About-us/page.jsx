import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'

export default function AboutPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative isolate overflow-hidden">
        <img src="/about_hero.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="max-w-screen-xl mx-auto px-5 py-20 md:py-28">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold">About</h1>

          <h2 className="mt-6 text-white text-3xl md:text-4xl font-extrabold">For The Love Of Our Community</h2>

          <p className="mt-6 max-w-3xl text-white/90 text-lg leading-relaxed">
            As advocates for a more sustainable world, we have been busy in our local communities educating young kids about the importance of understanding better waste management practices such as recycling. We are committed to developing a program by 2025 dedicated to educating a broad range of students from pre-kindergarten right through to year 6.
          </p>

          <div className="mt-8 inline-flex items-start gap-3">
            <img src="/aussie_flag.png" alt="Aussie" className="w-10 h-10" />
            <div className="text-white font-extrabold">
              Proudly owned and loved by an Aussie Family
            </div>
          </div>

          <div className="mt-8">
            <a href="#book" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-amber-400 text-slate-900 font-bold shadow hover:bg-amber-500">
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/about/owner.jpg" alt="Owner" className="rounded-2xl shadow-lg" />
            <div className="rounded-2xl bg-green-700 text-white p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
              <h3 className="text-3xl md:text-4xl font-extrabold">At Xpress Skips our passion is the key to our success</h3>
              <p className="mt-4 leading-relaxed text-white/95">
                We pride ourselves on exceeding expectations and providing exceptional service. Our small business friendly approach and the varied range of waste solutions we provide has made us one of the leaders in the industry.
              </p>
              <p className="mt-4 leading-relaxed text-white/95">
                A healthy environment is vital for all of us. We aim to protect our environment for future generations by utilising the latest in technology and the most environmentally friendly collection and sorting methods to minimise the amount of waste that gets diverted to landfill.
              </p>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-8 items-center">
            <img src="/about/truck.jpg" alt="Fleet" className="rounded-2xl shadow-lg order-1 md:order-none" />
            <div className="rounded-2xl bg-green-700 text-white p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
              <h3 className="text-3xl md:text-4xl font-extrabold">45 Vehicles In Our Fleet Across Sydney</h3>
              <p className="mt-4 leading-relaxed text-white/95">
                As part of our commitment in servicing our customers waste management needs, we have invested in a state of the art fleet that expands across the Sydney region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold">Our Values</h2>
          <p className="mt-6 text-center max-w-5xl mx-auto text-slate-700 leading-relaxed">
            Xpress Industries began operation years ago and has grown to encompass recycling, commercial waste management, and skip bin services that advance the cause of enhancing the environment, leading the charge for a sustainable future, and contributing to the circular economy.
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


