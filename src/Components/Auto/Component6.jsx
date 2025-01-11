import React from "react";

function Component6() {
  return (
    <div className="bg-white">
      <div className="m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10 md:px-40 pb-20">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
          <img
              src="/public/Auto/auto.png"
              alt="family"
              className="w-auto h-full md:h-[60vh] pl-0 md:pl-20 mt-5 object-cover md:hidden "
            />
            <img
              src="/public/Auto/img10.png"
              alt="family"
              className="w-auto h-full md:h-[60vh] pl-0 md:pl-20 mt-5 object-cover hidden md:block"
            />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-10 text-[0.8rem] md:text-base font-medium">
            <div className="text-xl md:text-4xl font-bold md:text-left">
              How much does commercial auto insurance cost?
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
              <div>
              The cost of a commercial auto insurance policy involves several factors, including: 
              </div>
              <ul className="list-disc pl-5">
                <li>
                Your driving record and years of experience behind the wheel
                </li>
                <li>
                The type of vehicle you drive
                </li>
                <li>
                Your age and gender
                </li>
                <li>
                Where you live or where the vehicle is typically parked
                </li>
                <li>
                How many kilometers you drive annually
                </li>
              </ul>
              <div>
              Different insurers offer varying premiums based on these and other factors. That’s why it pays to have a broker shop around on your behalf and find you a policy that suits your needs at an affordable price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
