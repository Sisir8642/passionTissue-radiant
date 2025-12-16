"use client";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import ProductCard from "./ProductCard";
import { useState } from "react";
import type { Product } from "@/data/products";

export default function CartSheet() {


const [cartItems, setCartItems] = useState<Product[]>([]); 


  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 bg-[#7b2cbf] text-white px-4 py-2 rounded-lg hover:bg-[#63378b] transition-colors">
          <ShoppingCart size={20} />
          <span>Cart ({cartItems.length})</span>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-130 p-6">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <ProductCard key={item.id} product={item} onClick={() => {}} />
            ))
          )}
        </div>

        <SheetClose asChild>
          <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
            Checkout
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
