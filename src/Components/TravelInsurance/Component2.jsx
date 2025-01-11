import React from "react";

function Component2() {
  return (
    <div className="bg-white w-full m-auto">
      <div className="flex flex-col justify-center items-center py-5 md:py-10 mx-auto p-5 md:px-40 gap-10 md:gap-20 pt-20 md:pt-40">
        <div className="text-sm text-center">
          <div className="text-xl md:text-4xl font-bold">Travel Insurance Coverages</div>
          <p className="text-xs md:text-sm text-[#073141] max-w-[25rem] md:max-w-[33rem] mx-auto mt-4">
          Travel insurance provides peace of mind in the event of medical and 
          monetary situations to make your travel safer and smarter.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap text-xs md:text-base gap-10 justify-start items-center">
          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:h-96 md:gap-5 w-full md:w-[30%]">
            <div className="text-xl md:text-2xl font-bold pr-10 pt-3">Complete Medical Coverage</div>
            <p>
            The top priority is making sure your health is in order. With  Travel Protection, you can have access to quality healthcare during your trip overseas in the event of unexpected medical emergencies.
            </p>
            <div className="flex justify-end">
              <img src="/travel/security.png" alt="farmer" className="h-16 md:h-16" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:h-96 md:gap-5 w-full md:w-[30%]">
            <div className="text-xl md:text-2xl font-bold pt-3">Trip Cancellation & Interruptions</div>
            <p>
            Assistance against unexpected trip disruptions can dampen the mood, Insurer Travel Protection offers coverage against unforeseen events.
            </p>
            <div className="flex justify-end">
              <img src="/travel/plane.png" alt="umbrella" className="h-14 md:h-16 mt-12" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:h-96 md:gap-5 w-full md:w-[30%]">
            <div className="text-xl md:text-2xl font-bold pt-3">Emergency Evacuations & 
            Repatriation</div>
            <p>
            In situations where transportation is dire, Travel Protection offers provisions for emergency 
            evacuation and repatriation.
            </p>
            <div className="flex justify-end mt-14">
              <img src="/travel/call.png" alt="advisor" className="h-14 md:h-[3.5rem]" />
            </div>
          </div>

          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:h-96 md:gap-5 w-full md:w-[30%]">
            <div className="text-xl md:text-2xl font-bold pt-3">Coverage for Personal Belongings</div>
            <p>
            Offers coverage for your belongings with assistance against lost or delayed baggage.
            </p>
            <div className="flex justify-end">
              <img src="/travel/baggage.png" alt="security" className="h-14 md:h-16 mt-5 md:mt-16" />
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded-sm p-5 flex flex-col gap-5 md:h-96 md:gap-5 w-full md:w-[30%]">
            <div className="text-xl md:text-2xl font-bold pt-3">Optional Cancel for Any Reason</div>
            <p>
            For added flexibility, our insurers offers optional Cancel for Any Reason coverage, allowing you to cancel your trip for non-traditional reasons.  Exclusive to Premium Plan holders. 
            </p>
            <div className="flex justify-end">
              <img src="/travel/file.png" alt="security" className="h-14 md:h-16 mt-5 md:mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;
