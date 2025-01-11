import React from "react";

function Component3() {
  return (
    <div className="md:bg-white bg-[#F6F6F6] flex flex-col justify-center items-center px-6 md:px-40 pt-20 md:pt-30  ">
        <div className="flex justify-between w-full items-center md:pl-16">
            <div>
      <div className="text-2xl mb-3 md:text-4xl font-bold">
        <p className="inline md:block">Our Values</p>
      </div>

      <div className="mb-12 max-w-[45rem] text-base">
        <p className="inline">Community and culture are our core strengths,</p>
        <p className="inline md:block">
          We are into insurance to change the current belief
        </p>
      </div>
            </div>

      <div className="hidden md:block">
        <img src="/about/img3.png" alt="img" className="h-40 pb-10 pr-10"/>
      </div>
        </div>

      <div className="grid md:grid-cols-3 gap-10 md:gap-16 text-start mb-12 md:gap-x-40 md:mt-5">
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Solving problems</p>
          <p className="text-sm text-gray-600 font-medium">We’re solving problems that change 
          <p>and save lives.</p></p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Powered by people.</p>
          <p className="text-sm text-gray-600 font-medium">Members above all. Developing <p>and growing others is what raises</p> the bar.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Make it right.</p>
          <p className="text-sm text-gray-600 font-medium">
          Admit your mistakes. Then learn {" "}
            <p className="inline md:block">from them. Never build alone.</p>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Seek the truth.</p>
          <p className="text-sm text-gray-600 font-medium">… but never assume you’ve found it. <p>Be scientific.</p></p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Inspire & provoke.</p>
          <p className="text-sm text-gray-600 font-medium">
          Develop and display leadership at <p className="inline md:block">all levels.</p>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg md:text-2xl font-bold">Be transparent.</p>
          <p className="text-sm text-gray-600 font-medium">
          Give and ask for direct feedback. Be{" "}
            <p className="inline md:block">grateful for the help by others.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component3;
