"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { useCart } from "@/lib/CartContext";
import MagneticButton from "@/components/MagneticButton";

const allProducts = [
  {
    id: 1,
    name: "Artisanal Croissant",
    price: 45000,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    category: "Boulangerie",
    tagline: "Golden layers of pure butter",
    description: "Our signature croissant, handcrafted over three days using premium French butter for incomparable flakiness.",
  },
  {
    id: 2,
    name: "Velvet Tiramisu",
    price: 85000,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
    category: "Pâtisserie",
    tagline: "A classic Italian masterpiece",
    description: "Layers of espresso-soaked savoiardi and rich mascarpone cream, finished with a dusting of noir cocoa.",
  },
  {
    id: 3,
    name: "Noir Chocolate Cake",
    price: 450000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    category: "Signature Cakes",
    tagline: "70% Dark Belgian Cocoa",
    description: "A decadent, multi-layered chocolate experience designed for the true connoisseur.",
  },
  {
    id: 4,
    name: "Sourdough Reserve",
    price: 95000,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    category: "Boulangerie",
    tagline: "36-hour slow fermentation",
    description: "Traditional wild-yeast sourdough with a thick, caramelized crust and an airy, tangy interior.",
  },
  {
    id: 5,
    name: "Pistachio Macarons",
    price: 150000,
    image: "https://images.unsplash.com/photo-1569864358642-9d1619702661?q=80&w=1200&auto=format&fit=crop",
    category: "Pâtisserie",
    tagline: "Hand-ground Sicilian pistachios",
    description: "Delicate almond shells filled with a smooth, roasted pistachio ganache. Box of 6.",
  },
  {
    id: 6,
    name: "Cold Brew Gold",
    price: 55000,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200&auto=format&fit=crop",
    category: "Specialty Coffee",
    tagline: "12-hour immersion steep",
    description: "Smooth, low-acid cold brew made from single-origin Ethiopian beans with floral notes.",
  },
];

const categories = ["Tất cả", ...Array.from(new Set(allProducts.map(p => p.category)))];

export default function MenuPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const filteredProducts = selectedCategory === "Tất cả" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary/60 mb-4">Tinh Hoa Bánh Ngọt</p>
            <h1 className="editorial-heading text-6xl md:text-8xl text-white mb-12">Thực Đơn</h1>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === category 
                    ? "bg-primary text-background border-primary" 
                    : "text-white/60 border-white/10 hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    
                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                      <button 
                        onClick={() => addToCart(product)}
                        className="btn-primary"
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                          {product.category}
                        </span>
                        <h3 className="text-2xl text-white font-serif mt-1">{product.name}</h3>
                      </div>
                      <span className="text-lg text-primary font-serif">
                        {product.price.toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    <p className="text-white/40 text-sm font-sans line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.02)_0%,transparent_50%)]" />
      </div>
    </main>
  );
}
