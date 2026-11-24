import React from "react";
import { Link } from "react-router-dom";

const OwnerSidebar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SpotSync
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/owner/dashboard"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/owner/manage-parking"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          >
            Manage Parking
          </Link>

          <Link
            to="/owner/bookings"
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
          >
            Bookings
          </Link>

          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default OwnerSidebar;
