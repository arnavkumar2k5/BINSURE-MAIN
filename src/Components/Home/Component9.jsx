import React from 'react';

function Component9() {
  return (
    <div className="bg-white pt-20 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">You’re in good company</h1>
        <p className="text-gray-600  mb-2 md:hidden p-2">
          Join over 3,000 customers who received insurance quotes from us. Protect, Improve and simplify your life. Get tips, savings and promos straight to your inbox.
        </p>
        <p className="text-gray-600 mb-2 hidden md:block text-xl">
          Join over 3,000 customers who received insurance quotes from us.
        </p>
        <p className="text-gray-600 hidden md:block text-xl">
          Protect, Improve and simplify your life. Get tips, savings and promos straight to your inbox.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center p-5">
        <div className="flex border-2 border-gray-300 overflow-hidden">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-2 md:px-4 md:py-2 md:mx-4 my-3  focus:outline-none md:w-[34rem]"
          />
          <button className="bg-cyan-400 text-white px-2 md:px-6 py-2 text-sm md:text-lg font-bold">
            Stay updated!
          </button>
        </div>
        <p className="text-gray-600 mt-4 text-sm md:text-[16px] text-center">
          Find out how affordable personalized insurance can be in 5 minutes with an online quote.
        </p>
      </div>

      <div>
      <img className="w-full h-full object-fill block sm:hidden" src="/Home/img21.png" alt="img" />
      <img className="w-full h-full object-fill sm:block hidden" src="/Home/img20.png" alt="img" />

      </div>
    </div>
  );
}

export default Component9;
