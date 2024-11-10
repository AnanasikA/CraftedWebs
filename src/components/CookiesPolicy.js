import React from 'react';

const CookiesPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 p-10 lg:p-16 pb-20">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-40 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-6 underline underline-offset-8 decoration-green-500">Polityka Cookies</h1>
        <p className="mb-4 leading-relaxed">
          Używamy plików cookies, aby poprawić funkcjonalność naszej strony oraz lepiej dostosować nasze usługi.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Czym są pliki cookies</h2>
        <p className="mb-4 leading-relaxed">
          Cookies to małe pliki tekstowe zapisywane na Twoim urządzeniu podczas przeglądania strony internetowej. Służą do przechowywania preferencji użytkownika i pomagają w personalizacji treści.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Jakie rodzaje cookies wykorzystujemy</h2>
        <p className="mb-4 leading-relaxed">
          Na naszej stronie stosujemy cookies niezbędne, analityczne oraz marketingowe, które pomagają nam analizować ruch na stronie i dopasowywać treści do Twoich preferencji.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Zarządzanie cookies</h2>
        <p className="mb-4 leading-relaxed">
          Możesz zarządzać cookies w ustawieniach swojej przeglądarki, wyłączając wybrane rodzaje plików cookies. Pamiętaj jednak, że wyłączenie cookies może wpłynąć na funkcjonalność strony.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Bezpieczeństwo danych</h2>
        <p className="mb-4 leading-relaxed">
          Cookies nie zbierają danych osobowych ani wrażliwych. Są one używane wyłącznie w celu optymalizacji działania strony oraz analizy aktywności użytkowników.
        </p>
      </div>
    </section>
  );
};

export default CookiesPolicy;


