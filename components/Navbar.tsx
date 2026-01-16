import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800 text-white">
            🎨
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Arya Madam Craft Supplies
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/shop" className="hover:text-blue-700">Shop</Link>
          <Link href="/collections" className="hover:text-blue-700">Collections</Link>
          <Link href="/about" className="hover:text-blue-700">About</Link>
          <Link href="/contact" className="hover:text-blue-700">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <Search className="h-5 w-5 cursor-pointer hover:text-blue-700" />
          <ShoppingCart className="h-5 w-5 cursor-pointer hover:text-blue-700" />
        </div>
      </div>
    </header>
  );
}