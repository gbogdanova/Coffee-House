import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CartProvider } from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], weight: ['300', '400', '600']});

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
      <body className={`${inter.className} bg-light`}>
        <Toaster toastOptions={{
          style: {
            background: "#665F55",
            color:"#E1D4C9",
          },
          iconTheme: {
            primary: '#B0907A',
            secondary: '#fff',
          },
        }}/>
        <CartProvider>
          <div className="
          max-w-[1440px]
          mx-auto
          flex 
          flex-col 
          p-3 md:p-5
          min-h-screen 
          bg-light">
            <Header/>
            <main className="flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
        </CartProvider>   
      </body>
    </html>
  );
}