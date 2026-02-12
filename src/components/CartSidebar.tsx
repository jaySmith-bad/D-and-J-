"use client";

import { useCart } from "@/lib/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@/lib/UserContext";

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { user, isLoggedIn } = useUser();

  const progressToGift = (totalPrice / 300000) * 100;
  const isGiftUnlocked = totalPrice >= 300000;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-md"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col border-l border-white/10"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold font-serif text-white uppercase tracking-widest">Giỏ hàng ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {/* Cosmic Progress Bar */}
              {cart.length > 0 && (
                <div className="p-4 border border-primary/20 bg-primary/5 space-y-3">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest">
                    <span className="text-primary">Món quà từ vũ trụ</span>
                    <span className="text-white/60">{isGiftUnlocked ? "Đã mở khóa!" : `Còn ${(300000 - totalPrice).toLocaleString()}đ nữa`}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progressToGift, 100)}%` }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    />
                  </div>
                  <p className="text-[9px] text-white/40 italic">Đạt 300.000đ để nhận một hộp Cookies đặc biệt.</p>
                </div>
              )}

              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag className="w-16 h-16 text-white/5 mx-auto mb-4" />
                  <p className="text-white/20 font-sans tracking-widest uppercase text-xs">Giỏ hàng của bạn đang trống</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-20 h-20 overflow-hidden shrink-0 border border-white/10">
                      <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-serif text-white text-base tracking-wide">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-white/20 hover:text-primary transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-primary font-serif text-sm mb-3">{item.price.toLocaleString('vi-VN')}đ</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-white/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-white font-sans">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-6 bg-black/20">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-sans">Tạm tính:</span>
                    <span className="text-white font-serif">{totalPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                  {isLoggedIn && (
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-sans">Stardust tích lũy:</span>
                      <span className="text-primary font-serif">+{Math.floor(totalPrice / 10000)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-xs uppercase tracking-[0.2em] text-white font-bold font-sans">Tổng cộng:</span>
                    <span className="text-primary font-serif text-2xl">{totalPrice.toLocaleString('vi-VN')}đ</span>
                  </div>
                </div>

                <button className="w-full btn-primary py-5 text-sm font-bold tracking-[0.3em] uppercase group relative overflow-hidden">
                  <span className="relative z-10">Tiến hành thanh toán</span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </button>
                
                {!isLoggedIn && (
                  <p className="text-[9px] text-center text-white/40 uppercase tracking-widest">
                    Đăng nhập để tích lũy Stardust và nhận ưu đãi hạng {user?.rank || "Meteor"}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
