import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const FindParking = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-slate-50">
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
          <p className="text-blue-600 font-semibold text-sm">
            PARKING DISCOVERY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Find Your Parking Spot
          </h2>

          <p className="text-gray-500 mt-3">
            Discover nearby parking spaces and reserve your spot with ease.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Location
                </label>

                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter city, area or destination"
                    autoComplete="on"
                    className="w-full outline-none text-sm text-gray-700 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parking Date
                </label>

                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vehicle Type
                </label>

                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500">
                  <option value="">Select vehicle</option>
                  <option>Two Wheeler</option>
                  <option>Four Wheeler</option>
                  <option>Heavy Vehicle</option>
                </select>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-6 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-semibold text-gray-800">Filters:</span>

                <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 outline-none">
                  <option value="">Price Range</option>
                  <option>₹0 - ₹30/hr</option>
                  <option>₹30 - ₹50/hr</option>
                  <option>Above ₹50/hr</option>
                </select>

                <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 outline-none">
                  <option value="">Parking Type</option>
                  <option>Covered</option>
                  <option>Open</option>
                </select>

                <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 outline-none">
                  <option value="">Availability</option>
                  <option>Available</option>
                  <option>Limited Slots</option>
                </select>

                <select className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 outline-none">
                  <option value="">Facilities</option>
                  <option>CCTV</option>
                  <option>Security</option>
                  <option>EV Charging</option>
                </select>

                <button
                  type="button"
                  className="ml-auto text-blue-600 text-sm font-semibold hover:text-blue-800"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Available Parking Spaces
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Explore available parking locations
              </p>
            </div>

            <select className="border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 outline-none">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="max-w-2xl bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <div className="grid sm:grid-cols-5">
              <div className="sm:col-span-2 relative">
                <img
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800"
                  alt="City Center Parking"
                  className="w-full h-52 sm:h-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  Available
                </span>
              </div>

              <div className="sm:col-span-3 p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      City Center Parking
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      📍 MG Road, Trivandrum
                    </p>
                  </div>

                  <span className="text-yellow-500 font-semibold text-sm">
                    ★ 4.8
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg">
                    Covered
                  </span>

                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg">
                    24/7
                  </span>

                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg">
                    CCTV
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 mt-5 pt-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      ₹30
                      <span className="text-sm text-gray-500 font-normal">
                        /hr
                      </span>
                    </h4>

                    <p className="text-green-600 text-xs mt-1">
                      12 slots available
                    </p>
                  </div>

                  <a
                    href="/parking/1"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default FindParking;
