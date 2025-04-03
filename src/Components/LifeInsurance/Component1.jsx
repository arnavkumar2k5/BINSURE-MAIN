import React from "react";
import Company from "../Home/Company";

function Component1() {
  return (
    <div className="bg-white">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        {<Company />}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
        <div className="w-full md:w-auto">
          <img src="family.png" alt="family" className="h-[50vh] md:h-[76.5vh] pl-0 md:pl-20" />
        </div>
        <div className="w-full md:w-[43%] flex flex-col gap-5 md:gap-10 text-[0.8rem] md:text-[0.9rem] font-normal text-black px-7">
          <div className="text-xl md:text-[2rem] font-bold text-left md:text-left text-[#121D2F]">
            Insurance for Life and terms
          </div>
          <div>
            We like to hope for the best, but preparing for the worst has its perks too.
            <br /> 
            Because mortgages, education costs, medical costs, and other bills - <div>they'll still be there after you're gone.</div>
            Life insurance provides whomever you choose with a one-time, tax-free 
            <br />
            payment when you die, as long as you continue to pay your premiums.
          </div>
          <div className="pr-0 md:pr-5">
            There are different types of life insurance, and different ways to make it
            <br />
            work for you. It's not only to protect your family. It can also be part of your 
            <br />
            financial plan, so you may be able to access money in your policy while 
            <br />
            you're alive. Loved ones might use this amount to:
            <ul className="list-disc pl-5">
              <li>replace your income to allow family to maintain their standard of living</li>
              <li>provide for your children or dependents</li>
              <li>pay for your funeral expenses</li>
              <li>pay off your debts</li>
              <li>make a donation to charity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
