import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SectionHeading from './SectionHeading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Portfolio.css';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{ 
        ...style, 
        display: 'block', 
        right: '-120px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1 // Zmniejszenie z-index
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{ 
        ...style, 
        display: 'block', 
        left: '-120px', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        zIndex: 1 // Zmniejszenie z-index
      }}
      onClick={onClick}
    />
  );
};

const Portfolio = ({ projects }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1320);
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 1390);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1320);
      setShowArrows(window.innerWidth >= 1390);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: showArrows,
    nextArrow: showArrows ? <SampleNextArrow /> : null,
    prevArrow: showArrows ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-4 md:p-8 relative">
      <SectionHeading title="Portfolio" />
      <div className="flex items-center justify-center h-full relative">
        <Slider {...settings} className="w-full max-w-7xl mt-10">
          {projects.map((project) => (
            <div key={project.id} className="px-4 md:px-2">
              <div
                className="relative overflow-hidden rounded-lg shadow-md group"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{
                  height: '600px',
                  width: '90%',
                  margin: '0 auto',
                  backgroundImage: isLargeScreen
                    ? `url('https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
                    : `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {isLargeScreen ? (
                  <div className="absolute" style={{ top: '140px', left: '9px', width: '330px', height: '190px', overflow: 'hidden' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '330px',
                        height: '190px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }}
                      className="transition-transform duration-700 group-hover:opacity-0"
                    />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-gray-800 via-green-800 to-green-900 opacity-0 group-hover:opacity-100 flex flex-col items-start justify-center px-6 md:px-8 py-4 md:py-6 transition-opacity duration-300"
                >
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-white text-base md:text-lg mb-4 md:mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block py-2 px-4 md:py-3 md:px-6 bg-green-600 text-white font-semibold text-sm md:text-lg rounded-full shadow-lg transition-transform transform hover:bg-green-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobacz projekt &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;















































