'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.jpg')" 
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-serif font-bold text-white mb-6">New Summer Collection 2025</h1>
          <p className="text-xl text-white mb-8">Discover our exclusive and refreshing creations for the summer season.</p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/collections/women" 
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Women
            </Link>
            <Link 
              href="/collections/men" 
              className="bg-black text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300"
            >
              Men
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}