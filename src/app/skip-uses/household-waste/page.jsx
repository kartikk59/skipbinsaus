import React from 'react'
import Header from '../../../components/Header'

export default function HouseholdWastePage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Household Waste</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Mobile Skips bin hire for general rubbish and household waste.</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We make your skip hire easy and quick. Wondering what to do with boxes, e-Waste, kids stuff, furniture, styrofoam, and other common household rubbish? Our skips are permit-free, driveway safe, have locked lids, easy to load, and can be placed anywhere a car can be parked. Our skips are delivered on-time, within a 3 hour window, offering same day delivery, fee free delivery date changes, fee-free cancellations, and free extra day(s) due to bad weather or extremely hot days.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Hiring a skip shouldn’t trash the planet. Our rubbish removal service is backed by environmentally responsible disposal – recycling instead of landfill. We also plant-a-tree for every skip hired online.
          </p>

          <h3 className="mt-10 text-2xl md:text-3xl font-extrabold text-slate-900">Planning your household waste disposal.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Rather than do all the heavy lifting, rely on professionals to help you through. This list gives a quick overview of the what and why of your household waste.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">Typical household waste.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Most of what you throw out in the home needs some sorting. You want to avoid contamination of recyclables that cost thousands of man-hours and limit big returns in energy.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Items you no longer use in the home are mostly good to go. These include old kitchen supplies and crockery, packaging materials and papers, and old toys and clothing.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">Renovating and landscaping waste.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Though on the heavy side, most debris from landscaping and scraps from renovating count as household waste. Soft items such as wood and carpet scraps are easy to toss. Vegetation is also good to go.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">Garage and storage items.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            A surprising amount of waste lurks in garages and storage areas. Old decorations, stacks of seasonal clothing, and assorted decorations are all good to go. Clothing and textile waste is household but also prime for donation and reuse.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Large scale paper products like old books are best donated but count as household waste if you do toss them.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">Items to avoid.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Look out for anything broken or leaking. Glass, especially mirrors, need to be wrapped and identified.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Chemical wastes can count as hazardous or otherwise contaminate landfills and should be separated. Food waste and organic waste (like diapers) also need to be separate from household waste.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Large appliances such as dryers, refrigerators, and ovens contain materials that need to be processed so they don’t classify as household.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Large chunks of rock or concrete fall into the heavy waste category. These are too much for regular household bins and should be dealt with separately.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">E-Waste.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            A surprising amount of household waste is e-waste. Anything electronic with a battery needs to be separated to be dealt with specially. The batteries contain materials that are corrosive and flammable.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            E-waste takes extra time and effort for centres to pull apart the bits that can be reused and the bits that get landfilled. You don’t need to take them apart when deciding what to do with old electrical items.
          </p>

          <h3 className="mt-8 text-2xl md:text-3xl font-extrabold text-slate-900">Done and dusted.</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Whether it’s a spring clean, or after a satisfying DIY project there is always Household rubbish that needs getting rid of. We will deliver fast to all suburbs in Melbourne, Sydney, Perth, Brisbane, Adelaide, Geelong and the Sunshine Coast. Book online today and we’ll be there within 3 hours to pick up all your unwanted household rubbish.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-extrabold text-slate-900">What you can put in:</h4>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                <li>General Household Rubbish: Furniture, timber, clothes, household junk, office material, white goods</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-slate-900">What you can’t put in:</h4>
              <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
                <li>Hazardous Materials: Asbestos, chemicals, poisons, batteries, paint, food & biological waste.</li>
                <li>Heavy Stuff: Sand, Soil, Bricks and Concrete</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Book Now</a>
          </div>
        </div>
      </section>
    </main>
  )
}


