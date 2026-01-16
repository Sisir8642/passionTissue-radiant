// 'use client';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
// const CartSheet = dynamic(() => import("./CartSheet"), {
//   ssr: false,
// });

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
// import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"; 
// import ProductCard from "./ProductCard";
// import products from "@/data/products"; 
const basePath = '/new';

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <div className="bg-gray-400 h-10 flex items-center justify-between px-10">
        <div className="max-w-7xl flex items-center gap-10 text-xl">
          <a
            href="https://www.facebook.com/share/1M46uBYjf7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.youtube.com/@passiontissue4548"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/9779802022445"
            className="text-green-700 hover:text-green-600 transition"
          >
            <MdWhatsapp />
          </a>
        </div>
        <div className="text-lg sm:text-xl md:text-2xl text-gray-800">
          Connect With Us
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 gap-4 ">

        <div className="flex justify-between items-center py-4">


          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <img
                src={`${basePath}/images/logo.png`}
                alt="Passion Logo"
                className="h-12 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-6">

            <nav className="hidden md:flex items-center gap-20">
              <Link href="/" className="text-gray-700 hover:text-[#7644a2] font-medium hover:scale-110 transform transition duration-300 ease-in-out">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#7e25cb] font-medium hover:scale-110 transform transition duration-300 ease-in-out">About Us</Link>
              <Link href="/products" className="text-gray-700 hover:text-[#7e25cb] font-medium hover:scale-110 transform transition duration-300 ease-in-out">Products</Link>


              <div className="relative group">
                <button
                  className="text-gray-700 hover:text-[#7e25cb] font-medium hover:scale-110 transform transition duration-300 ease-in-out">
                  Shop  ↓
                </button>
                <div className="absolute left-0 mt-2  bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <a
                    href="https://s.daraz.com.np/s.dXNq"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                  >
                    Daraz
                  </a>
                  {/* <Link
                                    href="https://s.daraz.com.np/s.dXNq"
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                                >
                                    Flipcart
                                </Link> */}

                </div>
              </div>



              <Link href="/contact" className="text-gray-700 hover:text-[#7e25cb] font-medium hover:scale-110 transform transition duration-300 ease-in-out">Contact</Link>
            </nav>

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
          <nav className="px-4 py-4 space-y-3 hover:cursor-pointer">
            <Link href="/" className="block text-gray-700 hover:text-pink-600 font-medium">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-pink-600 font-medium">About Us</Link>
            <Link href="/products" className="block text-gray-700 hover:text-pink-600 font-medium">Products</Link>
            <Link href="https://s.daraz.com.np/s.dXNq" className="block text-gray-700 hover:text-pink-600 font-medium">Shop</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-pink-600 font-medium">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
