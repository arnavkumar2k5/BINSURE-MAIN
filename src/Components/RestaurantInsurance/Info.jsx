import React from "react";

function Info() {
  return (
    <div className="flex flex-col gap-5 text-center p-5 sm:p-5 md:p-2 md:text-start pb-20 items-start">
      <div className="flex flex-col gap-2 md:gap-5">
        <div className="text-2xl text-start sm:text-2xl md:text-4xl font-medium">
        Protect your restaurant with {" "}
        <div className="inline md:block text-2xl sm:text-2xl md:text-4xl font-semibold">
        Restaurant Insurance
        </div>
        </div>
      </div>
      <div className="text-sm sm:text-base text-justify md:text-lg">
      Protect your restaurant from property damage, equipment  
        <div className="inline md:block">breakdown, client injuries and liquor liability claims</div> with restaurant insurance.
      </div>
      <div className="text-sm sm:text-base md:text-lg text-start p-2 flex flex-col md:flex-row md:mr-44 mr-10">
        <div className="flex items-center text-sm md:text-[0.9rem] gap-6 md:gap-0">
          <span className="sm:w-16 md:w-[15%] md:ml-0">
            <img src="leaf.png" alt="leaf" className="h-10 w-auto" />
          </span>
          <span className="md:w-[70%]">
            Trusted by over 10,000 Canadian small businesses.
          </span>
        </div>
        <div className="flex items-center w-auto text-sm md:text-[0.9rem] gap-2 mt-5 md:mt-0 md:pl-0">
          <span className="flex-shrink-0">
            <img src="money.png" alt="money" className="h-10 md:h-10" />
          </span>
          <span className="flex-grow ">Save up to 35% on your insurance</span>
        </div>
      </div>
      <div className="mt-8">
        <span className="p-3 sm:p-4 md:p-5 md:pl-[3.5rem] cursor-pointer hover:bg-cyan-600 hover:text-white md:pr-[3.5rem] text-sm sm:text-base md:text-xl border-2 rounded-md bg-white text-cyan-600 font-bold border-cyan-600">
          How It Works
        </span>
      </div>
    </div>
  );
}

export default Info;
