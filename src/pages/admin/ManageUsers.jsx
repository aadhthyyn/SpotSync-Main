import React from "react";
import AdminNavbar from "../../component/AdminNavbar";

const ManageUsers = () => {
  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-slate-50 p-6 md:p-10">
        {" "}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Manage Users</h1>
          <p className="text-slate-500 mt-2">
            View and manage all registered users and parking owners.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Total Users</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">1,250</h2>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Parking Owners</p>
            <h2 className="text-3xl font-bold text-slate-800 mt-3">85</h2>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500">Blocked Users</p>
            <h2 className="text-3xl font-bold text-red-600 mt-3">15</h2>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-800">All Users</h2>
              <p className="text-sm text-slate-500 mt-1">
                Registered users and parking owners
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search users..."
                className="border border-slate-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500"
              />

              <select className="border border-slate-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500">
                <option>All Roles</option>
                <option>User</option>
                <option>Owner</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="py-4 px-3">User</th>
                  <th className="py-4 px-3">Email</th>
                  <th className="py-4 px-3">Phone</th>
                  <th className="py-4 px-3">Role</th>
                  <th className="py-4 px-3">Joined Date</th>
                  <th className="py-4 px-3">Status</th>
                  <th className="py-4 px-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Arun Kumar
                  </td>
                  <td className="py-4 px-3 text-slate-600">arun@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">9876543210</td>
                  <td className="py-4 px-3 text-slate-600">User</td>
                  <td className="py-4 px-3 text-slate-600">24 Nov 2026</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Block
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Rahul Nair
                  </td>
                  <td className="py-4 px-3 text-slate-600">rahul@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">9876543211</td>
                  <td className="py-4 px-3 text-slate-600">Owner</td>
                  <td className="py-4 px-3 text-slate-600">23 Nov 2026</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Block
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Vishnu Raj
                  </td>
                  <td className="py-4 px-3 text-slate-600">vishnu@gmail.com</td>
                  <td className="py-4 px-3 text-slate-600">9876543212</td>
                  <td className="py-4 px-3 text-slate-600">User</td>
                  <td className="py-4 px-3 text-slate-600">22 Nov 2026</td>
                  <td className="py-4 px-3">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                      Blocked
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Unblock
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-slate-100">
                  <td className="py-4 px-3 font-medium text-slate-800">
                    Adithya S
                  </td>
                  <td className="py-4 px-3 text-slate-600">
                    adithya@gmail.com
                  </td>
                  <td className="py-4 px-3 text-slate-600">9876543213</td>
                  <td className="py-4 px-3 text-slate-600">Owner</td>
                  <td className="py-4 px-3 text-slate-600">21 Nov 2026</td>
                  <td className="py-4 px-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      Block
                    </button>
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

export default ManageUsers;
