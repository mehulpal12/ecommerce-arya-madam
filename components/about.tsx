'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Leaf,
  Headphones,
  Lightbulb,
  Heart,
  Mail,
  ShoppingBag,
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  // 🔥 Auto scroll when coming from /about#about
  useEffect(() => {
    if (window.location.hash === "#about") {
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  // Stats
  const stats = [
    { value: '10,000+', label: 'Happy Customers' },
    { value: '500+', label: 'Premium Products' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Satisfaction Rate' },
  ];

  // Values
  const values = [
    {
      title: 'Quality Assurance',
      description:
        'Every product is carefully inspected to meet our high standards of excellence and durability.',
      icon: ShieldCheck,
    },
    {
      title: 'Sustainability',
      description:
        'We prioritize eco-friendly materials and ethical sourcing practices in all our collections.',
      icon: Leaf,
    },
    {
      title: 'Customer First',
      description:
        'Your satisfaction is our priority with dedicated support and hassle-free returns.',
      icon: Headphones,
    },
    {
      title: 'Innovation',
      description:
        'Constantly exploring new materials and techniques to inspire your creativity.',
      icon: Lightbulb,
    },
  ];

  // Team
  const team = [
    {
      name: "Sophia Bennett",
      role: "Founder & CEO",
      description: "Passionate about empowering artisans with quality materials",
      image: "/assets/team/priya.jpg",
    },
    {
      name: "Ethan Hughes",
      role: "Head of Operations",
      description: "Ensuring seamless delivery and customer satisfaction",
      image: "/assets/team/rajesh.jpg",
    },
    {
      name: "Olivia Parker",
      role: "Product Curator",
      description: "Handpicking the finest craft supplies from around the world",
      image: "/assets/team/anita.jpg",
    },
    {
      name: "Liam Thompson",
      role: "Customer Success Manager",
      description: "Dedicated to providing exceptional customer experiences",
      image: "/assets/team/vikram.jpg",
    },
  ];

  return (
    <div id="about" className="font-serif">

      {/* -------------------- HERO -------------------- */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1d12]/95 via-[#3b2a1a]/85 to-[#2b1d12]/95" />
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.75)]" />

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-block mb-6 px-6 py-2 border border-[#e6cfa7]/60 rounded-full text-[#e6cfa7] tracking-widest uppercase text-xs">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#fdfaf6] mb-6">
              About Us
            </h1>
            <div className="mb-6 text-[#e6cfa7] tracking-widest">
              ───── ✦ ─────
            </div>
            <p className="text-[#eadbc4] text-lg md:text-xl">
              Empowering creativity through premium craft supplies since{" "}
              <span className="text-[#e6cfa7] font-semibold">2010</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------------------- OUR STORY -------------------- */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505904267569-1fdda0a87a07?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#2b1d12]/90" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
              Our Story
            </h2>
            <p className="text-[#eadbc4] mb-6 leading-relaxed">
              Founded in <span className="text-[#e6cfa7] font-semibold">2010</span>,
              Arya Madam Craft Supplies began with a mission to provide artisans
              with the finest craft materials.
            </p>
            <p className="text-[#eadbc4] leading-relaxed">
              From a small shop in Mumbai to a trusted nationwide brand, we
              continue to celebrate craftsmanship, quality, and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <Image
              src="/assets/storeInterior.jpg"
              alt="Store Interior"
              width={800}
              height={520}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="text-4xl font-bold text-[#e6cfa7] mb-2">{stat.value}</div>
              <p className="text-[#eadbc4]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------- VALUES -------------------- */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#2b1d12]/90" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fdfaf6] mb-4">
              Our Values
            </h2>
            <p className="text-[#eadbc4]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="rounded-2xl p-8 text-center border border-[#e6cfa7]/30 bg-[#3b2a1a]/80"
                >
                  <div className="mx-auto mb-6 w-14 h-14 rounded-xl bg-[#2b1d12] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#e6cfa7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#fdfaf6] mb-3">{value.title}</h3>
                  <p className="text-sm text-[#eadbc4]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------- TEAM -------------------- */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#2b1d12]/90" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fdfaf6] mb-6">
              Meet Our Team
            </h2>
            <p className="text-[#eadbc4] max-w-3xl mx-auto">
              Passionate professionals behind our craft legacy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="relative h-80 w-full rounded-2xl overflow-hidden border border-[#e6cfa7]/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[#fdfaf6]">{member.name}</h3>
                <p className="text-[#e6cfa7] text-sm">{member.role}</p>
                <p className="text-[#eadbc4] text-sm mt-3">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CTA -------------------- */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#2b1d12]/90" />
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#e6cfa7]/40 bg-[#3b2a1a]/80 px-10 py-20 text-center">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2b1d12]">
              <Heart className="h-6 w-6 text-[#e6cfa7]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#fdfaf6] mb-6">
              Join Our Creative Community
            </h2>
            <p className="text-[#eadbc4] mb-10 max-w-3xl mx-auto">
              Be part of a thriving circle of artisans and creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/newsletter"
                  className="px-8 py-4 rounded-lg border border-[#e6cfa7]/60 text-[#fdfaf6] flex items-center justify-center"
                >
                  <Mail className="inline w-5 h-5 mr-2" />
                  Subscribe
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/shop"
                  className="px-8 py-4 rounded-lg bg-[#e6cfa7] text-[#3b2a1a] font-semibold flex items-center justify-center"
                >
                  <ShoppingBag className="inline w-5 h-5 mr-2" />
                  Start Shopping
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
