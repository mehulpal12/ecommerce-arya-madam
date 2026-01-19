"use client";

import React, { useEffect, useState } from "react";
import { Palette, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/app/providers/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { items } = useCart();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  const pathname = usePathname();
  const router = useRouter();

  /* ===== SCROLL EFFECT ===== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== CENTRAL NAV HANDLER ===== */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    if (item === "Home") {
      e.preventDefault();
      pathname === "/"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : router.push("/");
    }

    if (item === "Contact") {
      e.preventDefault();
      pathname === "/contact"
        ? document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        : router.push("/contact#contact");
    }

    if (item === "About") {
      e.preventDefault();
      pathname === "/about"
        ? document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        : router.push("/about#about");
    }
  };

  /* ===== SEARCH HANDLER (SAME PAGE) ===== */
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.replace(`?q=${encodeURIComponent(query)}`, {
        scroll: false,
      });
    }
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div
        className={`sticky top-0 z-50 transition-all
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-[#2b1d12]/60"}
        border-b border-[#e6cfa7]/20`}
      >
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
          {/* ===== LOGO ===== */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "Home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-[#4a3323]/80 rounded-xl border border-[#e6cfa7]/40 flex items-center justify-center">
              <Palette className="w-7 h-7 text-[#e6cfa7]" />
            </div>
            <span className="text-[#fdfaf6] text-xl font-bold">
              Arya Madam Craft Supplies
            </span>
          </Link>

          {/* ===== LINKS ===== */}
          <div className="hidden md:flex gap-10">
            {["Home", "Shop", "Collections", "About", "Contact"].map((item) => {
              const href =
                item === "Home"
                  ? "/"
                  : item === "Contact"
                  ? "/contact#contact"
                  : item === "About"
                  ? "/about#about"
                  : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={item}
                  href={href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-[#eadbc4] hover:text-[#fdfaf6] transition cursor-pointer"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* ===== ACTIONS ===== */}
          <div className="flex gap-4 items-center relative">
            {/* SEARCH */}
            <div className="relative">
              <Search
                className="w-6 h-6 text-[#eadbc4] cursor-pointer hover:text-[#fdfaf6] transition"
                onClick={() => setSearchOpen((p) => !p)}
              />

              {searchOpen && (
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Search products..."
                  className="absolute right-0 mt-3 w-64 px-4 py-2 rounded-lg
                             bg-[#2b1d12] border border-[#e6cfa7]/40
                             text-[#fdfaf6] placeholder:text-[#eadbc4]/60
                             shadow-xl outline-none"
                />
              )}
            </div>

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative cursor-pointer hover:scale-105 transition-transform"
            >
              <ShoppingCart className="w-6 h-6 text-[#eadbc4] hover:text-[#fdfaf6] transition" />

              {totalItems > 0 && (
                <span
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full
                             bg-[#e6cfa7] text-xs font-bold
                             flex items-center justify-center text-[#3b2a1a]"
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ===== CART DRAWER ===== */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
