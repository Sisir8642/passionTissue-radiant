
"use client"; 
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Star, Package } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product, ProductVariant } from '@/app/types/product';

interface Props {
  product: Product;
  onBack?: () => void;
}

export default function ProductDetailPage({ product, onBack }: Props) {
  const searchParams = useSearchParams();
  const variantIdFromQuery = searchParams.get('variant');

  // Only show the variant from query or default to first
  const initialVariant = product.variants?.find(v => v.id === variantIdFromQuery) ?? product.variants?.[0] ?? null;

  const [activeVariant, setActiveVariant] = useState<ProductVariant | null>(initialVariant);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!activeVariant) {
    return <div className="min-h-screen flex items-center justify-center">Variant not found.</div>;
  }

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-8">
      <div className="w-full max-w-4xl">

        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 text-purple-600 hover:text-pink-600 font-medium transition-colors "
          >
            ← Back to Products
          </button>
        )}

        <Card className="overflow-hidden shadow-xl">

          <div className="md:grid md:grid-cols-2 gap-8">

            {/* IMAGE + COLOR SELECTION */}
            <CardContent className="p-4">

              {/* Main Image */}
              <div className="relative w-full h-96 bg-gray-100 rounded-md overflow-hidden mb-4">
                {activeVariant.images?.[activeImageIndex] ? (
                  <Image
                    src={activeVariant.images[activeImageIndex]}
                    alt={`${product.name} - ${activeVariant.label} - color ${activeImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {/* Thumbnails / Color Slider */}
              {activeVariant.images && activeVariant.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {activeVariant.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 ${
                        idx === activeImageIndex ? 'border-purple-600' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${activeVariant.label} thumbnail ${idx + 1}`}
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

            </CardContent>

            {/* PRODUCT DETAILS */}
            <CardContent className="space-y-6 p-8">

              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                {product.category.replace(/-/g, ' ')}
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {product.name} - {activeVariant.label}
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                ))}
                <span className="text-gray-500">(127 reviews)</span>
              </div>

              {/* INFO */}
              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                {/* {activeVariant.sheets && (
                  <div className="flex items-center gap-2">
                    <Package size={20} className="text-purple-600" />
                    <span><strong>Sheets:</strong> {activeVariant.sheets}</span>
                  </div>
                )}
                {product.ply && (
                  <div className="flex items-center gap-2">
                    <Package size={20} className="text-purple-600" />
                    <span><strong>Ply:</strong> {product.ply}</span>
                  </div>
                )} */}
              </div>

              {/* DESCRIPTION */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* HIGHLIGHTS */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4 pt-4">
                <a href="https://s.daraz.com.np/s.EDMW">
                  <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                    Contact for Bulk Order
                  </button>
                </a>
              </div>
            </CardContent>

          </div>
        </Card>
      </div>
    </div>
  );
}
