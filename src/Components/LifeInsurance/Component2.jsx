import React from "react";

function Component2() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto gap-5 md:gap-20 m6:gap200 pt-20 md:pt-40 pb-20 md:pb-40">
        <div className="text-sm text-center">
          <div className="text-xl md:text-4xl font-bold">Why Choose B-Insure</div>
          <p className="text-sm md:text-sm font-normal max-w-[25rem] md:max-w-[35rem] mx-auto mt-4 px-4">
            We help Canada's small business owners save time and money by providing a convenient and affordable way to buy business insurance.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap text-sm md:text-sm gap-10 p-5 md:p-0 justify-center items-center">
          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:gap-5 w-full md:w-[18%] h-[20rem]">
            <div className="text-lg font-bold">Made for Canadians</div>
            <p className="leading-6">
              We celebrate what makes Canadians different. And we're committed to providing insurance designed for your needs.
            </p>
            <div className="flex justify-end">
              <img src="farmer.png" alt="farmer" className="h-[5rem]" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm pt-5 flex flex-col gap-5 md:gap-5 w-full md:w-[18%] h-[20rem]">
            <div className="text-lg font-bold px-3">Insurance made simple</div>
            <p className="leading-6 px-3">
              Go direct and get coverage without tons of confusing forms or medical tests. Because no one needs more paperwork in their life.
            </p>
            <div className="flex justify-end mt-10 px-5">
              <img src="umbrella.png" alt="umbrella" className="h-16" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:gap-5 w-full md:w-[18%] h-[20rem]">
            <div className="text-xl font-bold">Flexible coverage</div>
            <p className="leading-6">
              Our Canadian-based licensed advisors can guide you on the best coverage for your needs. We're here to support your insurance journey from start to finish.
            </p>
            <div className="flex justify-end">
              <img src="um.png" alt="advisor" className="h-16" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm pt-5 flex flex-col gap-5 md:gap-5 w-full md:w-[18%] h-[20rem]">
            <div className="text-xl font-bold px-5">Trusted experience</div>
            <p className="leading-6 px-3">
              Your policy is backed by an insurer with decades of experience protecting Canadians. You can be confident knowing you're in good hands (if we do say so ourselves).
            </p>
            <div className="flex justify-end px-5 mt-2">
              <img src="security.png" alt="security" className="h-20" />
            </div>
          </div>
        </div>

        <div className="bg-[#24BBE3] px-10 py-3 text-white text-lg md:text-xl rounded-full">
          Get Life Insure now!
        </div>
      </div>
    </div>
  );
}

export default Component2;
