"use client";

import { useEffect, useState } from "react";

export default function HomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-md rounded-xl overflow-hidden shadow-2xl">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/popup-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/75" />

        {/* ❌ CLOSE ICON — IMPORTANT FIX */}
        <button
          type="button"
          onClick={closePopup}
          className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg cursor-pointer"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        {/* Content */}
        <div className="relative z-10 p-6 text-center">
          <h2 className="text-2xl font-bold text-black">
            10% off 54 collections
          </h2>

          <p className="mt-2 text-sm text-black">
            Sign up for Special Discount Coupons
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border-2 border-purple-700 px-4 py-3 text-sm focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-700 py-3 text-white font-semibold hover:bg-purple-800"
            >
              Submit
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-700">
            By signing up, you agree to receive marketing emails. View our{" "}
            <span className="underline cursor-pointer">privacy policy</span>{" "}
            and{" "}
            <span className="underline cursor-pointer">terms of service</span>.
          </p>
        </div>
      </div>
    </div>
  );
}