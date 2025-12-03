'use client';
import { ChevronRight } from "lucide-react";
import products from "@/data/products";
import Image from "next/image";

export default function ProductCard({ product, onClick }: { product: typeof products[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <Image
          src={product.image} 
          alt={product.name}
          width={400} 
          height={300}
          className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.ply}
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-purple-500 font-medium mb-2">{product.category}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center gap-2">
            View Details <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
