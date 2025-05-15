'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

// Exemple de données - à remplacer par des appels API réels
const products = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop',
    color: 'Blue',
    size: 'Multiple Colors',
    isNew: true
  },
  {
    id: '2',
    name: 'Premium Linen Shirt',
    price: 59.99,
    originalPrice: 74.99,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&auto=format&fit=crop',
    color: 'White',
    size: 'Slim Fit',
    isSale: true
  },
  {
    id: '3',
    name: 'Leather Handbag',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop',
    color: 'Black',
    size: 'Genuine Leather',
    isNew: true
  },
  {
    id: '4',
    name: 'Slim Fit Chino Pants',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop',
    color: 'Beige',
    size: 'Premium Cotton'
  }
];

export default function NewArrivalsSection() {
  // Dans une application réelle, vous chargeriez cela depuis une API
  const [newArrivals, setNewArrivals] = useState(products);
  
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-serif font-bold">New Arrivals</h2>
          <div className="flex space-x-2">
            <button 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition"
              aria-label="Next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              color={product.color}
              size={product.size}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}