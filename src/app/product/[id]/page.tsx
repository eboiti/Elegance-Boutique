import Image from 'next/image';
import Link from 'next/link';

// Cette fonction serait remplacée par une vraie requête à votre API/base de données
async function getProductData(id: string) {
  // Données factices pour le moment, à remplacer par l'API réelle
  const products = {
    '1': {
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
    '2': {
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
    }
  };
  
  return products[id as keyof typeof products] || null;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductData(params.id);
  
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">Product not found</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-black">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/collections/${product.category.toLowerCase()}`} className="hover:text-black">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1, 4).map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden border hover:border-black cursor-pointer">
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
            <span className="text-gray-600 ml-2">4.5 (24 reviews)</span>
          </div>
          
          <div className="mb-6">
            {product.isSale ? (
              <div className="flex items-center">
                <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
                <span className="text-gray-500 line-through ml-2">${product.originalPrice?.toFixed(2)}</span>
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex space-x-3">
              {product.colors.map((color, index) => (
                <button key={index} className={`w-8 h-8 rounded-full border-2 ${index === 0 ? 'border-black ring-2 ring-black ring-opacity-25' : 'border-white'}`} style={{ backgroundColor: color.toLowerCase() }}></button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size, index) => (
                <button key={index} className={`px-3 py-2 border rounded-md text-sm ${index === 2 ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex">
              <div className="flex items-center border border-gray-300 rounded-md w-32">
                <button className="px-3 py-2 text-gray-600 hover:text-black">-</button>
                <input type="text" value="1" className="w-full text-center border-0 focus:ring-0" />
                <button className="px-3 py-2 text-gray-600 hover:text-black">+</button>
              </div>
              <div className="ml-4 text-sm text-gray-500 flex items-center">{product.stock} items available</div>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <button className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition">
              Add to Cart
            </button>
            <button className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center text-gray-600 hover:text-black hover:border-black transition">
              <i className="far fa-heart"></i>
            </button>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="font-medium mb-3">Description</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <h3 className="font-medium mb-3">Features</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}