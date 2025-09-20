import React from 'react'
import Header from '../../../components/Header'

export default function CommercialRennovationPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Commercial Renovations</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Managing construction waste? We offer the best solution.</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Planning a new business or expanding your current one? Big builds generate big waste. Managing construction waste doesn’t have to be a headache—our smart skip bins make it simple.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Get smart about rubbish.</h3>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Fast Delivery', desc: 'You’re busy, you’re ready, your time matters. No more waiting days or getting stood up.' },
              { title: 'Easy Changes', desc: 'Things change, schedules change, bins should change. And so do we.' },
              { title: 'Free Returns', desc: 'Change of plans? We’ll pick it up—no hassles.' },
            ].map((f) => (
              <article key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
                <h4 className="text-xl font-extrabold text-slate-900">{f.title}</h4>
                <p className="mt-2 text-slate-700">{f.desc}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">What are Mobile Skips™ bins?</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Mobile Skips are trailer skips that can be delivered or picked up, carry 4 cubic metres, have lockable lids, and often don’t require permits because they are road-registered on wheels.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Advantages of using Mobile Skips™ bins.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We fixed the pain points of traditional skips: late deliveries, hidden fees, driveway damage, and dirty, unsafe bins. Our service is clean, reliable, and flexible.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">No hassles.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            No council permits required in most cases. Park them anywhere a car can go—tight spots included. Built-in wheels keep them mobile.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">They’re lockable.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Lockable lids keep rubbish out of sight and prevent midnight dumping.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">We take (almost) all rubbish.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            General, building, and green rubbish accepted. No hazardous waste (chemicals, batteries, food/biological, oils or fuels).
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">A great look.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Bright, clean skips that won’t ruin your brand image.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">We have 2 options available.</h3>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Standard: up to 500 kg (around 1 wheelbarrow of heavy stuff).</li>
            <li>Heavy: up to 1,000 kg (around 5 wheelbarrows of heavy stuff).</li>
          </ul>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Straightforward pricing.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Fixed prices with great value—no hidden fees.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Quick service.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We can deliver within 3 hours when you need to get rid of rubbish fast.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Flexible booking.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Change your booking any time at no additional cost—even after delivery.
          </p>

          <h3 className="mt-12 text-2xl md:text-3xl font-extrabold text-slate-900">Great scenarios where we can help.</h3>
          <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
            <li>Apartment developments</li>
            <li>Shop and office fitouts</li>
            <li>Building maintenance</li>
          </ul>

          <h3 className="mt-12 text-2xl md:text-3xl font-extrabold text-slate-900">We’re almost everywhere in Australia.</h3>
          <p className="mt-3 text-slate-700">Melbourne, Sydney, Mornington Peninsula, Geelong, Newcastle, Adelaide, Perth, Brisbane, Sunshine Coast.</p>

          <div className="mt-10">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Request a Quote</a>
          </div>
        </div>
      </section>
    </main>
  )}


