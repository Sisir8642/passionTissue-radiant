
// import products from '@/data/products';
import Link from 'next/link';
import ProductCategories from "@/app/components/CategoryFilter"
// import ProductCard from '@/app/components/ProductCard';
import { p } from 'framer-motion/m';
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

export const revalidate = 60; // seconds

async function getProducts(): Promise<Product[]> {
  const API = process.env.NEXT_PUBLIC_API_URL!;
  const res = await fetch(`${API}/products/`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function generateStaticParams() {
  const products = await getProducts();
console.log('products:', products);

  // get all unique categories
  const categories = Array.from(new Set(products.map(p => p.category.toLowerCase())));
  return categories.map(category => ({ category }));
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const products = await getProducts();

  const category = decodeURIComponent(params.category).toLowerCase();

  const filtered = products.filter(p => p.category.toLowerCase() === category);

  const pretty = category.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
       <section>
      <ProductCategories />
    </section>
    

    // <div className="p-10 max-w-7xl mx-auto">
    //   <h1 className="text-3xl font-bold mb-6">{pretty}</h1>

    //   {filtered.length === 0 ? (
    //     <p className="text-gray-500">No products found</p>
    //   ) : (
    //     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {filtered.map(products => (
    //         <Link
    //           key={products.id}
    //           href={`/products/${products.category}/${products.id}`}
    //           className="block"
    //         >
    //           <ProductCard product={products} onClick={function (): void {
    //             throw new Error('Function not implemented.');
    //           } } />
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}