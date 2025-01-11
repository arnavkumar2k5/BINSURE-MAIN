import React, { useState } from "react";

function Component3() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      heading: "Need to cancel your trip due to an unforeseen event?",
      para: "Get coverage for your trip against illnesses, injuries, and natural disasters. Travel insurance can reimburse you for your prepaid, non-refundable trip costs.",
    },
    {
      heading: "Was your luggage lost or stolen?",
      para: "Our travel plans can offer reimbursement for the value of your belongings, up to the policy limit. This includes coverage for lost or stolen passports, visas, or other important travel documents, as well as any necessary expenses related to replacing these items.",
    },
    {
      heading: "Stranded due to unexpected travel delays?",
      para: "Whetherit's rebooking your flight, finding alternative transportation, or providing a place to stay, our 24/7 travel assistance teams here to help!",
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center p-5 md:pt-40 m-auto md:pb-40 md:p-40 bg-white">
      <div className="p-3 md:w-[40%]">
        <div className="text-sm text-justify">
            <div className="text-lg text-start md:text-3xl font-bold mb-5 md:mb-10 pt-10 md:pr-10">Why should I purchase Travel Insurance?</div>
            <div>
            Whether you're embarking on a weekend getaway ora month-long adventure, unexpected events can happen. A protection plan can help ease your mind and help safeguard your trip, offer reimbursement for covered medical costs, and provide travelers with 24/7 access to assistance services, among other benefits.
            </div>
        </div>
        <div className="flex flex-col w-full gap-5 mt-10">
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
        <div className="bg-[#24BBE3] text-white font-semibold text-sm p-3 px-5 inline-block rounded-lg mt-8 md:mt-8 md:ml-28 md:ml-0">
            Get a Quote
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img src="/travel/bill.png" alt="img" className="md:h-[35rem]"/>
      </div>
    </div>
  );
}

export default Component3;
