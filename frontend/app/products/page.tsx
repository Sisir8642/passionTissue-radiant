'use client';
import { useState } from 'react';
import products from '@/data/products';
import ProductCard from '@/app/components/ProductCard';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const router = useRouter();
  const categories = [
    'All',
    'Face-tissue',
    'Bathroom-Tissue',
    'Kitchen-Towel',
    'Napkin',
    'Wipes',
    'Sanitary-Pad'
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchesSearch =
      searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">All Products</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-end mb-16">

          {/* Search Input */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-3 py-2 rounded-md w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-3 py-2 rounded-md w-full sm:w-60"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

        </div>

        <section id="filterProducts">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Available Products
          </h2>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() =>
                    router.push(
                      `/products/${encodeURIComponent(product.category.toLowerCase())}/${encodeURIComponent(product.id).toLowerCase()}`
                    )
                  }               
                   />
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
