import React from 'react'
import Header from '../../../components/Header'

export default function RubbishCollectionPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Rubbish Collection</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <div className="rounded-2xl bg-green-700 text-white p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Not enough rubbish to fill a skip?</h2>
            <p className="mt-3 text-white/95 text-lg">Order a rubbish collection instead. Only got a bit of stuff? Book a rubbish collection.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">12000+</div>
              <div className="text-slate-600">Trees planted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">5200+</div>
              <div className="text-slate-600">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900">Award-winning</div>
            </div>
          </div>

          <h3 className="mt-12 text-2xl md:text-3xl font-extrabold text-slate-900">How does Rubbish Collection work?</h3>
          <ol className="mt-6 grid md:grid-cols-2 gap-6 list-decimal list-inside text-slate-700">
            <li>Find your suburb & select Rubbish Removal services</li>
            <li>Upload images of your waste & get an accurate quote</li>
            <li>Let us know when you’re ready</li>
            <li>We’ll collect your rubbish & remove it responsibly</li>
          </ol>

          <div className="mt-10">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Let's estimate my Rubbish Collection</a>
          </div>

          <h3 className="mt-16 text-2xl md:text-3xl font-extrabold text-slate-900">Our Promise Guarantee</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { title: 'No Rip-offs', desc: 'We offer an accurate price. No Hidden Fees.' },
              { title: 'Easy Changes', desc: 'We collect your rubbish when you’re ready. Even when plans change.' },
              { title: 'Easy Cancellations', desc: 'Change your mind — No problems. We’ll cancel your collection free of charge.' },
            ].map((g) => (
              <article key={g.title} className="rounded-2xl border border-slate-200 p-6">
                <h4 className="text-xl font-extrabold text-slate-900">{g.title}</h4>
                <p className="mt-2 text-slate-700">{g.desc}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-16 text-2xl md:text-3xl font-extrabold text-slate-900">Let’s Discuss Rubbish Removal.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">Homeowners need rubbish removal services to dispose of waste easily... With various skip bin hire and rubbish removal options, choose what suits your needs for a clean home.</p>

          <h4 className="mt-10 text-xl font-extrabold text-slate-900">Understanding the Process</h4>
          <p className="mt-2 text-slate-700 leading-relaxed">Evaluate the amount and type of waste you have, choose the right skip size or removal service, book with a reputable provider, and follow guidelines for fill levels and waste types. Waste is then responsibly disposed of.</p>

          <h4 className="mt-8 text-xl font-extrabold text-slate-900">Collection and Sorting of Rubbish</h4>
          <p className="mt-2 text-slate-700 leading-relaxed">Residential and commercial areas use skips or pickup services. Collected rubbish is transported to facilities for recycling or disposal depending on its type and condition.</p>

          <h4 className="mt-8 text-xl font-extrabold text-slate-900">Different Types of Rubbish</h4>
          <ul className="mt-2 list-disc list-inside text-slate-700 space-y-1">
            <li>Household waste: food scraps, packaging, paper, plastic, glass</li>
            <li>Construction debris: concrete, bricks, wood, tiles, metals</li>
            <li>Green waste: grass clippings, leaves, branches, garden trimmings</li>
            <li>No hazardous materials: asbestos, chemicals, batteries, paint, food/biological waste, gas bottles, fuel, oils</li>
          </ul>

          <h4 className="mt-8 text-xl font-extrabold text-slate-900">Recycling Options</h4>
          <p className="mt-2 text-slate-700 leading-relaxed">Recycling reduces landfill and reuses valuable resources, saving energy and emissions compared to virgin materials.</p>

          <div className="mt-12">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Get it done today</a>
          </div>
        </div>
      </section>
    </main>
  )
}


