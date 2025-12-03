'use client';
import products from '@/data/products';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category).toLowerCase();

  const filtered = products.filter(p => p.category.toLowerCase() === category);

  const pretty = category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">{pretty}</h1>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.category.toLowerCase())}/${product.id}`}
            >
              
                <ProductCard product={product} onClick={() => {}} />
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
