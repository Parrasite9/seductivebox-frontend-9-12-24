import React from 'react';
import { useMediaQuery } from 'react-responsive';

const CategoriesQuestion = ({ selectedCategories = [], handleCategoryChange, imagePaths, nextStep, size }) => {
  // Define categories and ensure they match the structure in imagePaths
  const categories = [
    'brasAndPanties',
    'garters',
    'babydolls',
    'bodysuits',
    'teddys',
    'panties',
    'bodyStockings',
    'pantyhose'
  ];

  // Function to check if the minimum selection is met
  const canProceed = selectedCategories.length >= 3;

  // Determine if the user is on mobile or not
  const isMobile = useMediaQuery({ query: '(max-width: 1025px)' });

  // Function to get the correct image based on size and availability
  const getCategoryImage = (category) => {
    const sizeType = size === 'Petite' || size === 'Active' ? 'standard' : 'plus';
    
    // Check if the selected size image exists, otherwise fallback to standard
    const hasPlusImage = imagePaths.categories[category]?.plus;
    const hasStandardImage = imagePaths.categories[category]?.standard;

    if (sizeType === 'plus' && !hasPlusImage) {
      return hasStandardImage || '/images/default-image.jpg';
    }

    return imagePaths.categories[category][sizeType] || '/images/default-image.jpg';
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Centered Header */}
      <h2 className="text-4xl font-bold mb-8 text-center">Select Your Favorite Categories</h2>

      {/* Ternary for mobile and desktop */}
      {isMobile ? (
        <>
          {/* Mobile Layout - Grid with Multiple Selection */}
          <div className="grid grid-cols-2 gap-8 w-full justify-items-center">
            {categories.map((category) => (
              <label
                key={category}
                className={`block p-6 border rounded-lg cursor-pointer text-center transition-all transform hover:scale-105 ${
                  selectedCategories.includes(category) ? 'border-pink-500 bg-gray-200' : 'border-gray-300'
                }`}
                onClick={() => handleCategoryChange(category)} // Handles selection of multiple categories
              >
                <img
                  src={getCategoryImage(category)}
                  alt={`${category.replace(/([A-Z])/g, ' $1')} model`} // Format for display
                  className="w-full h-auto object-cover rounded-lg"
                  style={{ maxHeight: '250px' }}
                />
                <span className="mt-4 block text-xl text-gray-700">
                  {category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} {/* Formatting the category name for display */}
                </span>
              </label>
            ))}
          </div>

          {/* Next Button (Disabled until minimum 3 categories are selected) */}
          <div className="mt-8 w-full flex justify-center">
            <button
              className={`bg-pink-500 text-white py-3 px-8 rounded-lg w-3/4 text-center ${
                canProceed ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!canProceed} // Disable the button if less than 3 categories are selected
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        // Desktop version - 2 Columns of buttons inside a single parent column, and image on the right
        <div className="flex flex-col md:flex-row md:w-full w-full items-center justify-between space-y-6 md:space-y-0 md:space-x-16">
            {/* Left column: Category buttons */}
            <div className="md:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4"> {/* Two-column grid inside the left column */}
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`block w-full p-4 border rounded-lg text-center transition-all transform hover:scale-105 ${
                                selectedCategories.includes(category) ? 'border-pink-500 bg-gray-200' : 'border-gray-300'
                        }`}
                        onClick={() => handleCategoryChange(category)}
                        >
                        {category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right column: Category image */}
            <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
                {selectedCategories.length > 0 ? (
                    <img
                        src={getCategoryImage(selectedCategories[selectedCategories.length - 1])}
                        alt={selectedCategories[selectedCategories.length - 1]}
                        className="w-full h-auto object-cover rounded-lg max-w-sm md:max-w-md"
                    />
                ) : (
                    <p className="text-gray-500 text-center">Select a category to preview.</p>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesQuestion;
