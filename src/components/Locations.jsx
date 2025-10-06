import React from 'react'

const locations = [
   
    'Beaumaris', 'Frankston', 'Springvale', 'South Yarra', 'Bentleigh', 'Windsor & Prahran', 'Toorak', 'Glen Waverley', 'Ashwood', 'Ashburton', 'Oakleigh', 'Richmond', 'Hawthorn', 'Essendon', 'Essendon West', 'Moonee Ponds', 'Brunswick', 'Coburg', 'Coburg North', 'Preston', 'Carlton', 'Ascot Vale', 'Reservoir', 'Thornbury', 'Pascoe Vale', 'Pascoe Vale South', 'North Melbourne', 'Strathmore', 'Spotswood', 'Altona', 'Yarraville', 'Newport', 'Footscray', 'Hoppers Crossing', 'Tarneit', 'Williamstown',
]

export default function Locations() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100" aria-labelledby="locations-heading">
            <div className="absolute -top-28 -left-28 w-[360px] h-[360px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-28 -right-28 w-[420px] h-[420px] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

            <div className="absolute inset-0 -z-10">
                <svg className="w-full h-full opacity-8 text-green-200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-locations" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-locations)" />
                </svg>
            </div>

            <div className="relative max-w-screen-xl mx-auto px-5 py-16">
                <div className="mb-8">
                    <h2 id="locations-heading" className="text-3xl font-extrabold text-slate-900">Proudly serving Melbourne for 10+ years</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations.map((loc) => (
                        <div key={loc} className="flex items-center gap-3 rounded-md border border-green-200 p-4 bg-white/80 backdrop-blur-sm">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 text-green-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                </svg>
                            </span>
                            <div className="text-md font-medium text-slate-900">{loc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
