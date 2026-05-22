import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcos Vinicius — Full Stack & Game Developer",
  description: "Portfolio de Marcos Vinicius, desenvolvedor Full Stack e Game Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`
          ${GeistSans.className}
          ${GeistMono.variable}
          bg-background text-foreground antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}