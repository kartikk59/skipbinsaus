import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/footer'

export default function CommercialRenovationPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/tanish4.jpg" alt="Commercial renovation" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Commercial Renovation</h1>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Commercial Renovation: Transforming Your Business Space
          </h2>

          <p className="text-slate-700 mb-6">
            Whether you’re upgrading an office, retail store, or industrial facility, a well-planned commercial renovation
            improves functionality, safety and customer experience. Good planning also reduces downtime and helps control costs.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">What is Commercial Renovation?</h3>
          <p className="text-slate-700 mt-2">
            Commercial renovation involves updating, remodeling or refurbishing a business property. Typical goals include:
          </p>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li>Maximising workspace efficiency</li>
            <li>Improving safety and regulatory compliance</li>
            <li>Creating a professional, welcoming environment</li>
            <li>Upgrading electrical, plumbing and HVAC systems</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Why Commercial Renovation Matters</h3>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li><strong>Enhances business image:</strong> Modern spaces make a strong impression on clients and visitors.</li>
            <li><strong>Increases property value:</strong> Quality renovations can raise market worth.</li>
            <li><strong>Boosts productivity:</strong> Better layout, lighting and facilities improve staff performance.</li>
            <li><strong>Compliance & safety:</strong> Renovations help meet legal and safety standards.</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Common Commercial Projects</h3>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li>Office fit-outs and reconfigurations</li>
            <li>Retail refurbishments (shop fronts, displays, flooring)</li>
            <li>Industrial upgrades (layout, lighting, safety systems)</li>
            <li>Exterior improvements (signage, facades, parking areas)</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Why Hire Professionals</h3>
          <p className="text-slate-700 mt-2">
            Professionals provide coordinated project management, skilled trades, compliance knowledge and quality workmanship.
            They also manage safe, compliant disposal of construction waste and recycling where possible.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-6">Practical Notes</h3>
          <ul className="list-disc list-inside text-slate-700 mt-3 space-y-1">
            <li>Plan timelines to minimise business disruption.</li>
            <li>Confirm permits and regulatory requirements early.</li>
            <li>Coordinate trades and suppliers to keep work on schedule.</li>
            <li>Arrange professional waste removal (skips) for efficient, compliant disposal.</li>
          </ul>

         
        </div>
      </article>

      <Footer />
    </main>
  )
}