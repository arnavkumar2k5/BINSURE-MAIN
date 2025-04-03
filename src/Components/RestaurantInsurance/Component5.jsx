import React, { useState } from "react";

function Component5() {

  const [openIndex, setOpenIndex] = useState(null); 

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "How much does restaurant insurance in Canada cost?",
      para: "The annual cost of business insurance for restaurants and bars varies greatly. Location plays a big role; insuring a downtown Montreal restaurant would be more expensive than insuring one in the suburbs considering the city is more congested and harder for fire departments to get to in the event of a fire, for example. Here are some other factors that determine the annual restaurant insurance price:",
      points: [
        "Claims history",
        "Percentage of alcohol sales",
        "Construction material of the building",
        "Your deductible amount",
      ]
    },
    {
      heading: "What's covered on a restaurant business insurance policy?",
      para: "Building – If your restaurant or bar owner is the building owner, you can purchase insurance that will cover it from fire, vandalism, water, earthquakes and more.",
      points: [
        "Betterments – Applicable to restaurants who are tenants.",
        "Contents , Stocks",
        "Equipment Breakdown",
        "Business Interruption",
        "Liability",
        "Cyber Insurance",
      ]
    },
    {
      heading: "How do I lower the price of my restaurant insurance policy?",
      para: "Restaurants pay higher business insurance rates in comparison to other industries because restaurants make more claims than others. Here are some ways to lower your premium:",
      points: [
        "Make sure your CO2 ducts are cleaned at least every 6 months.",
        "Keep your restaurant clean and floors dry so customers won’t slip and injure themselves.",
        "Put your cash vault in a secure location, ideally hidden away.",
        "Avoid making small claims.",
        "Increase your deductible. We suggest a deductible between $2,500 and $10,000, which will help keep your overall premiums down.",
      ]
    },  
    {
      heading: "Does B-Insure offer restaurant insurance online quotes?",
      para: "Building – If your restaurant or bar owner is the building owner, you can purchase insurance that will cover it from fire, vandalism, water, earthquakes and more.",
      points: [
        "Betterments – Applicable to restaurants who are tenants.",
        "Contents , Stocks",
        "Equipment Breakdown",
        "Business Interruption",
        "Liability",
        "Cyber Insurance",
      ]
    },
  ];

  return (
    <div className="flex flex-col p-5 md:flex-row justify-center md:pt-20 m-auto md:pb-40 md:p-40">
      <div className="text-sm flex flex-col gap-5 md:pt-10">
        <div className="text-xl md:text-3xl font-bold md:w-[45rem]">
          Frequently asked questions
        </div>
        <p className="md:w-[28rem] text-lg">
          When you need help with insurance and claims, it's at the ready 24/7.
        </p>
        <p className="font-semibold text-lg">
          I have a different question <img src="/arrow/arrow.png" alt="arrow" className="inline pl-2"/>
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[60%] gap-5 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleOpen(index)}
            >
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                {item.heading}
              </p>
              <p className="flex-shrink-0">{openIndex === index ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}</p>
            </div>

            {openIndex === index && (
              <div className="mt-3 bg-gray-100 text-gray-700 p-4 rounded-lg transition-all ease-in-out duration-300">
                <p className="text-sm md:text-base">{item.para}</p>
                {item.points && (
                  <ul className="list-disc pl-5 mt-2">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component5;