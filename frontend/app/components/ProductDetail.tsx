'use client';

import { Star, Package, ShoppingCart, ChevronRight } from "lucide-react";
import products from "@/data/products";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function ProductDetailPage({ product, onBack }: { product: typeof products[0]; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-8">
      <div className="w-full max-w-4xl">
        <button
          onClick={onBack}
          className="mb-6 text-purple-600 hover:text-pink-600 font-medium transition-colors"
        >
          ← Back to Products
        </button>

        <Card className="overflow-hidden shadow-xl">
          <div className="md:grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <CardContent className="p-0">
              <div className="w-full h-[400px] md:h-[500px] relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>

            {/* Product Info */}
            <CardContent className="space-y-6 p-8">
              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                ))}
                <span className="text-gray-500">(127 reviews)</span>
              </div>

              <p className="text-2xl font-bold text-purple-600">
                {product.price}
              </p>

              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Package size={20} className="text-purple-600" />
                  <span><strong>Pack:</strong> {product.pack}</span>
                </div>
                {product.sheets && (
                  <div className="flex items-center gap-2">
                    <Package size={20} className="text-purple-600" />
                    <span><strong>Sheets:</strong> {product.sheets}</span>
                  </div>
                )}
                {product.ply && (
                  <div className="flex items-center gap-2">
                    <Package size={20} className="text-purple-600" />
                    <span><strong>Ply:</strong> {product.ply}</span>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <ul className="space-y-1 list-disc list-inside text-gray-700">
                  {product.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors font-semibold flex items-center justify-center gap-2">
                  <ShoppingCart size={24} /> Add to Cart
                </button>
                <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Contact for Bulk Order
                </button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
