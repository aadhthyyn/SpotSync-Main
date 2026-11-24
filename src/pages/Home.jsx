import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Smart Parking Made Simple
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect
              <span className="text-blue-600"> Parking Spot</span>
              Without The Stress.
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              Discover nearby parking spaces, check real-time availability and
              reserve your spot before you arrive. Save time and enjoy a smarter
              parking experience with SpotSync.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/find-parking"
                className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700"
              >
                Find Parking →
              </a>

              <a
                href="#how-it-works"
                className="border border-gray-300 text-gray-800 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-100"
              >
                How It Works
              </a>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500 text-sm">Parking Locations</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-gray-500 text-sm">Happy Users</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-500 text-sm">Availability</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1000"
              alt="Modern parking area"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white p-5 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    Available parking spots
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">24 Spots</h3>
                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Find Parking Near You
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {/* LOCATION INPUT */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>

              <div className="border border-gray-200 rounded-xl px-4 py-3">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full outline-none text-gray-700 bg-transparent text-sm"
                />
              </div>
            </div>

            {/* DATE INPUT */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date
              </label>

              <input
                type="date"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600 text-sm outline-none"
              />
            </div>

            {/* VEHICLE TYPE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Type
              </label>

              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600 text-sm outline-none">
                <option value="">Select vehicle</option>
                <option>Two Wheeler</option>
                <option>Four Wheeler</option>
                <option>Heavy Vehicle</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <div className="flex items-end">
              <a
                href="/find-parking"
                className="w-full text-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700"
              >
                Search Parking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold">WHY SPOTSYNC</span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Parking Made Easier Than Ever
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need for a smooth and convenient parking experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              📍
            </div>

            <h3 className="text-xl font-bold text-gray-900">Nearby Parking</h3>

            <p className="text-gray-500 mt-3 leading-7">
              Find available parking spaces near your current location.
            </p>
          </div>

          <div className="p-7 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              🅿️
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Live Availability
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              Check parking slot availability before reaching your destination.
            </p>
          </div>

          <div className="p-7 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              🤖
            </div>

            <h3 className="text-xl font-bold text-gray-900">AI Assistance</h3>

            <p className="text-gray-500 mt-3 leading-7">
              Get smart parking recommendations based on your preferences.
            </p>
          </div>

          <div className="p-7 border border-gray-200 rounded-2xl hover:shadow-lg transition">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-2xl mb-5">
              🔒
            </div>

            <h3 className="text-xl font-bold text-gray-900">Secure Booking</h3>

            <p className="text-gray-500 mt-3 leading-7">
              Reserve your parking spot with a simple and secure process.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold">SIMPLE PROCESS</span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              How SpotSync Works
            </h2>

            <p className="text-gray-500 mt-4">
              Book your parking spot in just a few simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                01
              </div>

              <h3 className="font-bold text-xl mt-5">Search Location</h3>

              <p className="text-gray-500 mt-3">
                Enter your destination and discover nearby parking.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                02
              </div>

              <h3 className="font-bold text-xl mt-5">Choose Parking</h3>

              <p className="text-gray-500 mt-3">
                Compare prices, facilities and available slots.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                03
              </div>

              <h3 className="font-bold text-xl mt-5">Book Your Slot</h3>

              <p className="text-gray-500 mt-3">
                Select your time and confirm your reservation.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl text-center shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                04
              </div>

              <h3 className="font-bold text-xl mt-5">Park Easily</h3>

              <p className="text-gray-500 mt-3">
                Reach your destination and enjoy stress-free parking.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* AI SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              AI POWERED
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
              Meet Your Smart Parking Assistant
            </h2>

            <p className="text-blue-100 mt-5 leading-8">
              Not sure where to park? Our AI assistant helps you discover
              suitable parking spaces based on location, price, availability and
              your preferences.
            </p>

            <a
              href="/find-parking"
              className="inline-block bg-white text-blue-700 px-7 py-3.5 rounded-xl font-bold mt-8 hover:bg-blue-50"
            >
              Explore Smart Parking →
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="bg-blue-100 text-2xl p-3 rounded-xl">🤖</div>

              <div>
                <h3 className="font-bold text-gray-900">
                  SpotSync AI Assistant
                </h3>

                <p className="text-green-600 text-sm">Smart Parking Helper</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-2xl mt-6 max-w-[90%]">
              <p className="text-gray-700 text-sm">
                Hello! I can help you find the best parking spot near your
                destination.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-4 rounded-2xl mt-4 ml-auto max-w-[85%]">
              <p className="text-sm">
                Find affordable parking near Technopark.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-2xl mt-4 max-w-[90%]">
              <p className="text-gray-700 text-sm">
                I can help you compare nearby parking options by price and
                availability.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-3 mt-6 text-gray-400 text-sm">
              Ask your parking question...
            </div>
          </div>
        </div>
      </section>

      {/* PARKING OWNERS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000"
            alt="Modern building"
            className="w-full h-80 object-cover rounded-3xl"
          />

          <div>
            <span className="text-blue-600 font-semibold">
              FOR PARKING OWNERS
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Turn Your Parking Space Into an Opportunity
            </h2>

            <p className="text-gray-500 mt-5 leading-8">
              List your parking spaces on SpotSync, manage bookings, monitor
              availability and grow your parking business with a simple
              dashboard.
            </p>

            <div className="space-y-4 mt-7">
              <p className="text-gray-700">
                ✓ Manage parking locations and slots
              </p>

              <p className="text-gray-700">✓ Track bookings and earnings</p>

              <p className="text-gray-700">✓ Update real-time availability</p>
            </div>

            <a
              href="/register"
              className="inline-block bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold mt-8 hover:bg-blue-700"
            >
              Become a Parking Partner →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="text-blue-600 font-semibold">ABOUT SPOTSYNC</span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Making Urban Parking Smarter
        </h2>

        <p className="text-gray-500 max-w-3xl mx-auto mt-6 leading-8">
          SpotSync is a smart parking management platform designed to connect
          drivers with parking space owners. Our goal is to make parking
          discovery, reservation and management easier through technology,
          real-time information and intelligent recommendations.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
