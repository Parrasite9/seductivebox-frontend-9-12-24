import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; // For detecting screen size
import ProgressBar from './questionnaire/ProgressBar';
import SizeQuestion from './questionnaire/SizeQuestion';
import CategoryQuestion from './questionnaire/CategoryQuestion';
import StyleQuestion from './questionnaire/StyleQuestion';

// File paths for images
const imagePaths = {
    sizes: {
      Petite: '/images/sizing/petite-model.jpg',
      Active: '/images/sizing/active-model.jpg',
      Curvy: '/images/sizing/curvy-model.jpg',
      Lush: '/images/sizing/lush-model.jpg',
    },
    categories: {
      brasAndPanties: {
        standard: '/images/categories/bra-and-panty/standard/bra-and-panty-model.jpg',
        plus: '/images/categories/bra-and-panty/plus/plus-bra-and-panty-model.jpg',
      },
      garters: {
        standard: '/images/categories/garter/standard/garter-model.jpg',
        plus: '/images/categories/garter/plus/plus-garter-model.jpg',
      },
      babydolls: {
        standard: '/images/categories/babydoll/standard/babydoll-model.jpg',
        plus: '/images/categories/babydoll/plus/plus-babydoll-model.jpg',
      },
      bodysuits: {
        standard: '/images/categories/bodysuit/standard/bodysuit-model.jpg',
        plus: '/images/categories/bodysuit/plus/plus-bodysuit-model.jpg',
      },
      teddys: {
        standard: '/images/categories/teddy/standard/teddy-model.jpg',
        plus: '/images/categories/teddy/plus/plus-teddy-model.jpg',
      },
      panties: {
        standard: '/images/categories/panties/standard/panty-model.jpg',
      },
      bodyStockings: {
        standard: '/images/categories/bodystocking/standard/bodystocking-model.jpg',
        plus: '/images/categories/bodystocking/plus/plus-bodystocking-model.jpg',
      },
      pantyhose: {
        standard: '/images/categories/stocking/standard/stocking-model.jpg',
      },
    },
  };
  

function Questionnaire() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [size, setSize] = useState('Petite'); // Default size
  const [categorySelections, setCategorySelections] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0); // Keep track of the current category being asked
  const [progress, setProgress] = useState(25); // Tracks progress
  const [error, setError] = useState(''); // Error message for style selection

  // Detect if the screen size is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 1025px)' });

  const categories = ['brasAndPanties', 'garters', 'babydolls', 'bodysuits', 'teddys', 'panties', 'bodyStockings', 'pantyhose'];

  useEffect(() => {
    // Calculate progress percentage based on the current step
    setProgress((step / 4) * 100); // 4 is the total number of steps
  }, [step]);

  const renderProgress = () => (
    <div className="w-full bg-gray-200 h-2">
      <div className="bg-pink-500 h-2" style={{ width: `${progress}%` }}></div>
    </div>
  );

  // Handle Category Selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category); // Remove category
      } else {
        return [...prev, category]; // Add category
      }
    });
  };
  

  // Handle Size Selection
  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  // Handle Style Selection
  const handleStyleSelection = (style) => {
    setSelectedStyles((prev) => {
      if (prev.includes(style)) {
        return prev.filter((item) => item !== style);
      } else {
        return [...prev, style];
      }
    });
    setError(''); // Clear error when selection is made
  };

  // Go to Next Step
  const nextStep = () => {
    // Ensure all questions are answered before proceeding
    if (step === 1 && !size) {
      alert('Please select a size.');
      return;
    }

    // On step 3, check if at least 3 styles are selected
    if (step === 3 && selectedStyles.length < 3) {
      setError('Please select at least 3 styles.');
      return;
    }

    setStep(step + 1);
  };

  // Go to Previous Step
  const prevStep = () => {
    // If in the category selection, move to the previous category
    if (step === 2 && categoryIndex > 0) {
      setCategoryIndex(categoryIndex - 1);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  // Submit the form
  const handleSubmit = () => {
    console.log({ size, selectedCategories, selectedStyles });
    navigate('/checkout'); // Redirect to Checkout page
  };

  const getCategoryImage = (category) => {
    const sizeType = size === 'Petite' || size === 'Active' ? 'standard' : 'plus';
  
    // Check if the category has the requested image (plus or standard).
    const hasPlusImage = imagePaths.categories[category]?.plus;
    const hasStandardImage = imagePaths.categories[category]?.standard;
  
    // Fallback logic: if the selected size type image doesn't exist, use the other available image.
    if (sizeType === 'plus' && !hasPlusImage) {
      return hasStandardImage || '/images/default-image.jpg';
    }
    if (sizeType === 'standard' && !hasStandardImage) {
      return hasPlusImage || '/images/default-image.jpg';
    }
  
    // If both types exist, return the image for the selected size type
    return imagePaths.categories[category][sizeType];
  };

  // Render Questionnaire
  const renderQuestionnaire = () => {
    switch (step) {
      case 1:
        return <SizeQuestion size={size} handleSizeChange={handleSizeChange} imagePaths={imagePaths} />;
      case 2:
        return (
          <CategoryQuestion
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            imagePaths={imagePaths}
            isMobile={isMobile} // Pass isMobile to CategoryQuestion
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
            size={size}
          />
        );
      case 3:
        return <StyleQuestion selectedStyles={selectedStyles} handleStyleSelection={handleStyleSelection} getCategoryImage={getCategoryImage} error={error} />;
      case 4:
        return <h2 className="text-3xl font-bold mb-4 text-center">Complete!</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Increase the max width of the entire dashboard */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Progress Bar */}
        <ProgressBar progress={progress} />
  
        {/* Questionnaire */}
        <div className="mt-8">
          {renderQuestionnaire()}
        </div>
  
        {/* Navigation Buttons */}

      {isMobile ? (
        // Mobile Version
        <div className="mt-8 w-full flex flex-col lg:flex-row lg:justify-end items-center">
          {step > 1 && (
            <button
              className="bg-gray-500 text-white py-3 px-8 rounded-lg w-3/4 lg:w-auto text-center mb-4 lg:mb-0"
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {step === 2 ? null : step < 4 ? (
            <button
              className="bg-pink-500 text-white py-3 px-8 rounded-lg w-3/4 lg:w-auto text-center"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-500 text-white py-3 px-8 rounded-lg w-3/4 lg:w-auto text-center"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      ) : (
        // Desktop Version
<div className="mt-8 w-full flex flex-col lg:flex-row lg:justify-between items-center">
  {step > 1 && (
    <button
      className="bg-gray-500 text-white py-3 px-8 rounded-lg w-1/3 lg:w-auto text-center mb-4 lg:mb-0"
      onClick={prevStep}
    >
      Previous
    </button>
  )}
  {step === 2 ? (
    <button
      className={`bg-pink-500 text-white py-3 px-8 rounded-lg w-1/3 lg:w-auto text-center ${
        selectedCategories.length >= 3 ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
      }`}
      disabled={selectedCategories.length < 3} // Disable the button if less than 3 categories are selected
      onClick={nextStep}
    >
      Next
    </button>
  ) : step < 4 ? (
    <button
      className="bg-pink-500 text-white py-3 px-8 rounded-lg w-1/3 lg:w-auto text-center"
      onClick={nextStep}
    >
      Next
    </button>
  ) : (
    <button
      className="bg-green-500 text-white py-3 px-8 rounded-lg w-1/3 lg:w-auto text-center"
      onClick={handleSubmit}
    >
      Submit
    </button>
  )}
</div>

      )}



      </div>
    </div>
  );
}

export default Questionnaire;
