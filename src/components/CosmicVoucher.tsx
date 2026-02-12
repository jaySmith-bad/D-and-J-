"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ticket } from "lucide-react";

interface VoucherProps {
  code: string;
  value: string;
  description: string;
  expiry: string;
  type: 'Meteor' | 'Moon Walker' | 'Sun Keeper' | 'General';
}

export default function CosmicVoucher({ code, value, description, expiry, type }: VoucherProps) {
  const getColors = () => {
    switch (type) {
      case 'Sun Keeper': return 'border-primary text-primary bg-primary/5';
      case 'Moon Walker': return 'border-blue-400 text-blue-400 bg-blue-400/5';
      case 'Meteor': return 'border-purple-400 text-purple-400 bg-purple-400/5';
      default: return 'border-white/20 text-white/60 bg-white/5';
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative w-full max-w-sm border overflow-hidden ${getColors()} group`}
    >
      {/* Boarding Pass Design */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[8px] uppercase tracking-[0.4em] mb-1">Tài sản Vũ trụ</p>
            <h3 className="font-serif text-2xl italic text-white">{value}</h3>
          </div>
          <Ticket className="w-5 h-5 opacity-20" />
        </div>

        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest font-bold">{description}</p>
          <p className="text-[8px] uppercase tracking-widest opacity-40">Hết hạn: {expiry}</p>
        </div>

        <div className="pt-4 border-t border-dashed border-white/10 flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[7px] uppercase tracking-widest opacity-40">Mã truy cập</p>
            <p className="text-xs font-mono tracking-tighter text-white select-all">{code}</p>
          </div>
          <button className="text-[9px] uppercase tracking-widest font-bold py-2 px-4 border border-current hover:bg-white hover:text-black transition-all">
            Áp dụng
          </button>
        </div>
      </div>

      {/* Decorative Notches */}
      <div className="absolute top-1/2 left-[-10px] w-5 h-5 rounded-full bg-background border border-white/10 -translate-y-1/2" />
      <div className="absolute top-1/2 right-[-10px] w-5 h-5 rounded-full bg-background border border-white/10 -translate-y-1/2" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </motion.div>
  );
}
