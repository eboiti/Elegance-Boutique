'use client';

import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      id: 'dresses',
      name: 'Dresses',
      image: '/images/categories/dresses.jpg',
      link: '/collections/dresses'
    },
    {
      id: 'shirts',
      name: 'Shirts',
      image: '/images/categories/shirts.jpg',
      link: '/collections/shirts'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      image: '/images/categories/accessories.jpg',
      link: '/collections/accessories'
    },
    {
      id: 'shoes',
      name: 'Shoes',
      image: '/images/categories/shoes.jpg',
      link: '/collections/shoes'
    }
  ];

  return (
    <section 
      className="py-16 relative bg-cover bg-center text-white"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/category-bg.jpg')" 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative h-64 overflow-hidden rounded-lg">
              {/* Image d'arrière-plan avec style inline */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
                  <Link 
                    href={category.link}
                    className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}