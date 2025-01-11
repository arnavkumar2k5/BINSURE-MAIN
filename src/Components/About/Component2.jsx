import React from "react";

function Component2() {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-6 pt-20 md:pt-40 gap-5 pb-10">
      <div className="text-center mb-6 text-xl md:text-3xl font-bold">
        <p className="inline md:block">We put our customers and communities</p> {" "}
        <p className="inline md:block">at the centre of what we do</p>
      </div>

      <div className="text-[#073141] mb-12 max-w-[45rem] text-sm text-start">
        <p className="text-center">Whether handling policy quotes, growing and protecting clients’ retirement and investment savings, providing workplace mental health support for all employers or helping build stronger communities by investing in community projects, we are committed to putting the customer first in all that we do.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-16 text-center md:text-start mb-12 md:gap-x-32">
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">20,000+</p>
          <p className="text-sm text-gray-500 font-semibold">customer relationships</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">Nearly 30,000</p>
          <p className="text-gray-500 font-semibold">Policies in force.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">39.6% reduction</p>
          <p className="text-gray-500 font-semibold">in insurance provider change <p className="inline md:block">yearly</p></p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">97%</p>
          <p className="text-gray-500 font-semibold">satisfaction</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">45+</p>
          <p className="text-gray-500 font-semibold">Insurance companies <p className="inline md:block">represented.</p></p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-4xl font-bold text-[#073141]">Over 100,000</p>
          <p className="text-gray-500 font-semibold">Individual insurance quotes <p className="inline md:block">provided.</p></p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col w-full">
        <button className="text-[1rem] font-semibold bg-[#24BBE3] text-white p-2 md:p-3 px-8 md:px-16 rounded-full">
          Get Protected Now!
        </button>
        <div className="text-sm md:text-3xl mt-10 text-[#7F7F7F] text-center" id="ca">
          Canada's fast-growing travel and life insurance broker
        </div>
      </div>
    </div>
  );
}

export default Component2;
