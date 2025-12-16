'use client';

import React, { useState } from 'react';
import { products, type Product } from '@/data/products';

export default function ProductCategories() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const subcategories = Array.from(
    new Set(
      products
        .filter(p => p.category === activeCategory)
        .map(p => p.name)
    )
  );

  const filteredProducts = products.filter(p => {
    if (p.category !== activeCategory) return false;
    if (activeSubcategory) return p.name === activeSubcategory;
    return true;
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubcategory(null);
              }}
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          {activeCategory}
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

        {/* Subcategories */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {subcategories.map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeSubcategory === sub
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border-2 border-purple-300 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 mb-6 flex items-center justify-center bg-gray-50 rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 font-semibold">
                  {product.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
