import React from "react";

function Component7() {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center py-10 mx-auto w-[90%] gap-16 pt-28">
        <div className="text-lg text-center">
          <h2 className="text-3xl font-bold">Key Benefits</h2>
          <p className="text-sm text-[#073141] max-w-[33rem] mx-auto mt-4">
            We help Canada small business owners save time and money by providing 
            a convenient and affordable way to buy business insurance
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center sm:justify-start mx-10">
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Pay less based on your lifestyle
            </div>
            <p className="mt-3 text-gray-600">
              Living a healthy lifestyle has rewards. You'll pay lower premiums
              for being a non-smoker.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="%.png" alt="discount" className="h-16" />
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Advanced funeral <p className="inline md:block">payout</p>
            </div>
            <p className="mt-3 text-gray-600">
              We may provide $15,000 (subject to approval) to pay for immediate costs, like a funeral.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="cross.png" alt="funeral" className="h-16" />
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Any cause of death covered
            </div>
            <p className="mt-3 text-gray-600">
              Natural death, accidental death, and terminal illness are all covered.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="heart.png" alt="heart" className="h-16" />
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Terminal illness benefit
            </div>
            <p className="mt-10 text-gray-600">
              Receive 100% of your benefit upfront if you're diagnosed with a terminal illness with a life expectancy of 12 months or less.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="person.png" alt="person" className="h-16" />
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Apply easily over the phone
            </div>
            <p className="mt-3 text-gray-600">
              Living a healthy lifestyle has rewards. You'll pay lower premiums for being a non-smoker.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="phone.png" alt="phone" className="h-16" />
            </div>
          </div>
          <div className="border border-gray-400 shadow-sm rounded-sm p-6 flex flex-col w-[18rem] h-[20rem]">
            <div className="text-lg font-semibold">
              Optional yearly cover increase
            </div>
            <p className="mt-3 text-gray-600">
              We automatically give you the option to increase your coverage amount by 5% on your policy's anniversary to help cover changes to your lifestyle.
            </p>
            <div className="flex justify-end mt-auto">
              <img src="calendar.png" alt="calendar" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component7;
