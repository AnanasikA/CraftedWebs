import React from 'react';

const SectionHeading = ({ title }) => {
  return (
    <div className="w-full text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="mx-auto w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 border-b-4 border-gray-300"></div>
    </div>
  );
};

export default SectionHeading;

