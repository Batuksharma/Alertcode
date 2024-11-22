// src/Marquee.js
import React from 'react';

const Marquee = () => {
  const brands = [
    { id: 1, logo: 'https://via.placeholder.com/100x50?text=Brand1' },
    { id: 2, logo: 'https://via.placeholder.com/100x50?text=Brand2' },
    { id: 3, logo: 'https://via.placeholder.com/100x50?text=Brand3' },
    { id: 4, logo: 'https://via.placeholder.com/100x50?text=Brand4' },
    { id: 5, logo: 'https://via.placeholder.com/100x50?text=Brand5' },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-grey ">
      <div className="flex animate-marquee ">
        {brands.map((brand) => (
          <div key={brand.id} className="flex-shrink-0 mx-4">
            <img src={brand.logo} alt={`Logo of ${brand.id}`} className="h-16" />
          </div>
        ))}
        {/* Duplicate the brands for continuous scrolling */}
        {brands.map((brand) => (
          <div key={brand.id + 5} className="flex-shrink-0 mx-4">
            <img src={brand.logo} alt={`Logo of ${brand.id}`} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;