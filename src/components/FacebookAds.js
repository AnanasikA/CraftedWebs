import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Target from './images/icons/targeting.png';
import Engagement from './images/icons/web-browser.png';
import Analysis from './images/icons/analysis.png';
import CheckMark from './images/icons/checkmark.png';

const FacebookAds = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white pt-24 p-8 sm:pt-32 sm:p-16">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight" data-aos="fade-down">Kampanie Facebook Ads</h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
          Zwiększ zaangażowanie klientów i dotrzyj do większej grupy odbiorców dzięki skutecznie zaplanowanym kampaniom reklamowym na Facebooku.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8" data-aos="fade-up">Korzyści z kampanii Facebook Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-right">
            <img src={Target} alt="Precyzyjne Targetowanie" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Precyzyjne targetowanie</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Docieraj do klientów na podstawie ich zainteresowań, lokalizacji i demografii.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-up">
            <img src={Engagement} alt="Budowanie Zaangażowania" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Budowanie zaangażowania</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Twórz kampanie, które zachęcają do interakcji i budują relację z marką.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-left">
            <img src={Analysis} alt="Analiza Wyników" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Analiza wyników</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Monitorujemy efekty kampanii i dostosowujemy strategię, aby osiągać lepsze rezultaty.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white py-12 px-6 sm:py-16 sm:px-10 rounded-xl shadow-xl text-center">
        <img src={CheckMark} alt="Rozpocznij kampanię" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" data-aos="zoom-in" />
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Zacznij swoją kampanię na Facebooku</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8" data-aos="fade-up">
          Skontaktuj się z nami, aby stworzyć kampanię reklamową, która pomoże Twojej firmie osiągnąć sukces.
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-600 py-2 px-6 sm:py-3 sm:px-8 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300" data-aos="fade-up">
          Skontaktuj się z nami &rarr;
        </a>
      </div>
    </section>
  );
};

export default FacebookAds;


