import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SEO = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white pt-24 p-8 sm:pt-32 sm:p-16">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight" data-aos="fade-down">Optymalizacja SEO</h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
          Zwiększ widoczność swojej strony w wyszukiwarkach dzięki naszym zaawansowanym strategiom SEO. Pomagamy firmom skutecznie zdobywać więcej ruchu organicznego i klientów.
        </p>
      </div>

      {/* SEO Statistics Section */}
      <div className="mb-16 sm:mb-20 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8" data-aos="fade-up">Nasze Osiągnięcia SEO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-8 sm:p-10 rounded-lg shadow-xl" data-aos="zoom-in">
            <h3 className="text-4xl sm:text-5xl font-bold">+200%</h3>
            <p className="text-sm sm:text-lg mt-2 sm:mt-4">Wzrost Ruchu Organicznego</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-8 sm:p-10 rounded-lg shadow-xl" data-aos="zoom-in">
            <h3 className="text-4xl sm:text-5xl font-bold">+150</h3>
            <p className="text-sm sm:text-lg mt-2 sm:mt-4">Zrealizowanych Projektów SEO</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-8 sm:p-10 rounded-lg shadow-xl" data-aos="zoom-in">
            <h3 className="text-4xl sm:text-5xl font-bold">+85%</h3>
            <p className="text-sm sm:text-lg mt-2 sm:mt-4">Wzrost Konwersji</p>
          </div>
        </div>
      </div>

      {/* Why Choose Our SEO Services */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8" data-aos="fade-up">Dlaczego warto wybrać nasze usługi SEO?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-right">
            <img src="images/seo-audit.gif" alt="Audyt SEO" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Audyt SEO</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Przeprowadzamy kompleksowy audyt SEO Twojej witryny, aby zidentyfikować jej mocne i słabe strony, oraz szanse na poprawę widoczności.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-up">
            <img src="images/content-optimization.gif" alt="Optymalizacja Treści" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Optymalizacja Treści</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Zoptymalizujemy treści Twojej strony, aby były bardziej atrakcyjne dla wyszukiwarek, z odpowiednimi słowami kluczowymi i strukturą.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-left">
            <img src="images/link-building.gif" alt="Linkowanie" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Linkowanie</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Budujemy silny profil linków zewnętrznych, co zwiększa autorytet Twojej witryny i poprawia jej pozycję w wyszukiwarkach.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-right">
            <img src="images/technical-seo.png" alt="Techniczne SEO" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Techniczne SEO</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Poprawiamy techniczne aspekty Twojej strony, takie jak szybkość ładowania, indeksacja i struktura kodu.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-up">
            <img src="images/local-seo.png" alt="SEO Lokalne" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">SEO Lokalne</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Pomagamy firmom lokalnym zdobyć więcej klientów z okolicznych miejscowości poprzez optymalizację wyników lokalnych.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow" data-aos="fade-left">
            <img src="images/analytics.png" alt="Analiza wyników" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Analiza wyników</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Monitorujemy efekty wdrożonych strategii SEO, dostarczając regularne raporty i rekomendacje dalszych działań.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white py-12 px-6 sm:py-16 sm:px-10 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Zoptymalizuj swoją stronę z nami</h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          Skontaktuj się z nami, aby dowiedzieć się, jak możemy poprawić widoczność Twojej strony w wyszukiwarkach i przyciągnąć więcej klientów.
        </p>
        <a href="#contact" className="inline-block bg-white text-green-600 py-2 px-6 sm:py-3 sm:px-8 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Skontaktuj się z nami &rarr;
        </a>
      </div>
    </section>
  );
};

export default SEO;


