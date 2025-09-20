import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#022c22] text-gray-300 pt-16 pb-8 relative rounded-t-2xl">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        

        
        {/* About Us */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            About Us
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Resources
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">White Papers</a></li>
            <li><a href="#" className="hover:text-white">Webinars</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Subscribe
          </h3>
          <p className="mb-4 text-sm">
            Stay informed with our monthly newsletter and scale your climate impact!
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email:"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-400 py-1"
            />
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              I agree to receive communications from Cloverly.
            </label>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto mt-12 px-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
        {/* Logo + Copyright */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Cloverly" className="h-6" />
          <span className="text-sm text-gray-400">
            © 2024 Cloverly. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm text-gray-400 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <span>·</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>

       
      </div>
    </footer>
  );
}
