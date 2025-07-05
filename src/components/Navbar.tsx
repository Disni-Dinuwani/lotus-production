
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-serif font-bold text-2xl text-aqua-600">Lotus</span>
          <span className="font-serif font-medium text-2xl ml-2">Production</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/portfolio') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/services') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/testimonials') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            About Us
          </Link>
          {/* <Link
            to="/partners"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/partners') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Partners
          </Link> */}
          <Link
            to="/contact"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/contact') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Contact
          </Link>
          <Link
            to="/partners"
            className={`transition-colors font-medium hover:text-aqua-600 ${isActive('/partners') ? 'text-aqua-600' : 'text-foreground'}`}
          >
            Partners
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/booking">
            <Button className="bg-aqua-600 hover:bg-aqua-700 text-white">Book Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container-custom py-6 flex flex-col space-y-5">
            <Link to="/" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/services" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>Services</Link>
            <Link to="/testimonials" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>Contact</Link>
            <Link to="/partners" className="text-lg font-medium hover:text-aqua-600 transition-colors" onClick={toggleMenu}>Partners</Link>
            <Link to="/booking" onClick={toggleMenu}>
              <Button className="bg-aqua-600 hover:bg-aqua-700 text-white w-full mt-2">Book Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
