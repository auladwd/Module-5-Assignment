import React from 'react';

const Trusted = () => {
  return (
    <div className="trusted-section py-5 bg-purple-600 mt-[-17px] sm:text-small lg:text-base">
      <h1 className="text-center font-bold  text-white lg:text-2xl ">
        Trusted By Millions, Built For You
      </h1>

      <div className="flex justify-center items-center space-x-5">
        <div className="text-center text-white space-y-1 mt-5">
          <p>Total Downloads</p>
          <h2 className="lg:text-3xl font-bold">29.6 M</h2>
          <p>21% More Than Last Month</p>
        </div>

        <div className="text-center text-white space-y-1 mt-5">
          <p>Total Reviews</p>
          <h2 className="lg:text-3xl font-bold">906K</h2>
          <p>46% More Than Last Month</p>
        </div>

        <div className="text-center text-white space-y-1 mt-5">
          <p>Active Apps</p>
          <h2 className="lg:text-3xl font-bold">132+</h2>
          <p>20 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
