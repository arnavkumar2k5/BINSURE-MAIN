import React from "react";

function Components4() {
  return (
    <div className="flex flex-col justify-center m-auto pt-20 md:pt-40 items-center p-5 md:p-40 bg-white">
      <div className="text-xs md:text-sm text-center font-normal">
        <p className="text-xl md:text-3xl font-semibold mb-3 md:mb-5">
          What kind of Life insurance is available?
        </p>
        <p>There are 2 basic types of life insurance coverage: term and permanent</p>
        <p>Each has unique features designed to meet different needs.</p>
      </div>

      <div className="flex flex-wrap justify-center items-start mt-10 md:mt-20 gap-5 md:gap-10 text-xs md:text-sm">
        <div className="border-4 w-full md:w-[48%] border-gray-200 p-5 md:p-5 leading-6 font-normal">
          <p className="text-lg md:text-xl font-semibold mb-5">Term insurance</p>
          <p>
            It's temporary coverage that can last 10, 15, 20, or more years. It's initially a cheaper option. But your premiums typically rise if you decide to renew your policy at the end of your term.
          </p>
          <p>
            Some term plans let you convert to permanent life insurance. Permanent insurance is more expensive than term, but most plans offer premiums that remain the same for the rest of your life.
          </p>
          <div className="flex justify-between mt-5">
            <ul className="list-disc pl-5">
              <li>Temporary coverage</li>
              <li>Lower cost</li>
              <li>Fixed payments</li>
              <li>Option to convert to permanent</li>
            </ul>
            <img src="hand.png" alt="hand" className="h-16 md:h-20 self-end" />
          </div>
        </div>

        <div className="border-4 w-full md:w-[48%] border-gray-200 p-5 md:p-5 leading-6 font-normal md:pb-11">
          <p className="text-lg md:text-xl font-semibold mb-5 md:mb-8">Permanent insurance</p>
          <p>
            It's insurance coverage that lasts forever and never expires. There are three types of permanent life insurance: whole life, participating, and universal life.
          </p>
          <p>
            Some plans may also offer tax-preferred growth in your cash value and ways to increase the death benefit.
          </p>
          <div className="flex justify-between mt-5">
            <ul className="list-disc pl-5 mt-3">
              <li>Lifetime coverage</li>
              <li>Higher cost</li>
              <li>Flexible payments</li>
              <li>Opportunity to build cash value</li>
            </ul>
            <img src="wheel.png" alt="wheel" className="h-16 md:h-20 self-end" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between -ml-28 items-start gap-5 md:gap-20 mt-20 md:mt-20 w-full md:w-auto">
        <div className="text-xs md:text-sm text-left md:font-medium">
          <p className="text-xl md:text-3xl font-bold mb-5 md:mb-10">
            How to get life insurance
          </p>
          <p className="inline md:block">Not sure what's right for you? An advisor can explain all your insurance</p>
          <p className="w-full md:w-[98%] inline md:block">
            options and help you figure out which products meet your needs and goals.
          </p>
          <button className="bg-cyan-500 text-white mt-5 md:mt-10 p-2 md:p-3 pl-8 pr-8 md:pl-7 md:pr-7 rounded-full">
            Schedule Call
          </button>
        </div>

        <div className="text-xs md:text-sm text-left mt-5 md:mt-[4.8rem] ml-5 md:font-medium">
          <p className="inline md:block">Answer a few quick questions to get a quote for coverage up to</p>{" "}
          <p className="inline md:block">$1,000,000.</p>
          <button className="bg-cyan-500 block text-white mt-5 md:mt-[3.7rem] p-2 md:p-3 md:pl-5 md:pr-5 pl-5 pr-5 rounded-full">
            Get a quote Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default Components4;
