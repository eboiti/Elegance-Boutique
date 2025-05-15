import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Elegance</h4>
            <p className="text-gray-400 mb-4">Premium fashion boutique offering stylish and elegant clothing for men and women.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/women" className="text-gray-400 hover:text-white">Women</Link>
              </li>
              <li>
                <Link href="/collections/men" className="text-gray-400 hover:text-white">Men</Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white">New Arrivals</Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white">Sale</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">123 Fashion Avenue, Paris, France</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">contact@elegance-boutique.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">Mon-Sat: 10am-7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elegance Boutique. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
            <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
            <i className="fab fa-paypal text-2xl text-gray-400"></i>
            <i className="fab fa-apple-pay text-2xl text-gray-400"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
}