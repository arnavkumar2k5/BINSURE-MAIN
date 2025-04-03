import React from "react";

function Component2() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-36 mx-auto w-[90%] gap-10 md:gap-20">
        <div className="text-lg text-center">
          <div className="text-xl md:text-4xl font-bold">Why Choose</div>
          <p className="text-xs md:text-sm text-gray-600 max-w-[47rem] mx-auto mt-5">
          Your house is more than a home. Let our home insurance coverage
            <div className="inline md:block"> safeguard your home with the right coverage for your needs.</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-bold md:pr-10 md:mb-12">
            Tailored house insurance
            </div>
            <p>Get house insurance that is perfectly suited to your home and that fits your lifestyle. </p>
            <div className="flex justify-end md:mt-16">
              <img src="/HomeInsurance/img2.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-bold md:mb-12">
            Outstanding claims experience
            </div>
            <p>
            Take advantage of the excellent 24/7 support with the largest claims team in Canada, whenever you need it most.
            </p>
            <div className="flex justify-end md:mt-10">
              <img src="/HomeInsurance/img3.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-bold mb-5">
            Some of the most generous coverage on the market
            </div>
            <p> Get peace of mind with a single limit of insurance covering all your property and up to $2,000,000 in personal liability coverage.
            </p>
            <div className="flex justify-end md:mt-5">
              <img src="/HomeInsurance/img4.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-bold mb-10">
            Bundle your house and car insurance
            </div>
            <p> Get the best value for your money with insurance bundles and take advantage of exclusive benefits.
            </p>
            <div className="flex justify-end md:mt-12">
              <img src="/HomeInsurance/img5.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;