"use client";

import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

import { motion } from "framer-motion";

import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <Header />
      
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-32">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
            alt="The Heritage"
            fill
            className="object-cover brightness-[0.4] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-4 block"
          >
            Từ năm 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="editorial-heading text-6xl md:text-9xl text-white mb-8"
          >
            Di Sản <span className="italic">Của Chúng Tôi</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Section - Broken Grid */}
      <section className="container mx-auto px-6 mb-48">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ParallaxImage
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop"
                alt="Craftsmanship"
                className="aspect-[4/5]"
                speed={0.2}
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <span className="text-[12vw] font-serif italic text-white/5 select-none pointer-events-none">Thủ công</span>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-6 block">Triết Lý</span>
              <h2 className="editorial-heading text-5xl text-white mb-8">
                Ám ảnh với <br />
                <span className="italic">Sự hoàn mỹ</span>
              </h2>
              <div className="space-y-6 text-white/40 font-sans text-lg leading-relaxed font-light">
                <p>
                  Tại Tiệm bánh D&J, chúng tôi tin rằng sự sang trọng thực sự nằm ở những chi tiết nhỏ nhất. Mỗi tác phẩm rời khỏi xưởng bánh của chúng tôi là kết quả của nhiều ngày chuẩn bị, những nguyên liệu theo mùa tinh túy nhất và sự cam kết không lay chuyển với các kỹ thuật truyền thống.
                </p>
                <p>
                  Hành trình của chúng tôi bắt đầu với một tầm nhìn đơn giản: nâng tầm nghệ thuật làm bánh khiêm tốn thành một trải nghiệm điện ảnh cho mọi giác quan. Từ việc cán lớp chính xác cho bánh sừng bò đến những tầng hương vị phức tạp của các loại bánh kem đặc trưng.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Minimalist Stats */}
      <section className="bg-surface py-32 mb-48">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-primary font-serif text-6xl italic">100%</span>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-white font-bold">Nguồn Gốc Tự Nhiên</h4>
              <p className="text-white/40 text-xs tracking-wide leading-relaxed">Chúng tôi tuyển chọn nguyên liệu độc quyền từ các nhà máy bột di sản và nông trại bền vững để đảm bảo sự tinh khiết trong từng miếng bánh.</p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <span className="text-primary font-serif text-6xl italic">72h</span>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-white font-bold">Quy Trình Chậm</h4>
              <p className="text-white/40 text-xs tracking-wide leading-relaxed">Thời gian là nguyên liệu quý giá nhất của chúng tôi. Quá trình lên men và nghỉ bột chưa bao giờ bị cắt ngắn.</p>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <span className="text-primary font-serif text-6xl italic">Bespoke</span>
              <h4 className="font-sans text-[11px] uppercase tracking-luxury text-white font-bold">Dịch Vụ Cá Nhân Hóa</h4>
              <p className="text-white/40 text-xs tracking-wide leading-relaxed">Mỗi đơn đặt hàng đều được chăm sóc tỉ mỉ, phản ánh gu thẩm mỹ và khẩu vị độc bản của riêng bạn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location - Minimalist */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold mb-6 block">Kết nối</span>
              <h2 className="editorial-heading text-5xl text-white">Ghé thăm <br /><span className="italic">Xưởng bánh</span></h2>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-white/20">Địa chỉ</h4>
                <p className="text-white font-sans tracking-wide">123 Đường Boulangerie, Quận 1<br />TP. Hồ Chí Minh, Việt Nam</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-white/20">Liên hệ</h4>
                <p className="text-white font-sans tracking-wide">hello@dj-artisanal.com<br />+84 (0) 90 123 4567</p>
              </div>
              <div className="flex gap-8 pt-8">
                <Instagram className="w-5 h-5 text-white/40 hover:text-primary transition-colors cursor-pointer" />
                <Facebook className="w-5 h-5 text-white/40 hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-[600px] relative">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1200&auto=format&fit=crop"
              alt="Atelier View"
              className="h-full w-full grayscale brightness-75 hover:brightness-100 transition-all duration-1000"
              speed={0.15}
            />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-white/20">
            © 2026 Tiệm Bánh Thủ Công D&J — Theo Đuổi Sự Hoàn Mỹ
          </p>
        </div>
      </footer>
    </main>
  );
}

