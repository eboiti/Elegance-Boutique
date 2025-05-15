'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import MiniCart from '@/components/cart/MiniCart';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between">
          <div className="flex items-center">
            <span className="mr-6">
              <i className="fas fa-phone-alt mr-1"></i> +33 1 23 45 67 89
            </span>
            <span>
              <i className="fas fa-envelope mr-1"></i> contact@elegance-boutique.com
            </span>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-4 hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="mr-4 hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="mr-4 hover:text-gray-300"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-3xl font-serif font-bold text-gray-800">
              Elegance
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`text-gray-700 hover:text-black font-medium ${pathname === '/' ? 'text-black' : ''}`}>
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-black font-medium flex items-center">
                  Women <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute z-10 invisible group-hover:visible bg-white shadow-lg rounded-b-lg w-48 mt-2 -left-4">
                  <Link href="/collections/women-dresses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Dresses
                  </Link>
                  <Link href="/collections/women-tops" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Tops
                  </Link>
                  <Link href="/collections/women-pants" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Pants
                  </Link>
                </div>
              </div>
              {/* Autres liens de navigation similaires */}
            </div>

            {/* User Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-black focus:outline-none">
                <i className="fas fa-search"></i>
              </button>
              <Link href="/account" className="text-gray-700 hover:text-black">
                <i className="fas fa-user"></i>
              </Link>
              <button className="text-gray-700 hover:text-black focus:outline-none relative">
                <i className="fas fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </button>
              <button
                className="text-gray-700 hover:text-black focus:outline-none relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <i className="fas fa-shopping-bag"></i>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="md:hidden text-gray-700 hover:text-black focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}