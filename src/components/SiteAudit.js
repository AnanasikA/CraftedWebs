import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Performance from './images/icons/performance.png';
import SEO from './images/icons/seo.png';
import Responsive from './images/icons/responsive.png';
import CheckMark from './images/icons/checkmark.png';

const SiteAudit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white pt-24 p-8 sm:pt-32 sm:p-16">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight" data-aos="fade-down">Audyt Strony</h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
          Sprawdź wydajność i optymalizację swojej strony dzięki kompleksowemu audytowi, który zidentyfikuje kluczowe obszary do poprawy.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8" data-aos="fade-up">Dlaczego warto skorzystać z audytu strony?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-right">
            <img src={Performance} alt="Poprawa wydajności" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Poprawa wydajności</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Odkryj i napraw problemy, które mogą wpływać na szybkość i płynność działania Twojej strony.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-up">
            <img src={SEO} alt="Optymalizacja SEO" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Optymalizacja SEO</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Zwiększ swoją widoczność w wynikach wyszukiwania dzięki audytowi SEO, który wskaże niezbędne ulepszenia.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300" data-aos="fade-left">
            <img src={Responsive} alt="Lepsze doświadczenie użytkownika" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Lepsze doświadczenie użytkownika</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Zoptymalizuj układ i nawigację strony, aby zapewnić wygodne i przyjemne korzystanie dla użytkowników.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action with Green Background */}
      <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white py-12 px-6 sm:py-16 sm:px-10 rounded-xl shadow-xl text-center">
        <img src={CheckMark} alt="Sprawdź wydajność swojej strony" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" data-aos="zoom-in" />
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6" data-aos="fade-up">Sprawdź wydajność swojej strony</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8" data-aos="fade-up">
          Skontaktuj się z nami, aby przeprowadzić szczegółowy audyt Twojej strony i odkryć możliwości jej optymalizacji.
        </p>
        <a href="#contact" className="inline-block bg-white text-green-600 py-2 px-6 sm:py-3 sm:px-8 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300" data-aos="fade-up">
          Skontaktuj się z nami &rarr;
        </a>
      </div>
    </section>
  );
};

export default SiteAudit;

