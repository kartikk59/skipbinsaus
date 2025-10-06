import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/footer'

export default function GreenWastePage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/tanish1.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Green Waste</h1>
        </div>
      </section>

      {/* Blog article about Green Waste */}
      <article className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Understanding Green Waste: How to Manage It Responsibly
          </h2>

          <p className="text-slate-700 mb-6">
            Green waste is one of the most common types of household and garden waste. From lawn clippings to tree
            prunings, managing green waste properly helps the environment, reduces landfill pressure and keeps local
            areas safe and tidy. This guide explains what green waste includes, why correct disposal matters and practical
            ways to manage garden waste — including when to choose a skip bin.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">What is Green Waste?</h3>
          <p className="text-slate-700 mt-2">
            Green waste refers to biodegradable organic material produced from gardens, parks and landscaping. Typical
            items include:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li>Grass clippings and lawn trimmings</li>
            <li>Leaves, small garden debris and plant cuttings</li>
            <li>Branches, twigs and prunings (often chipped)</li>
            <li>Flowers, potting mix and small shrubs</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Why Proper Green Waste Disposal Matters</h3>
          <p className="text-slate-700 mt-2">
            Correctly disposing of green waste delivers several benefits:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li><strong>Environmental benefits:</strong> Composting green waste returns nutrients to soil and reduces the need for chemical fertilizers.</li>
            <li><strong>Lower greenhouse gases:</strong> Sending green waste to landfill produces methane. Composting or recycling avoids this.</li>
            <li><strong>Community safety and hygiene:</strong> Piles of garden waste can attract pests or create fire hazards if not managed.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">How to Manage Green Waste Efficiently</h3>
          <p className="text-slate-700 mt-2">
            Choose the method that fits the volume of waste and accessibility of your site:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-2">
            <li>
              <strong>Composting:</strong> Ideal for households with manageable amounts of garden waste. Compost bins or heaps
              transform clippings and small prunings into nutrient-rich soil conditioner.
            </li>
            <li>
              <strong>Local council collection:</strong> Many councils run scheduled green-waste pickups or offer paid collections.
              This is convenient for regular, moderate volumes.
            </li>
            <li>
              <strong>Skip bin hire:</strong> Best for large landscaping jobs, tree removals or renovations. A skip allows fast,
              single-drop disposal of substantial volumes and is collected by the provider.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Green Waste and Skip Bins — Practical Advice</h3>
          <p className="text-slate-700 mt-2">
            If you rent a skip for green waste, keep these practical points in mind to avoid delays or extra charges:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-2">
            <li><strong>Accepted items:</strong> Branches, prunings, grass, bedding plants and most garden refuse are normally fine.</li>
            <li><strong>Chipping large branches:</strong> Large logs/branches may be better chipped first to save space and meet weight limits.</li>
            <li><strong>Prohibited/hazardous items:</strong> Do not place asbestos, batteries, tyres, paints, oils or other hazardous materials in green-waste skips.</li>
            <li><strong>Weight limits:</strong> Heavy or wet green waste can be heavier than expected — check your provider's limits to avoid surcharges.</li>
            <li><strong>Permits & placement:</strong> If the skip will go on the street, council permits and safety signage may be required — confirm before delivery.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Tips for Loading and Site Safety</h3>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-2">
            <li><strong>Distribute weight evenly:</strong> Place heavier items near the base and avoid piling everything to one side.</li>
            <li><strong>Break down bulky items:</strong> Cut branches into shorter sections to maximise bin capacity.</li>
            <li><strong>Protect surfaces:</strong> Use boards or mats under the skip to avoid damage to driveways or lawns.</li>
            <li><strong>Keep access clear:</strong> Ensure the delivery truck has clear access and remove low branches or obstacles beforehand.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Choosing the Right Size</h3>
          <p className="text-slate-700 mt-2">
            Select a skip size based on the estimated volume of waste and space for placement. For garden projects, a medium
            or large skip is often ideal — if in doubt, consult your provider with photos of the waste and site for a quick recommendation.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Conclusion</h3>
          <p className="text-slate-700 mt-2">
            Proper green waste management protects the environment, reduces landfill emissions and keeps your neighbourhood safe.
            Whether you compost at home, use council services, or hire a skip for a larger project, planning ahead will save time
            and money. If you need help choosing the right skip size or arranging collection, get in touch and we’ll guide you
            through the best option for your job.
          </p>

        </div>
      </article>

      <Footer />
    </main>
  )
}