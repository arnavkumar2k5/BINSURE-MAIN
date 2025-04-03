import React from 'react'

function Component3() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col justify-center items-center py-10 mx-auto gap-5 md:gap-20">
      <div className="text-lg text-center p-2">
        <div className="text-xl md:text-4xl font-bold">Commercial Auto insurance coverages </div>
        <p className="text-sm max-w-[47rem] mx-auto mt-5">
          Liability insurance provides peace of mind in the event of potentially costly liability
          <p className='inline md:block'>situations for all types of businesses and professions.</p>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-base gap-10 justify-start p-5 md:pl-40 md:pr-40">
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
          <div className="text-xl md:text-2xl font-semibold md:mb-5 pt-5 text-black">
            Good record protection
          </div>
          <p>
            Good record protection guarantees your insurance premium won’t increase at renewal as a result of up to two losses of any kind over a 5-year period.
          </p>
          <div className="flex justify-end md:mt-[3.5rem]">
            <img src="/Auto/img2.png" alt="farmer" className="h-20" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
          <div className="text-xl md:text-2xl font-semibold md:mb-5 pt-5 text-black">
            Roadside assistance
          </div>
          <p>
            Roadside assistance entitles your business to four service calls per year, per covered vehicle of 4,500 kg or less, from these options
          </p>
          <div className="flex justify-end md:mt-[4.7rem]">
            <img src="/Auto/img3.png" alt="farmer" className="h-20" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
          <div className="text-xl md:text-2xl font-semibold mb-5 pt-5 text-black">Replacement cost</div>
          <p>
          Replacement cost coverage protects the value of your vehicle if it needs to be replaced because it was stolen or damaged beyond repair.
          </p>
          <div className="flex justify-end md:mt-[4.2rem]">
            <img src="/Auto/img4.png" alt="farmer" className="h-20" />
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%]">
          <div className="text-xl md:text-2xl font-semibold mb-5 pt-5 text-black">Solution Program</div>
          <p>
            The Solution Program allows you to insure your company vehicle(s) when you’re not eligible for standard insurance.
            <p>This commercial auto insurance program applies to the vehicle(s) or the driver(s), not the policy.</p>
          </p>
          <div className="flex justify-end md:mt-[1rem]">
            <img src="/Auto/img5.png" alt="farmer" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3