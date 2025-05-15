import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  isLoading = false,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-block font-medium rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-900",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline: "bg-transparent border border-black text-black hover:bg-gray-100"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  const buttonContent = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  );
  
  if (href) {
    return (
      <Link 
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {buttonContent}
    </button>
  );
}