'use client';

import React from 'react';

const ShippingPolicyPage = () => {
  return (
    <section className="relative min-h-screen px-6 py-32 font-serif overflow-hidden">

      {/* ===== SAME BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* ===== SAME OVERLAY COLOR ===== */}
      <div className="absolute inset-0 bg-[#2b1d12]/90" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-4xl text-[#eadbc4]">

        {/* =====================
            HEADER
        ===================== */}
        <div className="mb-20 text-center">
          <span
            className="inline-block mb-6 px-6 py-2
                       border border-[#e6cfa7]/60
                       rounded-full text-[#e6cfa7]
                       tracking-widest uppercase text-xs"
          >
            Shipping Policy
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            Shipping & Delivery
          </h1>

          <div className="my-6 text-[#e6cfa7] tracking-widest">
            ───── ✦ ─────
          </div>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Everything you need to know about how we ship our products
            with care, precision, and reliability.
          </p>
        </div>

        {/* =====================
            CONTENT
        ===================== */}
        <div className="space-y-12">

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Processing Time
            </h2>
            <p className="leading-relaxed">
              All orders are processed within <strong>1–3 business days</strong>.
              Orders placed on weekends or holidays will be processed on the
              next business day.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Shipping Methods
            </h2>
            <p className="leading-relaxed">
              We offer standard and expedited shipping options depending on
              your location. Shipping partners are selected to ensure
              safe and timely delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Delivery Time
            </h2>
            <p className="leading-relaxed">
              Estimated delivery times range from <strong>5–10 business days</strong>,
              depending on destination and shipping method. International
              shipments may take longer due to customs processing.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Shipping Charges
            </h2>
            <p className="leading-relaxed">
              Shipping charges are calculated at checkout based on order
              weight, destination, and selected shipping method.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Order Tracking
            </h2>
            <p className="leading-relaxed">
              Once your order ships, you will receive a confirmation email
              with tracking details so you can follow your shipment.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Delays & Issues
            </h2>
            <p className="leading-relaxed">
              While we strive for timely delivery, delays may occur due to
              unforeseen circumstances such as weather, customs, or
              carrier-related issues.
            </p>
          </div>

        </div>

        {/* =====================
            CTA
        ===================== */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
            Need Help With Shipping?
          </h2>

          <p className="mb-10 text-lg">
            Contact our support team for any shipping-related queries.
          </p>

          <button
            className="px-8 py-3
                       border border-[#e6cfa7]
                       text-[#e6cfa7]
                       rounded-full tracking-wide
                       hover:bg-[#e6cfa7]
                       hover:text-[#3b2a1a]
                       transition"
          >
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
};

export default ShippingPolicyPage;