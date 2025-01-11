import React from 'react'

function Component4() {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-10 mx-auto gap-20 md:p-20 p-5">
      <div className="text-lg text-center">
        <div className="text-xl md:text-3xl font-bold">Auto Insurance Examples</div>
        <p className="text-sm md:text-lg max-w-[47rem] mx-auto mt-5 font-normal text-[#073141]">
          Consider these real-world examples to understand <div className='inline md:block'>just how vital restaurant insurance truly is:</div>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-base gap-10 justify-center md:px-20">
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2">
          <div className="justify-center md:justify-start mb-10 hidden md:flex">
            <img src="/Auto/img6.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-xl font-semibold md:mb-5">
            Third-party liability
          </div>
          <p>
            You’re driving to a worksite and accidentally rear-end a vehicle in front of you that stops suddenly, causing the driver of the other vehicle to suffer a whiplash neck injury and decides to sue you for pain and suffering.
          </p>
          <div className='mt-10 font-semibold'>
            What happens next?
            <p className='font-normal'>The client successfully sues your business for bodily injury. Your CGL coverage may cover the legal expenses and medical fees, totalling $25,000.</p>
          </div>
          <div className="justify-end md:justify-start mb-10  self-end md:hidden">
            <img src="/Auto/img6.png" alt="farmer" className="h-20 " />
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2">
          <div className="justify-center md:justify-start mb-10 hidden md:flex">
            <img src="/Auto/img7.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-xl font-semibold md:mb-5">
            Collision or upset coverage
          </div>
          <p>
            You are driving home from work and are t-boned while driving through an intersection by another driver who ran a red light. Your vehicle is significantly damaged in the accident
          </p>
          <div className='mt-5 font-semibold'>
            What happens next?
            <p className='font-normal'>If you have optional collision or upset coverage as part of your policy, it will cover the costs associated with repairing your vehicle. How much of the damages it will cover is determined by whether you were fully or partially at-fault, or not at fault.</p>
          </div>
          <div className="justify-end md:justify-start mb-10  self-end md:hidden">
            <img src="/Auto/img7.png" alt="farmer" className="h-20 " />
          </div>
        </div>
        <div className=" rounded-sm p-5 text-start flex flex-col w-full sm:w-[30%] border-2">
          <div className="justify-center md:justify-start mb-10 hidden md:flex">
            <img src="/Auto/img8.png" alt="farmer" className="h-20" />
          </div>
          <div className="text-xl font-semibold md:mb-5">
            Comprehensive coverage
          </div>
          <p>
            You park your vehicle in your driveway. Overnight, a hailstorm erupts, damaging your vehicle’s windshield.
          </p>
          <div className='mt-5 font-semibold'>
            What happens next?
            <p className='font-normal'>If you have optional comprehensive insurance added to your policy, it will cover the cost to repair your windshield, minus a deductible.</p>
          </div>
          <div className="justify-end md:justify-start mb-10  self-end md:hidden">
            <img src="/Auto/img8.png" alt="farmer" className="h-20 " />
          </div>
        </div>
      </div>
      <div className='bg-[#24BBE3] font-bold px-8 p-3 text-white rounded-lg'>Insure now</div>
    </div>
  )
}

export default Component4;