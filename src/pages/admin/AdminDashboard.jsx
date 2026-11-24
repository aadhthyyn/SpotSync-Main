import React from "react";
import AdminNavbar from "../../component/AdminNavbar";

const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500 mt-2">
            Manage and monitor the SpotSync platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Total Users</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">1,250</h2>
            <p className="text-sm text-green-600 mt-2">Registered users</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Parking Owners</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">85</h2>
            <p className="text-sm text-green-600 mt-2">Active owners</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Parking Locations</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">120</h2>
            <p className="text-sm text-slate-500 mt-2">Listed locations</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Total Bookings</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">3,480</h2>
            <p className="text-sm text-green-600 mt-2">All time bookings</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              Platform Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <p className="text-sm text-blue-600">Today's Bookings</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-2">48</h3>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-sm text-green-600">Today's Revenue</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-2">
                  ₹8,450
                </h3>
              </div>

              <div className="bg-orange-50 rounded-xl p-5">
                <p className="text-sm text-orange-600">Pending Approvals</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-2">12</h3>
              </div>

              <div className="bg-purple-50 rounded-xl p-5">
                <p className="text-sm text-purple-600">Active Parking Slots</p>
                <h3 className="text-3xl font-bold text-slate-800 mt-2">960</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              Account Summary
            </h2>

            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-600">Active Users</span>
                <span className="font-semibold text-slate-800">1,180</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-600">Blocked Users</span>
                <span className="font-semibold text-red-600">15</span>
              </div>

              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-600">Active Owners</span>
                <span className="font-semibold text-slate-800">78</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Pending Owners</span>
                <span className="font-semibold text-orange-600">7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Recent Registered Users
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Latest users registered on SpotSync
              </p>
            </div>

            <p className="text-sm text-blue-600 font-medium">
              Total Users: 1,250
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="py-4 px-3">User</th>
                  <th className="py-4 px-3">Email</th>
                  <th className="py-4 px-3">Joined Date</th>
                  <th className="py-4 px-3">Role</th>
                  <th className="py-4 px-3">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Arun Kumar
                  </td>
                  <td className="py-4 px-3 text-slate-600">arun@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">24 Nov 2026</td>
                  <td className="py-4 px-3 text-slate-600">User</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Rahul Nair
                  </td>
                  <td className="py-4 px-3 text-slate-600">rahul@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">23 Nov 2026</td>
                  <td className="py-4 px-3 text-slate-600">Owner</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Vishnu Raj
                  </td>
                  <td className="py-4 px-3 text-slate-600">vishnu@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">22 Nov 2026</td>
                  <td className="py-4 px-3 text-slate-600">User</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
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

export default AdminDashboard;
