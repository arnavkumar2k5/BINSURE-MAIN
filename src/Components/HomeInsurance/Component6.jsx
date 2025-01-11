import React, { useState } from "react";

function Component6() {

  const [openIndex, setOpenIndex] = useState(null); 
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "Is it mandatory to have house insurance in Canada",
      para: "In Canada, home insurance isn’t mandatory. However, most banks and mortgage loaners will expect you have a house insurance policy as part of the financing agreement.",
    },
    {
      heading: "How much is house insurance in Canada monthly?",
      para: "On a monthly basis, home insurance in Canada is determined based on your home’s location and its value as well as numerous other factors. It can vary depending on the location of your home, its age and condition, and other factors. See the question above for more details on how your insurance premium is calculated.",
    },
    {
      heading: "Are house insurance premiums going up in Canada",
      para: "Home insurance coverage options have generally increased by 5 percent as of 2022 in Canada. One of the primary reasons for this is extreme weather conditions due to climate change, causing more homes to take weather-related damages."
    },
    {
      heading: "Does house insurance cost more if you have a mortgage?",
      para: "Yes. The number of mortgages registered against the property is considered when defining your insurance premium, and there are savings for properties that are mortgage free. Read the questions above for further details, talk to your broker or get a home insurance quote today to get your house insurance premium."
    },
    {
      heading: "Can I claim a broken fence on my homeowner's insurance?",
      para: "It depends on your home insurance policy and other factors: the reasons why the fence was broken and if it is covered by an insured peril in your policy. If it is covered, outside structures can be claimed on your house insurance policy. "
    },
  ];

  return (
    <div className="flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto pb-10 md:pb-40 md:p-40 bg-white">
      <div className="text-sm flex flex-col gap-5 md:pt-10 text-center md:text-start">
        <div className="text-2xl md:text-4xl font-bold md:w-[45rem] text-center md:text-start">
          Frequently asked questions
        </div>
        <p className="md:w-[28rem] text-sm md:text-lg ">
          When you need help with insurance and claims, it's at the ready 24/7
        </p>
        <p className="font-semibold text-sm md:text-lg ">
          I have a different question <span>&#8594;</span>
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
