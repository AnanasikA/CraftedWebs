import React, { useEffect, useState } from 'react';

export const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1390);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{
        ...style,
        display: 'block',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        width: '60px',
        height: '60px',
        backgroundColor: '#38a169',
        borderRadius: '50%',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
        transition: 'transform 0.3s ease, background-color 0.3s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1) translateY(-50%)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(-50%)')}
    >
      <span style={{ fontSize: '30px', color: 'white' }}>›</span>
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1390);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{
        ...style,
        display: 'block',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        width: '60px',
        height: '60px',
        backgroundColor: '#38a169',
        borderRadius: '50%',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 10,
        transition: 'transform 0.3s ease, background-color 0.3s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1) translateY(-50%)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(-50%)')}
    >
      <span style={{ fontSize: '30px', color: 'white' }}>‹</span>
    </div>
  );
};

