import React from "react";
import OwnerSidebar from "../../component/OwnerSidebar";

const OwnerDashboard = () => {
  return (
    <>
      <OwnerSidebar />

      <div className="min-h-screen bg-slate-50 p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Owner Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Welcome back! Here's what's happening with your parking business.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600">
            <span className="text-blue-600 font-semibold">Today:</span> 24
            November 2026
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Revenue</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">₹24,500</h2>
            <p className="text-xs text-blue-600 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Bookings</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">128</h2>
            <p className="text-xs text-blue-600 mt-2">Bookings this month</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Parking Slots</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">50</h2>
            <p className="text-xs text-slate-500 mt-2">City Center Parking</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Available Slots</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-3">18</h2>
            <p className="text-xs text-slate-500 mt-2">Currently available</p>
          </div>
        </div>

        {/* Revenue and Commission Overview */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 md:p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Revenue & Commission Overview
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Your parking revenue after SpotSync commission.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                Daily
              </button>

              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg">
                Monthly
              </button>

              <button className="px-4 py-2 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="text-sm text-slate-500">Total Parking Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-3">
                ₹24,500
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Total booking amount
              </p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="text-sm text-slate-500">Admin Commission (10%)</p>
              <h3 className="text-2xl font-bold text-red-600 mt-3">₹2,450</h3>
              <p className="text-xs text-slate-500 mt-2">
                SpotSync platform fee
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-sm text-slate-500">
                Your Total Earnings (90%)
              </p>
              <h3 className="text-2xl font-bold text-blue-600 mt-3">₹22,050</h3>
              <p className="text-xs text-slate-500 mt-2">
                Your earnings after commission
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="text-sm text-slate-500">Commission Rate</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-3">10%</h3>
              <p className="text-xs text-slate-500 mt-2">
                SpotSync platform commission
              </p>
            </div>
          </div>

          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> SpotSync receives 10%
              commission from every successful booking. The remaining 90% is
              your parking business revenue.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Revenue Overview
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Your parking income this week.
                </p>
              </div>

              <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none bg-white">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="flex items-end justify-between gap-3 h-56 border-b border-slate-200 px-2">
              <div className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                <span className="text-xs text-slate-500">₹2.5k</span>
                <div className="w-full max-w-12 bg-blue-200 rounded-t-md h-[35%]"></div>
                <span className="text-xs text-slate-500">Mon</span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                <span className="text-xs text-slate-500">₹3.2k</span>
                <div className="w-full max-w-12 bg-blue-300 rounded-t-md h-[48%]"></div>
                <span className="text-xs text-slate-500">Tue</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Slot Availability
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Current parking status.
            </p>

            <div className="flex justify-center my-8">
              <div className="w-40 h-40 rounded-full border-[18px] border-blue-600 border-r-slate-200 border-b-slate-200 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-slate-900">18</h3>
                <p className="text-xs text-slate-500">Available Slots</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className="text-slate-600">Available</span>
                </div>
                <span className="font-semibold text-slate-800">18</span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-300 rounded-full"></span>
                  <span className="text-slate-600">Occupied</span>
                </div>
                <span className="font-semibold text-slate-800">32</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl mb-8 overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              My Parking Location
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Overview of your registered parking area.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Parking Location</th>
                  <th className="px-6 py-4 font-medium">Total Slots</th>
                  <th className="px-6 py-4 font-medium">Available</th>
                  <th className="px-6 py-4 font-medium">Price / Hour</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-6 py-5">
                    <h3 className="text-sm font-semibold text-slate-800">
                      City Center Parking
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      MG Road, Thiruvananthapuram
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">50</td>

                  <td className="px-6 py-5 text-sm font-semibold text-blue-600">
                    18
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">₹30</td>

                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              Recent Bookings
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Latest customer reservations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-slate-50 text-sm text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Booking ID</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Amount</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-slate-800">
                      Arun Kumar
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      arun@gmail.com
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-blue-600 font-medium">
                    #BK1001
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    24 Nov 2026
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹60
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                      Confirmed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-slate-800">
                      Rahul Nair
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      rahul@gmail.com
                    </p>
                  </td>

                  <td className="px-6 py-5 text-sm text-blue-600 font-medium">
                    #BK1002
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-600">
                    24 Nov 2026
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-800">
                    ₹120
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerDashboard;
