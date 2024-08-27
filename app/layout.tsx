import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: "Coffee House",
  description: "modern web application for coffee lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/cup.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}