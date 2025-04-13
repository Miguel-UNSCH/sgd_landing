import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/utils/cursor-glow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SGD MUNI KIMBIRI",
  description: "Sistema de Gestión Documental para la Municipalidad de Kimbiri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <CursorGlow />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
