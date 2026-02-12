"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { usePathname } from "next/navigation";
import CartSidebar from "./CartSidebar";
import PortalModal from "./PortalModal";
import { useState } from "react";
import { useUser } from "@/lib/UserContext";

export default function Header() {
  const { totalItems } = useCart();
  const { user, isLoggedIn } = useUser();
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Thực đơn", href: "/menu" },
    { name: "Đặt bánh theo yêu cầu", href: "/custom" },
    { name: "Về chúng tôi", href: "/about" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-transparent mix-blend-difference">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold font-serif tracking-tighter text-white">
            D<span className="text-primary">&</span>J
          </Link>
          
          <nav className="hidden md:flex space-x-12 font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors duration-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-white hover:text-primary transition-colors duration-500"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <div className="w-8 h-[1px] bg-white/30 hidden sm:block"></div>
            <button 
              onClick={() => setIsPortalOpen(true)}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-primary transition-colors duration-500 hidden sm:block"
            >
              {isLoggedIn ? user?.username : "Cổng Định Danh"}
            </button>
          </div>
        </div>
      </header>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <PortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
}
