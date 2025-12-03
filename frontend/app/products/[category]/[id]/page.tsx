'use client';
import products from '@/data/products';
import { useParams } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const { category, id } = params;

  const categoryStr = Array.isArray(category) ? category[0] : category;
  const idStr = Array.isArray(id) ? id[0] : id;

  const product = (categoryStr && idStr)
    ? products.find(
        p => p.id.toString() === idStr && p.category.toLowerCase() === categoryStr.toLowerCase()
      )
    : undefined;

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <ProductCard product={product} onClick={() => {}} />
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
