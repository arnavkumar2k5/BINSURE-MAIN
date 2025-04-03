import React, { useState } from "react";

function Component6() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-center text-xl  md:text-3xl font-bold text-[#073141] mb-2 md:mb-4">
        Get your questions answered
      </h2>
      <p className="text-center text-[15px] md:text-xl text-[#073141] mb-12">
        Find answers to the most commonly asked questions
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="bg-gray-50 p-5 md:p-10 pt-6 shadow-sm border-2 border-[#D9D9D9] md:w-[35rem]">
          <h3 className=" text-16px md:text-xl font-bold text-[#073141] mb-3 md:mb-4">
            How is breaking the market
          </h3>
          <p className=" mb-6 text-[14px] font-medium text-[#073141]">
            At , we’ve made the process of buying insurance as easy and painless
            as possible. In fact, in just a few short minutes you could be on
            the way to obtaining coverage, protecting your loved ones.
          </p>
          <ul className="space-y-4 md:hidden">
            <li>
              <a href="#" className="font-semibold text-[14px]">
                Talk to our team &gt;
              </a>
            </li>
          </ul>
          <ul className="space-y-4 hidden md:block">
            <li>
              <a href="#" className="font-semibold">
                Report a damage or other incident &gt;
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                Renew your policy &gt;
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                Check the status of the case &gt;
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold">
                Life insurance calculator &gt;
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-5 md:p-10 pt-6 shadow-sm border-2 border-[#D9D9D9] md:w-[35rem]">
          <h3 className=" text-16px md:text-xl font-bold text-[#073141] mb-3 md:mb-4">
            Frequently asked questions
          </h3>
          <p className=" mb-6 text-[14px] font-medium text-[#073141]">When you need help with insurance and claims,
            it’s at the ready 24/7.</p>
          <div className="space-y-4 mt-10">
            <div>
              <div
                onClick={() => toggleQuestion(1)}
                className="text-sm md:text-lg flex justify-between font-semibold text-gray-800 cursor-pointer"
              >
                <div className="inline ">
                  What is B-Insure and how does it work?{" "}
                </div>
                <div className="inline">
                  {openQuestion === 1 ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}
                </div>
              </div>
              {openQuestion === 1 && (
                <div className="mt-2 bg-[#F5F5F5] p-4 rounded shadow">
                  We help our customers save time and money by comparing
                  insurance plans, obtaining quotes and applying for insurance
                  wherever they have access to their phone, tablet, or computer.
                </div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleQuestion(2)}
                className="text-sm md:text-lg flex justify-between font-semibold text-gray-800 cursor-pointer"
              >
                How is different from other life insurance agents?{" "}
                <div>
                  {openQuestion === 1 ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}
                </div>
              </div>
              {openQuestion === 2 && (
                <div className="mt-2 bg-[#F5F5F5] p-4 rounded shadow">
                  Our advisors provide personalized guidance tailored to your needs, unlike traditional agents who may offer generic plans. We prioritize transparency and flexibility, ensuring you get the best coverage without hidden fees.
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleQuestion(3)}
                className="w-full text-sm md:text-lg flex justify-between font-semibold text-gray-800 text-start cursor-pointer"
              >
                What types of insurance does offer?{" "}
                <div>
                  {openQuestion === 1 ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}
                </div>
              </button>
              {openQuestion === 3 && (
                <div className="mt-2 bg-[#F5F5F5] p-4 rounded shadow">
                  We offer life, health, and disability insurance, along with other financial protection plans. Our coverage ensures security for you and your loved ones.
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleQuestion(4)}
                className="text-sm md:text-lg flex justify-between font-semibold text-gray-800 cursor-pointer"
              >
                <div className="text-start">
                  Wouldn't it be cheaper to buy coverage directly from an insurance provider or my bank?
                </div>
                <div>
                  {openQuestion === 1 ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-6"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-6"/>}
                </div>
              </button>
              {openQuestion === 4 && (
                <div className="mt-2 bg-[#F5F5F5] p-4 rounded shadow">
                  Buying directly may seem cheaper, but our advisors help you find better coverage at competitive rates. We ensure personalized plans without hidden costs.
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleQuestion(5)}
                className="w-full text-sm md:text-lg flex justify-between font-semibold text-gray-800 cursor-pointer"
              >
                Do I pay fees to use ?
                <div>
                  {openQuestion === 1 ? <img src="/arrow/uparrow.png" alt="up-arrow" className="w-4"/> : <img src="/arrow/downarrow.png" alt="down-arrow" className="w-4"/>}
                </div>
              </button>
              {openQuestion === 5 && (
                <div className="mt-2 bg-[#F5F5F5] p-4 rounded shadow">
                  No, our services are free—you only pay for the insurance policy you choose. There are no hidden fees or extra charges.
                </div>
              )}
            </div>
            <div className="mt-10">
              <a href="#" className="font-semibold  md:text-xl">
                I have a different question <span className="text-cyan-400 pl-1">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
