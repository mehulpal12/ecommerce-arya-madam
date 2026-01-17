'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const faqs = [
  {
    q: 'How can I apply for a position?',
    a: 'You can apply directly from our Careers page by selecting an open position and submitting your resume.',
  },
  {
    q: 'Do you offer remote work options?',
    a: 'Yes, selected roles offer remote or hybrid work depending on the nature of the position.',
  },
  {
    q: 'What is your hiring process timeline?',
    a: 'Our hiring process typically takes 2–3 weeks, including application review and interviews.',
  },
  {
    q: 'Can I apply if no role matches my profile?',
    a: 'Absolutely. You can send us your resume, and we’ll reach out when a suitable opportunity arises.',
  },
  {
    q: 'What kind of work culture do you promote?',
    a: 'We value craftsmanship, mutual respect, creativity, and long-term growth.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const searchParams = useSearchParams();

  // 🔥 AUTO SCROLL FIX
  useEffect(() => {
    const timer = setTimeout(() => {
      const section = document.getElementById('faqs');
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <section
      id="faqs"
      className="relative min-h-screen px-6 py-32 font-serif overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2b1d12]/90" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl text-[#eadbc4]">

        {/* HERO */}
        <div className="mb-24 text-center">
          <span className="inline-block mb-6 px-6 py-2 border border-[#e6cfa7]/60 rounded-full text-[#e6cfa7] tracking-widest uppercase text-xs">
            FAQs
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            Frequently Asked Questions
          </h1>

          <div className="my-6 text-[#e6cfa7] tracking-widest">
            ───── ✦ ─────
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed">
            Answers to common questions about working with us
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#e6cfa7]/30 bg-[#2b1d12]/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#fdfaf6]">
                  {item.q}
                </h3>
                <span className="text-2xl text-[#e6cfa7]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-[#eadbc4]">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
            Still Have Questions?
          </h2>

          <p className="mb-10 text-lg">
            Reach out to us anytime — we’re happy to help.
          </p>

          <Link
            href="/contact#contact"
            className="inline-block px-8 py-3 border border-[#e6cfa7] text-[#e6cfa7] rounded-full tracking-wide hover:bg-[#e6cfa7] hover:text-[#3b2a1a] transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
