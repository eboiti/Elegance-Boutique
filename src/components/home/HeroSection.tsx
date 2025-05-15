'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Image d'arrière-plan avec position absolute */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Assurez-vous que cette image existe dans votre dossier public/images
          alt="Summer collection background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
      </div>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center">
        <div className="container mx-auto px-4 relative z-20">
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
      </div>
    </section>
  );
}