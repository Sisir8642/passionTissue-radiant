import products from '@/data/products';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category).toLowerCase();

  const filtered = products.filter(p => p.category.toLowerCase() === category);

  const pretty = category.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{pretty}</h1>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No products found</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.category.toLowerCase())}/${product.id}`}
              className="block"
            >
              <ProductCard product={product} onClick={function (): void {
                throw new Error('Function not implemented.');
              } } />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
