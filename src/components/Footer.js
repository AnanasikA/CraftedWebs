import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbLetterX } from 'react-icons/tb'; // Replace with the appropriate "X" icon if available

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 p-8 md:p-10 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Column 1: Contact Information */}
        <div>
          <h3 className="text-2xl font-serif tracking-wide mb-4 text-green-400 shadow-sm underline underline-offset-8 decoration-green-400">
            CraftedWebs
          </h3>
          <p className="text-gray-400 text-sm mb-2 hover:text-gray-200 transition-colors duration-300">
            <strong>Email:</strong> anastasiia.kupriianets@outlook.com
          </p>
          <p className="text-gray-400 text-sm mb-2 hover:text-gray-200 transition-colors duration-300">
            <strong>Telefon:</strong> +48 576 564 682
          </p>
          <p className="text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300">
            <strong>Adres:</strong> Sośnica 15, 55-080 Kąty Wrocławskie, Polska
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-400 underline underline-offset-8 decoration-gray-500">Nawigacja</h3>
          <a href="#home" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Strona Główna</a>
          <a href="#about" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">O Nas</a>
          <a href="#services" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Nasze Usługi</a>
          <a href="#portfolio" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Portfolio</a>
          <a href="#contact" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Kontakt</a>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-gray-400 underline underline-offset-8 decoration-gray-500 mb-4">Śledź nas</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61568294080385" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300 transition-all duration-300 transform hover:scale-110">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com/in/crafted-webs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300 transition-all duration-300 transform hover:scale-110">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Legal Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 underline underline-offset-8 decoration-gray-500 mb-4">Informacje prawne</h3>
          <a href="/polityka-prywatnosci" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Polityka prywatności</a>
          <a href="/regulamin" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Regulamin</a>
          <a href="/cookies" className="text-gray-400 hover:text-green-300 transition-all duration-300 block">Cookies</a>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; 2024 CraftedWebs. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

export default Footer;






