'use client';

import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CheckoutPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Handcrafted Brass Diya',
      price: 1499,
      quantity: 1,
      image:
        'https://placehold.co/200x200/png?text=Brass+Diya',
    },
    {
      id: 2,
      name: 'Traditional Incense Holder',
      price: 899,
      quantity: 2,
      image:
        'https://placehold.co/200x200/png?text=Incense+Holder',
    },
  ]);

  const [address, setAddress] = useState({
    name: '',
    phone: '',
    street: '',
    city: '',
    pincode: '',
  });

  const updateQty = (id: number, qty: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: qty < 1 ? 1 : qty } : p
      )
    );
  };

  const total = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const orderOnWhatsApp = () => {
    const productText = products
      .map(
        (p) =>
          `• ${p.name} × ${p.quantity} = ₹${p.price * p.quantity}`
      )
      .join('\n');

    const message = `
🛒 *New Order*

${productText}

💰 Total: ₹${total}

👤 Name: ${address.name}
📞 Phone: ${address.phone}

📍 Address:
${address.street}
${address.city} - ${address.pincode}
    `.trim();

    const whatsappNumber = '919876543210'; // 👈 apna number
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section className="relative min-h-screen px-6 py-24 font-serif overflow-hidden">
      {/* BACKGROUND */}
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

            {/* ADDRESS */}
            <div className="card">
              <h2 className="title">Delivery Address</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="Full Name"
                  className="input"
                  onChange={(e) =>
                    setAddress({ ...address, name: e.target.value })
                  }
                />
                <input
                  placeholder="Phone Number"
                  className="input"
                  onChange={(e) =>
                    setAddress({ ...address, phone: e.target.value })
                  }
                />
              </div>

              <textarea
                placeholder="Street Address"
                className="input mt-6"
                rows={3}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <input
                  placeholder="City"
                  className="input"
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
                <input
                  placeholder="Pincode"
                  className="input"
                  onChange={(e) =>
                    setAddress({ ...address, pincode: e.target.value })
                  }
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
              {products.map((p) => (
                <div key={p.id} className="flex gap-4 items-center">
                  {/* IMAGE */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#e6cfa7]/30">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <p className="font-medium text-[#fdfaf6]">
                      {p.name}
                    </p>
                    <p className="text-sm opacity-70">
                      ₹{p.price} × {p.quantity}
                    </p>
                  </div>

                  {/* QTY */}
                  <input
                    type="number"
                    min={1}
                    value={p.quantity}
                    onChange={(e) =>
                      updateQty(p.id, Number(e.target.value))
                    }
                    className="qty"
                  />
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
              className="w-full py-4 rounded-full bg-[#25D366] text-[#1f3b2c] font-semibold tracking-wide hover:opacity-90 transition"
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
        .qty {
          width: 60px;
          background: transparent;
          border: 1px solid rgba(230, 207, 167, 0.4);
          border-radius: 8px;
          padding: 6px;
          text-align: center;
          color: #fdfaf6;
        }
      `}</style>
    </section>
  );
}