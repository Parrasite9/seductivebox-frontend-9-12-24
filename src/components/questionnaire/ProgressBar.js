import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-2">
      <div className="bg-pink-500 h-2" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
