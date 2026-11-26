import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ParkingDetails = () => {
  const [vehicleType, setVehicleType] = useState("fourWheeler");
  const [selectedSlot, setSelectedSlot] = useState("");

  const vehicleCategories = [
    { id: "twoWheeler", name: "Two Wheeler", icon: "🏍️" },
    { id: "fourWheeler", name: "Four Wheeler", icon: "🚗" },
    { id: "bus49Seater", name: "49 Seater", icon: "🚌" },
    { id: "traveller", name: "Traveller", icon: "🚐" },
    { id: "goodsVehicle", name: "Goods Vehicle", icon: "🚚" },
  ];

  const parkingSlots = {
    twoWheeler: [
      { id: "TW01", status: "Available" },
      { id: "TW02", status: "Occupied" },
      { id: "TW03", status: "Available" },
      { id: "TW04", status: "Available" },
    ],
    fourWheeler: [
      { id: "FW01", status: "Available" },
      { id: "FW02", status: "Occupied" },
      { id: "FW03", status: "Available" },
      { id: "FW04", status: "Available" },
    ],
    bus49Seater: [
      { id: "BUS01", status: "Available" },
      { id: "BUS02", status: "Occupied" },
      { id: "BUS03", status: "Available" },
    ],
    traveller: [
      { id: "TR01", status: "Available" },
      { id: "TR02", status: "Occupied" },
      { id: "TR03", status: "Available" },
    ],
    goodsVehicle: [
      { id: "GV01", status: "Available" },
      { id: "GV02", status: "Occupied" },
      { id: "GV03", status: "Available" },
    ],
  };

  const facilities = [
    "CCTV Security",
    "24/7 Security",
    "EV Charging",
    "Covered Parking",
    "Car Wash",
    "Easy Access",
  ];

  const slots = parkingSlots[vehicleType];

  const isHeavyVehicle = ["bus49Seater", "traveller", "goodsVehicle"].includes(
    vehicleType,
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full">
              ● Available Now
            </span>

            <h1 className="text-3xl font-bold text-slate-900 mt-4">
              City Center Parking
            </h1>

            <p className="text-slate-500 mt-2">
              📍 MG Road, Thiruvananthapuram, Kerala
            </p>

            <div className="flex items-center gap-2 mt-3 text-sm">
              <span className="text-amber-500">★★★★★</span>
              <span className="font-semibold text-slate-800">4.8</span>
              <span className="text-slate-500">(128 Reviews)</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 min-w-[150px]">
              <p className="text-sm text-slate-500">Starting Price</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                ₹30
                <span className="text-sm font-normal text-slate-500">/hr</span>
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 min-w-[150px]">
              <p className="text-sm text-slate-500">Available Slots</p>
              <h2 className="text-2xl font-bold text-emerald-600 mt-2">
                8<span className="text-sm font-normal text-slate-500">/12</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200"
              alt="Parking facility"
              className="w-full h-[300px] md:h-[380px] object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <img
              src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
              alt="Parking area"
              className="w-full h-[180px] md:h-[182px] object-cover rounded-2xl"
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwq8H_doQKDfkX0ceQO1QeJKyYk06IgM10NjUDKqQN-lX5109ofhH5O7B&s=10"
              alt="Parking spaces"
              className="w-full h-[180px] md:h-[182px] object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Parking Overview
              </h2>

              <p className="text-sm text-slate-600 leading-7">
                Convenient and secure parking facility located in the heart of
                the city. Enjoy easy access, 24/7 security and a comfortable
                parking experience with modern facilities. Perfect for shopping,
                office visits and city travel.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  ["Total Slots", "12"],
                  ["Available", "8"],
                  ["Occupied", "4"],
                  ["Open Hours", "24/7"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-4"
                  >
                    <p className="text-sm text-slate-500">{label}</p>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Available Parking Slots
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    Parking Floor A - Ground Level
                  </p>
                </div>

                <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg">
                  Live Availability
                </span>
              </div>

              <div className="flex flex-wrap gap-5 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-3 h-3 rounded bg-emerald-500"></span>
                  Available
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-3 h-3 rounded bg-red-400"></span>
                  Occupied
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {slots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`border rounded-xl p-4 text-center ${
                      slot.status === "Available"
                        ? "bg-emerald-50 border-emerald-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div className="text-2xl mb-2">🚗</div>
                    <p className="font-bold text-slate-800 text-sm">
                      {slot.id}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        slot.status === "Available"
                          ? "text-emerald-600"
                          : "text-red-500"
                      }`}
                    >
                      {slot.status}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Facilities & Features
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {facilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="w-9 h-9 flex-shrink-0 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Location
              </h2>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl flex-shrink-0">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    City Center Parking
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    MG Road, Thiruvananthapuram, Kerala, India
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Customer Review
              </h2>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                  A
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        Arun Kumar
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">2 days ago</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-amber-500">★★★★★</span>
                      <span className="text-sm font-medium text-slate-600">
                        5.0
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-7 mt-4">
                    Very clean parking area. Easy to find and good security. The
                    location is convenient, and the parking service was
                    excellent. Highly recommended!
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="w-full">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-slate-900">
                Book Your Parking
              </h2>

              <p className="text-sm text-slate-500 mt-2 mb-6">
                Reserve your parking space
              </p>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Vehicle Category
                  </label>

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {vehicleCategories.map((vehicle) => (
                      <button
                        type="button"
                        key={vehicle.id}
                        onClick={() => {
                          setVehicleType(vehicle.id);
                          setSelectedSlot("");
                        }}
                        className={`border-2 rounded-xl p-3 text-center transition ${
                          vehicleType === vehicle.id
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                            : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                        }`}
                      >
                        <p className="text-2xl">{vehicle.icon}</p>
                        <p className="text-xs font-semibold mt-2">
                          {vehicle.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Registration Number
                  </label>

                  <input
                    type="text"
                    placeholder="KL-01-AB-1234"
                    className="w-full border border-slate-200 rounded-xl p-3 mt-2 text-sm outline-none focus:border-emerald-500"
                  />
                </div>

                {isHeavyVehicle && (
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Vehicle Name
                    </label>

                    <input
                      type="text"
                      placeholder={
                        vehicleType === "bus49Seater"
                          ? "Eg: Valli Bus"
                          : vehicleType === "traveller"
                            ? "Eg: My Traveller"
                            : "Eg: My Goods Vehicle"
                      }
                      className="w-full border border-slate-200 rounded-xl p-3 mt-2 text-sm outline-none focus:border-emerald-500"
                    />
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Booking Date
                  </label>

                  <input
                    type="date"
                    className="w-full border border-slate-200 rounded-xl p-3 mt-2 text-sm text-slate-600 outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Entry Time
                    </label>

                    <input
                      type="time"
                      defaultValue="10:00"
                      className="w-full border border-slate-200 rounded-xl p-3 mt-2 text-sm text-slate-600 outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Exit Time
                    </label>

                    <input
                      type="time"
                      defaultValue="12:00"
                      className="w-full border border-slate-200 rounded-xl p-3 mt-2 text-sm text-slate-600 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Selected Slot
                  </label>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {slots.map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        disabled={slot.status !== "Available"}
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`border rounded-lg p-3 text-center text-xs font-semibold ${
                          selectedSlot === slot.id
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : slot.status === "Available"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-red-50 text-red-400 border-red-200 cursor-not-allowed"
                        }`}
                      >
                        {slot.id}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 mt-2">
                    {selectedSlot
                      ? `Selected Slot: ${selectedSlot}`
                      : "Choose a parking slot"}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-5 space-y-4">
                  <div className="flex justify-between gap-3 text-sm text-slate-600">
                    <span>Parking Fee (2 hrs)</span>
                    <span>₹60</span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm text-slate-600">
                    <span>Service Fee</span>
                    <span>₹10</span>
                  </div>

                  <div className="flex justify-between items-center gap-3 font-bold text-slate-900 text-lg border-t border-slate-200 pt-4">
                    <span>Total Amount</span>
                    <span>₹70</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center font-semibold py-3.5 rounded-xl transition"
                >
                  Book Parking Now
                </button>

                <p className="text-xs text-center text-slate-400">
                  Secure booking · Easy cancellation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParkingDetails;
