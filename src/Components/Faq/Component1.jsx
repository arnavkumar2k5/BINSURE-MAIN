import React, { useState } from "react";

function Component1() {
  const [openIndex, setOpenIndex] = useState(null); 

  const items = [
    {
      heading: "What is whole life insurance?",
      para: "Whole life insurance is a type of permanent life insurance, which means your coverage stays in place for your entire life (unlike term life insurance, which expires after a certain period, such as 10 or 25 years).",
    },
    {
      heading: "How is my life insurance premium calculated?",
      para: "Your monthly North Cover Life Insurance premium will depend on several factors, including your coverage amount, age and whether you’re a smoker. The sure-fire way to know what your premiums will be is to request a quote.",
    },
    {
      heading: "Is life insurance worth it?",
      para: " is worth getting if you want to help protect the financial future of your loved ones when you’re no longer around. It provides a lump sum payment that your family can use in any way they wish, such as mortgage costs, school fees or any other bills. Depending on your policy, life insurance can also provide a benefit for terminal illness, which can help alleviate financial pressure at an already difficult time.",
    },
    {
      heading: "How can I buy life insurance?",
      para: "We love that you’re asking! Start by requesting a quote (or have us give you a call back). We can talk you through the rest.",
    },
    {
      heading: "Is life insurance expensive?",
      para: "Life Insurance doesn’t have to be expensive. The amount you pay each month will depend on factors such as your age, smoking status, and coverage amount. For many Canadians, life insurance is a cost-effective way to gain some peace of mind that your favourite people will have financial assistance after you go. The best way to know what your payments will be is to request a quote from one of our licensed advisors."
    },
    {
      heading:
        "Can I transfer my life insurance policy to another person?",
      para: "Life Insurance offers single-life policies that cover you. The policy is non-transferrable. If there’s someone else in your life you cherish and you think they should have life insurance coverage, we’re all for that – and ready to help. ",
    },
    {
      heading: "At what age should you get life insurance?",
      para: "Life insurance is helpful at many ages and stages of life. Canadian residents (excluding residents of Quebec) between 18 and 70 can apply for insurance . Depending on your age, you may be eligible for up to $1.5 million in life insurance coverage.",
    },
    {
      heading: "What is a life insurance premium?",
      para: "A life insurance premium is the amount you’ll pay in exchange for the benefit (payout) you or your loved ones will receive after you pass away or are diagnosed with a terminal illness. Life insurance premiums are usually a monthly payment. North Cover Life Insurance premiums will depend on factors such as your age, smoking status, and coverage amount. Our licensed advisors can give you a sense of what your monthly life insurance premiums may be by requesting a quick quote.",
    },
    {
      heading: "What is a life insurance premium?",
      para: "A life insurance premium is the amount you’ll pay in exchange for the benefit (payout) you or your loved ones will receive after you pass away or are diagnosed with a terminal illness. Life insurance premiums are usually a monthly payment. North Cover Life Insurance premiums will depend on factors such as your age, smoking status, and coverage amount. Our licensed advisors can give you a sense of what your monthly life insurance premiums may be by requesting a quick quote.",
    },
    {
      heading: "Is it a good idea to get life insurance?",
      para: "Life insurance is a good idea for people of all ages (even if you’re young, single and healthy) because it can help protect you or the people you care about most financially if the worst happens. Life Insurance provides coverage between $100,000 and $1.5 million depending on your age at the time you apply, which can go towards immediate expenses like your funeral costs, but also help your loved ones out with their housing expenses, tuition, paying off personal debts, and more. North Cover Life Insurance can also provide financial assistance if you’re diagnosed with a terminal illness (with a life expectancy of 12 months or less)1.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col p-5 justify-center m-auto md:px-60 md:pb-40">
      <div className="flex flex-col gap-5 mt-10">
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
              <p>{openIndex === index ?  <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}</p>
            </div>

            {openIndex === index && (
              <div className="mt-3 bg-gray-100 text-gray-700 p-4 rounded-lg transition-all ease-in-out duration-300">
                <p className="text-sm md:text-base">{item.para}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Component1;
