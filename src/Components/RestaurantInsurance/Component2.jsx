import React from "react";

function Component2() {
  return (
    <div className="bg-[#F5F5F5] md:pt-40 md:pb-40 text-black">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center">
          <div className="w-full md:w-auto">
            <img src="/Restaurant/img11.png" alt="family" className="h-[50vh] md:h-[74.5vh] pl-0 md:pl-20" />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem]">
            <div className="text-xl md:text-3xl font-bold md:text-left">
            Insurance for Restaurants
            </div>
            <div className="md:pr-4 flex flex-col gap-5 text-base text-gray-700">
            <div>
            You are passionate about providing great food and top-notch customer service, always aiming to give your guests a memorable dining experience.
            </div>
            <div>
            However, working with food and serving the public can be risky. Issues like food poisoning claims, fire damage, or food spoilage from broken appliances can happen anytime. That's why you need customized restaurant insurance to protect your assets and reputation.
            </div>
            </div>
            <div className="rounded-lg bg-[#24BBE3] text-white font-semibold p-3 text-center w-[50%] md:w-[30%] self-center md:self-start">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;