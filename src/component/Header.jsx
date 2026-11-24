import React from "react";

const Header = () => {
  return (
    <div>
    
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-xl text-xl">
              P
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Spot<span className="text-blue-600">Sync</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <a href="/" className="text-blue-600">
              Home
            </a>
            <a href="/find-parking" className="hover:text-blue-600">
              Find Parking
            </a>
            <a href="/my-bookings" className="hover:text-blue-600">
              My Bookings
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden sm:block text-gray-700 font-medium px-4 py-2"
            >
              Login
            </a>
            <a
              href="/profile"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
