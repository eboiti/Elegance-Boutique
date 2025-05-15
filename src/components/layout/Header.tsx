'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import MiniCart from '@/components/cart/MiniCart';
import { useCart } from '@/context/CartContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <Container className="py-2 flex justify-between">
          <div className="flex items-center">
            <span className="mr-6">
              <i className="fas fa-phone-alt mr-1"></i> +33 1 23 45 67 89
            </span>
            <span>
              <i className="fas fa-envelope mr-1"></i> contact@elegance-boutique.com
            </span>
          </div>
          <div className="flex items-center">
            <a href="#" className="mr-4 hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-pinterest"></i>
              <span className="sr-only">Pinterest</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="text-3xl font-serif font-bold text-gray-800">
              Elegance
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-gray-700 hover:text-black font-medium ${pathname === '/' ? 'text-black' : ''}`}
              >
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
              <div className="relative group">
                <button className="text-gray-700 hover:text-black font-medium flex items-center">
                  Men <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>
                <div className="absolute z-10 invisible group-hover:visible bg-white shadow-lg rounded-b-lg w-48 mt-2 -left-4">
                  <Link href="/collections/men-shirts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Shirts
                  </Link>
                  <Link href="/collections/men-pants" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Pants
                  </Link>
                  <Link href="/collections/men-jackets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Jackets
                  </Link>
                </div>
              </div>
              <Link 
                href="/new-arrivals" 
                className={`text-gray-700 hover:text-black font-medium ${pathname === '/new-arrivals' ? 'text-black' : ''}`}
              >
                New Arrivals
              </Link>
              <Link 
                href="/sale" 
                className={`text-gray-700 hover:text-black font-medium ${pathname === '/sale' ? 'text-black' : ''}`}
              >
                Sale
              </Link>
              <Link 
                href="/contact" 
                className={`text-gray-700 hover:text-black font-medium ${pathname === '/contact' ? 'text-black' : ''}`}
              >
                Contact
              </Link>
            </div>

            {/* User Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="text-gray-700 hover:text-black focus:outline-none"
                aria-label="Search"
              >
                <i className="fas fa-search"></i>
              </button>
              <Link 
                href="/account" 
                className="text-gray-700 hover:text-black"
                aria-label="Account"
              >
                <i className="fas fa-user"></i>
              </Link>
              <button 
                className="text-gray-700 hover:text-black focus:outline-none relative"
                aria-label="Wishlist"
              >
                <i className="fas fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
              </button>
              <button 
                className="text-gray-700 hover:text-black focus:outline-none relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Cart"
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
                aria-label="Menu"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white h-full w-80 max-w-full overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium">Menu</h3>
              <button 
                className="text-gray-500 hover:text-black" 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="block text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <Link href="/collections/women" className="block text-lg">
                      Women
                    </Link>
                    <button className="text-gray-500 p-2">
                      <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>
                      <Link 
                        href="/collections/women-dresses" 
                        className="text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dresses
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/collections/women-tops" 
                        className="text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Tops
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/collections/women-pants" 
                        className="text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pants
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Men section and other menu items similar to Women */}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Shopping Cart */}
      <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}