import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const categories = [
  {
    id: 'dresses',
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shirts',
    name: 'Shirts',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-black text-white">
      <Container>
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">{category.name}</h3>
                  <Link 
                    href={`/collections/${category.id}`}
                    className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}