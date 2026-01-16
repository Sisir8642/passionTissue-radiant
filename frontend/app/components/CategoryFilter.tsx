'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Variant = {
  id: string;
  label: string;
  rolls?: number;
  images: string[];
};

type Product = {
  id: string;
  name: string;
  category: string;
  short_desc: string;
  description: string;
  image: string;
  variants: Variant[];
};

// export async function getStaticProps() {
//   const res = await fetch(`${API}/products/`);
//   const products = await res.json();

//   return {
//     props: { products },
//     revalidate: 60, // regenerate this page every 10 seconds
//   };
// }


export default function CategoryFilter() {
  const router = useRouter();
const API = process.env.NEXT_PUBLIC_API_URL!;
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  // ✅ Fetch from Django backend
  useEffect(() => {
    fetch(`${API}/products/`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (data.length > 0) {
          setActiveCategory(data[1].category);
        }
      })
      .catch(err => console.error('API Error:', err));
  }, []);

  if (!products.length || !activeCategory) return [];

  const categories = Array.from(new Set(products.map(p => p.category)));

  const subcategories = Array.from(
    new Set(
      products
        .filter(p => p.category === activeCategory)
        .map(p => p.name)
    )
  );

  const effectiveSubcategory =
    activeSubcategory ?? subcategories[0] ?? null;

  const selectedProduct = products.find(
    p => p.name === effectiveSubcategory && p.category === activeCategory
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
              className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${activeCategory === cat
                ? 'bg-purple-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-400 hover:shadow-md'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategories */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {subcategories.map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${activeSubcategory === sub
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Variant cards */}
        {selectedProduct && selectedProduct.variants && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {selectedProduct.variants.map((variant) => (
              <div
                key={variant.id}
                onClick={() =>
                  router.push(
                    `/products/${encodeURIComponent(selectedProduct.category.toLowerCase())}/${selectedProduct.id}?variant=${variant.id}`
                  )
                }
                className="bg-white rounded-2xl border-2 border-purple-300 p-8 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-72 mb-6 flex items-center justify-center bg-gray-50 rounded-xl">
                  <img
                    src={variant.images?.[0] || selectedProduct.image}
                    alt={variant.label}
                    className="object-contain h-full"
                  />
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">{variant.label}</h3>
                  {variant.rolls && (
                    <p className="text-sm text-gray-600 font-semibold">Rolls: {variant.rolls}</p>
                  )}
                  <p className="text-sm text-gray-600 font-semibold">{selectedProduct.short_desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
