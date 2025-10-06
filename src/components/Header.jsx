'use client';
import React, { useState } from 'react'

function Header({ showHero = true }) {
  const [open, setOpen] = useState(false)
  const [skipOpen, setSkipOpen] = useState(false)
  const skipCloseTimer = React.useRef(null)

  function openSkipMenu() {
    if (skipCloseTimer.current) clearTimeout(skipCloseTimer.current)
    setSkipOpen(true)
  }

  function scheduleCloseSkipMenu() {
    if (skipCloseTimer.current) clearTimeout(skipCloseTimer.current)
    skipCloseTimer.current = setTimeout(() => setSkipOpen(false), 200)
  }

  return (
    <header>
      {/* Promotional Banner */}
      <div className="bg-green-500 py-2 border rounded-[calc(theme(borderRadius.lg)+1px)] m-3 border-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-lg font-semibold text-black">For Bookings Call: +61 405 838 119

          </p>
        </div>
      </div>
      
      <nav className="sticky top-0 z-40 backdrop-blur border-b border-slate-200" style={{backgroundColor: '#e1e4d9'}}>
        <div className="max-w-screen-xl px-5 flex items-center gap-4 flex-nowrap relative">
          <a href="/" className="inline-flex items-center gap-2 font-extrabold text-slate-900">
       
            <img src="logo.png" alt="logo" className="ml-5 h-12 w-50" />
          </a>

          <ul className="hidden md:flex items-center justify-center gap-8 md:gap-10 font-semibold text-slate-900 flex-1 whitespace-nowrap">
            <li><a className="hover:text-green-700 inline-block whitespace-nowrap" href="/">Home</a></li>
            <li><a className="hover:text-green-700 inline-block whitespace-nowrap" href="/About-us">About Us</a></li>
            
            <li
              className="relative"
              onMouseEnter={openSkipMenu}
              onMouseLeave={scheduleCloseSkipMenu}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-green-700 whitespace-nowrap"
                onFocus={openSkipMenu}
                onBlur={scheduleCloseSkipMenu}
                aria-haspopup="menu"
                aria-expanded={skipOpen}
              >
                Skip Uses
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd"   d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>

              {skipOpen && (
                <div
                  className="absolute left-0 top-full w-72 rounded-xl border border-slate-200 bg-[#e1e4d9] shadow-xl p-2"
                  onMouseEnter={openSkipMenu}
                  onMouseLeave={scheduleCloseSkipMenu}
                >
                  {[
                    { href: '/skip-uses/rubbish-collection', label: 'Rubbish Collection' },
                    { href: '/skip-uses/green-waste', label: 'Green Waste' },
                    { href: '/skip-uses/household-waste', label: 'Domestic/Household Waste' },
                    { href: '/skip-uses/commercial-rennovation', label: 'Builders/Renovation Waste' },
                    { href: '/skip-uses/waste-type', label: 'View All Waste Types' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="block rounded-lg px-4 py-3 hover:bg-slate-50">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li><a className=" inline-block whitespace-nowrap" href="/book-a-bin">Book a Bin</a></li>
            <li><a className="inline-block whitespace-nowrap" href="/skip-sizes">Skip Sizes</a></li>
          </ul>

          <div className="flex items-center justify-end gap-3 ml-auto">
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="primary-mobile-menu"
              className="md:hidden inline-flex flex-col justify-between w-7 h-6"
              onClick={() => setOpen(!open)}
            >
              <span className="h-0.5 w-full bg-slate-900 rounded"></span>
              <span className="h-0.5 w-full bg-slate-900 rounded"></span>
              <span className="h-0.5 w-full bg-slate-900 rounded"></span>
            </button>

           

           
           
          </div>
          
        </div>

        {open && (
          <ul id="primary-mobile-menu" className="md:hidden border-t border-slate-200 bg-white shadow-lg">
            {[
              { href: '/', label: 'Home' },
              { href: '/About-us', label: 'About Us' },
            ].map((item) => (
              <li key={item.href} className="border-b border-slate-200">
                <a
                  href={item.href}
                  className="block px-5 py-3 font-semibold text-slate-900 hover:text-green-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="border-b border-slate-200">
              <div className="px-5 py-3 font-semibold text-slate-900">Skip Uses</div>
              <ul className="px-5 pb-3 text-slate-700">
                {[
                  { href: '/skip-uses/rubbish-collection', label: 'Rubbish Collection' },
                  { href: '/skip-uses/green-waste', label: 'Green Waste' },
                  { href: '/skip-uses/household-waste', label: 'Domestic/Household Waste' },
                  { href: '/skip-uses/commercial-rennovation', label: 'Builders/Renovation Waste' },
                  { href: '/skip-uses/waste-type', label: 'View All Waste Types' },
                ].map((sublink) => (
                  <li key={sublink.href} className="py-2">
                    <a href={sublink.href} className="hover:text-green-700" onClick={() => setOpen(false)}>
                      {sublink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {[
              { href: '/book-a-bin', label: 'Book a Bin' },
              { href: '/skip-sizes', label: 'Skip Sizes' },
            ].map((item) => (
              <li key={item.href} className="border-b border-slate-200">
                <a
                  href={item.href}
                  className="block px-5 py-3 font-semibold text-slate-900 hover:text-green-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            
          </ul>
        )}
      </nav>

      {showHero && (
        <section id="home" className="relative isolate overflow-hidden border-t border-slate-100 m-3 rounded-2xl">
          <video
            className="absolute inset-0 -z-10 h-full w-full object-cover rounded-2xl"
            src="/hero_video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 -z-10 bg-black/35 rounded-2xl" />

          <div className="max-w-screen-xl mx-auto px-5 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex items-center">
            <div className="py-16 md:py-20">
              <h1 className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] text-4xl md:text-6xl font-extrabold leading-tight">
                Express Skip Bins
                <span className="block">Your Quick & Easy</span>
                <span className="block">Waste Solution</span>
              </h1>
              <p className="mt-4 text-white/90 text-lg max-w-2xl">
                Efficient skip bin hire for any project. Affordable rates, fast delivery, and hassle-free service.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a className="px-5 py-3 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-700" href="#book">Book a Bin</a>
                <a className="px-5 py-3 rounded-lg border-2 border-green-500 text-white font-semibold" href="#services">View Services</a>
              </div>
            </div>
          </div>
        </section>
      )}
    </header>
  )
}

export default Header
