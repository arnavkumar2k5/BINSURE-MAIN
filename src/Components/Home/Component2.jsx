import React from "react";

function Component2() {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-5  md:px-6 gap-5 pb-20">
      <div>
        <div className="text-center mb-2 text-[18px] md:text-[2.1rem] font-bold">
          <p className="inline md:block text-center text-[#073141]">
            Help build financial security <p className="block md:inline">for you and your loved ones</p>
          </p>
        </div>

        <div className="mb-5 md:mb-12 mt-2 md:mt-10 text-sm leading-6 text-center">
          <p>
            Between balancing work, family, and your money, adulting is hard.
            Your insurance shouldn’t be. We help make insurance easier.{" "}
          </p>
          <p className="hidden md:block">
            Our fast, straightforward insurance and top-notch customer care let
            you get back to doing the things you love. Even better? Bundle like
            a{" "}
          </p>
          <p className="hidden md:block">boss to save up to 20% on your home and car insurance.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:mt-5 md:m-5">
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm leading-6 rounded-lg md:w-[18.75rem] h-[17.75rem] md:h-[19.5rem] gap-5 border-2 border-[#E0E0E0]">
          <p className="font-bold text-xl md:text-4xl">Zero Fees</p>
          <p className="w-full text-[#4D4C4C]">
            <p className="font-bold">No Hidden Charges</p>
            <p>We never add brokerage fees </p>
            <p>to your premiums.</p>
          </p>
          <div className="self-end mt-5">
            <img src="/Home/img4.png" alt="img" className="h-20" />
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm leading-6 rounded-lg md:w-[18.75rem] md:h-[19.5rem] gap-5 border-2 border-[#E0E0E0]">
          <p className="font-bold text-xl md:text-4xl">1000+</p>
          <p className="w-full text-[#4D4C4C]">
            <p className="font-bold">Policy Options</p>
            <p>We pick the best products for you</p>
            <p>from Canada's top insurance</p>
            <p>providers</p>
          </p>
          <div className="self-end">
            <img src="/Home/img5.png" alt="img" className="h-20" />
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 shadow-lg text-sm leading-6 rounded-lg md:w-[18.75rem] md:h-[19.5rem] gap-5 border-2 border-[#E0E0E0]">
          <p className="font-bold text-xl md:text-4xl">$0.5m</p>
          <p className="text-[#4D4C4C]">
            <p className="font-bold">Coverage Placed</p>
            <p>We've helped over 3,000</p>
            <p>Canadians find financial security.</p>
          </p>
          <div className="self-end mt-7">
            <img src="/Home/img6.png" alt="img" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;
