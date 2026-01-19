'use client';

import { useEffect } from "react";

export default function ProductPage() {

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative px-6 py-12 font-serif overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2b1d12]/85" />

      <div className="relative max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE */}
          <div
            data-animate="left"
            className="bg-[#3b2a1a]/80 border border-[#e6cfa7]/40 rounded-xl p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25"
              className="w-full max-h-[320px] object-contain rounded-lg mb-6 mx-auto"
              alt="product"
            />

            <div className="flex gap-4 justify-center">
              {[
                "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
                "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
                "https://images.unsplash.com/photo-1600180758890-6b94519b06c6",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  data-animate="scale"
                  className="w-24 h-24 object-cover rounded-md border border-[#e6cfa7]/40 cursor-pointer"
                  alt="thumb"
                />
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div
            data-animate="right"
            className="bg-[#3b2a1a]/80 border border-[#e6cfa7]/40 rounded-xl p-8 text-[#eadbc4]"
          >
            <h1 className="text-3xl font-semibold text-[#fdfaf6] mb-2">
              Amethyst Mini Pencil Point
            </h1>

            <p className="text-lg mb-4">
              <span className="text-[#e6cfa7] font-semibold">₹499</span>
              <span className="line-through ml-2 opacity-50">₹799</span>
            </p>

            <p className="text-sm leading-relaxed mb-6">
              Compact yet powerful crystal tool for meditation, clarity,
              and emotional balance.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex border border-[#e6cfa7]/40 rounded">
                <button className="px-3">−</button>
                <span className="px-4">1</span>
                <button className="px-3">+</button>
              </div>

              <button className="px-6 py-3 bg-[#e6cfa7] text-[#2b1d12] font-semibold rounded">
                ADD TO CART
              </button>
            </div>

            <div className="text-sm space-y-1 border-t border-[#e6cfa7]/30 pt-4">
              <p><b>SKU:</b> PL_Mini_AME</p>
              <p><b>Category:</b> Pencil Point</p>
              <p><b>Stone:</b> Amethyst</p>
            </div>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div
          data-animate="up"
          className="mt-10 bg-[#3b2a1a]/80 border border-[#e6cfa7]/40 rounded-xl"
        >
          <details open className="p-6">
            <summary className="cursor-pointer text-[#fdfaf6] font-semibold">
              DESCRIPTION
            </summary>

            <ul className="mt-4 text-[#eadbc4] text-sm list-disc ml-6 space-y-2">
              <li>Promotes calm & clarity</li>
              <li>Supports emotional healing</li>
              <li>Ideal for meditation</li>
            </ul>
          </details>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-14">
          <h2 className="text-xl text-[#fdfaf6] mb-6">
            Related Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1,2,3,4,5].map(i => (
              <div
                key={i}
                data-animate="up"
                className="bg-[#3b2a1a]/80 border border-[#e6cfa7]/40 rounded-lg p-3 text-center"
              >
                <div className="h-28 bg-[#2b1d12]/60 rounded mb-3" />
                <p className="text-sm text-[#eadbc4]">
                  Crystal Product
                </p>
                <p className="text-[#e6cfa7] text-sm">
                  ₹299
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}