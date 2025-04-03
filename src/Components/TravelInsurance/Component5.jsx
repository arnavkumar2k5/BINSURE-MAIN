import React from "react";

function Component5() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-20 md:pt-40 md:pb-40">
        <div className="text-sm md:text-lg self-start md:pl-[5.5rem]">
          <div className="text-xl md:text-4xl font-bold">Travel insurance plans.</div>
          <p className="md:text-xl text-gray-600 mx-auto mt-10">
          Get out there and enjoy yourself knowing you have the right coverage and 24/7 access to a caring team 
            <div className="inline md:block"> who’s always on call—no matter how big or how small the emergency.</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-base gap-10 justify-center">
          <div className="border-2 border-gray-200 rounded-2xl bg-white p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-xl md:text-2xl font-semibold md:font-bold md:pr-10 mb-5">
            Canadian Residents
            </div>
            <div><p className="text-gray-600">Without sufficient travel insurance, you could be out-of-pocket for emergency health care, get customized packages as</p>
                <ul className="list-disc pl-5 pt-5 font-semibold">
                    <li>Vacation Package</li>
                    <li>Emergency Medical + Trip</li>
                    <li>Only Emergency Medical</li>
                </ul>
            </div>
            <div className="flex justify-between mt-5 md:mt-16 font-semibold">
                <div>Buy now <p className="text-[#24BBE3] inline">&#62;</p></div>
                <div>
              <img src="/travel/img1.png" alt="farmer" className="h-16" />
                </div>
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl bg-white p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-xl md:text-2xl font-semibold md:font-bold mb-5 md:mb-10">
            Visitors to Canada
            </div>
            <p> <p className="text-gray-600">
            Individuals or families visiting Canada can purchase a medical plan with benefits, such as emergency medical and dental, family transportation, medical repatriation and more.
            </p>
            <div className="font-semibold mt-5">Buy now <p className="text-[#24BBE3] inline">&#62;</p></div>
            </p>
            <div className="flex justify-end md:mt-11">
              <img src="/travel/img2.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl bg-white p-5 text-start flex flex-col w-full sm:w-[27%]">
            <div className="text-xl md:text-2xl font-semibold md:font-bold mb-5">
            Top-up, Extension Plans and Riders
            </div>
            <p className="text-gray-600"> Staying longer than expected? Stay protected by adding a Top-up or extension plan to your travel insurance policy. Check out our various riders’ descriptions to see exactly what's included in your plan for additional optional coverage.
            </p>
            <div className="flex justify-between mt-5 md:mt-[1.7rem] font-semibold">
                <div>Check out offers <p className="text-[#24BBE3] inline">&#62;</p></div>
              <img src="/travel/img3.png" alt="farmer" className="h-16 mt-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;