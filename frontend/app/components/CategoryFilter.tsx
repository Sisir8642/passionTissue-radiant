const categories = ['All', 'Face Tissue', 'Bathroom Tissue', 'Kitchen Towel', 'Napkins', 'Wet Wipes'];
import React, { useState, useEffect } from 'react';
import products from '@/data/products';

 export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('Bathroom-Tissue');
  const [activeSubcategory, setActiveSubcategory] = useState('Compact 3 Ply Bathroom Tissue');

  const categories = Array.from(new Set(products.map(p => p.category)));
  
  const subcategories = Array.from(
    new Set(
      products
        .filter(p => p.category === activeCategory && p.name)
        .map(p => p.name)
    )
  );

  const filteredProducts = products.filter(p => {
    if (p.category !== activeCategory) return false;
    if (subcategories.length > 0 && p.name) {
      return p.name === activeSubcategory;
    }
    return true;
  });

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);

                const newSubs = Array.from(
                  new Set(
                    products
                      .filter(p => p.category === cat && p.name)
                      .map(p => p.name)
                  )
                );
                if (newSubs.length > 0) {
                  setActiveSubcategory(newSubs[0]);
                }
              }}
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-400 hover:shadow-md'
              }`}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          {activeCategory.replace('-', ' ')}
        </h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>

        {subcategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-8 py-3 rounded-full font-semibold text-base transition-all ${
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
                <h3 className="text-xl font-bold text-gray-800 leading-tight min-h-[3.5rem]">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 min-h-[2.5rem] font-medium font-semibold">{product.shortDesc}</p>
                
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