import React from "react";

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Spot<span className="text-blue-500">Sync</span>
            </h2>
            <p className="text-gray-400 mt-4 leading-7">
              Smart parking solutions for a simpler and stress-free journey.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">Quick Links</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/find-parking" className="hover:text-white">
                  Find Parking
                </a>
              </p>
              <p>
                <a href="/my-bookings" className="hover:text-white">
                  My Bookings
                </a>
              </p>
              <p>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">For Users</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="/login" className="hover:text-white">
                  Login
                </a>
              </p>
              <p>
                <a href="/register" className="hover:text-white">
                  Create Account
                </a>
              </p>
              <p>
                <a href="/find-parking" className="hover:text-white">
                  Search Parking
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-5">For Owners</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="/register" className="hover:text-white">
                  Become a Partner
                </a>
              </p>
              <p>
                <a href="/login" className="hover:text-white">
                  Owner Login
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © 2026 SpotSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
