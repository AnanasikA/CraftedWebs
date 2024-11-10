import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'; 

import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// Podstrony dla usług

import GoogleMyBusiness from './components/GoogleMyBusiness';
import GoogleAds from './components/GoogleAds';
import FacebookAds from './components/FacebookAds';
import SEO from './components/SEO';
import WebDesign from './components/WebDesign';
import SiteAudit from './components/SiteAudit';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiesPolicy from './components/CookiesPolicy';


// Funkcja, która przewija stronę do odpowiedniej sekcji na podstawie hasha
const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Strona internetowa dla firmy budowlanej BuildMaster', 
      description: 'Nowoczesna i profesjonalna strona dla BuildMaster, firmy budowlanej, prezentująca szeroką ofertę usług, galerie realizacji oraz pełne dane kontaktowe i referencje.', 
      image: 'images/StronaFirmowa.webp',
      link: 'https://ananasika.github.io/Strona-firmowa/'
    },
    {
      id: 2, 
      title: 'Strona internetowa dla startupu technologicznego TechWave', 
      description: 'Elegancka strona dla TechWave, startupu technologicznego, z ciemnym motywem, płynnym przewijaniem oraz CTA. Prezentacja usług i wartości w nowoczesnym stylu.', 
      image: 'images/StronaStrartUp.webp',
      link: 'https://ananasika.github.io/Strona_startup/'
    },
    { 
      id: 3, 
      title: 'Strona produktowa dla drona AeroMax', 
      description: 'Dedykowana strona dla AeroMax, prezentująca kluczowe funkcje nowoczesnego drona, z atrakcyjnymi wizualizacjami, szczegółową specyfikacją i intuicyjnym układem treści.', 
      image: 'images/StronaProduktowa.jpg',
      link: 'https://ananasika.github.io/drone-product-page/'
    },
    { 
      id: 4, 
      title: 'Portfolio fotograficzne VisionLens', 
      description: 'Elegancka strona dla VisionLens, prezentująca portfolio fotografa, interaktywną galerię zdjęć, płynne animacje oraz formularz kontaktowy dla nowych klientów.', 
      image: 'images/PortfolioFotografa.jpg',
      link: 'https://ananasika.github.io/portfolio-photographer/'
    },
    { 
      id: 5,
      title: 'Strona internetowa dla Global Business Innovation Summit', 
      description: 'Projekt strony konferencyjnej Global Business Innovation Summit, obejmujący agendę, sylwetki prelegentów, moduł zakupu biletów oraz optymalizację dla urządzeń mobilnych.', 
      image: 'images/Konferencja.png',
      link: 'https://ananasika.github.io/konferencja/'      
    },
    { 
      id: 7, 
      title: 'Strona blogowa dla pasjonatów książek BookNest', 
      description: 'Strona blogowa BookNest z artykułami, sekcją komentarzy, newsletterem oraz archiwum starszych postów, zaprojektowana z myślą o miłośnikach literatury.', 
      image: 'images/BookNest.webp',
      link: 'https://ananasika.github.io/booknest/'   
    },
    { 
      id: 9, 
      title: 'Strona internetowa dla restauracji Bella Italia', 
      description: 'Strona dla restauracji Bella Italia, zawierająca szczegółowe menu, galerię zdjęć, system rezerwacji online oraz dział z recenzjami gości. Idealna dla miłośników kuchni włoskiej.', 
      image: 'images/Restauracja.webp', 
      link: 'https://ananasika.github.io/Bella-Italia/' 
    },
  ];
  
  

  return (
    <Router>
    <div className="App">
      <Header />
      <ScrollToSection /> {/* Dodanie funkcji przewijania */}
      <Routes>
        {/* Główna strona */}
        <Route 
          path="/" 
          element={
            <>
              <section id="home">
                <Home />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="portfolio">
                <Portfolio projects={projects} />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          }
          />
            
            <Route path="/google-my-business" element={<GoogleMyBusiness />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/facebook-ads" element={<FacebookAds />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/site-audit" element={<SiteAudit />} />

            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
            <Route path="/regulamin" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

