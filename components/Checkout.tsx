'use client';

import React from 'react';
import { useCart } from '@/app/providers/CartProvider';

export default function CheckoutPage() {
  const { items: cartItems, increaseQty, decreaseQty } = useCart();

  // Delivery fields state
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [pincode, setPincode] = React.useState('');

  // Total price
  const total = cartItems.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  // WhatsApp order
  const orderOnWhatsApp = () => {
    if (!name || !phone || !street || !city || !pincode) return;

    const productText = cartItems
      .map(
        (p) =>
          `• ${p.title} × ${p.quantity} = ₹${p.price * p.quantity}`
      )
      .join('\n');

    const message = `
🛒 *New Order*

${productText}

💰 Total: ₹${total}

📦 Delivery Details:
Name: ${name}
Phone: ${phone}
Address: ${street}, ${city}, ${pincode}
    `.trim();

    const whatsappNumber = '919876543210'; // 👈 apna number
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  // Form validation
  const isFormValid = name && phone && street && city && pincode;

  return (
    <section className="relative min-h-screen px-6 py-24 font-serif overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2b1d12]/95" />

      <div className="relative z-10 max-w-7xl mx-auto text-[#eadbc4]">
        <h1 className="text-4xl font-bold text-[#fdfaf6] mb-14">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* DELIVERY ADDRESS */}
            <div className="card">
              <h2 className="title">Delivery Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="Full Name"
                  className="input cursor-text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Phone Number"
                  className="input cursor-text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <textarea
                placeholder="Street Address"
                className="input mt-6 cursor-text"
                rows={3}
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input
                  placeholder="City"
                  className="input cursor-text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  placeholder="Pincode"
                  className="input cursor-text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="card">
              <h2 className="title">Payment Method</h2>
              <div className="mt-4 p-4 rounded-xl border border-[#25D366]/60 bg-[#25D366]/10">
                ✔ Order on WhatsApp (No online payment)
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="card h-fit">
            <h2 className="title">Order Summary</h2>

            <div className="space-y-6">
              {cartItems.length === 0 && (
                <p className="text-center text-[#fdfaf6]">
                  Your cart is empty 😕
                </p>
              )}

              {cartItems.map((p) => (
                <div key={p.id} className="flex gap-4 items-center">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#e6cfa7]/30">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-[#fdfaf6]">{p.title}</p>
                    <p className="text-sm opacity-70">
                      ₹{p.price} × {p.quantity}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 border border-[#e6cfa7]/40 rounded-lg px-2 py-1">
                    <button
                      onClick={() => decreaseQty(String(p.id))}
                      className="text-xl font-bold hover:text-white hover:cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-semibold">{p.quantity}</span>
                    <button
                      onClick={() => increaseQty(String(p.id))}
                      className="text-xl font-bold hover:text-white hover:cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-6 border-[#e6cfa7]/30" />

            <div className="flex justify-between text-lg font-bold text-[#fdfaf6] mb-8">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={orderOnWhatsApp}
              disabled={!isFormValid}
              className={`w-full py-4 rounded-full text-[#1f3b2c] font-semibold tracking-wide transition
                ${isFormValid ? 'bg-[#25D366] hover:opacity-90 cursor-pointer' : 'bg-gray-500 cursor-not-allowed'}`}
            >
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .card {
          background: rgba(43, 29, 18, 0.85);
          border: 1px solid rgba(230, 207, 167, 0.3);
          padding: 32px;
          border-radius: 20px;
        }
        .title {
          font-size: 22px;
          font-weight: 600;
          color: #fdfaf6;
          margin-bottom: 20px;
        }
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(230, 207, 167, 0.4);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fdfaf6;
          outline: none;
        }
        .input::placeholder {
          color: rgba(234, 219, 196, 0.6);
        }
      `}</style>
    </section>
  );
}
