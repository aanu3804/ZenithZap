
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/whatsapp', label: 'Contact' },
  ];

  return (
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 h-20">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">

          <Link to="/" className="flex items-center gap-2">
            <img
              src="/pic.png"
              alt="ZenithZap Logo"
              className="h-12 max-h-full w-auto object-contain"
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors hover:text-orange-500 ${
                  isActive(item.path) ? 'text-orange-600' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold py-2 px-4 rounded transition-colors hover:bg-orange-600 ${
                    isActive(item.path) ? 'bg-orange-600 text-white' : 'text-white hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
