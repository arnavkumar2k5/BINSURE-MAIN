import React, { useState } from "react";

function Component6() {

  const [openIndex, setOpenIndex] = useState(null); 

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "What does Warehouse & Storage solutions include",
      points:[
        "Qualified assistance in evaluating risks facing operators from both physical facilities and through contractual arrangements",
        "Providing advice on managing risks through the use of insurance products and contractual language",
        "Simplified underwriting process for securing coverage quotes",
        "Access to a cost-competitive program which is price stable and provides very broadly worded protection",
        "Services that tenants can access to obtain insurance coverage on their unit contents",
        "Access to risk control services to assist in mitigating physical risks on site",
      ]
    },
    {
      heading: "What's covered on a Warehouse business insurance policy?",
      points: [
        "Warehouseman’s legal liability coverage",
        "Self-storage operators legal liability coverage to defend and protect from claims for goods that are lost or damaged while in storage",
        "Wrongful sale and disposal insurance protection provided to cover the cost of disposal and any legal action that may follow",
        "Tenant content abandonment coverage handles proper removal and disposal of environmentally-sensitive or dangerous substances deserted by a tenant",
        "Comprehensive property, liability and crime protection",
        "Competitive rates with low deductibles",
      ]
    },
    {
      heading: "What coverage limits should my warehouse insurance policy have?",
      para: "Different insurance coverages may provide various amounts of coverage limits. Most warehouse businesses will purchase a general liability policy with a $5 million coverage limit, but you have the option to choose a lower or higher amount. Speak to one of our insurance experts to determine what the right amount of coverage is for your policy.",
    },  
    {
      heading: "My warehouse property has a railroad sidetrack. Does a warehouse insurance policy cover it?",
      para: "You may need to add additional coverage known as railroad protective liability insurance. Speak to a B-Insure licensed broker for more information",
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
              <p>{openIndex === index ? <span>&#9650;</span> : <span>&#9660;</span>}</p>
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

export default Component6;