import React from "react";

function Component5() {
  return (
    <div className="flex flex-col md:flex-row p-5 items-center justify-between gap-28 md:px-40 bg-white py-20 md:py-40">
      <div className="md:w-[45%] space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold">Why B-Insure?</h2>
        <p className="text-sm md:text-2xl font-medium">
          Insurance products that cover you, your family, and your business
        </p>
        <ul className="space-y-2 text-base">
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Auto (Motorcycle, Commercial Auto, Boat/PWC)
          </li>
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Home (Condo, Tenants/ Renters)
          </li>
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Contractors
          </li>
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Professional Liability
          </li>
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Business Insurance
          </li>
          <li className="flex items-center">
            <img src="/Home/img13.png" alt="check" className="w-auto h-5 md:h-8 mr-2" />
            Individual (Health, Life, Term)
          </li>
        </ul>
        <button className="bg-[#24BBE3] text-white py-2 px-4 rounded">
          Get a Quote
        </button>
        <p className="hidden md:block md:inline md:pl-5 text-sm font-bold">Learn how to switch and save today <p className="inline text-cyan-500">&gt;</p></p>
      </div>

      <div className="md:w-auto mt-8 md:mt-0">
        <img
          src="/Home/img16.png"
          alt="Insurance illustration"
          className="w-auto md:h-[75vh] md:w-[60vw]"
        />
                <p className="md:hidden md:inline md:pl-5 text-sm font-bold text-center mt-5">Learn how to switch and save today <p className="inline text-cyan-500">&gt;</p></p>

      </div>
    </div>
  );
}

export default Component5;
