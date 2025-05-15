export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-serif font-bold text-white mb-6">New Summer Collection 2025</h1>
              <p className="text-xl text-white mb-8">Discover our exclusive and refreshing creations for the summer season.</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Women</a>
                <a href="#" className="bg-black text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition duration-300">Men</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Category 1: Dresses */}
            <div className="group relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop')" }}>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Dresses</h3>
                  <a href="#" className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Category 2: Shirts */}
            <div className="group relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop')" }}>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Shirts</h3>
                  <a href="#" className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Category 3: Accessories */}
            <div className="group relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop')" }}>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Accessories</h3>
                  <a href="#" className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Category 4: Shoes */}
            <div className="group relative h-64 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop')" }}>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-white mb-2">Shoes</h3>
                  <a href="#" className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-bold">New Arrivals</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" alt="Product" className="w-full h-80 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded">NEW</span>
                </div>
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-medium mb-1">Floral Summer Dress</h3>
              <p className="text-gray-600 mb-1">Blue | Multiple Colors</p>
              <p className="font-medium">$89.99</p>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400&auto=format&fit=crop" alt="Product" className="w-full h-80 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">-20%</span>
                </div>
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-medium mb-1">Premium Linen Shirt</h3>
              <p className="text-gray-600 mb-1">White | Slim Fit</p>
              <div className="flex items-center">
                <p className="font-medium">$59.99</p>
                <p className="text-gray-500 line-through ml-2">$74.99</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop" alt="Product" className="w-full h-80 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded">NEW</span>
                </div>
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-medium mb-1">Leather Handbag</h3>
              <p className="text-gray-600 mb-1">Black | Genuine Leather</p>
              <p className="font-medium">$129.99</p>
            </div>

            {/* Product Card 4 */}
            <div className="group">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop" alt="Product" className="w-full h-80 object-cover" />
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-700 hover:text-black transition">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="font-medium mb-1">Slim Fit Chino Pants</h3>
              <p className="text-gray-600 mb-1">Beige | Premium Cotton</p>
              <p className="font-medium">$49.99</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-block border-2 border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300">
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}