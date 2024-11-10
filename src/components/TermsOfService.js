import React from 'react';

const TermsOfService = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 p-10 lg:p-16 pb-20">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-40 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-6 underline underline-offset-8 decoration-green-500">Regulamin</h1>
        <p className="mb-4 leading-relaxed">
          Niniejszy regulamin określa warunki korzystania z naszych usług. Prosimy o dokładne zapoznanie się z poniższymi zasadami.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Zakres świadczonych usług</h2>
        <p className="mb-4 leading-relaxed">
          Nasza firma oferuje usługi projektowania i audytów stron internetowych. Zamówienie naszych usług jest jednoznaczne z akceptacją niniejszego regulaminu.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Obowiązki klienta</h2>
        <p className="mb-4 leading-relaxed">
          Klient zobowiązuje się do dostarczenia niezbędnych informacji oraz materiałów wymaganych do realizacji zamówienia w ustalonym terminie. Nieprzekazanie potrzebnych informacji może wpłynąć na termin realizacji.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Warunki płatności</h2>
        <p className="mb-4 leading-relaxed">
          Wszelkie płatności są realizowane zgodnie z ustalonym harmonogramem. Brak płatności w terminie może skutkować zawieszeniem usług oraz dodatkowymi kosztami.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Prawa autorskie i własność intelektualna</h2>
        <p className="mb-4 leading-relaxed">
          Wszystkie materiały stworzone przez CraftedWebs są chronione prawem autorskim. Klientowi przysługują jedynie prawa do korzystania z dostarczonych materiałów zgodnie z ustaleniami.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;

