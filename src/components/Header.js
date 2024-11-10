import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Zamyka menu po zmianie rozmiaru okna na większy niż 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-gray-100 text-gray-900 py-4 px-6 sm:px-10 md:pt-6 lg:pt-8 flex items-center shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl sm:text-2xl font-serif tracking-widest hover:text-gray-700 transition-colors duration-300">
          CraftedWebs
        </h1>
      </div>

      {/* Spacer - centralny element, aby logo i menu były wyrównane po bokach */}
      <div className="flex-grow"></div>

      {/* Nawigacja dla większych ekranów */}
      <nav className="hidden md:flex space-x-6 pr-6 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-16">
        <Link to="/" className="text-xl font-semibold hover:text-green-500 transition-all duration-300">
          Strona Główna
        </Link>
        <Link to="/#about" className="text-xl font-semibold hover:text-green-500 transition-all duration-300">
          O Nas
        </Link>
        <Link to="/#services" className="text-xl font-semibold hover:text-green-500 transition-all duration-300">
          Nasze Usługi
        </Link>
        <Link to="/#portfolio" className="text-xl font-semibold hover:text-green-500 transition-all duration-300">
          Portfolio
        </Link>
        <Link to="/#contact" className="text-xl font-semibold hover:text-green-500 transition-all duration-300 pr-4">
          Kontakt
        </Link>
      </nav>

      {/* Przycisk menu dla małych ekranów */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
          <img
            src={isOpen ? `${process.env.PUBLIC_URL}/images/menu-close.png` : `${process.env.PUBLIC_URL}/images/menu-open.png`}
            alt="menu icon"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Rozwijane menu dla urządzeń mobilnych */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-gray-100 shadow-lg z-50 md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <Link to="/" onClick={toggleMenu} className="text-lg font-semibold hover:text-green-500 transition-all duration-300">
              Strona Główna
            </Link>
            <Link to="/#about" onClick={toggleMenu} className="text-lg font-semibold hover:text-green-500 transition-all duration-300">
              O Nas
            </Link>
            <Link to="/#services" onClick={toggleMenu} className="text-lg font-semibold hover:text-green-500 transition-all duration-300">
              Nasze Usługi
            </Link>
            <Link to="/#portfolio" onClick={toggleMenu} className="text-lg font-semibold hover:text-green-500 transition-all duration-300">
              Portfolio
            </Link>
            <Link to="/#contact" onClick={toggleMenu} className="text-lg font-semibold hover:text-green-500 transition-all duration-300">
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

























