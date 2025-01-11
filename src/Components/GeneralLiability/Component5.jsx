import React from "react";

function Component5() {
  return (
    <div className="bg-white  pt-20 md:pt-40 pb-40 md:pl-40">
      <div className="m-auto flex flex-col p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-10 text-[0.8rem] md:text-[0.9rem] items-start">
            <div className="text-xl md:text-3xl font-bold md:font-semibold md:text-left">
              How much CGL insurance coverage needed?
            </div>
            <div className="md:pr-4 flex flex-col gap-5 font-medium text-sm md:text-lg">
              <div>
                To determine how much commercial general liability coverage your business needs and if you need additional liability coverage, there are a few factors to take into consideration:
              </div>
              <ul className="list-disc pl-5">
                <li>The size of your company</li>
                <li>The industry you work in</li>
                <li>The frequency you interact with vendors</li>
              </ul>
              <div>The factors above will help you determine your risk exposure. Depending on your profession, additional coverage may be required. For example, a contractor fixing something in a person’s home has a higher risk of causing property damage than a web designer who works from home.</div>
              <div>Talk to one of our commercial general liability insurance brokers about tailoring your policy to your business needs.</div>
            </div>
            <div className="rounded-lg font-semibold bg-[#24BBE3] text-white p-3 text-center md:w-[40%] mt-10">
              Insure your business now!
            </div>
          </div>
          <div className="h-full w-full md:w-auto mt-10 md:mt-0 overflow-hidden">
            <img
              src="/General/img7.png"
              alt="family"
              className="w-full h-auto md:h-[85vh] object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Component5;