// Type définitions centralisées

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  images: string[];
  category: string;
  colors: string[];
  sizes: string[];
  features: string[];
  stock: number;
  isNew: boolean;
  isSale: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}