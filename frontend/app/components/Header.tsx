// 'use client';
import dynamic from "next/dynamic";
const CartSheet = dynamic(() => import("./CartSheet"), {
  ssr: false,
});

import {  Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"; 
// import ProductCard from "./ProductCard";
// import products from "@/data/products"; 

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex justify-between items-center py-4">


          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Passion Logo"
                className="h-12 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-6">

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-[#7644a2] font-medium">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-[#7e25cb] font-medium">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#7e25cb] font-medium">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#7e25cb] font-medium">Contact</Link>
            </nav>

            <CartSheet />

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-pink-600 font-medium">Home</Link>
            <Link href="/products" className="block text-gray-700 hover:text-pink-600 font-medium">Products</Link>
            <Link href="/about" className="block text-gray-700 hover:text-pink-600 font-medium">About Us</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-pink-600 font-medium">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
