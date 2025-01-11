import React from "react";

function Component2() {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-2 md:px-6 pt-20 md:pt-36 gap-5 pb-20">
      <div>
        <div className="text-center mb-2 text-2xl md:text-4xl font-bold">
          <p className="inline md:block">More ways to connect</p>
        </div>

        <div className="text-[#073141] mb-12 max-w-[35rem] text-sm md:text-lg text-center mt-5">
          <p className="inline">
            We understand every individual and business is unique in its own ways and needs.{" "}
          </p>
          <p className="inline">
            We’ve made service points more granular.
          </p>
        </div>
      </div>

      <div className="m-auto justify-center flex flex-col">
        <div className="flex flex-col md:flex-row justify-center gap-5 m-5 mt-0">
          <div className="flex flex-col bg-white p-10 rounded-md md:w-[26%]  md:h-80 gap-2 md:gap-5  md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">Individual</p>
            <p className="text-[14px] md:text:xl">
              Your personal advisor available for <p className="inline">your queries, questions and support</p>{" "}
            </p>
            <div className='text-[12px] md:text-xs font-bold bg-[#24BBE3] text-[#ffffff] p-2 md:p-3 text-center rounded-full mt-7 md:mt-16'>
              Chat with your personal advisor
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 rounded-md md:w-[26%]  md:h-80 gap-2 md:gap-5  md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">New Business</p>
            <p className="text-[14px] md:text:xl">
              Talk to our business advisor online, <p className="inline">its totally free.</p>{" "}
            </p>
            <div className='text-[12px] md:text-xs font-bold bg-[#24BBE3] text-[#ffffff] p-2 md:p-3 text-center rounded-full mt-7 md:mt-16'>
              Talk to our business advisor
            </div>
          </div>
          <div className="flex flex-col bg-white p-10 rounded-md md:w-[26%]  md:h-80 gap-2 md:gap-5  md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">Existing Partners</p>
            <p className="text-[14px] md:text:xl">
              Get a call back in 5 minutes from our <p className="inline">partner support team.</p>{" "}
            </p>
            <div className='text-[12px] md:text-xs font-bold bg-[#24BBE3] text-[#ffffff] p-2 md:p-3 text-center rounded-full mt-7 md:mt-16'>
              Schedule a call back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;

