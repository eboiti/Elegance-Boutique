import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';

// Optimisation du chargement des polices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: 'Elegance Boutique | Premium Fashion Store',
  description: 'Discover our exclusive collection of elegant and stylish clothing for men and women.',
  keywords: 'fashion, clothing, elegance, boutique, dresses, shirts, accessories',
  openGraph: {
    title: 'Elegance Boutique | Premium Fashion Store',
    description: 'Discover our exclusive collection of elegant and stylish clothing for men and women.',
    url: 'https://elegance-boutique.vercel.app',
    siteName: 'Elegance Boutique',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}