/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, Star } from 'lucide-react';
import products from '../data/products';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetail';
import Link from 'next/link';
import Footer from './components/Footer';
const categories = ['All', 'Face Tissue', 'Bathroom Tissue', 'Kitchen Towel', 'Napkins', 'Wet Wipes'];
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import Features from './components/Features';
import FeaturesSection from './components/FeatureSection';



export default function PassionTissueWebsite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const images = [
    "/images/tissue6.png",
    "/images/tissue2.png",
    "/images/tissue3.png",
    "/images/tissue4.png",
    "/images/tissue5.png",
    "/images/tissue7.png",
    "/images/tissue8.png",
    "/images/tissue10.png",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  
  
  
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[number] | null>(null);
  const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(p => p.category === selectedCategory);
  
  if (selectedProduct) {
    return <ProductDetailPage product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="relative w-full h-[92vh] overflow-hidden ">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d27cbf,#b34aa4,#5a189a)]"></div>


        {/* Sliding Images */}
        <div className="absolute inset-0 flex items-center justify-center pt-0">
          <div className="relative w-500 h-160 overflow-hidden">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentIndex
                    ? "translate-x-0"
                    : index === (currentIndex - 1 + images.length) % images.length
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }`}
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />

              </div>
            ))}
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24 mt-4">
          <h2 className="text-5xl font-bold mb-2 text-white">
            Nepal&apos;s #1 Premium Tissue Brand
          </h2>
          <p className="text-xl mb-4 text-pink-100 font-semibold">
            100% Virgin Pulp • Ultra Soft • Safe & Hygienic
          </p>
          <div className="flex flex-wrap justify-center gap-4 ">
            <button className="bg-white text-[#7b2cbf] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8228d1] transition-colors">
              Learn More
            </button>
          </div>
        </div>



        {/* Optional: Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section>
      <Features />
      </section>
      
      {/* overview  */}
      <section>
   <CategoryFilter category={selectedCategory} products={filteredProducts.filter(p => p.ply !== undefined)} onProductClick={setSelectedProduct} />
      </section>

      {/* Products Grid */}
      {/* <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.category.toLowerCase()}/${product.id}`}
                passHref
              >
                <div>
                  <ProductCard product={product} onClick={() => { }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}


      {/* Features Section */}
      <section >
        <FeaturesSection />
      </section>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}