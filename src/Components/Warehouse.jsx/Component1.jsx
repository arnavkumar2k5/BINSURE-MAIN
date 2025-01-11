import React from "react";
import Company from "@/Components/Home/Company";

function Component1() {
  return (
    <div className="bg-white w-full pb-20">
      <div className="m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40">
          <Company />
        </div>

        <div className="flex flex-col justify-center items-center py-10 mx-auto gap-10 md:gap-20">
          <div className="text-lg text-center">
            <div className="text-2xl md:text-4xl font-semibold">Why Choose</div>
            <p className="text-sm text-[#073141] max-w-[47rem] mx-auto mt-5">
              Restaurant insurance is tailored to protect owners from risks like third-party
              <div>
                {" "}
                injuries, property damage, accidents, and equipment breakdowns
              </div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-lg gap-10 justify-start">
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-5xs md:text-xl font-bold md:mb-5">
                Intuitive Online Experience
              </div>
              <p className="text-[14px]">
                Do everything online, at your convenience
              </p>
              <div className="flex justify-end md:mt-[4.4rem] my-10">
                <img src="/Restaurant/img1.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-5xs md:text-xl font-bold md:mb-5">
                Always Here For You
              </div>
              <p className="text-[14px]">
                We’re just a click away
              </p>
              <div className="flex justify-end md:mt-[4.4rem] my-10">
                <img src="/Restaurant/img2.png" alt="farmer" className="h-16" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
              <div className="text-5xs md:text-xl font-bold md:mb-5">
                Full Transparency</div>
              <p className="text-[14px]">
                Get only the coverage you need in clear language
              </p>
              <div className="flex justify-end md:mt-[4.4rem] my-10">
                <img src="/Restaurant/img3.png" alt="farmer" className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
