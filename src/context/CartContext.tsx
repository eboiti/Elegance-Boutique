'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Types
export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
};

interface CartState {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

interface CartContextType extends CartState {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Initial state
const initialState: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0
};

// Calculate totals
const calculateTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  return items.reduce(
    (totals, item) => {
      return {
        totalItems: totals.totalItems + item.quantity,
        totalPrice: totals.totalPrice + item.price * item.quantity
      };
    },
    { totalItems: 0, totalPrice: 0 }
  );
};

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      
      let updatedItems;
      if (existingItemIndex > -1) {
        updatedItems = state.cart.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        updatedItems = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      
      const totals = calculateTotals(updatedItems);
      
      return {
        ...state,
        cart: updatedItems,
        ...totals
      };
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.cart.filter(item => item.id !== action.payload);
      const totals = calculateTotals(updatedItems);
      
      return {
        ...state,
        cart: updatedItems,
        ...totals
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.cart.map(item => 
        item.id === action.payload.id 
          ? { ...item, quantity: action.payload.quantity } 
          : item
      );
      const totals = calculateTotals(updatedItems);
      
      return {
        ...state,
        cart: updatedItems,
        ...totals
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
    
    case 'LOAD_CART': {
      const totals = calculateTotals(action.payload);
      
      return {
        cart: action.payload,
        ...totals
      };
    }
    
    default:
      return state;
  }
}

// Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    if (state.cart.length) {
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }, [state.cart]);
  
  // Actions
  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  
  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    localStorage.removeItem('cart');
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        ...state,
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}