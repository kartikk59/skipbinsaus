import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#022c22] text-gray-300 pt-16 pb-8 relative rounded-t-2xl">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 ">
        

        
        {/* About Us */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            About Us
          </h3>
          <ul className="space-y-2">
            <li><a href="/About-us" className="hover:text-white">About Us</a></li>
           
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li><a href="/skip-uses/rubbish-collection" className="hover:text-white">Rubbish Collection</a></li>
            <li><a href="/skip-uses/green-waste" className="hover:text-white">Green Waste</a></li>
            <li><a href="/skip-uses/household-waste" className="hover:text-white">Domestic/Household Waste</a></li>
                        <li><a href="/skip-uses/commercial-renovation" className="hover:text-white">Builder/Renovation Waste</a></li>
                                    <li><a href="/skip-uses/waste-type" className="hover:text-white">Waste Types</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Bin Bookings
          </h3>
          <ul className="space-y-2">
            <li><a href="/book-a-bin" className="hover:text-white">Book Your Bins</a></li>
           
          </ul>
        </div>

<div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Skip Bin Sizes
          </h3>
          <ul className="space-y-2">
            <li><a href="/skip-sizes" className="hover:text-white">Bin Sizes</a></li>
           
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto mt-12 px-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
     
        
          
          <div className="text-sm text-gray-400 text-center">© 2025 Express Bin Services PTY LTD Australia.</div>
          <br />
          <div className="text-center text-gray-400 text-sm">All rights reserved.</div>
        

      
      </div>
    </footer>
  );
}
