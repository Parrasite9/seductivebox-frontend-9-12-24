import React from 'react';

const CategoryQuestion = ({ category, handleCategoryAnswer, getCategoryImage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-center">Are you interested in {category.replace(/([A-Z])/g, ' $1')}?</h2>
        <div className="space-y-4">
          <button
            onClick={() => handleCategoryAnswer(true)} // If Yes is clicked, set answer to true
            className="w-full py-3 bg-green-500 text-white rounded-lg"
          >
            Yes
          </button>
          <button
            onClick={() => handleCategoryAnswer(false)} // If No is clicked, set answer to false
            className="w-full py-3 bg-red-500 text-white rounded-lg"
          >
            No
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={getCategoryImage(category)}
          alt={`${category} model`}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default CategoryQuestion;
