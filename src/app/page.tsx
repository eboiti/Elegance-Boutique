import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';

export default function Home() {
  return (
    <main>
      {/* Hero Section avec la nouvelle implémentation */}
      <HeroSection />
      
      {/* Section des catégories avec Suspense pour le chargement asynchrone */}
      <Suspense fallback={<div className="py-16 text-center">Loading categories...</div>}>
        <CategoriesSection />
      </Suspense>
      
      {/* Section des nouveautés avec Suspense */}
      <Suspense fallback={<div className="py-16 text-center">Loading products...</div>}>
        <NewArrivalsSection />
      </Suspense>
    </main>
  );
}