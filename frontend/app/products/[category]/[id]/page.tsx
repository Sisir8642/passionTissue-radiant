// /app/products/[category]/[id]/page.tsx
import ProductDetailPage from '@/app/components/ProductDetail';
import type { Product } from '@/app/types/product';

interface Props {
  params: { category: string; id: string } | Promise<{ category: string; id: string }>;
}



async function getProduct(category: string, id: string): Promise<Product | null> {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) throw new Error('NEXT_PUBLIC_API_URL is missing');

  const res = await fetch(`${base}/products/${category}/${id}/`, {
    cache: 'no-store', // always fetch fresh in dev
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function ProductDetail(props: Props) {
  const { category, id } = await props.params;

  if (!category || !id) {
    return <div className="p-10 text-red-600">Invalid URL parameters</div>;
  }

  const product = await getProduct(category, id);

  if (!product) {
    return <div className="p-10 text-red-600">Product not found</div>;
  }

  return <ProductDetailPage product={product} />;
}
