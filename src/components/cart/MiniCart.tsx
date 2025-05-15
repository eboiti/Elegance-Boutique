'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Fragment } from 'react';

export default function MiniCart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 bg-white h-full w-96 max-w-full shadow-lg">
        <div className="p-4 border-b flex justify-between items-center">
          {/* Ligne corrigée */}
          <h3 className="font-medium">Your Cart ({cart?.length || 0} items)</h3>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-4">
          {!cart || cart.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            <Fragment>
              {cart.map((item) => (
                <div key={item.id} className="flex items-start py-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      {item.color && `Color: ${item.color}`} {item.size && `| Size: ${item.size}`}
                    </p>
                    <div className="flex justify-between mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          className="px-2 py-1 text-gray-600 hover:text-black"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 text-gray-600 hover:text-black"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="text-gray-500 hover:text-black"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="font-medium ml-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </Fragment>
          )}
        </div>
        
        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between font-medium mb-4">
            <span>Subtotal:</span>
            <span>${totalPrice?.toFixed(2) || '0.00'}</span>
          </div>
          <Link href="/cart" className="block bg-black text-white text-center py-2 rounded-lg mb-2 hover:bg-gray-900 transition" onClick={onClose}>
            View Cart
          </Link>
          <Link href="/checkout" className="block border border-black text-black text-center py-2 rounded-lg hover:bg-gray-100 transition" onClick={onClose}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}