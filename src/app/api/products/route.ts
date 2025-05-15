import { NextResponse } from 'next/server';

// Données de produits factices - à remplacer par une vraie base de données
const products = [
  {
    id: '1',
    name: 'Floral Summer Dress',
    price: 89.99,
    originalPrice: null,
    colors: ['Blue', 'Yellow', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Elegant floral dress with a flattering silhouette. Perfect for summer occasions and casual outings.',
    features: [
      'Lightweight fabric for comfort',
      'Adjustable straps for a perfect fit',
      'Side pockets for convenience',
      'Machine washable'
    ],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
    ],
    category: 'Dresses',
    stock: 15,
    isNew: true,
    isSale: false
  },
  {
    id: '2',
    name: 'Premium Linen Shirt',
    price: 59.99,
    originalPrice: 74.99,
    colors: ['White', 'Blue', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'High-quality linen shirt with a slim fit design. Breathable and perfect for both casual and formal occasions.',
    features: [
      '100% premium linen material',
      'Slim fit design',
      'Breathable fabric ideal for warm weather',
      'Classic collar and button-up style'
    ],
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop'
    ],
    category: 'Shirts',
    stock: 25,
    isNew: false,
    isSale: true
  },
  // Ajoutez plus de produits ici
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  
  if (id) {
    const product = products.find(p => p.id === id);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  }
  
  if (category) {
    const filteredProducts = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
    return NextResponse.json(filteredProducts);
  }
  
  return NextResponse.json(products);
}