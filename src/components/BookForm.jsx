"use client";
import React, { useState } from 'react'

export default function BookForm(){
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    address: '',
    postcode: '',
    size: '',
    hireFrom: '',
    hireTo: '',
    waste: [],
    notes: '',
  })

  function updateField(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function toggleWaste(value) {
    setForm((f) => {
      const exists = f.waste.includes(value)
      return { ...f, waste: exists ? f.waste.filter((w) => w !== value) : [...f.waste, value] }
    })
  }

  function onSubmit(e) {
    e.preventDefault()
    // For now, just log. Wire to API/email later.
    console.log("Booking request:", form)
    alert("Thanks! We received your booking request.")
  }

  const inputBase = "w-full rounded-xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-200 shadow-sm hover:shadow-md"
  const labelBase = "text-sm font-bold text-gray-800 mb-2 block"
  const checkBase = "h-5 w-5 rounded-lg border-2 border-gray-300 text-green-600 focus:ring-4 focus:ring-green-500/20 transition-all duration-200"

  return (
    <section id="book" className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-green-50 to-emerald-100">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-emerald-300 rounded-full blur-2xl"></div>
        
        {/* Geometric Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-300/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-300/30 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 mt-10">
        <div className="text-center mb-5">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent ">
              Book Your Skip Bin
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Quick, easy, and hassle-free booking process.
          </p>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-600">Get instant confirmation and same-day delivery options.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Best Prices</h3>
              </div>
              <p className="text-gray-600">Competitive rates with no hidden fees or surprises.</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">24/7 Support</h3>
              </div>
              <p className="text-gray-600">Round-the-clock customer service for your peace of mind.</p>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2 mr-2 ml-2 mb-10">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelBase}>Full Name *</label>
                  <input className={inputBase} value={form.name} onChange={(e) => updateField('name', e.target.value)} required />
                </div>
                <div>
                  <label className={labelBase}>Phone Number *</label>
                  <input className={inputBase} value={form.phone} onChange={(e) => updateField('phone', e.target.value)} required />
                </div>
                <div>
                  <label className={labelBase}>Email Address</label>
                  <input type="email" className={inputBase} value={form.email} onChange={(e) => updateField('email', e.target.value)} />
                </div>
                <div>
                  <label className={labelBase}>Suburb</label>
                  <input className={inputBase} value={form.suburb} onChange={(e) => updateField('suburb', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
              </div>
              <div>
                <label className={labelBase}>Special Instructions or Notes</label>
                <textarea 
                  rows={4} 
                  className={inputBase} 
                  value={form.notes} 
                  onChange={(e) => updateField('notes', e.target.value)}
                  placeholder="Any special delivery instructions or additional information..."
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="bg-gradient-to-r from-green-100/80 to-emerald-100/80 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Ready to book your skip bin?</h4>
                  <p className="text-sm text-gray-600">A team member will contact you to confirm pricing and arrange delivery.</p>
                </div>
                <button 
                  type="submit" 
                  className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold shadow-2xl hover:shadow-green-500/25 hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  
                  
                   Submit Booking Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>

    )
    }
    