import React from "react";

function Component8() {
  return (
    <div className="bg-white md:flex flex-col justify-center items-center md:px-48 pt-40 pb-20 hidden " style={{ backgroundImage: "url('/Home/img22.png')", backgroundSize: ' auto 100%', backgroundPosition: ' 70% 100%' }}>
      <div className="self-start pl-10">
        <div className="text-start mb-2 text-xl md:text-4xl font-bold">
          <p className="inline md:block">
          Knowledge Articles
          </p>
        </div>

        <div className=" mb-5 mt-5 text-xl text-start">
        Helpful Insurance seeker resources
        </div>
      </div>

      <div className=" cardsSection flex flex-col md:flex-row justify-center gap-5 m-5 " >
        <div className="flex flex-col bg-white shadow-lg text-sm rounded-2xl md:w-1/3 gap-5 border-2 border-[#E0E0E0]">
          <img src="/Home/img17.png" alt="img" className="object-cover rounded-t-2xl"/>
          <p className="font-semibold pl-5 pt-1 text-lg">How to compare home insurance
          quotes</p>
          <p className="bg-[#498AC614] inline w-1/3 p-2 text-center text-xs rounded-full ml-5">Home insurance</p>
          <p className="ml-5 mb-5">6 min read</p>
        </div>
        <div className="flex flex-col bg-white shadow-lg text-sm rounded-2xl md:w-1/3 gap-5 border-2 border-[#E0E0E0]">
          <img src="/Home/img19.png" alt="img" className="object-cover h-[14.7rem] rounded-t-2xl"/>
          <p className="font-semibold pl-5 pt-1 text-lg">Switching auto insurance</p>
          <p className="bg-[#498AC614] inline w-1/3 p-2 mt-7 text-center text-xs rounded-full ml-5">Auto insurance</p>
          <p className="ml-5 mb-5">6 min read</p>
        </div>
        <div className="flex flex-col bg-white shadow-lg text-sm rounded-2xl md:w-1/3 gap-5 border-2 border-[#E0E0E0]">
          <img src="/Home/img18.png" alt="img" className="object-cover rounded-t-2xl"/>
          <p className="font-semibold pl-5 pt-1 text-lg">5 Benefits of Travel insurance</p>
          <p className="bg-[#498AC614] inline w-1/3 p-2 mt-7 text-center text-xs rounded-full ml-5">Travel Insurance</p>
          <p className="ml-5 mb-5">6 min read</p>
        </div>
      </div>
    </div>
  );
}

export default Component8;
