import React from "react";
import OwnerSidebar from "../../component/OwnerSidebar";

const ManageParking = () => {
  return (
    <>
      <OwnerSidebar />
      <div className="min-h-screen bg-slate-50 p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Manage Parking
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Add, manage and monitor your parking locations.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium">
            + Add New Parking
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Locations</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">01</h2>
            <p className="text-xs text-blue-600 mt-2">Parking areas</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Total Slots</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">170</h2>
            <p className="text-xs text-slate-500 mt-2">Across all locations</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Available Slots</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">50</h2>
            <p className="text-xs text-slate-500 mt-2">Currently available</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-500">Occupied Slots</p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">120</h2>
            <p className="text-xs text-slate-500 mt-2">Currently occupied</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Your Parking Locations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Overview of all your registered parking areas.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search parking..."
              className="border border-slate-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[750px]">
              <thead className="bg-slate-50 text-slate-500 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Parking Name</th>
                  <th className="px-6 py-4 font-medium">Total Slots</th>
                  <th className="px-6 py-4 font-medium">Available</th>
                  <th className="px-6 py-4 font-medium">Price / Hour</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-5">
                    <h3 className="font-semibold text-slate-800">
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
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-3">
                      <button className="text-blue-600 text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-red-500 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h3 className="font-semibold text-blue-900">Parking Management</h3>
          <p className="text-sm text-blue-700 mt-2 leading-6">
            Manage your parking locations, update slot information, change
            hourly prices and monitor parking availability from one place.
          </p>
        </div>
      </div>
    </>
  );
};

export default ManageParking;
