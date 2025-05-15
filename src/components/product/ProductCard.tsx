'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

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

export default function ProductCard({ id, name, price, originalPrice, image, color, size, isNew, isSale }: ProductCardProps) {
  const { addToCart } = useCart();
  
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
    <div className="group">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Link href={`/product/${id}`}>
          <img src={image} alt={name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
        </Link>
        
        {isNew && (
          <div className="absolute top-3 left-3">
            <span className="bg-black text-white text-xs px-3 py-1 rounded">NEW</span>
          </div>
        )}
        
        {isSale && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">SALE</span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
            <i className="far fa-heart"></i>
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
            <i className="fas fa-search"></i>
          </button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <Link href={`/product/${id}`}>
        <h3 className="font-medium mb-1">{name}</h3>
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