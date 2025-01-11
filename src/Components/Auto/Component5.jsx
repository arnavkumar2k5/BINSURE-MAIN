import React from "react";

function Component5() {
  return (
    <div className="bg-white">
      <div className=" m-auto flex flex-col p-5 pb-10 md:p-40">
        <div className="flex flex-col md:flex-row justify-center  items-center">
          <div className="w-full md:w-[45%] flex flex-col gap-5 text-[0.8rem] md:text-sm text-[#073141">
            <div className="text-xl md:text-2xl font-bold md:text-left">
              What does commercial auto insurance cover?
            </div>
            <div className="md:pr-4 flex flex-col gap-5">
              <div className="text-base font-medium">
                A standard commercial auto policy in Canada is like the
                coverages in a personal car insurance policy. For example, a
                personal car insurance policy includes:
              </div>
              <ul className="list-disc pl-5 leading-6">
                <li>
                  <span className="font-semibold">Third-party liability: </span>Provides protection if you’re at
                  fault in an accident for injuring or killing someone or
                  damaging their property
                </li>

                <li>
                  <span className="font-semibold">Direct compensation-property damage (DCPD):</span>DCPD covers
                  your vehicle, its attached contents (such as the dashboard
                  infotainment system), and the loss of use of your vehicle if
                  you are partially at fault or not-at-fault for an accident.
                  DCPD means you deal with your insurer directly instead of
                  suing the other driver for damages.
                </li>
                <li>
                  <span className="font-semibold">Accident benefits: .</span>If you are injured in an auto
                  accident, accident benefits pay for your medical bills and
                  rehabilitation regardless of whether you are at fault for an
                  accident or not. You have the option of increasing your
                  accident benefits coverage limit. Speak to your broker about
                  what your options are and more
                </li>
                <li>
                  <span className="font-semibold">Uninsured auto: </span>If you’re involved in an accident with an uninsured motorist or an unknown driver who commits a hit-and-run, your uninsured auto coverage will pay for damages to your vehicle.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <img
              src="/public/Auto/img9.png"
              alt="family"
              className="w-auto h-full md:h-[60vh] pl-0 md:pl-20 mt-5 object-cover"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
