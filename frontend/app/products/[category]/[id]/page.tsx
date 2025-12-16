'use client';
import { use } from 'react';
import products from '@/data/products';
import ProductDetailPage from '@/app/components/ProductDetail';

interface Props {
  params: Promise<{ category: string; id: string }>;
}

export default function ProductDetail({ params }: Props) {
  const { category, id } = use(params); // unwrap the promise

  const categoryStr = decodeURIComponent(category).toLowerCase();
  const idStr = decodeURIComponent(id);

  const product = products.find(
    (p) => p.id === idStr && p.category.toLowerCase() === categoryStr
  );

  if (!product) {
    return <p className="p-10 text-red-600">Product not found</p>;
  }

  return <ProductDetailPage product={product} />;
}
