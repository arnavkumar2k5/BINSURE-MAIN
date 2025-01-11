import React from 'react'

function Component3() {
    return (
        <div className="bg-white flex flex-col justify-center items-center md:py-10 mx-auto gap-20 md:p-20 p-5 text-black">
          <div className="text-lg text-center">
            <div className="text-xl md:text-3xl font-bold">Restaurant insurance coverages </div>
            <p className="text-base text-center max-w-[47rem] mx-auto mt-5">
            Restaurant insurance coverage must have these three essential covers
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-base gap-10 justify-center">
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg md:text-2xl font-semibold md:mb-5">
              Liability
              </div>
              <p>
              Provide Liability Insurance to new and existing restaurants, delis and cafés.
              </p>
              <div className="flex justify-end mt-2 md:mt-[4.4rem]">
                <img src="/Restaurant/img5.png" alt="farmer" className="h-20" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg md:text-2xl font-semibold md:mb-5">
              Property
              </div>
              <p>
              Coverage for your restaurant’s assets that protects against fire, theft, vandalism, water damage and more.
              </p>
              <div className="flex justify-end md:mt-[3rem]">
                <img src="/Restaurant/img6.png" alt="farmer" className="h-20" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-[27%]">
              <div className="text-lg md:text-2xl font-semibold mb-5">Cyber</div>
              <p>
              Insurance that protects the restaurant POS in the event of credit card scams.
              </p>
              <div className="flex justify-end mt-2 md:mt-[4.2rem]">
                <img src="/Restaurant/img7.png" alt="farmer" className="h-20" />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Component3
