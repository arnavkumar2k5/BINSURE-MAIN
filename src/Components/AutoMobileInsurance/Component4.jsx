import React from "react";

function Component4() {
  return (
    <div className="bg-white pb-40 pt-5">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20 md:pt-40 pb-20">
        <div className="text-lg text-center">
          <div className="text-3xl font-bold">How we Deliver</div>
          <p className="text-sm text-gray-600 max-w-[47rem] mx-auto mt-10">
          Ready to compare quotes and save?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
          <div className="border-2 border-gray-300 rounded-sm p-7 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-xl font-bold mb-5">
              Tell us about your vehicle
            </div>
            <p>
              Answer a few basic questions about your driving & car insurance
              history.
            </p>
            <div className="flex justify-end mt-3 md:mt-16">
              <img src="/AutoMobileInsurance/img6.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-7 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-xl font-bold mb-5 pr-10">
              Compare your quotes
            </div>
            <p>See quotes from insurance companies side by side.</p>
            <div className="flex justify-end md:mt-20">
              <img src="/AutoMobileInsurance/img7.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-7 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-xl font-bold mb-5">
              Choose the right coverage
            </div>
            <p>
            Find the right protection for your vehicle.
            </p>
            <div className="flex justify-end md:mt-20">
              <img src="/AutoMobileInsurance/img8.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-7 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-xl font-bold mb-12">
            Get covered
            </div>
            <p>
            Connect with the provider and secure your rate.
            </p>
            <div className="hidden md:block font-semibold text-base md:mt-5">
            Get a free quote &#62;
            </div>
            <div className="flex justify-end mt-11">
              <img src="/AutoMobileInsurance/img9.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
