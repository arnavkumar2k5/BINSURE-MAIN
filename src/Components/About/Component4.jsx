import React from "react";

function Component4() {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-6 pt-20 md:pt-36 gap-5 pb-20 md:pb-10">
      <div>
        <div className="text-center mb-2 text-xl md:text-4xl font-bold">
          <p className="inline md:block">Our Leadership</p>
        </div>

        <div className="text-gray-600 max-w-[35rem]  text-center ">
          <p className="inline">Our forward-looking company is led by our senior leadership team that guides </p>
          <p className="inline">our strategy and leads our people. Meet our team:</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-5 text-sm  md:mt-20 '>
        <div className='flex flex-col bg-white p-7 shadow-lg rounded-xl md:w-1/4 gap-5 pb-20 border-2 border-[#E0E0E0]'>
          <p className='font-bold text-xl'>Johan Karlsson <p className="font-normal">CEO</p></p>
          <p>Johan Karlsson is an experienced finance writer with over 10 years of experience, specializing in loans, personal finance, and education in finance for the general public.
          </p>
        </div>
        <div className='flex flex-col bg-white p-7 shadow-lg rounded-xl md:w-1/4 gap-5 pb-20 border-2 border-[#E0E0E0]'>
          <p className='font-bold text-xl'>Anna Rask <p className="font-normal">CFO</p></p>
          <p>Anna Rask is an experienced finance writer with over 10 years of experience, specializing in loans, personal finance, and education in finance for the general public.
          </p>
        </div>
        <div className='flex flex-col bg-white p-7 shadow-lg rounded-xl md:w-1/4 gap-5 pb-20 border-2 border-[#E0E0E0]'>
          <p className='font-bold text-xl'>Jenny Magnusson <p className="font-normal">CMO</p></p>
          <p>Jenny Magnusson is an experienced finance writer with over 10 years of experience, specializing in loans, personal finance, and education in finance for the general public.
          </p>
        </div>
      </div>

      <div>
        <button className="text-[1rem] font-bold py-10">
          Join our team {"   "}<p className="inline text-cyan-300">  &gt;</p>
        </button>
      </div>
    </div>
  );
}

export default Component4;