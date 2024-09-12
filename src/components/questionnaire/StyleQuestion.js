import React from 'react';

const StyleQuestion = ({ selectedStyles, handleStyleSelection, getCategoryImage, error }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-center">Select Styles You Like</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error if fewer than 3 styles selected */}
        <div className="grid grid-cols-2 gap-4">
          {['Babydolls', 'Teddys', 'Bodysuits'].map((style) => (
            <label
              key={style}
              className={`block p-4 border rounded-lg cursor-pointer text-center ${
                selectedStyles.includes(style) ? 'border-pink-500 bg-gray-200' : 'border-gray-300'
              }`}
              onClick={() => handleStyleSelection(style)}
            >
              <img
                src={getCategoryImage(style.toLowerCase())}
                alt={style}
                className="w-full h-32 object-cover rounded-lg"
              />
              <span className="mt-2 block text-gray-700">{style}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StyleQuestion;
