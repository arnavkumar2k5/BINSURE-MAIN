import React from "react";

function Component3() {
  return (
    <div className="bg-white pt-10 md:pt-20 p-5 md:p-40">
      <div className="m-auto flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-[60%] flex flex-col gap-5 md:gap-5 text-sm md:text-lg md:pr-12">
            <div className="text-lg md:text-2xl font-bold">
              What information is needed for a Home Insurance quote?
            </div>
            <div className="font-medium">
              The main piece of information you need is your address. At
              B-Insure we do most of the work for you, but there’s some other
              things that can be helpful to have at your fingertips when
              deciding on a policy.
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li className="font-semibold">Exact Address</li>
                <li><span className="font-semibold">Insurance information –</span> Your current policy and renewal date</li>
                <li><span className="font-semibold">Claims history –</span> Have you had any? What it was for, amount paid out, and when.</li>
                <li><span className="font-semibold">Home occupants –</span> Who will be living there? Are there tenants or pets?</li>
                <li><span className="font-semibold">Property details – </span>Material the home is built with, heating, outbuildings (garages, sheds), type of electrical and plumbing, trees, pool etc.</li>
                <li><span className="font-semibold">Personal belongings –</span> The approximate value of what you own</li>
              </ul>
            </div>
          </div>

          <div>
            <img
              src="/HomeInsurance/img9.png"
              alt="family"
              className="h-[40vh] md:h-[70vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
