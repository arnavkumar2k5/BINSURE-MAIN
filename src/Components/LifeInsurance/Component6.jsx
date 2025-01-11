import React from "react";

function Component6() {
  return (
    <div>
      <div className="m-auto flex flex-col justify-center items-center p-5 md:p-40">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div>
            <img
              src="women.png"
              alt="family"
              className="h-[40vh] md:h-[60vh] object-cover "
            />
          </div>

          <div className="flex flex-col gap-5 text-sm md:text-lg w-full md:w-[45%]">
            <div className="text-xl md:text-3xl font-semibold mb-5 md:mb-3">
              How much do insurance cover costs?
            </div>
            <div className="leading-8 font-medium">
              It depends on the type of coverage you choose. Generally, 
              <p className="inline md:block">term insurance is more affordable than permanent insurance.</p>But there
              are a lot of factors that determine the cost of your policy,
              including:
              <div>
                <span className="font-semibold">Age:</span> Generally, insurance
                is less expensive when you're younger.
              </div>
              <ul className="list-disc pl-5 md:pl-8">
                <li>
                  <span className="font-semibold">Health: </span>Family history,
                  chronic diseases, and lifestyle can increase costs.
                </li>
                <li>
                  <span className="font-semibold">Gender:</span> Women live
                  longer than men on average, so insurance may cost less.
                </li>
                <li>
                  <span className="font-semibold">Occupation:</span> If you have
                  a dangerous job, your insurance costs can be higher.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-[#24BBE3] text-white p-3 text-center w-[50%] md:w-[25%] text-xs font-semibold">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component6;
