import React, { useState } from "react";

function Component6() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-col p-5 md:flex-row justify-center md:pt-40 m-auto pb-20 md:pb-40 md:p-40">
      <div className="text-sm flex flex-col gap-5 md:pt-10 text-center md:text-start my-10">
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
      <div>
        {[
          {
            question: "What is commercial general liability insurance?",
            answer: (
              <>
                <li>
                  Commercial general liability (CGL) is an insurance policy that
                  provides financial coverage for claims of third-party bodily
                  injury and property damage caused by your business resulting
                  from negligence or unexpected accidents.
                </li>
                <li>
                  Should your business be sued, CGL insurance typically covers
                  compensatory damages awarded against you and any legal defense
                  costs, regardless of the lawsuit’s outcome.
                </li>
              </>
            ),
          },
          {
            question: "What does general liability insurance cover?",
            answer: (
              <>
                General liability insurance typically includes coverage for
                legal costs and damages related to the following coverage areas:
                <li>
                  <span className="font-semibold">
                    Bodily Injury Liability:
                  </span>
                  Injuries or damage to a third party person or property
                  resulting from your business operations.
                </li>
                <li>
                  <span className="font-semibold">Product Liability: </span>
                  Property damage or bodily injury caused by a product you sell
                  or supply.
                </li>
                <li>
                  <span className="font-semibold">
                    Tenant’s Legal Liability:
                  </span>
                  Costs to repair or replace others’ property that you rent or
                  occupy.
                </li>
                <li>
                  <span className="font-semibold">
                    Personal and Advertising Injury Liability:
                  </span>
                  Allegations of defamation, libel, slander, or false
                  advertising.
                </li>
              </>
            ),
          },
          {
            question: "Who needs commercial general liability insurance?",
            answer: (
              <>
                As a small business owner, you come into contact with any third
                parties, including clients, vendors, and other businesses, who
                may be involved in an accident or claim your business caused
                them loss or damage. General liability insurance for small
                businesses is recommended if:
                <li>You have an office space or clients visit you at home. </li>
                <li>You visit your client’s office space or home. </li>
                <li>You have staff who conduct business off-site. </li>
              </>
            ),
          },
          {
            question:
              "What is not covered by commercial general liability insurance?",
            answer: (
              <>
                Commercial liability insurance does not typically provide
                coverage for:
                <li>Contractual liability; </li>
                <li>Intentional criminal acts; </li>
                <li>Patent infringement;</li>
                <li>
                  Motor vehicles or automobiles (you need a Commercial Auto
                  Insurance policy); or,
                </li>
                <li>
                  Professional services or advice you provide (you need
                  Professional Liability Insurance).
                </li>
              </>
            ),
          },
          {
            question:
              "Professional services or advice you provide (you need Professional Liability Insurance).",
            answer: (
              <>
                <div>
                  Get in touch with one of our insurance brokers or request an
                  online quote from our application form.
                </div>
                <br />
                <div>
                  Our digital brokerage model has several benefits over local
                  brokers, including speed, ease of use and lower costs. All
                  insurance brokers, digital and traditional, have a fiduciary
                  responsibility to protect your best interests and should help
                  you find the right policy for your business.
                </div>
              </>
            ),
          },
          {
            question:
              "Who is considered third-party?",
            answer: (
              <>
                As a business owner, if you come into contact with any third parties, including clients, vendors, and other businesses, who may be involved in an accident or claim your business caused them loss or damage. This definition of a third party does not include your employees or sub-contractors for coverage purposes.
              </>
            ),
          },
          {
            question:
              "What is the difference between public liability insurance and general liability insurance?",
            answer: (
              <>
                The primary difference between Public Liability Insurance and Commercial General Liability (CGL) insurance is the risks they cover. Public Liability Insurance provides financial coverage against the public’s claims against your business for personal injury or property damage. CGL is a more accessible form of insurance that provides a more extensive range, covering personal and advertising injuries and everything public liability covers.
              </>
            ),
          },
        ].map((item, index) => (
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
              <p>
                {openIndex === index ? (
                  <span>&#9650;</span>
                ) : (
                  <span>&#9660;</span>
                )}
              </p>
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

export default Component6;
