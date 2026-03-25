import React from 'react';
import LoadingLogo from '../assets/logo.png';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        src={LoadingLogo}
        alt="Loading..."
        className="w-24 h-24 animate-spin-fast"
      />
      <h1 className="text-4xl font-bold">Loading ..............</h1>
    </div>
  );
};

export default LoadingSpinner;
