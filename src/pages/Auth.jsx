import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl font-bold text-white">P</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">SpotSync</h1>

          <p className="text-sm text-slate-500 mt-1">
            Smart Parking Made Simple
          </p>
        </div>

        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900">Welcome Back!</h2>

          <p className="text-sm text-slate-500 mt-2">
            Login to your account and find your perfect parking spot.
          </p>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-blue-600 font-medium">
            Forgot Password?
          </a>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl">
          Login
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-slate-200"></div>
          <span className="text-sm text-slate-400">or</span>
          <div className="flex-1 border-t border-slate-200"></div>
        </div>

        <p className="text-center text-sm text-slate-500">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold ml-2">
            Create Account
          </Link>
        </p>

        <p className="text-center text-xs text-slate-400 mt-8">
          © 2026 SpotSync. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Auth;
