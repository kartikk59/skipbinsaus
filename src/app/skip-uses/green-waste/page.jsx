import React from 'react'
import Header from '../../../components/Header'

export default function GreenWastePage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Green Waste</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Get inspired.</h2>
          <p className="mt-4 text-slate-700">Explore articles and guides about green waste removal, recycling and garden projects.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {[
              { title: 'Is Styrofoam Recycling? Here’s what you need to know.', meta: 'News and Articles, Environment, How-to-guides • 29/10/2024' },
              { title: 'Types of Home Renovation Waste', meta: 'Home DIY and renovation • 02/10/2024' },
              { title: 'Renovation Clean-Up with Mobile Skips', meta: 'Construction Waste • 02/10/2024' },
              { title: 'Renovation Waste: Choosing the Right Mobile Skip', meta: 'Home DIY • 02/10/2024' },
              { title: 'Using Mobile Skips for DIY Renovation Projects', meta: 'Construction Waste • 02/10/2024' },
              { title: 'Waste management for Home Extension and Add-On Renovation Waste', meta: 'Builders Waste • 30/09/2024' },
              { title: 'Environmental Benefits of Green Waste Recycling', meta: 'Green Waste • 30/09/2024' },
              { title: 'Recycling Green Waste in Australia', meta: 'Green Waste • 30/09/2024' },
              { title: 'What is Green Waste?', meta: 'Green Waste • 30/09/2024' },
              { title: 'Garden waste removal: Skip Bin Sizes for Different Garden Projects', meta: 'Green Waste • 30/09/2024' },
              { title: 'Best Skip Bins for Green Waste', meta: 'Green Waste • 30/09/2024' },
              { title: 'What Can and Can’t Go in Green Waste Skip Bins', meta: 'Green Waste • 30/09/2024' },
              { title: 'Green Waste and Composting', meta: 'Green Waste • 30/09/2024' },
              { title: 'Skip Bins for Landscaping Projects', meta: 'Green Waste • 30/09/2024' },
              { title: 'Introduction to Green Waste Removal', meta: 'Green Waste • 30/09/2024' },
              { title: 'Handling Large Green Waste Volumes After Storms', meta: 'Green Waste • 30/09/2024' },
              { title: 'Everything you need to know about seasonal Garden Clean Ups', meta: 'Green Waste • 30/09/2024' },
              { title: 'The Role of Local Councils in Green Waste Management', meta: 'Green Waste • 30/09/2024' },
              { title: 'Lawn and Grass Clippings Disposal with Skip Bins', meta: 'Green Waste • 30/09/2024' },
              { title: 'How to Maximize Space in a Green Waste Skip Bin', meta: 'Green Waste • 30/09/2024' },
              { title: 'Why choose responsible green waste removal services', meta: 'Green Waste • 17/09/2024' },
              { title: 'When to use a green waste bin rental', meta: 'Green Waste • 17/09/2024' },
              { title: 'How to manage your green waste with gardening services', meta: 'Green Waste • 17/09/2024' },
              { title: 'The Ultimate Guide to Garden Refuse Collection', meta: 'Green Waste • 17/09/2024' },
              { title: 'Make your gardening project easy with a green waste skip hire', meta: 'Green Waste • 17/09/2024' },
              { title: 'Getting rid of your garden green waste (once and for all)', meta: 'Green Waste • 17/09/2024' },
              { title: 'Green Waste Disposal: How to get rid of it responsibly', meta: 'Green Waste • 17/09/2024' },
              { title: 'Easiest way to remove your green waste', meta: 'Green Waste • 17/09/2024' },
            ].map((p) => (
              <article key={p.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.meta}</p>
                <div className="mt-4">
                  <a href="#" className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline">Read More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <a href="/book-a-bin" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-600 text-white font-bold hover:bg-green-700">Book Now</a>
          </div>
        </div>
      </section>
    </main>
  )
}


