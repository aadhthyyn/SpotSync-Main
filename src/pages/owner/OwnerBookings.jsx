
import React from "react";
import OwnerSidebar from "../../component/OwnerSidebar";

const OwnerBookings = () => {
  return (
    <>
      <OwnerSidebar />
      <div className="min-h-screen bg-slate-50 p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Parking Bookings
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              View and manage customer parking reservations.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600">
            <span className="text-blue-600 font-semibold">Today:</span> 24
            November 2026
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Bookings</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">128</h2>
            <p className="text-xs text-blue-600 mt-2">All reservations</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Confirmed</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">86</h2>
            <p className="text-xs text-slate-500 mt-2">Successfully booked</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Active Bookings</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">24</h2>
            <p className="text-xs text-slate-500 mt-2">Currently parked</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Cancelled</p>
            <h2 className="text-3xl font-bold text-red-500 mt-2">18</h2>
            <p className="text-xs text-slate-500 mt-2">Cancelled reservations</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">All Bookings</h2>
              <p className="text-sm text-slate-500 mt-1">
                Details of customer parking reservations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search customer..."
                className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />

              <select className="border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 bg-white">
                <option>All Bookings</option>
                <option>Confirmed</option>
                <option>Active</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Booking ID</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Parking Location</th>
                  <th className="px-6 py-4 font-medium">Date & Time</th>
                  <th className="px-6 py-4 font-medium">Slot</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-blue-600">
                      #BK1001
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Arun Kumar
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">arun@gmail.com</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    City Center Parking
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-700">24 Nov 2026</p>
                    <p className="text-xs text-slate-500 mt-1">10 AM - 12 PM</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">A01</td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹60
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      Confirmed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-blue-600">
                      #BK1002
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Rahul Nair
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">rahul@gmail.com</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    Tech Park Parking
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-700">24 Nov 2026</p>
                    <p className="text-xs text-slate-500 mt-1">11 AM - 2 PM</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">B05</td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹120
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-blue-600">
                      #BK1003
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Adithya S
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      adithya@gmail.com
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    Mall Parking Zone
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-700">23 Nov 2026</p>
                    <p className="text-xs text-slate-500 mt-1">3 PM - 5 PM</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">C02</td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹50
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-blue-600">
                      #BK1004
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <h3 className="text-sm font-semibold text-slate-800">
                      Vishnu Raj
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      vishnu@gmail.com
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    City Center Parking
                  </td>

                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-700">23 Nov 2026</p>
                    <p className="text-xs text-slate-500 mt-1">5 PM - 7 PM</p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">A08</td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹60
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-5 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-slate-500">Showing 4 of 128 bookings</p>

            <div className="flex gap-2">
              <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-500">
                Previous
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                1
              </button>
              <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-600">
                2
              </button>
              <button className="border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerBookings;
