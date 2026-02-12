"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { useCart } from "@/lib/CartContext";
import ZeroGravityElements from "@/components/ZeroGravityElements";

import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const { addToCart } = useCart();
  
  const bestSellers = [
    {
      id: 1,
      name: "Bánh Sừng Bò Thủ Công",
      price: "45,000đ",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
      category: "Boulangerie",
      tagline: "Lớp vỏ vàng ươm từ bơ nguyên chất"
    },
    {
      id: 2,
      name: "Tiramisu Nhung Mềm",
      price: "85,000đ",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop",
      category: "Pâtisserie",
      tagline: "Kiệt tác cổ điển từ nước Ý"
    },
    {
      id: 3,
      name: "Bánh Kem Socola Noir",
      price: "450,000đ",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      category: "Signature",
      tagline: "70% Cocoa nguyên chất từ Bỉ"
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ZeroGravityElements />

      {/* Hero Section - Cinematic Immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop"
            alt="Cinematic Bakery"
            fill
            className="object-cover opacity-60 brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"></div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <span className="font-sans text-[12px] uppercase tracking-[0.5em] text-primary font-bold">
                Established 2024 — Artisanal Bakery
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="editorial-heading text-[12vw] leading-none text-white mix-blend-difference relative z-10"
            >
              Born from <br />
              <span className="italic text-primary">Heat & Time</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 text-white/60 font-sans tracking-[0.4em] uppercase text-[10px]"
            >
              Taste the Universe in a Crumb
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <MagneticButton>
                <Link href="/menu" className="btn-primary group">
                  Explore Collection
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/custom" className="btn-outline">
                  Bespoke Orders
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-sans text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Story Section - Asymmetrical Broken Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                    alt="The Process"
                    fill
                    className="object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                  />
                </div>
              </motion.div>
              {/* Decorative Text */}
              <div className="absolute -bottom-10 -right-20 hidden lg:block">
                <span className="text-[15vw] font-serif italic text-white/5 select-none pointer-events-none">
                  Passion
                </span>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-5 md:pl-12 mt-12 md:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <span className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold">Our Heritage</span>
                <h2 className="editorial-heading text-5xl text-white">
                  Crafting emotions, <br />
                  <span className="italic">one grain at a time.</span>
                </h2>
                <p className="text-white/60 leading-relaxed font-sans text-lg font-light">
                  At D&J, we don't just bake bread. We curate moments of pure indulgence. Every croissant, every cake is a testament to our obsession with artisanal perfection.
                </p>
                <div className="pt-8">
                  <Link href="/about" className="text-primary font-bold text-[12px] uppercase tracking-luxury border-b border-primary/30 pb-2 hover:border-primary transition-all">
                    The Full Story
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers - Minimalist Cinematic Gallery */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-xl">
              <span className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-4 block">Curated Excellence</span>
              <h2 className="editorial-heading text-6xl text-white">The Signature <br /><span className="italic">Collection</span></h2>
            </div>
            <Link href="/menu" className="text-white/40 hover:text-primary transition-colors font-sans text-[11px] uppercase tracking-widest mt-8 md:mt-0">
              View Entire Boutique
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                  <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({...product, price: parseInt(product.price.replace(/[^0-9]/g, ""))});
                      }}
                      className="bg-white text-background px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-primary hover:text-white transition-colors"
                    >
                      Thêm Vào Bộ Sưu Tập
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl text-white group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="font-sans text-sm text-primary font-bold">{product.price}</span>
                  </div>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">{product.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2000&auto=format&fit=crop"
            alt="Final CTA"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="editorial-heading text-6xl md:text-8xl text-white mb-12">
            Ready to taste <br />
            <span className="italic text-primary">perfection?</span>
          </h2>
          <div className="flex justify-center">
            <MagneticButton>
              <Link href="/menu" className="btn-primary px-16 py-6">
                Begin Your Order
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Footer Luxury */}
      <footer className="bg-background border-t border-white/5 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 mb-24">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="text-4xl font-serif text-white mb-8">D<span className="text-primary">&</span>J</h2>
              <p className="text-white/40 max-w-sm font-sans text-sm leading-relaxed tracking-wide">
                Tận tâm theo đuổi sự xuất sắc trong nghệ thuật làm bánh. Chúng tôi tạo nên cảm xúc thông qua những món bánh tinh tế và kỹ thuật nướng di sản.
              </p>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-8">Điều hướng</h4>
              <ul className="space-y-4 font-sans text-xs text-white/60 tracking-widest">
                <li><Link href="/menu" className="hover:text-primary transition-colors">Thực Đơn</Link></li>
                <li><Link href="/custom" className="hover:text-primary transition-colors">Đặt hàng theo yêu cầu</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Di sản</Link></li>
              </ul>
            </div>
            <div className="col-span-6 lg:col-span-3">
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-8">Liên hệ</h4>
              <ul className="space-y-4 font-sans text-xs text-white/60 tracking-widest">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Gửi Email</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.3em] text-white/20">
            <p>© 2026 Tiệm Bánh Thủ Công D&J. Bảo lưu mọi quyền.</p>
            <p className="mt-4 md:mt-0 italic">Sự sang trọng trong từng miếng bánh.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
