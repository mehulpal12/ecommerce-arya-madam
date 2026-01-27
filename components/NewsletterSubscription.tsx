"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

type Message = {
  type: "success" | "error";
  text: string;
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate="card"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.target.classList.toggle("visible", entry.isIntersecting)
        );
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (joined) return;

    setLoading(true);
    setMessage(null);

    try {
      await new Promise((res) => setTimeout(res, 1000));

      setMessage({
        type: "success",
        text: "Thank you for joining our circle. Please check your email.",
      });

      setJoined(true);
      setEmail("");
    } catch {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <section
      className="relative py-24 font-serif overflow-hidden
                 bg-gradient-to-b from-[#0f2f3a] to-[#1A4A5E]"
    >
      <div
        data-animate="card"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center">
          {/* Badge */}
          <span
            className="
              inline-flex items-center
              px-5 py-2
              bg-[#F4A261]/20
              border border-[#F4A261]/40
              rounded-md
              mb-6
              text-sm font-medium
              text-[#F4A261]
              tracking-wider
              uppercase
            "
          >
            Exclusive Offer
          </span>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Join Our Professional Network
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-base mb-10 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, industry insights, and early
            access to new collections. Get 10% off your first order.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8"
          >
            <input
              type="email"
              required
              disabled={joined}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="
                flex-1
                px-6 py-4
                bg-white/10 backdrop-blur-sm
                border border-white/30
                rounded-md
                text-white text-sm
                placeholder-white/60
                focus:outline-none
                focus:border-[#F4A261]
                transition-colors
                disabled:opacity-50
              "
            />

            <button
              type="submit"
              disabled={loading || joined}
              className="
                px-10 py-4
                bg-[#F4A261]
                text-white
                font-semibold
                rounded-md
                hover:bg-[#E76F51]
                transition-all duration-300
                whitespace-nowrap
                cursor-pointer
                disabled:opacity-50
                disabled:cursor-not-allowed
                tracking-wide
              "
            >
              {loading ? "Joining…" : joined ? "Joined ✓" : "Join Now"}
            </button>
          </form>

          {/* Message */}
          {message && (
            <div
              data-animate="card"
              className={`flex items-center justify-center gap-3 mb-6 p-4 rounded-lg border
                          animate-fadeIn ${
                            message.type === "success"
                              ? "bg-green-900/30 border-green-400/40 text-green-100"
                              : "bg-red-900/30 border-red-400/40 text-red-100"
                          }`}
            >
              {message.type === "success" ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* ✅ BOTTOM TEXT — EXACT SELECTOR */}
          <p className="text-white/60 text-xs mt-6">
            By subscribing, you agree to our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>{" "}
            and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;