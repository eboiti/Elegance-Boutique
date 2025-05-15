import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Elegance</h4>
            <p className="text-gray-400 mb-4">Premium fashion boutique offering stylish and elegant clothing for men and women.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/collections/women" className="text-gray-400 hover:text-white">Women</Link></li>
              <li><Link href="/collections/men" className="text-gray-400 hover:text-white">Men</Link></li>
              <li><Link href="/new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</Link></li>
              <li><Link href="/sale" className="text-gray-400 hover:text-white">Sale</Link></li>
            </ul>
          </div>
          {/* Ajoutez d'autres sections du footer ici */}
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-400 text-sm text-center">© 2025 Elegance Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}