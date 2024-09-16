import React from 'react';
import { useMediaQuery } from 'react-responsive'; // Detect screen size

const SizeQuestion = ({ size, handleSizeChange, imagePaths }) => {
  // Detect if the screen width is smaller than 768px for mobile/tablet layouts
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Centered Header */}
      <h2 className="text-4xl font-bold mb-8 text-center">Embrace Your Curves, Pick Your Size</h2>

      {/* Mobile/Tablet Version - 2 columns */}
      {isMobileOrTablet ? (
        <div className="grid grid-cols-2 gap-8 w-full justify-items-center"> {/* 2-column grid for mobile/tablet */}
          {['Petite', 'Active', 'Curvy', 'Lush'].map((sizeOption) => (
            <label
              key={sizeOption}
              className={`block p-6 border rounded-lg cursor-pointer text-center transition-all transform hover:scale-105 ${
                size === sizeOption ? 'border-pink-500 bg-gray-200' : 'border-gray-300'
              }`}
              onClick={() => handleSizeChange(sizeOption)}
              style={{ minWidth: '150px', maxWidth: '200px' }}
            >
              <img
                src={imagePaths.sizes[sizeOption]}
                alt={`${sizeOption} model`}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxHeight: '250px' }} // Maintain aspect ratio
              />
              <span className="mt-4 block text-xl text-gray-700">{sizeOption}</span>
            </label>
          ))}
        </div>
      ) : (
        // Desktop Version - Buttons on the left and image on the right
        <div className="flex flex-col md:flex-row md:w-full w-full items-center justify-between space-y-6 md:space-y-0 md:space-x-16">
          {/* Left column: Size buttons */}
          <div className="md:w-1/2 w-full">
            <div className="space-y-4">
              {['Petite', 'Active', 'Curvy', 'Lush'].map((sizeOption) => (
                <button
                  key={sizeOption}
                  className={`block w-full p-4 border rounded-lg text-center transition-all transform hover:scale-105 ${
                    size === sizeOption ? 'border-pink-500 bg-gray-200' : 'border-gray-300'
                  }`}
                  onClick={() => handleSizeChange(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Right column: Size image */}
          <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
            <img
              src={imagePaths.sizes[size]}
              alt={`${size} model`}
              className="w-full h-auto object-cover rounded-lg max-w-sm md:max-w-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeQuestion;
