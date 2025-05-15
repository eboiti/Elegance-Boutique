import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'new' | 'sale' | 'default';
  className?: string;
}

export default function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const variantStyles = {
    new: "bg-black text-white",
    sale: "bg-red-600 text-white",
    default: "bg-gray-200 text-gray-800"
  };
  
  return (
    <span className={`inline-block text-xs px-3 py-1 rounded ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}