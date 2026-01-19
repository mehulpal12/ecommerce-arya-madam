'use client';

import React, { useState } from 'react';
import { useCart } from '@/app/providers/CartProvider';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const productsData: Product[] = [
  { id: 1, name: 'Rainbow Glass Bead Set', price: 299, image: 'https://placehold.co/300x300/png?text=Glass+Beads' },
  { id: 2, name: 'Embroidery Thread Collection', price: 399, image: 'https://placehold.co/300x300/png?text=Thread' },
  { id: 3, name: 'Wooden Bead Assortment', price: 249, image: 'https://placehold.co/300x300/png?text=Wooden+Beads' },
  { id: 4, name: 'DIY Jewelry Making Kit', price: 599, image: 'https://placehold.co/300x300/png?text=Jewelry+Kit' },
  { id: 5, name: 'Metallic Charm Collection', price: 349, image: 'https://placehold.co/300x300/png?text=Metal+Charms' },
  { id: 6, name: 'Silk Thread Bundle', price: 449, image: 'https://placehold.co/300x300/png?text=Silk+Thread' },
  { id: 7, name: 'Crystal Bead Mix', price: 499, image: 'https://placehold.co/300x300/png?text=Crystal+Beads' },
  { id: 8, name: 'Craft Tool Essentials', price: 399, image: 'https://placehold.co/300x300/png?text=Craft+Tools' },
  { id: 9, name: 'Pearl Bead Collection', price: 549, image: 'https://placehold.co/300x300/png?text=Pearls' },
];

export default function ProductsPage() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const { addToCart, items: cartItems } = useCart();

  const filteredProducts = productsData.filter(
    (p) => p.price <= maxPrice
  );

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const isInCart = (product: Product) => {
    return cartItems.some((item) => item.id === String(product.id));
  };

  return (
    <section className="relative min-h-screen px-6 py-24 font-serif overflow-hidden">

      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2b1d12]/95" />

      <div className="relative z-10 max-w-7xl mx-auto text-[#eadbc4]">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            Shop All Products
          </h1>
          <p className="mt-4 text-lg">
            Discover our complete collection of premium craft supplies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* SIDEBAR */}
          <aside className="card space-y-10">
            <div>
              <h3 className="title">Categories</h3>
              <ul className="space-y-3 text-sm">
                <li className="font-semibold text-[#fdfaf6]">All Products</li>
                <li>Beads & Charms</li>
                <li>Thread & Yarn</li>
                <li>DIY Craft Kits</li>
                <li>Tools & Accessories</li>
                <li>Decorative & Art</li>
              </ul>
            </div>

            <div>
              <h3 className="title mb-4">Price Range</h3>
              <div className="flex justify-between text-sm mb-2">
                <span>₹0</span>
                <span>₹{maxPrice}</span>
              </div>

              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#e6cfa7]"
              />
            </div>
          </aside>

          {/* PRODUCTS */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((p) => {
              const added = isInCart(p);

              return (
                <div key={p.id} className="card flex flex-col">
                  <div className="h-48 rounded-xl overflow-hidden mb-4 border border-[#e6cfa7]/30">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="font-semibold text-[#fdfaf6] mb-1">
                    {p.name}
                  </h3>

                  <p className="text-[#e6cfa7] font-bold mb-4">
                    ₹{p.price}
                  </p>

                  <button
                    onClick={() => !added && handleAddToCart(p)}
                    className={`mt-auto py-2 rounded-lg transition 
                      ${added 
                        ? 'bg-gray-500 cursor-not-allowed text-white opacity-80'
                        : 'bg-[#e35b3a] text-white hover:opacity-90'}`}
                  >
                    {added ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style jsx>{`
        .card {
          background: rgba(43, 29, 18, 0.85);
          border: 1px solid rgba(230, 207, 167, 0.3);
          padding: 24px;
          border-radius: 20px;
        }
        .title {
          font-size: 18px;
          font-weight: 600;
          color: #fdfaf6;
          margin-bottom: 12px;
        }
      `}</style>
    </section>
  );
}
