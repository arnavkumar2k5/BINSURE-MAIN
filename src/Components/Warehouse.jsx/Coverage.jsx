import React from "react";

function Coverage() {
  return (
    <div className="bg-gradient-to-r from-[#0f6476] to-[#133e4e] flex flex-col md:flex-row items-center h-auto md:h-[40vh] justify-center px-5 md:px-10  ">

      <div className="text-white text-left pt-10 md:pt-0 md:pl-40 w-full">
        <h2 className="text-[16px] md:text-2xl font-semibold">
          Need Insurance answers
        </h2>
        <p className="mt-4 text-[12px] md:text-sm text-start">The raw materials, finished products, and merchandise you store in your warehouse are among your most valuable assets. Protect your business with a customized warehouse insurance policy from B-Insure.</p>
        <button className="mt-6 px-2 md:px-5 text-sm md:text-xl p-2 border-2 rounded-lg border-white text-white hover:bg-white hover:text-teal-900 transition-all">
          Schedule a call
        </button>
      </div>
      <div className="flex justify-end w-full md:pr-40 ">
        <img
          src="woman.png"
          alt="woman"
          className="h-[20vh] md:h-[45vh] md:mb-10"
        />
      </div>

    </div>
  );
}

export default Coverage;
