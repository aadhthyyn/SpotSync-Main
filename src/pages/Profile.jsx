import React from "react";
import Header from "../component/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-50 p-6 md:p-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">My Profile</h1>
            <p className="text-slate-500 mt-2">View and manage your profile.</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://ui-avatars.com/api/?name=Arun+Kumar&background=2563eb&color=fff&size=200"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
              />

              <h2 className="text-2xl font-bold text-slate-800 mt-5">
                Arun Kumar
              </h2>

              <p className="text-slate-500 mt-1">arun@gmail.com</p>

              <span className="mt-4 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Normal User
              </span>

              <p className="text-slate-600 text-sm leading-6 max-w-md mt-5">
                Parking made simple. I use SpotSync to discover and book
                convenient parking spaces.
              </p>

              <button className="mt-7 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-semibold">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
