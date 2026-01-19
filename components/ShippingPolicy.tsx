'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

const sections = [
  {
    title: 'Processing Time',
    text: 'All orders are processed within 1–3 business days. Orders placed on weekends or holidays will be processed on the next business day.',
  },
  {
    title: 'Shipping Methods',
    text: 'We offer standard and expedited shipping options depending on your location. Shipping partners are selected to ensure safe and timely delivery.',
  },
  {
    title: 'Delivery Time',
    text: 'Estimated delivery times range from 5–10 business days depending on destination and shipping method.',
  },
  {
    title: 'Shipping Charges',
    text: 'Shipping charges are calculated at checkout based on order weight, destination, and selected shipping method.',
  },
  {
    title: 'Order Tracking',
    text: 'Once your order ships, you will receive a confirmation email with tracking details.',
  },
  {
    title: 'Delays & Issues',
    text: 'Delays may occur due to weather, customs, or carrier-related issues.',
  },
];

export default function ShippingPolicyPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative min-h-screen px-6 py-32 font-serif overflow-hidden">

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#e6cfa7] origin-left z-50"
      />

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

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mb-20 text-center"
        >
          <span className="inline-block mb-6 px-6 py-2 border border-[#e6cfa7]/60 rounded-full text-[#e6cfa7] tracking-widest uppercase text-xs">
            Shipping Policy
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fdfaf6]">
            Shipping & Delivery
          </h1>

          <div className="my-6 text-[#e6cfa7] tracking-widest">
            ───── ✦ ─────
          </div>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Everything you need to know about how we ship our products.
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-20">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-120px' }}
              className="relative pl-10"
            >
              {/* DRAW LINE */}
              <motion.span
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute left-0 top-0 w-[2px] bg-[#e6cfa7]/60"
              />

              {/* CONTENT */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={{
                  duration: 0.9,
                  ease: [0.77, 0, 0.18, 1],
                }}
                className="rounded-2xl border border-[#e6cfa7]/30 bg-[#2b1d12]/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                <h2 className="text-2xl font-semibold text-[#fdfaf6] mb-4">
                  {item.title}
                </h2>
                <p className="leading-relaxed">{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
            Need Help With Shipping?
          </h2>

          <p className="mb-10 text-lg">
            Contact our support team for any shipping-related queries.
          </p>

          <motion.button
            initial={{ borderBottomWidth: 0 }}
            whileHover={{ borderBottomWidth: 2 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 border border-[#e6cfa7] text-[#e6cfa7] rounded-full tracking-wide hover:bg-[#e6cfa7] hover:text-[#3b2a1a]"
          >
            Contact Support
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}