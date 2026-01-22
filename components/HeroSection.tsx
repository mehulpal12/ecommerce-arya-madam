'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Shield, Truck, Headphones } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(false);
          requestAnimationFrame(() => setShow(true));
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen pb-28 sm:pb-20 font-serif overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-craft-supplies.jpg'), url('/assets/herobg5.jpeg')",
          backgroundBlendMode: 'multiply',
          animation: 'depthMove 50s ease-in-out infinite alternate',
        }}
      >
        {/* CLEAN DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />
      </div>

      {show && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">

          {/* BADGE */}
          <span
            className="inline-block mb-8 px-6 py-2 border border-white/40
                       rounded-full text-white uppercase text-sm tracking-widest
                       opacity-0 animate-[paperReveal_1.4s_0.2s_ease-out_forwards]"
          >
            Premium Craft Supplies
          </span>

          {/* HEADING */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl mb-8
                       opacity-0 animate-[inkSettle_1.6s_0.4s_ease-out_forwards]"
          >
            <span className="text-white">Arya Madam</span>
            <br />
            <span className="text-[#e6f0f6]">Craft Supplies</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-[#f1f6fa] text-lg max-w-2xl mb-14
                       opacity-0 animate-[paperReveal_1.4s_0.6s_ease-out_forwards]"
          >
            Professional-grade materials inspired by heritage craftsmanship.
            Carefully curated for artisans who value tradition and quality.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="flex flex-col sm:flex-row gap-6 mb-12
                       opacity-0 animate-[paperReveal_1.4s_0.8s_ease-out_forwards]"
          >
            {/* Explore Collection → BLACK TEXT */}
            <Link
              href="/shop"
              className="px-10 py-4 bg-white text-black
                         font-semibold rounded-lg shadow-xl
                         hover:bg-[#eef6fb] transition-colors"
            >
              Explore Collection
            </Link>

            {/* View Catalog → WHITE TEXT */}
            <Link
              href="/collections"
              className="px-10 py-4 border border-white/60
                         text-white rounded-lg
                         hover:bg-white/10 transition-colors"
            >
              View Catalog
            </Link>
          </div>

          {/* FEATURES */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {[Shield, Truck, Headphones].map((Icon, i) => (
              <div
                key={i}
                className="flex items-center gap-4
                           opacity-0 animate-[paperReveal_1.2s_ease-out_forwards]"
                style={{ animationDelay: `${1 + i * 0.15}s` }}
              >
                <div
                  className="w-12 h-12 border border-white/40
                             bg-white/10 rounded-lg
                             flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <span className="text-white">
                  {['Quality Assured', 'Fast Delivery', 'Expert Support'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;