'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Shield, Truck, Headphones } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // first load fix (mobile)
    setActive(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false);
          requestAnimationFrame(() => setActive(true));
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-60px 0px -60px 0px',
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen font-serif overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/hero-craft-supplies.jpg'), url('/assets/herobg5.jpeg')",
        }}
      />

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32
          ${active ? 'luxury-reveal' : 'luxury-hidden'}
        `}
      >
        {/* BADGE */}
        <span className="inline-block mb-8 px-6 py-2 border border-white/40
          rounded-full text-white uppercase text-sm tracking-widest">
          Premium Craft Supplies
        </span>

        {/* HEADING */}
        <h1
          className="
            text-[clamp(2.4rem,7vw,4.5rem)]
            font-bold text-white mb-6
            leading-[1.1]
            tracking-tight
            max-w-3xl
          "
        >
          <span className="block">Arya Madam</span>
          <span className="block text-[#F4A261]">Craft Supplies</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed">
          Professional-grade materials inspired by heritage craftsmanship.
          Carefully curated for artisans who value tradition and quality.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4
              bg-[#F4A261] text-white font-semibold rounded-md
              hover:bg-[#E76F51] transition-all duration-300"
          >
            Explore Collection
          </Link>

          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-10 py-4
              border-2 border-white/40 text-white font-semibold rounded-md
              hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            View Catalog
          </Link>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {[Shield, Truck, Headphones].map((Icon, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white/40 bg-white/10 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">
                {['Quality Assured', 'Fast Delivery', 'Expert Support'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;