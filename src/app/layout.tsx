import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";
import { UserProvider } from "@/lib/UserContext";
import Preloader from "@/components/Preloader";
import StardustParticles from "@/components/StardustParticles";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "D&J Bakery | Sự Hoàn Hảo Thủ Công",
  description: "Trải nghiệm những loại bánh kem và bánh ngọt thủ công tinh tế nhất tại D&J Bakery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans bg-background text-white antialiased`}>
        <UserProvider>
          <CartProvider>
            <Preloader />
            <StardustParticles />
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
