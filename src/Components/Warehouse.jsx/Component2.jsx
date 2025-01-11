import React from "react";

function Component2() {
  return (
    <div className="bg-[C4C4C4] py-7 md:py-20">
      <div className="m-auto flex flex-col gap-10 md:gap-28 p-3 md:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto self-center">
            <img src="/Warehouse/img1.png" alt="family" className="h-[45vh] md:h-[65.5vh] pl-0 md:pl-20" />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem] text-black">
            <div className="text-xl md:text-4xl font-bold md:text-left">
            Commercial insurance solutions {" "}
            <div className="inline md:block">for warehousing and storage</div> {" "}
            businessess
            </div>
            <div className="flex flex-col gap-5 text-base w-[90%]">
            <div>
            No matter if you operate your business from a truck depot, a dispatch center, you own several warehouses or operate a refrigerated warehouse, commercial property insurance can keep you protected from property losses, such as theft, vandalism, fire, and damage to tools or equipment you need to continue operating your business.
            </div>
            <ul className="list-disc pl-5">
                <li>Automated warehouses</li>
                <li>Contract warehouses</li>
                <li>General dry storage</li>
                <li>Public warehouses</li>
                <li>Private warehouses</li>
                <li>Bonded warehouses</li>
            </ul>
            </div>
            <div className="rounded-lg bg-[#24BBE3] mt-10 text-white font-bold p-3 text-center w-[50%] md:w-[20%] ">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;