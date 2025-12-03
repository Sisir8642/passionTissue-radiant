'use client';
import products from '@/data/products';
import ProductCard from '@/app/components/ProductCard';
import Link from 'next/link';
import Header from '@/app/components/Header';
export default function ProductsPage() {
  return (
    <>
    <Header />
    <div className="p-10">
      
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${encodeURIComponent(product.category.toLowerCase())}/${product.id}`}
          >
            
              <ProductCard product={product} onClick={() => {}} />
            
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
