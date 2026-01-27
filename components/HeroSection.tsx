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

      {show && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">

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
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6
                       leading-tight tracking-tight max-w-3xl
                       opacity-0 animate-[inkSettle_1.6s_0.4s_ease-out_forwards]"
          >
            <span>Arya Madam</span>
            <br />
            <span className="text-[#F4A261]">Craft Supplies</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="text-xl text-white/90 mb-12 max-w-2xl leading-relaxed
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
            {/* EXPLORE COLLECTION */}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-10 py-4
                         bg-[#F4A261] text-white font-semibold rounded-md
                         hover:bg-[#E76F51] transition-all duration-300
                         hover:shadow-2xl whitespace-nowrap tracking-wide"
            >
              Explore Collection
            </Link>

            {/* VIEW CATALOG */}
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-10 py-4
                         bg-transparent text-white font-semibold rounded-md
                         border-2 border-white/40
                         hover:bg-white/10 hover:border-white
                         transition-all duration-300
                         whitespace-nowrap tracking-wide"
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