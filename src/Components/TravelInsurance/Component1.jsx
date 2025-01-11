import React from "react";
import Company from "@/Components/Home/Company";
function Component1() {
  return (
    <div className="bg-white">
      <div className="w-[95%] md:w-[90%] m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40">
          <Company/>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-24 items-center">
          <div className="w-full md:w-auto">
            <img
              src="plane.png"
              alt="plane"
              className="h-[50vh] md:h-[76.5vh] pl-0 md:pl-20"
            />
          </div>
          <div className="w-full md:w-[43%] flex flex-col gap-5 text-[0.8rem] md:text-[0.9rem] mt-5 md:mt-0">
            <div className="text-xl md:text-[1.9rem] font-bold md:text-left">
              Travel Insurance for Travelers
            </div>
            <div>
              The last thing you want when travelling is to have a medical
              emergency. From unexpected medical bills to language barriers and
              figuring out how you'll get home, falling ill while travelling can
              bring unwanted stress to a vacation. Our travel insurers help provide
              support needed if a covered emergency occurs when you're away from home.
            </div>
            <div>
              It's also worth checking if your visa, entry requirements, or tour
              operator call for extra coverage.
            </div>
            <div className="pr-0 md:pr-5">
              <span className="font-bold">Why? There are several reasons:</span>
              <ol className="list-decimal pl-5 leading-8">
                <li>
                  <b>Medical Emergencies:</b> Your health is a top priority. If you
                  face a sudden illness or injury in Canada, travel insurance offers
                  the means to receive prompt and quality medical care.
                </li>
                <li>
                  <b>Lost Baggage:</b> Airlines sometimes mishandle baggage, and the
                  last thing you want is to be without essentials in an unfamiliar
                  place. Travel insurance offers to cover the cost of replacing
                  necessary items, allowing you to continue on.
                </li>
                <li>
                  <b>Flight Delays:</b> Travel disruptions like flight delays can
                  happen. If you miss a connecting flight or incur additional
                  expenses due to delays, travel insurance can help cover the costs.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
