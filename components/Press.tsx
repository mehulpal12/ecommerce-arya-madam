'use client';

import React from 'react';
import Image from 'next/image';

const pressItems = [
  {
    title: 'Celebrating Craftsmanship in Modern Design',
    source: 'Design Heritage Magazine',
    date: 'March 2025',
    image: '/assets/press1.jpg',
  },
  {
    title: 'How Tradition Shapes Contemporary Creativity',
    source: 'Artisan Weekly',
    date: 'January 2025',
    image: '/assets/press2.jpg',
  },
  {
    title: 'A New Standard for Premium DIY Materials',
    source: 'Creative Industry Journal',
    date: 'November 2024',
    image: '/assets/press3.jpg',
  },
];

const PressPage = () => {
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
      <div className="relative z-10 mx-auto max-w-7xl text-[#eadbc4]">

        {/* =====================
            HEADER
        ===================== */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span
            className="inline-block mb-6 px-6 py-2
                       border border-[#e6cfa7]/60
                       rounded-full text-[#e6cfa7]
                       tracking-widest uppercase text-xs"
          >
            Press
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            In the Press
          </h1>

          <div className="my-6 text-[#e6cfa7] tracking-widest">
            ───── ✦ ─────
          </div>

          <p className="text-lg leading-relaxed">
            Discover what leading publications are saying about our
            commitment to craftsmanship and quality.
          </p>
        </div>

        {/* =====================
            PRESS GRID
        ===================== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {pressItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl
                         border border-[#e6cfa7]/30
                         shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700
                             group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t
                                from-[#1f140c]/90 via-[#2b1d12]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-[#2b1d12]/85">
                <p className="text-xs tracking-widest uppercase text-[#e6cfa7] mb-2">
                  {item.source} · {item.date}
                </p>

                <h3 className="text-xl font-semibold text-[#fdfaf6] mb-3">
                  {item.title}
                </h3>

                <span className="inline-flex items-center gap-2
                                 text-sm font-semibold
                                 text-[#e6cfa7]
                                 hover:gap-3 transition-all duration-300">
                  Read Article →
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* =====================
            CTA
        ===================== */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
            Media Inquiries
          </h2>

          <p className="mb-10 text-lg">
            For press or media-related questions, please reach out to us.
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
            Contact Press Team
          </button>
        </div>

      </div>
    </section>
  );
};

export default PressPage;