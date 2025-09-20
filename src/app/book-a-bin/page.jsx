import React from 'react'
import Header from '../../components/Header'
import BookForm from '../../components/BookForm'

export default function BookABinPage() {
  return (
    <main>
      <Header showHero={false} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <img src="/bin_image.jpg" alt="" className="h-72 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Book a Bin</h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-screen-xl mx-auto px-5 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="rounded-2xl bg-slate-100 overflow-hidden min-h-52 md:min-h-60 lg:min-h-72 flex items-center justify-center">
              <img src="/bookBin.jpg" alt="Call to book" className="h-full w-full object-cover" />
            </div>

            <div className="rounded-2xl bg-green-700 text-white p-8 md:p-10 flex items-center justify-center text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)]">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-extrabold">Call now for bookings: 75878878786</h2>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex items-center gap-4">
            <span className="flex-1 border-t border-slate-300" />
            <span className="text-xl md:text-2xl font-extrabold text-slate-500 tracking-widest">OR</span>
            <span className="flex-1 border-t border-slate-300" />
          </div>
        </div>
      </section>

      <BookForm />
    </main>
  )
}


