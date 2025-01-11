import React, { useState } from "react";

function Component7() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40 pb-20">
      <div className="text-sm flex flex-col gap-5">
        <div className="text-xl md:text-3xl font-bold md:w-[45rem]">
          Frequently asked questions
        </div>
        <p className="md:w-[28rem] text-lg">
          When you need help with insurance and claims, it's at the ready 24/7
        </p>
        <p className="font-semibold text-lg mb-5">
          I have a different question <span>&#8594;</span>
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(0)}
          >
            <p className="text-sm md:text-base font-semibold text-gray-800">
              If I use my personal vehicle for work and get into an accident, will my personal car insurance policy pay for damages?
            </p>
            <p>{openIndex === 0 ? <span>&#9650;</span> : <span>&#9660;</span>}</p>
          </div>
          {openIndex === 0 && (
            <div className="bg-[#F5F5F5] text-sm md:text-base p-5 rounded-2xl">
              Not necessarily. If the insurer for your existing personal auto policy is unaware you are using your private vehicle for business purposes, they could deny any claim you file. That means you will be on your own to cover the cost of repairing or replacing your vehicle. Furthermore, your personal auto policy could be cancelled by the insurer for not notifying them you use your vehicle for work. If an insurer cancels your personal auto policy, it will cause your premium to rise significantly.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(1)}
          >
            <p className="text-sm md:text-base font-semibold text-gray-800">
              What does general liability insurance cover?
            </p>
            <p>{openIndex === 1 ?<span>&#9650;</span> : <span>&#9660;</span>}</p> 
          </div>
          {openIndex === 1 && (
            <div className="bg-[#F5F5F5] text-sm md:text-base p-5 rounded-2xl">
              General liability insurance typically includes coverage for legal costs and damages related to the following coverage areas:
              <ul className="list-disc pl-7">
                <li>
                  <span className="font-semibold">Bodily Injury Liability:</span>
                  Injuries or damage to a third party person or property resulting from your business operations.
                </li>
                <li>
                  <span className="font-semibold">Product Liability:</span>
                  Property damage or bodily injury caused by a product you sell or supply.
                </li>
                <li>
                  <span className="font-semibold">Tenant’s Legal Liability:</span>
                  Costs to repair or replace others’ property that you rent or occupy.
                </li>
                <li>
                  <span className="font-semibold">Personal and Advertising Injury Liability:</span>
                  Allegations of defamation, libel, slander, or false advertising.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(2)}
          >
            <p className="text-sm md:text-base font-semibold text-gray-800">
              Are my tools covered under my commercial auto policy?
            </p>
            <p>{openIndex === 2 ? <span>&#9650;</span> : <span>&#9660;</span>}</p> 
          </div>
          {openIndex === 2 && (
            <div className="bg-[#F5F5F5] text-sm md:text-base p-5 rounded-2xl">
              You may require an enhancement to your policy to protect your tools and equipment. Tools and equipment coverage is designed to replace, or repair lost or damaged equipment and tools, accessories. Anything valued at less than $1,500 is considered a tool, whereas anything above is considered equipment.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(3)}
          >
            <p className="text-sm md:text-base font-semibold text-gray-800">
              Is a pickup truck considered a commercial vehicle?
            </p>
            <p>{openIndex === 3 ? <span>&#9650;</span> : <span>&#9660;</span>}</p> 
          </div>
          {openIndex === 3 && (
            <div className="bg-[#F5F5F5] text-sm md:text-base p-5 rounded-2xl">
              In general, most provinces consider pickup trucks to be commercial motor vehicles if they are used for commercial or business purposes. However, check with your provincial transportation ministry to determine if your pickup truck is classified as a commercial vehicle.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleOpen(4)}
          >
            <p className="text-sm md:text-base font-semibold text-gray-800">
              Any tips to get cheap Commercial Auto Insurance?
            </p>
            <p>{openIndex === 4 ? <span>&#9650;</span> : <span>&#9660;</span>}</p>
          </div>
          {openIndex === 4 && (
            <div className="bg-[#F5F5F5] text-sm md:text-base p-5 rounded-2xl">
              <ul className="list-disc pl-5">
                <li>
                  Choose vehicles wisely: The vehicle you drive will always impact insurance costs. Choose something that makes sense for your operations.
                </li>
                <li>
                  Limit access to safe drivers: Employ drivers who have a clean driving record and are safe drivers.
                </li>
                <li>
                  Check for available savings: You may be eligible for many types of discounts and savings programs.
                </li>
                <li>
                  Invest in driver training for employees: This is important if you have a fleet of drivers. Enrolling drivers in safe driving classes can help keep fees down.
                </li>
                <li>
                  Drive less: How much you drive is a key factor. Look for ways to reduce the amount of time you spend behind the wheel.
                </li>
                <li>
                  Safety and security: Install aftermarket security systems and park in secure locations.
                </li>
                <li>
                  Mitigate threats: Implementing risk management practices to prevent accidents and claims.
                </li>
                <li>
                  Minimize theft: Installing an anti-theft device to deter theft will reduce your rate.
                </li>
                <li>
                  Monitor driving habits: Using a usage-based insurance or telematics device to monitor and promote safe driving will help reduce your premiums.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Component7;
