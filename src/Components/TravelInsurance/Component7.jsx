import React, { useState } from "react";

function Component7() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      question: "What is a Travel Insurance?",
      answer: `Travel insurance is coverage designed to protect against risks and financial losses 
      that could happen while traveling. The risks range from minor inconveniences 
      such as delayed or lost bags and trip cancellations, to medical emergencies while outside your province of residence or Canada.`,
    },
    {
      question: "What is not covered by travel insurance?",
      answer: `Some insurers do not cover such expenses as routine health checkups, non-emergency care, and cosmetic surgeries. 
      Limitations and exclusions apply depending on where you are traveling or if you have a pre-existing medical condition.`,
    },
    {
      question: "What should I look for in travel insurance?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Medical coverage</li>
          <li>Coverage for pre-existing medical conditions</li>
          <li>Coverage for delayed, lost, or damaged luggage</li>
          <li>Travel assistance while abroad</li>
          <li>Repatriation in case of death</li>
        </ul>
      ),
    },
    {
      question: "Is a pickup truck considered a commercial vehicle?",
      answer: `In most provinces, pickup trucks are considered commercial vehicles if used for business purposes. 
      Check with your provincial transportation ministry to confirm.`,
    },
    {
      question: "Does applying for travel insurance need a medical record check?",
      answer: (
        <div>
          When you apply to get travel insurance, your broker will ask you if you have any pre-existing conditions. Having a pre-existing condition does not mean that you cannot be covered, however, it could limit your coverage for medical emergencies if your condition in not stable. 
          <br/>
          <br/>
          In fact, before leaving on a trip, your condition must be stable based on a series of factors defined in a stability clause in order to be covered. If you have a pre-existing condition and if you have any questions, let your broker know.
        </div>
    ),
    },
    {
      question: "How much does Travel Insurance cost for Canada?",
      answer: (
        <div>
          In general, travel insurance to Canada costs about 3 – 10% of your total prepaid and non-refundable trip expenses.
          The cost depends on:
          <ul className="list-disc pl-5">
            <li><b>Total trip cost:</b> The non-refundable costs you've already paid for the trip.</li>
            <li><b>Age:</b> Older individuals face higher health risks, influencing the cost.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can you buy travel insurance after booking a flight?",
      answer: `Yes, travelers can purchase travel insurance after booking their flights. It's advisable to buy as soon as 
      you make the initial trip deposit to cover unforeseen events before departure.`,
    },
  ];
  return (
    <div className="flex flex-col p-5 md:flex-row justify-center m-auto pb-20 md:pb-40 md:px-40 bg-white">
      <div className="text-sm flex flex-col gap-5 md:pt-10 text-center md:text-start">
        <div className="text-2xl md:text-4xl font-bold md:w-[45rem] text-center md:text-start">
          Frequently asked questions
        </div>
        <p className="md:w-[28rem] text-sm md:text-lg ">
          When you need help with insurance and claims, it's at the ready 24/7.
        </p>
        <p className="font-semibold text-sm md:text-lg ">
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
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                {item.question}
              </p>
              <p className="flex-shrink-0">{openIndex === index ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}</p>
            </div>

            {openIndex === index && (
              <div className="mt-3 bg-gray-100 text-gray-700 p-4 rounded-lg transition-all ease-in-out duration-300">
                <p className="text-sm md:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default Component7;
