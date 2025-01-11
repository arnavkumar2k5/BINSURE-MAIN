import React from "react";

function Component6() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center p-5 py-10 mx-auto md:px-28 gap-20 md:pb-40">
        <div className="text-lg text-center">
          <div className="text-xl md:text-4xl font-bold">Key Benefits</div>
          <p className="text-sm max-w-[47rem] mx-auto mt-5">
            We help Canada small business owners save time and money by providing 
            <div className="inline md:block">a convenient and affordable way to buy business insurance</div>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm gap-10 justify-center">
          <div className="border-2 border-gray-300 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold md:font-bold mb-5">
            Medical coverage for up to $5,000,000 
            </div>
            <p className="text-gray-700">
            per person, for up to 30 days, as a result of required medical attention during a trip covered outside their province of residence.
            </p>
            <div className="flex justify-end md:mt-[4.5rem]">
              <img src="/travel/umbrella+.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold md:font-bold mb-5">
            Baggage loss and Damage
            </div>
            <p className="text-gray-700">
            If your bags are damaged, lost or delayed during your trip,  coverage provided, so that you can continue travelling as planned.
            </p>
            <div className="flex justify-end md:mt-[4.3rem]">
              <img src="/travel/baggage.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold md:font-bold mb-5">
            Trip Interruptions or Cancellations            
            </div>
            <p className="text-gray-700">
            If your trip is cancelled due to an insured risk, eligible expenses incurred will be covered. This protection can provide financial protection and coverage for unanticipated expenses.
            </p>
            <div className="flex justify-end md:mt-[1.79rem]">
              <img src="/travel/plane.png" alt="farmer" className="h-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/5">
            <div className="text-lg font-semibold md:font-bold mb-12">
            Additional Services
            </div>
            <p className="text-gray-700">
            Benefit from additional services, available 24/7, wherever you are, through the B-Insure assisted channels
            </p>
            <div className="flex justify-end md:mt-[6rem]">
              <img src="/travel/hand.png" alt="farmer" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
