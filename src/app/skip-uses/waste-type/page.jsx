import React from 'react'
import Header from '../../../components/Header'

export default function WasteTypePage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Waste Types</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">We take (almost) all kinds.</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">General Waste</h3>
              <p className="mt-3 text-slate-700">General rubbish.</p>
              <p className="mt-2 text-slate-700">Furniture, Timber, Clothes, Household junk, Office Material, Electrical goods.</p>
              <h4 className="mt-4 font-extrabold text-slate-900">Building rubbish.</h4>
              <p className="mt-2 text-slate-700">Plaster, Timber, Carpet, Steel, Building rubbish.</p>
              <h4 className="mt-4 font-extrabold text-slate-900">Green rubbish</h4>
              <p className="mt-2 text-slate-700">Gardening waste, Trees and Branches.</p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Heavy Stuff</h3>
              <p className="mt-3 text-slate-700">In addition to light waste, we take some heavy stuff like sand, soil, bricks and concrete.</p>
              <h4 className="mt-4 font-extrabold text-slate-900">How much of it?</h4>
              <p className="mt-2 text-slate-700">Standard bins — up to 1 wheelbarrow of heavy stuff. Heavy bins — up to 5 wheelbarrows of heavy stuff. Alongside your other mixed waste.</p>
            </article>
          </div>

          <article className="mt-10 rounded-2xl border border-slate-200 p-6">
            <h3 className="text-2xl font-extrabold text-slate-900">Nothing Dangerous</h3>
            <p className="mt-3 text-slate-700">We don’t take dangerous materials like asbestos, chemicals, batteries, paint, food or biological waste. And nothing that goes Bang! (like gas bottles, fuel and oils.)</p>
          </article>

          <h3 className="mt-14 text-2xl md:text-3xl font-extrabold text-slate-900">Mobile Skip Bin Size</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-extrabold text-slate-900">4 cubic metres : Heavy Skip Bin</h4>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                <li>Great for builder’s waste</li>
                <li>Up to 5 wheelbarrows of ‘heavy stuff’</li>
                <li>1000kg included in price</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h4 className="text-xl font-extrabold text-slate-900">4 cubic metres : Standard Skip Bin</h4>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                <li>Perfect for general household cleanup</li>
                <li>Up to 1 wheelbarrow of ‘heavy stuff’</li>
                <li>500kg included in price</li>
              </ul>
            </article>
          </div>

          <div className="mt-12">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Find a skip bin</a>
          </div>
        </div>
      </section>
    </main>
  )
}


