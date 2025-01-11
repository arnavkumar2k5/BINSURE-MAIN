import React from 'react'

function Component4() {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 mx-auto gap-20 md:p-40 p-5 md:px-40 ">
      <div className="text-lg text-center">
        <div className="text-2xl md:text-3xl font-bold">Common insurance claims scenarios</div>
        <p className="text-base max-w-[47rem] mx-auto mt-10">
          Consider these real-world examples to understand <div className='inline md:block'>just how vital restaurant insurance truly is:</div>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-base gap-10 justify-center">
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2 md:border-none">
          <div className="justify-center md:justify-start mb-10 hidden md:flex">
            <img src="/Restaurant/img8.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-[16px] md:text-xl font-bold mb-2 md:mb-5">
            Alcohol-Induced Slip-and-Fall Claim
          </div>
          <p>
            One of your bartenders overserves alcohol to a customer. As the customer stands up to leave, they fall and hurt their wrist.
          </p>
          <div className='mt-16 font-bold'>
            What happens next?
            <p className='font-normal'>Your customer decides to sue for bodily injury and is successful. Fortunately, your liquor liability and commercial general liability insurance work together to cover the medical and legal fees, equaling $10,000.</p>
          </div>
          <div className="flex justify-center md:justify-start self-end my-5 mb-15 md:hidden">
            <img src="/Restaurant/img8.png" alt="farmer" className="h-20" />
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2 md:border-none">
        <div className="justify-center md:justify-start mb-10 hidden md:flex">
        <img src="/Restaurant/img9.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-[16px] md:text-xl font-bold mb-2 md:mb-5">
            Foodborne Illness Claim
          </div>
          <p>
            A customer orders your highly acclaimed seafood dish. Your chef has served out-of-date seafood without realizing it, and your customer suffers from food poisoning.
          </p>
          <div className='mt-16 font-bold'>
            What happens next?
            <p className='font-normal'>Your customer decides to sue your restaurant for bodily injury. Luckily, you purchased a product liability insurance policy that covers the legal and medical fees associated with the case.</p>
          </div>
          <div className="flex justify-center md:justify-start self-end my-5 mb-15 md:hidden">
            <img src="/Restaurant/img9.png" alt="farmer" className="h-20" />
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2 md:border-none">
        <div className="justify-center md:justify-start mb-10 hidden md:flex">
        <img src="/Restaurant/img10.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-[16px] md:text-xl font-bold mb-2 md:mb-5">
            Delivery Claim
          </div>
          <p>
            You run a take-out restaurant. One of your delivery drivers accidentally knocks over a beautiful vase on your customer’s porch.
          </p>
          <div className='mt-16 font-bold'>
            What happens next?
            <p className='font-normal'>The customer sues your take-out restaurant for property damage, and their claim is successful. Thankfully, your commercial general liability insurance covers the cost of replacing the vase, equaling $2,000.</p>
          </div>
          <div className="flex justify-center md:justify-start self-end my-5 mb-15 md:hidden">
            <img src="/Restaurant/img10.png" alt="farmer" className="h-20" />
          </div>
        </div>
      </div>
      <div className='bg-[#24BBE3] px-6 p-3 text-white font-bold rounded-lg'>Insure your restaurant now!</div>
    </div>
  )
}

export default Component4;