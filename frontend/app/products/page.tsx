'use client';

import { useState, useEffect } from 'react';
// import { products } from '@/data/products';
import { useRouter } from 'next/navigation';

interface Variant {
  id: string;
  label: string;
  images: string[];
}

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  variants?: Variant[];
}

export default function ProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
const API = process.env.NEXT_PUBLIC_API_URL!;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ✅ Fetch from backend
  useEffect(() => {
    fetch(`${API}/products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [API]);

  // categories derived from products (NO hardcoding)
  const categories = [
    'All',
    ...Array.from(new Set(products.map(p => p.category))),
  ];

  // filtering logic
  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory;

    const matchesSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* FILTER CONTROLS */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-3 rounded-md w-full"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border px-4 py-3 rounded-md w-full sm:w-64"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border rounded-2xl p-6 hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="h-64 flex items-center justify-center mb-6 bg-gray-50 rounded-xl">
                <img
                  src={
                    product.variants?.[0]?.images?.[0] || product.image
                  }
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {product.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mb-6">
                {product.shortDesc}
              </p>

              {/* VARIANTS */}
              {product.variants && (
                <div className="flex flex-wrap gap-3">
                  {product.variants.map(variant => (
                    <button
                      key={variant.id}
                      onClick={() =>
                        router.push(
                          `/products/${product.category.toLowerCase()}/${product.id}?variant=${variant.id}`
                        )
                      }
                      className="px-4 py-2 rounded-full text-sm font-semibold
                                 bg-purple-100 text-purple-700
                                 hover:bg-purple-600 hover:text-white
                                 transition"
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
