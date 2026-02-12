"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Upload, Send, Calendar, Cake, Info } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    size: "15cm",
    flavor: "Vanilla",
    message: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn. Yêu cầu đặt bánh riêng của bạn đã được tiếp nhận. Đội ngũ tư vấn của chúng tôi sẽ liên hệ với bạn sớm nhất.");
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <Header />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            {/* Left side: Context & Imagery */}
            <div className="md:w-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="font-sans text-[11px] uppercase tracking-luxury text-primary font-bold block mb-4">Sáng Tạo Độc Bản</span>
                <h1 className="editorial-heading text-6xl md:text-7xl text-white mb-8">
                  Nghệ Thuật Của <br />
                  <span className="italic">Khẩu Vị Cá Nhân</span>
                </h1>
                <p className="text-white/40 font-sans text-lg leading-relaxed max-w-md">
                  Dù là một buổi kỷ niệm trọng đại hay một món quà tinh tế, các bậc thầy làm bánh của chúng tôi sẽ cùng bạn tạo nên một kiệt tác độc nhất vô nhị, vượt xa những điều bình thường.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="aspect-[4/5] relative overflow-hidden"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb80d?q=80&w=1200&auto=format&fit=crop"
                  alt="Bespoke Cake"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </motion.div>

              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/5">
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-luxury text-primary font-bold mb-4">Quy Trình</h4>
                  <p className="text-white/40 text-xs leading-relaxed">Tư vấn cá nhân hóa, sau đó là quá trình chế tác thủ công tỉ mỉ bằng những nguyên liệu hảo hạng nhất thế giới.</p>
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-luxury text-primary font-bold mb-4">Thời Gian</h4>
                  <p className="text-white/40 text-xs leading-relaxed">Chúng tôi cần tối thiểu 72 giờ để chuẩn bị cho các yêu cầu riêng biệt nhằm đảm bảo sự hoàn hảo tuyệt đối.</p>
                </div>
              </div>
            </div>

            {/* Right side: Minimalist Form */}
            <div className="md:w-1/2">
              <motion.form 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit} 
                className="space-y-12 bg-white/5 p-8 md:p-12 border border-white/5"
              >
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Họ và Tên</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="NGUYỄN VĂN A"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="relative group">
                      <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Số Điện Thoại</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="+84 000 000 000"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Ngày Nhận Bánh</label>
                    <input
                      required
                      type="date"
                      className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all [color-scheme:dark]"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Kích Thước</label>
                      <select 
                        className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all appearance-none"
                        onChange={(e) => setFormData({...formData, size: e.target.value})}
                      >
                        <option className="bg-background">Nhỏ (15cm)</option>
                        <option className="bg-background">Vừa (20cm)</option>
                        <option className="bg-background">Lớn (25cm)</option>
                        <option className="bg-background">Nhiều tầng (Theo yêu cầu)</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Hương Vị Chính</label>
                      <select 
                        className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all appearance-none"
                        onChange={(e) => setFormData({...formData, flavor: e.target.value})}
                      >
                        <option className="bg-background">Vanilla Madagascar</option>
                        <option className="bg-background">Socola Noir Bỉ</option>
                        <option className="bg-background">Matcha Kyoto</option>
                        <option className="bg-background">Red Velvet Heritage</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Thông Điệp (Viết lên bánh)</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all"
                      placeholder="CHÚC MỪNG KỶ NIỆM..."
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Tầm Nhìn Của Bạn (Chi tiết)</label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 py-4 font-sans text-sm tracking-widest text-white focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Mô tả ý tưởng nghệ thuật của bạn..."
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="relative group">
                    <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-luxury text-primary font-bold">Hình Ảnh Tham Khảo</label>
                    <div className="mt-4 border border-dashed border-white/10 p-8 text-center hover:border-primary transition-colors cursor-pointer group/upload">
                      <Upload className="w-6 h-6 text-white/20 mx-auto mb-4 group-hover/upload:text-primary transition-colors" />
                      <p className="text-[10px] uppercase tracking-luxury text-white/20 group-hover/upload:text-white transition-colors">Tải lên hình ảnh tham khảo</p>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full btn-primary py-6 text-xs font-bold flex items-center justify-center gap-4 group">
                  Gửi Yêu Cầu Đặt Bánh
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

