'use client';

import React from 'react';

const TermsPolicyPage = () => {
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
            Terms & Policy
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            Terms & Conditions
          </h1>

          <div className="my-6 text-[#e6cfa7] tracking-widest">
            ───── ✦ ─────
          </div>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Please read these terms carefully before using our website
            and purchasing our products.
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
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using our website, you agree to be bound by
              these terms and conditions. If you do not agree, please
              discontinue use of the site.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Use of Website
            </h2>
            <p className="leading-relaxed">
              You agree to use our website only for lawful purposes and
              in a manner that does not infringe the rights of others
              or restrict their use of the site.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Product Information
            </h2>
            <p className="leading-relaxed">
              We strive to display product details accurately; however,
              colors, images, and descriptions may vary slightly due to
              screen differences or handcrafted nature of products.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Pricing & Payments
            </h2>
            <p className="leading-relaxed">
              All prices are listed in applicable currency and are subject
              to change without prior notice. Payments must be completed
              before order processing.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on this website, including text, images, logos,
              and designs, is our intellectual property and may not be
              reused without written permission.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We are not liable for any indirect or consequential damages
              arising from the use of our website or products.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e6cfa7]/30
                          bg-[#2b1d12]/80 p-8
                          shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
              Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to update or modify these terms at any
              time. Continued use of the website constitutes acceptance
              of updated terms.
            </p>
          </div>

        </div>

        {/* =====================
            CTA
        ===================== */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
            Questions About Our Terms?
          </h2>

          <p className="mb-10 text-lg">
            Contact us if you need any clarification regarding our terms.
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

export default TermsPolicyPage;