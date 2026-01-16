'use client';
import React, { useState, useEffect } from 'react';
// import products from '@/data/products';
// import ProductCard from './ProductCard';
import ProductDetailPage from './ProductDetail';
// const categories = ['All', 'Face Tissue', 'Bathroom Tissue', 'Kitchen Towel', 'Napkins', 'Wet Wipes'];
import { Product } from '../types/product';
// import CategoryFilter from './components/CategoryFilter';
// const CategoryFilterAny = CategoryFilter as unknown as React.ComponentType<string>;
import ProductCategories from './CategoryFilter';
import Features from './Features';
import FeaturesSection from './FeatureSection';
import ActivityPromotion from './ActivityPromotion'
const basePath = '/new';


export default function PassionTissueWebsite() {
  const API = process.env.NEXT_PUBLIC_API_URL!;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    `${basePath}/images/slider/image copy.png`,
    `${basePath}/images/slider/image copy 8.png`,
    `${basePath}/images/slider/image copy 7.png`,
    `${basePath}/images/slider/image copy 6.png`,
    `${basePath}/images/slider/image copy 5.png`,
    `${basePath}/images/slider/image copy 2.png`,
    `${basePath}/images/slider/image.png`,
    `${basePath}/images/slider/image copy 3.png`,
    `${basePath}/images/slider/image copy 4.png`,

  ];

  useEffect(() => {
    fetch(`${API}/products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [API]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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
      <section className="relative w-full h-screen overflow-hidden ">

        {/* Sliding Images with blur */}
        <div className="absolute inset-0">
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
                className="absolute inset-0 w-full h-full object-cover filter brightness-60"
              />
            </div>
          ))}
        </div>

        {/* Hero Text at Top Center */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24">
          <h2 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">
            Nepal&apos;s #1 Premium Tissue Brand
          </h2>
          <p className="text-xl mb-4 text-pink-100 font-semibold drop-shadow-md">
            100% Virgin Pulp • Ultra Soft • Safe & Hygienic
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://s.daraz.com.np/s.dXNq"
              className="px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold shadow-lg hover:bg-pink-700 transition"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 mb-24 sm:mb-28">
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

      <section>
        <ProductCategories />
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

      <section >
        <FeaturesSection />
      </section>

      <section>
        <ActivityPromotion />
      </section>

    </div>
  );
}