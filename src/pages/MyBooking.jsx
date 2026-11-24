import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MyBookings = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50">
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-8">
          <p className="text-blue-600 font-semibold text-sm">
            BOOKING MANAGEMENT
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            My Bookings
          </h1>

          <p className="text-gray-500 mt-3">
            View and manage all your parking reservations in one place.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm font-medium">
                  Total Bookings
                </p>
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">12</h2>
              <p className="text-gray-400 text-xs mt-2">
                All your reservations
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm font-medium">Upcoming</p>
                <span className="text-2xl">🅿️</span>
              </div>
              <h2 className="text-3xl font-bold text-blue-600 mt-3">3</h2>
              <p className="text-gray-400 text-xs mt-2">
                Upcoming reservations
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm font-medium">Completed</p>
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold text-green-600 mt-3">8</h2>
              <p className="text-gray-400 text-xs mt-2">
                Successfully completed
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm font-medium">Cancelled</p>
                <span className="text-2xl">✕</span>
              </div>
              <h2 className="text-3xl font-bold text-red-500 mt-3">1</h2>
              <p className="text-gray-400 text-xs mt-2">
                Cancelled reservations
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Your Reservations
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage your parking bookings
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <select className="border border-gray-200 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none">
                <option>All Bookings</option>
                <option>Confirmed</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>

              <select className="border border-gray-200 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-600 outline-none">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 mb-5">
            <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100 pb-5">
              <div>
                <p className="text-xs text-gray-400 font-medium">
                  BOOKING ID: #SPT2026001
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  City Center Parking
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  📍 MG Road, Thiruvananthapuram
                </p>
              </div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">
                Confirmed
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
              <div>
                <p className="text-xs text-gray-400">Parking Date</p>
                <p className="font-semibold text-gray-800 mt-2">25 Nov 2026</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Parking Time</p>
                <p className="font-semibold text-gray-800 mt-2">
                  10:00 AM - 01:00 PM
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Vehicle Type</p>
                <p className="font-semibold text-gray-800 mt-2">Four Wheeler</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Parking Slot</p>
                <p className="font-semibold text-gray-800 mt-2">A-12</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 border-t border-gray-100 pt-5">
              <div>
                <p className="text-xs text-gray-400">Total Amount</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">₹90</h3>
                <p className="text-xs text-green-600 mt-1">
                  Payment Successful
                </p>
              </div>

              <div className="flex gap-3">
                <button className="border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50">
                  Cancel Booking
                </button>

                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 mb-5">
            <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100 pb-5">
              <div>
                <p className="text-xs text-gray-400 font-medium">
                  BOOKING ID: #SPT2026003
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  Smart Open Parking
                </h3>
                <p className="text-sm text-gray-500 mt-1">📍 Kollam, Kerala</p>
              </div>

              <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-semibold">
                Completed
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
              <div>
                <p className="text-xs text-gray-400">Parking Date</p>
                <p className="font-semibold text-gray-800 mt-2">18 Nov 2026</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Parking Time</p>
                <p className="font-semibold text-gray-800 mt-2">
                  09:00 AM - 11:00 AM
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Vehicle Type</p>
                <p className="font-semibold text-gray-800 mt-2">Four Wheeler</p>
              </div>

              <div>
                <p className="text-xs text-gray-400">Parking Slot</p>
                <p className="font-semibold text-gray-800 mt-2">C-04</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 border-t border-gray-100 pt-5">
              <div>
                <p className="text-xs text-gray-400">Total Amount</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">₹60</h3>
                <p className="text-xs text-green-600 mt-1">
                  Payment Successful
                </p>
              </div>

              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MyBookings;
