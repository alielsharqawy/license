import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
     <body className={`${cairoFont.variable} antialiased bg-gray-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
