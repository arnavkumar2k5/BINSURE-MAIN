import React from 'react'

function Component4() {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 mx-auto gap-10 md:gap-20 md:p-20 p-5">
      <div className="text-lg text-center">
        <div className="text-xl md:text-4xl font-bold">General Liability Claims Examples</div>
        <p className="text-sm md:text-lg max-w-[47rem] mx-auto mt-3 md:mt-10">
          Consider these real-world examples to understand {" "} <div className='inline md:block'>just how vital restaurant insurance truly is.</div>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-sm gap-10 justify-center">
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%] border-2 md:border-none">
          <div className="hidden md:flex  justify-center md:justify-start mb-10 bg-[#24BBE3] w-[30%] rounded-lg px-2">
            <img src="/General/img9.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-lg font-semibold md:mb-5">
            Bodily injury
          </div>
          <p>
            Your client slips on the stairs on their way into your office, resulting in a broken wrist.
          </p>
          <div className='mt-10 font-semibold'>
            What happens next?
            <p className='font-normal'>The client successfully sues your business for bodily injury. Your CGL coverage may cover the legal expenses and medical fees, totalling $25,000.</p>
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%] border-2 md:border-none">
          <div className="hidden md:flex  justify-center md:justify-start mb-10 bg-[#24BBE3] w-[30%] rounded-lg px-2">
            <img src="/General/img10.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-lg font-semibold md:mb-5">
            Property damage
          </div>
          <p>
            You’re a general contractor hired to renovate a kitchen and accidentally damage your client’s hardwood floors.
          </p>
          <div className='mt-[3.8rem] font-semibold'>
            What happens next?
            <p className='font-normal'> Your CGL coverage policy covers the cost to repair the floors, totalling $10,000 in damages.</p>
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[25%] border-2 md:border-none">
          <div className="hidden md:flex  justify-center md:justify-start mb-10 bg-[#24BBE3] w-[30%] rounded-lg px-2">
            <img src="/General/img11.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-lg font-semibold md:mb-5">
            Data Breach
          </div>
          <p>
            A customer suffers from severe food poisoning after dining at your restaurant.
          </p>
          <div className='mt-[5.1rem] font-semibold'>
            What happens next?
            <p className='font-normal'>The customer successfully sues you for bodily injury. Your CGL policy covers the medical expenses and legal fees, totalling $15,000.</p>
          </div>
        </div>
      </div>
      <div className='bg-[#24BBE3] p-3 text-white rounded-lg'>Insure your restaurant now!</div>
    </div>
  )
}

export default Component4;