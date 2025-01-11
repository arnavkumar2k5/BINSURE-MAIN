import React from "react";

function Component5() {
  return (
    <div className="bg-white pt-10 md:pt-20 p-5 md:p-40 md:pb-10 md:px-40">
      <div className="m-auto flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20">
          <div>
            <img
              src="/HomeInsurance/img8.png"
              alt="family"
              className="h-[40vh] md:h-[60vh] w-[60vw]"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-5 text-sm md:text-lg md:pr-12">
            <div className="text-lg md:text-2xl font-bold">
            How can I get a more affordable Home Insurance rate?
            </div>
            <div className="font-medium">
            There are discounts offered by insurers that you can take advantage of to lower rates. They are:
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>When you bundle insurance policies (home, auto) with one insurer.</li>
                <li>Increasing the deductible</li>
                <li>Paying annually instead of monthly</li>
                <li>Installing smoke detectors/monitored house alarms</li>
                <li>Having never made an insurance claim</li>
                <li>Being a member of a union, professional organization, or alumnus of certain universities</li>
                <li>Being a senior citizen</li>
                <li>Having a newly built home</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Component5;
