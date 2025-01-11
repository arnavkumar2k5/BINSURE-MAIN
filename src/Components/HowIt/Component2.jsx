import React from 'react';

function Component2() {
  return (
    <div className='bg-white flex flex-col justify-center items-center'>
      {/* Heading */}
      <h2 className="text-2xl  md:text-center md:px-[18%] md:text-4xl font-bold mb-6 p-5">
        But why should you invest in an insurance when the state of claims is so unsure?
      </h2>

      {/* Container */}
      <div className="md:mx-auto md:py-20 px-5 md:px-[10%] flex flex-col md:flex-row md:mt-50">
        {/* Left Section: Text */}
        <div className="md:w-1/2 md:pr-20 flex justify-center items-start flex-col">
          <p className="md:text-[16px]">
            The insurance industry doesn’t have the greatest reputation when it comes to claims.
            Many people fear their insurer will go to any length possible to avoid paying claims.
            At, we’re different. We’re there when you need us most.
          </p>
          <p className="mb-3 ext-xs md:text-[16px] mt-5">
            We’re committed to changing how you think of insurance. We’ll make sure your claim
            is handled quickly and fairly.
          </p>
          <p className="mb-8 ext-xs md:text-[16px]">
            We are trying to empower the community to be aware of insurance knowledge.
            You can help us by always looking for these items.
          </p>
          {/* Button */}
          <button className="bg-[#24BBE3] text-white py-3 px-6 rounded-full text-sm md:text-base mb-10 font-bold">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Right Section: Boxes */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Box 1 - Slightly raised */}
          <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md text-left w-full h-64 max-h-64 -mt-6">
            <h3 className="text-lg font-semibold mb-2">Price</h3>
            <p className="text-sm md:text-base mb-4">
              Pricing depends on factors sometimes undermined.
            </p>
            <img src="/HowIt/img5.png" alt="img" className="mt-auto self-end" />
          </div>

          {/* Box 2 - Normal position */}
          <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md text-left w-full h-64 max-h-64">
            <h3 className="text-lg font-semibold mb-2">Coverage</h3>
            <p className="text-sm md:text-base mb-4">
              Coverage depends on type of claim factors, risks, conditions, cover.
            </p>
            <img src="/HowIt/img7.png" alt="img" className="mt-auto self-end" />
          </div>

          {/* Box 3 - Slightly raised */}
          <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md text-left w-full h-64 max-h-64 -mt-6">
            <h3 className="text-lg font-semibold mb-2">Deductibles</h3>
            <p className="text-sm md:text-base mb-4">
              Deductibles hidden and based on your actions, selections, and type of usage and policy clauses.
            </p>
            <img src="/HowIt/img8.png" alt="img" className="mt-auto self-end" />
          </div>

          {/* Box 4 - Normal position */}
          <div className="flex flex-col justify-between p-6 border rounded-lg shadow-md text-left w-full h-64 max-h-64">
            <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
            <p className="text-sm md:text-base mb-4">
              How difficult the cancellation can be and how to do it correctly is often not transparent.
            </p>
            <img src="/HowIt/img9.png" alt="img" className="mt-auto self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;
