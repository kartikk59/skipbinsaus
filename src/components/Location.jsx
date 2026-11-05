// ...existing code...
import React from 'react'

export default function Location() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-16 overflow-hidden">
      {/* Decorative background blobs to match site theme */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-0 w-64 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#34D399" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="#6EE7B7" />
        </svg>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-5">
        <h2 className="text-3xl md:text-3xl font-extrabold text-black mb-6 text-center">Our <span className='text-green-600'>Location</span></h2>

        <div className="w-full rounded-lg overflow-hidden shadow-sm bg-white/90 backdrop-blur-sm border border-slate-200">
          <div className="w-full h-[350px] md:h-[450px]">
            <iframe
              title="Express Bins Services location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.4223972797586!2d145.2086644757669!3d-38.013931071926066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61399b7514e5b%3A0x60c58e2d8befe087!2sEXPRESS%20BINS%20SERVICES%20PTY%20LTD!5e0!3m2!1sen!2sin!4v1759740323928!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// ...existing code...