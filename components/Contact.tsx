'use client';

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  {
    title: "Visit Our Store",
    icon: MapPin,
    lines: ["123 Craft Street", "Mumbai, Maharashtra", "India"],
  },
  {
    title: "Call Us",
    icon: Phone,
    lines: ["+91 98765 43210", "Mon–Sat: 9AM – 7PM"],
  },
  {
    title: "Email Us",
    icon: Mail,
    lines: ["info@aryamadamcraft.com", "Reply within 24 hours"],
  },
  {
    title: "Business Hours",
    icon: Clock,
    lines: ["Mon–Fri: 9AM – 7PM", "Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [message, setMessage] = useState("");

  /* Intersection Animation */
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate="antique"]');

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry =>
          entry.target.classList.toggle("visible", entry.isIntersecting)
        ),
      { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="relative font-serif overflow-hidden bg-white"
    >
      {/* ===== SOLID WHITE BACKGROUND ===== */}
      <div className="absolute inset-0 bg-white" />

      {/* ===== HEADING ===== */}
      <div className="relative py-20 px-6 text-center">
        <div
          data-animate="antique"
          className="max-w-6xl mx-auto px-8 py-20 rounded-3xl
                     bg-[rgb(44_95_124)] border border-[rgb(44_95_124)]
                     shadow-[0_30px_90px_rgba(44,95,124,0.6)]"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-[#fdfaf6] mb-6">
            Get In Touch
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.  
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* ===== CONTACT INFO CARDS ===== */}
      <div className="relative py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {info.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              data-animate="antique"
              className="rounded-2xl p-8 bg-white border border-[rgb(44_95_124)] text-center"
            >
              <div className="mx-auto mb-5 w-14 h-14 rounded-xl flex items-center justify-center bg-[#e6cfa7]">
                <Icon className="w-6 h-6 text-[#3b2a1a]" />
              </div>

              <h3 className="text-[rgb(44_95_124)] font-semibold mb-3">
                {item.title}
              </h3>

              {item.lines.map((line, idx) => (
                <p key={idx} className="text-sm text-black">
                  {line}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      {/* ===== FORM + RIGHT SIDE GRID 50-50 ===== */}
      <div className="relative py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ===== FORM (LEFT) ===== */}
        <div
          data-animate="antique"
          className="bg-white rounded-xl p-10 border"
        >
          <h2 className="text-3xl font-bold text-[rgb(44_95_124)] mb-3">
            Send Us a Message
          </h2>

          <p className="text-black text-sm mb-8 font-medium">
            Fill out the form below and our team will get back to you within 24 hours. We're here to help with any questions about our products, orders, or services.
          </p>

          <form className="space-y-6">
            <input
              placeholder="Enter Your Full Name *"
              className="w-full border-2 border-black rounded-md px-4 py-3"
            />

            <input
              placeholder="Email Address *"
              className="w-full border-2 border-black rounded-md px-4 py-3"
            />

            <input
              placeholder="Phone Number"
              className="w-full border-2 border-black rounded-md px-4 py-3"
            />

            <select className="w-full border-2 border-black rounded-md px-4 py-3">
              <option>Select a subject</option>
              <option>Orders</option>
              <option>Products</option>
              <option>Support</option>
            </select>

            <textarea
              rows={5}
              maxLength={500}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full border-2 border-black rounded-md px-4 py-3 resize-none"
            />

            <p className="text-xs text-black">
              {message.length}/500 characters
            </p>

            <button className="w-full bg-[rgb(44_95_124)] text-white py-3 rounded-md font-semibold">
              ✈️ Send Message
            </button>
          </form>
        </div>

        {/* ===== RIGHT SIDE (HELP + MAP + SOCIALS) ===== */}
        <div className="space-y-8">

          <div
            data-animate="antique"
            className="bg-[rgb(44_95_124)] rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-2">
              Need Immediate Help?
            </h3>
            <p className="text-sm mb-5">
              Our customer support team is available during business hours to assist you with any urgent queries.
            </p>
            <button className="bg-white text-[rgb(44_95_124)] px-4 py-2 rounded-md font-semibold">
              📞 Call Now
            </button>
          </div>

          <div
            data-animate="antique"
            className="bg-white rounded-xl overflow-hidden border"
          >
            <iframe
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              className="w-full h-64"
            />
          </div>

          <div
            data-animate="antique"
            className="bg-white rounded-xl p-6 border"
          >
            <h3 className="text-lg font-semibold text-[rgb(44_95_124)] mb-3">
              Follow Us
            </h3>

            <p className="text-black mb-2"> Stay connected for updates, tutorials, and exclusive offers </p>
            <div className="flex gap-3">
              {["f", "📷", "X", "in", "▶"].map((icon, i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
