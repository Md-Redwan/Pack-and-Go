import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container p-2 lg:px-0 lg:py-5">
        <div className="flex justify-between items-center h-20 font-poppins">
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-[18px]">
            <a href="#home" className="text-gray-900 hover:text-primary transition-colors font-semibold">
              Home
            </a>
            <a href="#tours" className="text-gray-600 hover:text-primary transition-colors font-semibold">
              Tours
            </a>
            <a href="#booking" className="text-gray-600 hover:text-primary transition-colors font-semibold">
              Booking
            </a>
            <a href="#pages" className="text-gray-600 hover:text-primary transition-colors font-semibold">
              Pages
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-semibold">
              Features
            </a>
            <a href="#blog" className="text-gray-600 hover:text-primary transition-colors font-semibold">
              Blog
            </a>
          </div>

          {/* Book Now Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-primary text-white font-semibold px-8.75 py-4 rounded-[17px] transition-colors cursor-pointer">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4 items-center">
              <a href="#home" className="text-gray-900 hover:text-primary transition-colors font-semibold px-2 py-2">
                Home
              </a>
              <a href="#tours" className="text-gray-600 hover:text-primary transition-colors font-semibold px-2 py-2">
                Tours
              </a>
              <a href="#booking" className="text-gray-600 hover:text-primary transition-colors font-semibold px-2 py-2">
                Booking
              </a>
              <a href="#pages" className="text-gray-600 hover:text-primary transition-colors font-semibold px-2 py-2">
                Pages
              </a>
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-semibold px-2 py-2">
                Features
              </a>
              <a href="#blog" className="text-gray-600 hover:text-primary transition-colors font-semibold px-2 py-2">
                Blog
              </a>
              <button className="bg-primary text-white font-semibold px-8.75 py-4 rounded-[17px] transition-colors mt-2 cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;