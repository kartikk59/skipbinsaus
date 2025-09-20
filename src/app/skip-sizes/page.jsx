import React from 'react'
import Header from '../../components/Header'

const bins = [
  { title: '2m3 Skip Bin', loads: 'Fits approx. 2 small trailer loads', img: '/bins/2m3.png' },
  { title: '4m3 Skip Bin', loads: 'Fits approx. 4 small trailer loads', img: '/bins/4m3.png' },
  { title: '6m3 Skip Bin', loads: 'Fits approx. 6 small trailer loads', img: '/bins/6m3.png' },
  { title: '8m3 Skip Bin', loads: 'Fits approx. 8 small trailer loads', img: '/bins/8m3.png' },
  { title: '10m3 Skip Bin', loads: 'Fits approx. 10 small trailer loads', img: '/bins/10m3.png' },
  { title: '13m3 Hook Bin', loads: 'Fits approx. 13 small trailer loads', img: '/bins/13m3.png' },
  { title: '15m3 Hook Bin', loads: 'Fits approx. 15 small trailer loads', img: '/bins/15m3.png' },
  { title: '17m3 Hook Bin', loads: 'Fits approx. 17 small trailer loads', img: '/bins/17m3.png' },
  { title: '30m3 Hook Bin', loads: 'Fits approx. 30 small trailer loads', img: '/bins/30m3.png' },
]

function BinCard({ title, loads, img }) {
  return (
    
    <article className="group rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:shadow-lg">
      <div className="relative h-56 bg-slate-100">
        <img src={img} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-slate-900 text-center">{title}</h3>
        <p className="mt-2 text-slate-600 text-center">{loads}</p>
        <div className="mt-6 flex justify-center">
          <a href="#book" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition">
            BOOK NOW
          </a>
        </div>
      </div>
    </article>
  )
}

export default function SkipSizesPage() {
  return (
    <main>
      <Header showHero={false} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">SKIP SIZES</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">SKIP BIN SIZES</h2>
          <p className="mt-6 text-slate-600 text-center max-w-3xl mx-auto">
            See below for our guidelines on skip bin sizes. If you're having trouble deciding what bin size you need, get in touch with our team 24/7 by clicking the chat icon in the bottom right hand corner.
          </p>
          <p className="mt-6 text-slate-500 text-center">*Please note Skip Bin dimensions can vary.</p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bins.map((b, i) => (
              <BinCard key={i} {...b} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a href="#quote" className="rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3">
              Quick Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


