import React, { useEffect } from 'react';
import Home_bg from './images/home-bg.mp4';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source src={Home_bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay to darken the video for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Content with responsive width */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 md:px-6 lg:px-10 text-gray-100 w-10/12 sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <h1
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6 md:mb-4 lg:mb-6 tracking-wider text-gray-100 leading-tight"
          data-aos="fade-up"
        >
          Estetyka i funkcjonalność, doskonałe połączenie
        </h1>
        <p
          className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-4 lg:mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          W CraftedWebs wierzymy, że piękno tkwi w szczegółach. Projektujemy strony internetowe, które przyciągają wzrok 
          i zachwycają swoją subtelnością, zapewniając idealną równowagę między estetyką a funkcjonalnością. Zaufaj nam, 
          aby nadać Twojej marce wyjątkowy, ponadczasowy charakter w cyfrowym świecie.
        </p>

        {/* Button */}
        <a
          href="#contact"
          className="bg-green-600 text-white py-2 px-4 sm:py-2 sm:px-6 md:py-2 md:px-8 lg:py-3 lg:px-10 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-500 relative inline-block text-xs sm:text-sm md:text-base lg:text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="absolute inset-0 bg-green-700 opacity-0 transition-opacity duration-500 hover:opacity-100 rounded-full"></span>
          <span className="relative z-10">Porozmawiajmy o Twojej stronie</span>
        </a>
      </div>
    </section>
  );
};

export default Home;













