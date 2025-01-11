import React, { useState } from "react";

function Component8() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      heading: "What is a Life Insurance",
      para: "Life insurance provides a payout that your loved ones can put towards what they need most when you're no longer here. It can help them pay the mortgage or rent, plus cover bills and handle regular expenses more easily. Even if they have the basics covered, your life insurance benefit can go towards helping them make the most out of life, from travel to home upgrades - whatever they need or want most.",
    },
    {
      heading: "How much does Life insurance cost per month",
      para: "The monthly or yearly cost of life insurance will depend on the level of coverage you choose, plus other personal factors, such as your age and smoking status. The best way to get an accurate estimate is to request a quote. Our licensed advisors are ready to talk you through your options, so get in touch.",
    },
    {
      heading: "How does life insurance works?",
      para: "With B-Insure Life Insurance, you'll pay a monthly premium. That amount will be based on factors such as your age, smoking status, and the coverage amount you choose. When the time comes, the beneficiaries you've chosen will get the benefit payout once the claim is approved.",
    },
    {
      heading: "What type of Life insurance should I get?",
      para: "There are different types of life insurance plans available in Canada. The type of life insurance you should get will depend on your personal circumstances. Choosing life insurance coverage doesn’t need to be complicated. Our trusted advisors are ready to talk you through it, so you can make a confident decision (and get some peace of mind) with ease.",
    },
    {
      heading: "What does Life insurance cover?",
      para: "Life insurance gives your beneficiaries money they can use in any way they wish after you pass away. A life insurance claims payout can go towards mortgage payments, debts, education expenses, final expenses like funeral costs, medical or palliative care costs, and more. Life insurance can also provide the benefit upfront for terminal illness with a life expectancy of 12 months or less to live.",
    },
    {
      heading:
        "Can I 'cash out' or take money out of my life insurance policy before death in Canada?",
      para: "Some permanent life insurance policies may allow you to do this. Connect with an advisor for more detailed information.",
    },
    {
      heading: "What if I already have life insurance through work?",
      para: "It's great if you have insurance coverage through your workplace plan, but keep in mind that you may lose that coverage if you ever leave your job. If you're currently in the process of leaving your job, you may be eligible to replace your group life insurance with affordable coverage from our partner plans.",
    },
    {
      heading: "How to Cancel my Life Insurance Policy",
      para: "Canceling a life insurance policy is not complicated. However, the exact steps vary depending on whether you have a term life policy or a cash-value life policy. You can cancel a term life policy in different ways. Whichever option you pick, make sure you cancel any automatic payments that you have arranged with your bank.",
      points: [
        "Submit a cancellation form.",
        "Write a letter.",
        "Call your provider.",
        "Stop paying premiums: Canceling a term life plan can be as easy as stopping the premium payments. If you do not make a premium payment within the grace period, your policy lapses automatically. A grace period is a small window you get after the due date in which you can pay the premium without coverage lapsing.",
      ]
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto md:pb-40 md:p-40 ">
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

export default Component8;
