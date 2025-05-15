'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  color?: string;
  size?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  color, 
  size, 
  isNew, 
  isSale 
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      color,
      size,
    });
  };
  
  return (
    <div 
      className="group" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Link href={`/product/${id}`}>
          <div className="relative h-80 w-full">
            <Image 
              src={image} 
              alt={name} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              priority={false}
            />
          </div>
        </Link>
        
        {isNew && (
          <div className="absolute top-3 left-3">
            <Badge variant="new">NEW</Badge>
          </div>
        )}
        
        {isSale && (
          <div className="absolute top-3 left-3">
            <Badge variant="sale">SALE</Badge>
          </div>
        )}
        
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button 
            aria-label="Add to wishlist"
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition"
          >
            <i className="far fa-heart"></i>
          </button>
          <Link 
            href={`/product/${id}`}
            aria-label="Quick view"
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition"
          >
            <i className="fas fa-search"></i>
          </Link>
        </div>
        
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          } transition-transform duration-300`}
        >
          <button 
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <Link href={`/product/${id}`} className="block">
        <h3 className="font-medium mb-1 hover:text-gray-800">{name}</h3>
      </Link>
      
      <p className="text-gray-600 mb-1">{color} {size && `| ${size}`}</p>
      
      {originalPrice ? (
        <div className="flex items-center">
          <p className="font-medium">${price.toFixed(2)}</p>
          <p className="text-gray-500 line-through ml-2">${originalPrice.toFixed(2)}</p>
        </div>
      ) : (
        <p className="font-medium">${price.toFixed(2)}</p>
      )}
    </div>
  );
}