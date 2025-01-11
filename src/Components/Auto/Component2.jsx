import React from "react";

function Component2() {
  return (
    <div className="bg-[#f5f5f5] md:pt-40 pb-20">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img
              src="/Auto/img11.png"
              alt="family"
              className="w-full h-auto md:h-[74.5vh] object-cover pl-0 md:pl-20"
            />

          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem]">
            <div className="text-xl md:text-3xl font-bold md:text-left">
              Why do you need commercial auto insurance?
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
              <div>
                Independent contractors and small business owners need to safeguard themselves from third-party liability and property damages that may occur when using any vehicle for business purposes. Most personal car insurance policies do not cover accidents or incidents for any vehicle that’s used for business.
              </div>
              <div>
                <div>
                  You can choose the level of coverage that works for you to ensure your vehicles are protected if ever an incident happens
                </div>
                <ul className="list-disc pl-5 leading-6">
                  <li><b>Civil liability: </b>Civil liability coverage protects you if you're responsible for injuring someone or damaging someone else's property. If you’re not at-fault, it also covers damage to your vehicle from a collision.</li>
                  <b>Optional Coverage</b>
                  <li><b>Collision or upset: </b>Collision or upset coverage protects your vehicle from damages caused by impact with another vehicle or an object such as a guardrail, or if your car flips over</li>
                  <li><b>All perils other than collision or upset: </b>All perils other than collision or upset coverage protects your vehicle from damages caused by fire, theft, vandalism, hail, flood, and more</li>
                  <li><b>Specific perils: </b>Specific risks coverage protects your vehicle from damages caused event specifically covered by your policy, such as lightening, an explosion or earthquake</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-[#24BBE3] text-white p-3 text-center w-[50%] md:w-[30%] ">
              Get a Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;
