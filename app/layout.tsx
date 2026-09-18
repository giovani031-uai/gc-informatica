import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { storeConfig } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${storeConfig.name} — ${storeConfig.tagline}`,
    template: `%s | ${storeConfig.name}`,
  },
  description: storeConfig.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
