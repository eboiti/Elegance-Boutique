'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [shippingCost, setShippingCost] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  
  // Calculate final price
  const finalPrice = totalPrice + shippingCost - discount;
  
  // Apply a promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'WELCOME10') {
      setDiscount(totalPrice * 0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };
  
  // Set free shipping for orders over $50
  useEffect(() => {
    if (totalPrice > 50) {
      setShippingCost(0);
    } else {
      setShippingCost(9.99);
    }
  }, [totalPrice]);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
          <Link href="/" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">
                              {item.color && `Color: ${item.color}`} {item.size && `| Size: ${item.size}`}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                        <div className="flex justify-center">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              className="px-3 py-1 text-gray-600 hover:text-black"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            >
                              -
                            </button>
                            <input 
                              type="text" 
                              value={item.quantity} 
                              className="w-10 text-center border-0 focus:ring-0" 
                              readOnly
                            />
                            <button 
                              className="px-3 py-1 text-gray-600 hover:text-black"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          className="text-gray-400 hover:text-black"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between mt-8">
              <Link href="/" className="text-gray-600 hover:text-black flex items-center">
                <i className="fas fa-arrow-left mr-2"></i>
                Continue Shopping
              </Link>
              <button 
                className="text-gray-600 hover:text-black flex items-center"
                onClick={() => {}}
              >
                <i className="fas fa-sync-alt mr-2"></i>
                Update Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      'Free'
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (WELCOME10)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${finalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-2">Promo Code</label>
                <div className="flex">
                  <input
                    type="text"
                    id="promo"
                    className="flex-1 rounded-l-lg border-gray-300 focus:ring-black focus:border-black"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button
                    className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-900 transition"
                    onClick={applyPromoCode}
                  >
                    Apply
                  </button>
                </div>
                {promoCode === 'WELCOME10' && discount > 0 && (
                  <p className="text-sm text-green-600 mt-1">10% discount applied!</p>
                )}
              </div>
              
              <Link 
                href="/checkout" 
                className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-medium mb-4">We Accept</h2>
              <div className="flex space-x-3">
                <img src="/api/placeholder/40/25" alt="Visa" className="h-8" />
                <img src="/api/placeholder/40/25" alt="Mastercard" className="h-8" />
                <img src="/api/placeholder/40/25" alt="PayPal" className="h-8" />
                <img src="/api/placeholder/40/25" alt="Apple Pay" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}