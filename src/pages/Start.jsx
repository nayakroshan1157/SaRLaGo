import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center mt-6 bg-[url('/banner.webp')] h-screen w-full flex flex-col justify-between">
        
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between px-10 gap-10 mt-20">

          {/* LEFT CONTENT */}
          <div className="max-w-4xl text-white flex flex-col gap-4">
            <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-yellow-400">
              Zero Commission Ride Platform
            </span>

            <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
              Zero Commission.
              <br />
              Fair Rides. Real Earnings.
            </h1>

            <div className="text-gray-200 max-w-xl font-medium">
              <h2 className="text-2xl font-bold tracking-wide text-green-500">
                Sa<span className="text-yellow-400">R</span>La
                <span className="text-orange-500">Go</span>
              </h2>

              <p className="mt-2">
                A smart, eco-friendly electric mobility platform designed to
                deliver clean, efficient, and affordable rides for modern
                urban transport. 🌱⚡
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center mt-10">
            <img
              src="/toto.png"
              alt="Ride with SaRLaGo"
              className="w-[500px] md:w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-white p-6 text-center">
          <h2 className="text-3xl font-bold">
            Get Started with SaRLaGo
          </h2>

          <Link
            to="/login"
            className="inline-block mt-4 px-10 py-3 bg-[url('/navbar.webp')] text-white rounded font-semibold"
          >
            Continue
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Start;
