import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import './Services.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 relative p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center overflow-hidden">
      <div className="icon icon1 animate-bounce"></div>
      <div className="icon icon2 animate-bounce"></div>
      <div className="icon icon3 animate-bounce"></div>
      <div className="icon icon4 animate-bounce"></div>
      <div className="icon icon5 animate-bounce"></div>
      <div className="icon icon6 animate-bounce"></div>

      <SectionHeading title="Nasze Usługi" />

      <div className="absolute inset-0 bg-animated-background"></div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 z-10" data-aos="fade-up" data-aos-delay="200">
        
        {/* Usługa 1 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Google Wizytówki
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Tworzymy i optymalizujemy wizytówki Google, pomagając Twojej firmie zwiększyć widoczność lokalną.
          </p>
          <a href="/google-my-business" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">GMB</span>
        </div>

        {/* Usługa 2 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Kampanie Google Ads
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Skuteczne kampanie Google Ads, które docierają do właściwej grupy odbiorców i zwiększają konwersje.
          </p>
          <a href="/google-ads" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">ADS</span>
        </div>

        {/* Usługa 3 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Kampanie Facebook Ads
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Tworzymy kampanie reklamowe na Facebooku, które angażują użytkowników i zwiększają świadomość marki.
          </p>
          <a href="/facebook-ads" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">FB</span>
        </div>

        {/* Usługa 4 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Optymalizacja SEO
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Poprawiamy widoczność strony w wyszukiwarkach, aby Twoja firma znalazła się wyżej w wynikach wyszukiwania.
          </p>
          <a href="/seo" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">SEO</span>
        </div>

        {/* Usługa 5 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Projektowanie Stron
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Tworzymy profesjonalne, estetyczne strony internetowe, które pomagają budować silny wizerunek marki.
          </p>
          <a href="/web-design" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">WEB</span>
        </div>

        {/* Usługa 6 */}
        <div className="service-card group bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:shadow-2xl flex flex-col justify-between relative">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            Audyt Strony
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base md:text-lg">
            Przeprowadzamy dokładny audyt strony, aby zidentyfikować obszary do poprawy i optymalizacji.
          </p>
          <a href="/site-audit" className="text-green-500 font-semibold group-hover:underline transition-all duration-300 mt-4 text-sm sm:text-base">
            Dowiedz się więcej &rarr;
          </a>
          <span className="absolute bottom-4 right-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300 opacity-30 pointer-events-none">AUDYT</span>
        </div>
      </div>
    </section>
  );
};

export default Services;








