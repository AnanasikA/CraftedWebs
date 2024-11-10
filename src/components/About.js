import React from 'react';
import SectionHeading from './SectionHeading';
import 'aos/dist/aos.css';
import AOS from 'aos';

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-8 sm:p-12 md:p-16 flex items-center justify-center"
    >
      <div className="w-full lg:w-3/4 text-center">
        <div className="flex flex-col justify-center h-full animate-fadeIn">
          <SectionHeading title="Poznaj CraftedWebs" />
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-left leading-relaxed mb-6 sm:mb-8" data-aos="fade-right">
            CraftedWebs to zespół pasjonatów, którzy specjalizują się w budowaniu obecności online, pomagając firmom skutecznie rozwijać się w sieci. Tworzymy nowoczesne strony internetowe, które przyciągają uwagę, i wdrażamy skuteczne strategie marketingowe, które pozwalają dotrzeć do właściwych odbiorców.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 text-left leading-relaxed mb-6 sm:mb-8" data-aos="fade-left">
            Nasi eksperci oferują szeroki wachlarz usług - od projektowania stron internetowych i pozycjonowania SEO, po kampanie reklamowe w Google Ads i Facebook Ads. Dzięki nam Twoja firma będzie bardziej widoczna w internecie, a profesjonalne wizytówki Google pomogą przyciągnąć lokalnych klientów.
          </p>

          {/* Lista usług firmy */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-left text-gray-800 mb-4 sm:mb-6" data-aos="zoom-in">Nasze usługi:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 text-left text-gray-700" data-aos="fade-up">
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Profesjonalne Google Wizytówki
            </li>
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Nowoczesne strony internetowe
            </li>
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Kampanie Google Ads
            </li>
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Kampanie Facebook Ads
            </li>
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Pozycjonowanie i SEO
            </li>
            <li className="flex items-center justify-start hover:scale-105 transition-transform">
              <span className="font-bold mr-2">✔</span> Audyty stron internetowych
            </li>
          </ul>

          {/* Dodatkowe informacje */}
          <p className="text-base sm:text-lg md:text-xl text-left text-gray-600 mt-8 sm:mt-12 border-l-4 border-green-500 pl-4 sm:pl-6" data-aos="fade-up">
            Naszą misją jest wspieranie firm w osiąganiu sukcesu online. Każdy projekt realizujemy z pełnym zaangażowaniem, tworząc rozwiązania dopasowane do potrzeb naszych klientów. Z nami Twoja marka zyska profesjonalny wizerunek, większą rozpoznawalność i lepszy kontakt z klientami.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;





















