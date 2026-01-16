
import React from 'react';
import { Palette, Search, ShoppingCart, Shield, Truck, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-craft-supplies.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-blue-300/30 backdrop-blur-[2px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-400/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            <Palette className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
            Arya Madam Craft Supplies
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/90 hover:text-white font-medium transition-colors drop-shadow">
            Home
          </Link>
          <Link href="/shop" className="text-white/90 hover:text-white font-medium transition-colors drop-shadow">
            Shop
          </Link>
          <Link href="/collections" className="text-white/90 hover:text-white font-medium transition-colors drop-shadow">
            Collections
          </Link>
          <Link href="/about" className="text-white/90 hover:text-white font-medium transition-colors drop-shadow">
            About
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-white font-medium transition-colors drop-shadow">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-white/90 hover:text-white transition-colors" aria-label="Search">
            <Search className="w-6 h-6 drop-shadow" />
          </button>
          <button className="text-white/90 hover:text-white transition-colors" aria-label="Shopping Cart">
            <ShoppingCart className="w-6 h-6 drop-shadow" />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-wide uppercase border border-white/30">
            Premium Craft Supplies
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-3xl">
          <span className="text-white drop-shadow-lg">Arya Madam</span>
          <br />
          <span className="text-[#d4af6a] drop-shadow-lg">Craft Supplies</span>
        </h1>

        {/* Description */}
        <p className="text-white/95 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed drop-shadow">
          Professional-grade materials for artisans, designers, and creative
          professionals. Elevate your craft with our curated collection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af6a] hover:bg-[#c9a961] text-white font-semibold rounded-lg transition-colors shadow-lg group"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all backdrop-blur-sm"
          >
            View Catalog
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
              <Shield className="w-5 h-5 text-[#d4af6a]" />
            </div>
            <span className="text-white/90 font-medium drop-shadow">Quality Assured</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
              <Truck className="w-5 h-5 text-[#d4af6a]" />
            </div>
            <span className="text-white/90 font-medium drop-shadow">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
              <Headphones className="w-5 h-5 text-[#d4af6a]" />
            </div>
            <span className="text-white/90 font-medium drop-shadow">Expert Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
