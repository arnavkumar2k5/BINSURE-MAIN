import React from "react";

function Component2() {
  return (
    <div className="bg-[#F9F9F9] pb-20 pt-20">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img src="/General/img4.png" alt="family" className="h-[50vh] md:h-[60vh] pl-0 md:pl-20" />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem] font-normal">
            <div className="text-xl md:text-4xl font-semibold md:text-left">
            Commercial General Liability Insurance?
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
            <div>
            Over 1/5 of small businesses in Canada fail in their first year. This could be for any reason – poor planning, inadequate business practices, or insufficient risk management. Insurance can bolster your business’s odds of success. As a small business owner, you want to protect your operations.
            </div>
            <div>
            If somebody sues your business, your commercial general liability policy usually covers legal defense costs and compensatory damages. While the specifics change depending on various factors, it typically pays out regardless of the lawsuit’s result.
            </div>
            </div>
            <div className="rounded-lg bg-[#24BBE3] font-semibold text-white p-3 text-center w-[50%] md:w-[25%] ">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;