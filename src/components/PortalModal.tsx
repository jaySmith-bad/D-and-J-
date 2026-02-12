"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogIn } from "lucide-react";
import { useUser } from "@/lib/UserContext";

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PortalModal({ isOpen, onClose }: PortalModalProps) {
  const { login, isLoggedIn, user } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md overflow-hidden"
          >
            {/* Cosmic Background Effect */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_50%)] animate-pulse" />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 text-center shadow-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!isLoggedIn ? (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary">Cổng Định Danh</p>
                    <h2 className="editorial-heading text-4xl text-white italic">Chào mừng Du hành giả</h2>
                    <p className="text-white/40 text-sm font-sans tracking-widest mt-4">
                      Bước qua cánh cửa vũ trụ để mở khóa những đặc quyền Bụi sao và các phiên bản giới hạn.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => { login('google'); onClose(); }}
                      className="w-full py-4 border border-white/10 bg-white/5 text-white font-sans text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                      Đăng nhập bằng Google
                    </button>
                    <button
                      onClick={() => { login('facebook'); onClose(); }}
                      className="w-full py-4 border border-white/10 bg-white/5 text-white font-sans text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      Đăng nhập bằng Facebook
                    </button>
                    <button
                      onClick={() => { login('zalo'); onClose(); }}
                      className="w-full py-4 border border-white/10 bg-white/5 text-white font-sans text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                      Đăng nhập bằng Zalo
                    </button>
                  </div>

                  <p className="text-[9px] text-white/20 uppercase tracking-[0.2em]">
                    Bằng cách tham gia, bạn đồng ý với các điều khoản liên hành tinh của chúng tôi.
                  </p>
                </div>
              ) : (
                <div className="space-y-8 py-4">
                  <div className="space-y-2">
                    <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary">Đã xác thực</p>
                    <h2 className="editorial-heading text-4xl text-white italic">Chào mừng trở lại, {user?.username}</h2>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-2">ID Định danh: <span className="text-primary">{user?.id}</span></p>
                    <div className="flex justify-center gap-4 mt-6">
                      <div className="text-center p-4 border border-white/5 bg-white/5 flex-1">
                        <p className="text-[8px] uppercase tracking-widest text-white/40 mb-1">Bụi sao (Stardust)</p>
                        <p className="text-xl text-primary font-serif">{user?.currentPoint}</p>
                      </div>
                      <div className="text-center p-4 border border-white/5 bg-white/5 flex-1">
                        <p className="text-[8px] uppercase tracking-widest text-white/40 mb-1">Cấp độ</p>
                        <p className="text-xl text-white font-serif">{user?.rank}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={onClose}
                    className="btn-primary w-full py-4"
                  >
                    Tiếp tục hành trình
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
