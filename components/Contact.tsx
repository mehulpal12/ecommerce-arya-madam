'use client';

import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin
} from "lucide-react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Select a subject",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    // Validation
    if (formData.subject === "Select a subject") {
      setStatusMessage("❌ Please select a subject");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✅ " + data.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Select a subject",
          message: "",
        });
      } else {
        setStatusMessage("❌ " + data.error);
      }
    } catch (error) {
      setStatusMessage("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative font-serif overflow-hidden bg-white">

      {/* ===== HEADING ===== */}
      <div className="relative py-20 px-6 text-center">
        <div
          data-animate="antique"
          className="max-w-6xl mx-auto px-8 py-20 rounded-3xl
                     bg-[rgb(44_95_124)]
                     shadow-[0_30px_90px_rgba(44,95,124,0.6)]"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* ===== CONTACT INFO ===== */}
      <div className="py-10 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

      {/* ===== FORM + RIGHT SIDE ===== */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ===== FORM ===== */}
        <div
          data-animate="antique"
          className="bg-white rounded-xl p-10 border"
        >
          <h2 className="text-4xl font-bold text-[rgb(44_95_124)] mb-6">
            Send Us a Message
          </h2>

          <p className="text-black text-lg mb-8 font-medium">
            Fill out the form below and our team will get back to you within 24 hours.
            We're here to help with any questions about our products, orders, or services.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name *"
              required
              disabled={loading}
              className="w-full border-2 border-black rounded-md px-4 py-3
                         text-black placeholder:text-black text-base font-medium disabled:opacity-50"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              disabled={loading}
              className="w-full border-2 border-black rounded-md px-4 py-3
                         text-black placeholder:text-black text-base font-medium disabled:opacity-50"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              disabled={loading}
              className="w-full border-2 border-black rounded-md px-4 py-3
                         text-black placeholder:text-black text-base font-medium disabled:opacity-50"
            />

            {/* ===== SELECT SUBJECT ===== */}
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full border-2 border-black rounded-md px-4 py-3
                         text-black text-base font-medium leading-normal disabled:opacity-50"
            >
              <option>Select a subject</option>
              <option>Orders</option>
              <option>Products</option>
              <option>Support</option>
            </select>

            <textarea
              name="message"
              rows={5}
              maxLength={500}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              disabled={loading}
              className="w-full border-2 border-black rounded-md px-4 py-3 resize-none
                         text-black placeholder:text-black text-base font-medium disabled:opacity-50"
            />

            <p className="text-xs text-black">
              {formData.message.length}/500 characters
            </p>

            {/* STATUS MESSAGE */}
            {statusMessage && (
              <p className={`text-sm font-semibold ${statusMessage.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                {statusMessage}
              </p>
            )}

            {/* SEND MESSAGE BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[rgb(44_95_124)] text-white py-3 rounded-md font-semibold
                         flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-[rgb(34_85_114)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* ===== RIGHT SIDE ===== */}
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
            <button
              className="bg-white text-[rgb(44_95_124)] px-4 py-2 rounded-md font-semibold
                         flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
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

          {/* ===== FOLLOW US ===== */}
          <div
            data-animate="antique"
            className="bg-white rounded-xl p-6 border"
          >
            <h3 className="text-xl font-semibold text-[rgb(44_95_124)] mb-3">
              Follow Us
            </h3>
            <p className="text-black mb-3">
              Stay connected for updates, tutorials, and exclusive offers
            </p>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center">
                <Facebook size={18} />
              </div>
              <div className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center">
                <Instagram size={18} />
              </div>
              <div className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center">
                <Twitter size={18} />
              </div>
              <div className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center">
                <Youtube size={18} />
              </div>
              <div className="h-10 w-10 rounded-md bg-[#1f4f67] text-white flex items-center justify-center">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}