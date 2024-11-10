import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 p-10 lg:p-16 pb-20">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-40 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-6 underline underline-offset-8 decoration-green-500">Polityka Prywatności</h1>
        <p className="mb-4 leading-relaxed">
          Twoja prywatność jest dla nas bardzo ważna. Niniejsza polityka prywatności opisuje, jakie informacje gromadzimy, jak je przetwarzamy oraz jak chronimy Twoje dane.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Jakie informacje zbieramy</h2>
        <p className="mb-4 leading-relaxed">
          Możemy zbierać różne rodzaje informacji, w tym imię, nazwisko, adres e-mail oraz inne dane kontaktowe. Zbieramy również dane techniczne, takie jak adres IP, typ przeglądarki oraz preferencje użytkownika w celu poprawy jakości naszych usług.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Jak wykorzystujemy Twoje dane</h2>
        <p className="mb-4 leading-relaxed">
          Dane osobowe wykorzystujemy wyłącznie w celach kontaktowych i świadczenia usług, które zamówiłeś. Mogą być także wykorzystywane do analizy działań użytkowników, w celach marketingowych, o ile wyrazisz na to zgodę, oraz do poprawy doświadczeń użytkownika.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Przechowywanie danych</h2>
        <p className="mb-4 leading-relaxed">
          Twoje dane są przechowywane zgodnie z obowiązującymi przepisami prawa i chronione przed nieautoryzowanym dostępem. Przechowujemy dane tylko tak długo, jak jest to niezbędne do realizacji celów opisanych w tej polityce.
        </p>
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Prawa użytkownika</h2>
        <p className="mb-4 leading-relaxed">
          Masz prawo do dostępu do swoich danych, ich poprawienia oraz usunięcia. Jeśli chcesz skorzystać z tych praw lub masz pytania dotyczące naszej polityki prywatności, skontaktuj się z nami pod adresem: kontakt@webcraftstudio.com.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

