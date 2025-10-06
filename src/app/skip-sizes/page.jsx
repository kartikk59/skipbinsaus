import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'
const sizes = [

 {
      title: '2 m³ (Mini skip)',
      usage: 'Small clean-ups, single‑room renovation debris, garden waste.',
      wheelieBins: 2 / 0.24,
      note: 'Good for tight driveways and small jobs.'
    },
    {
      title: '3 m³',
      usage: 'Small renovations, kitchen/bathroom strip out, small landscaping.',
      wheelieBins: 3 / 0.24,
      note: 'Compact but holds a fair amount of mixed household waste.'
    },
    {
      title: '4 m³',
      usage: 'Medium renovations, garage clearouts, moderate garden waste.',
      wheelieBins: 4 / 0.24,
      note: 'Common for DIY renovation projects.'
    },
    {
      title: '6 m³',
      usage: 'Larger renovations, small construction projects, bulky waste.',
      wheelieBins: 6 / 0.24,
      note: 'A versatile size for many home and small commercial jobs.'
    },
    {
      title: '8 m³',
      usage: 'Major renovations, large garden clearances, commercial waste.',
      wheelieBins: 8 / 0.24,
      note: 'Good balance of capacity and street placement.'
    },
      {
      title: '10–12 m³ (Large skips)',
      usage: 'Construction sites, demolition waste, large scale clearouts.',
      wheelieBins: 10 / 0.24,
      note: 'Requires more space and often a truck with a hooklift.'
    },
  ]



export default function SkipSizesPage() {
  return (
    <main>
      <Header showHero={false} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/tanish1.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">BIN SIZES</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          



 <main className="bg-green-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-5 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-center">
          Skip Bin Sizes — Which One Do You Need?
        </h1>

        <p className="text-slate-700 mb-6 text-center">
          This guide explains common skip bin sizes, typical uses, and practical tips to pick the right bin for your job.
          Approximate equivalents are shown in 240 L wheelie bins (common household bin).
        </p>

        <div className="mb-8 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm">
          <img
            src="/skip-bin-size-chart-800.jpg"
            alt="Skip bin size chart"
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="grid gap-6">
          {sizes.map((s, i) => (
            <article key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
              <p className="text-slate-700 mt-2"><strong>Typical use:</strong> {s.usage}</p>
              <p className="text-slate-700 mt-1">
                <strong>Approx. wheelie bins:</strong> {Math.round(s.wheelieBins)} x 240 L bins (approx.)
              </p>
              <p className="text-slate-600 mt-2">{s.note}</p>
            </article>
          ))}
        </section>

       
      </div>
    </main>
         

        </div>
      </section>
      <Footer />
    </main>

  )
}


