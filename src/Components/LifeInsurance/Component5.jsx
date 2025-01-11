import React from "react";

function Component5() {
  return (
    <div className="bg-white pt-10 md:pt-20 p-5 md:p-40">
      <div className="m-auto flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex flex-col text-sm gap-5 md:gap-5 md:text-lg">
            <div className="text-xl md:text-3xl font-bold">
              How much insurance coverage do you need?
            </div>
            <div className="md:text-lg md:font-medium">
            <div>
              Ideally, you want to make sure your debts are covered, so you
              don't leave major expenses behind for your loved ones.
            </div>
            <div className="leading-7 md:leading-9">
              Here are a few things to consider:
              <ul className="list-disc pl-5 md:pl-8">
                <li>Your income</li>
                <li>Net worth</li>
                <li>Family needs</li>
                <li>Debt</li>
                <li>Other insurance you have</li>
              </ul>
            </div>
            </div>
            <div className="pt-2 md:px-2 md:py-4 pb-2 md:mt-10  rounded-lg text-sm text-center text-white bg-[#24BBE3] w-[40%] md:w-[30%] cursor-pointer font-bold">
              Get a Quote
            </div>
          </div>

          <div>
            <img
              src="family3.png"
              alt="family"
              className="h-[40vh] md:h-[65vh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
