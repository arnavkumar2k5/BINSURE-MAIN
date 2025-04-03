import React from "react";

function Component4() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto p-5 md:px-20 gap-20">
        <div className="text-lg text-center">
          <div className="text-2xl md:text-4xl font-semibold">Why Choose</div>
          <p className="text-sm max-w-[47rem] mx-auto mt-5">
          We help visiting tourists and Canadian individuals save time and money by
            <div> providing a convenient and affordable way to buy travel insurance</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center font-normal">
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold md:pr-10 md:mb-5">
            Partnered with top tier insurance provider
            </div>
            <p>Purchase your insurance anytime, anywhere, with our easy-to-use online platform.</p>
            <div className="flex justify-end md:mt-16">
              <img src="/travel/hotel.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold mb-5">
            Benefits and scenarios ensured
            </div>
            <p>
            Compare rates across leading insurance companies to ensure you get the best price on your premium.
            </p>
            <div className="flex justify-end md:mt-[4.5rem]">
              <img src="/travel/arrow.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-lg font-semibold mb-5">
            Scope covered
            </div>
            <p> We use data and analytics to identify the rightinsurance policies for your needs.
            </p>
            <div className="flex justify-end mt-2 md:mt-[5.6rem]">
              <img src="/travel/board.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;