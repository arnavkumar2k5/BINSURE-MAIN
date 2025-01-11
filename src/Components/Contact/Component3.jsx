import React from "react";

function Component3() {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-2 md:px-6 pt-20 md:pt-36 gap-5 pb-20">
      <div>
        <div className="text-center mb-2 text-xl md:text-3xl font-bold">
          <p className="inline md:block">
            Helpful articles on more than insurance
          </p>
        </div>
      </div>

      <div className="m-auto justify-center flex flex-col">
        <div className="flex flex-col md:flex-row justify-center gap-5 m-5 mt-0">
          <div className="flex flex-col bg-white rounded-md md:w-1/5 h-72 gap-5 pb-28 border-2 border-[#E0E0E0]">
            <div>
              <img
                src="/contact/img1.png"
                alt="img"
                className="object-contain"
              />
            </div>
            <div className="p-5 pt-1 font-semibold underline underline-offset-1">
              Calculating car insurance premiums
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-md md:w-1/5 h-72 gap-5 pb-28 border-2 border-[#E0E0E0]">
            <div>
              <img
                src="/contact/img2.png"
                alt="img"
                className="object-contain"
              />
            </div>
            <div className="p-5 pt-1 font-semibold underline underline-offset-1">
              Sudden increase in insurance premiums
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-md md:w-1/5 h-72 gap-5 pb-28 border-2 border-[#E0E0E0]">
            <div>
              <img
                src="/contact/img3.png"
                alt="img"
                className="object-contain"
              />
            </div>
            <div className="p-5 pt-1 font-semibold underline underline-offset-1">
              How business saves 100K with commercial insurance
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-md md:w-1/5 h-72 gap-5 pb-28 border-2 border-[#E0E0E0]">
            <div>
              <img
                src="/contact/img4.png"
                alt="img"
                className="object-contain"
              />
            </div>
            <div className="p-5 pt-1 font-semibold underline underline-offset-1">
              How to guarantee your claims gets passed through
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
