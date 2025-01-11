import React from "react";

function Component1() {
  return (
    <div className="bg-white flex flex-col justify-center items-center px-2 md:px-6 pt-20 md:pt-36 gap-5 pb-20">
      <div>
        <div className="text-center mb-2 text-2xl md:text-4xl font-bold">
          <p className="inline md:block">Let’s Connect</p>
        </div>

        <div className="text-gray-600 mb-12 max-w-[35rem] text-lg text-center mt-5 mx-2">
          <p className="inline">
            Our friendly support team is always ready to answer questions,{" "}
          </p>
          <p className="inline">
            we’re just a click or phone call away. Our support team is
            available:
          </p>
        </div>
      </div>

      <div className="m-auto justify-center items-center flex flex-col">
        <div className="self-center m-auto">
          <img src="/about/img5.png" alt="img" className=" w-[70%]  mx-auto object-cover" />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 m-5 mt-0 text-base font-medium text-black w-[80%]">
          <div className="flex flex-col bg-white p-10 shadow-lg rounded-md md:w-[30rem] gap-5 pb-18 md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">Communications</p>
            <p className="font-semibold">
              Talk to us <p className="font-normal">888-154-0154</p>{" "}
            </p>
            <p className="font-semibold">
              Mail us <p className="font-normal">support@.ca</p>{" "}
            </p>
          </div>
          <div className="flex flex-col bg-white p-10 shadow-lg rounded-md md:w-[30rem] gap-5 pb-18 md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">We’re available from</p>
            <p className="font-semibold">
              Eastern Time
              <p className="font-normal leading-6">
                Monday to Thursday: 9:00 AM – 5:30 PM{" "}
                <p>Friday: 9:00 AM – 4:00 PM</p>
              </p>{" "}
            </p>
          </div>
          <div className="flex flex-col bg-white p-10 shadow-lg rounded-md md:w-[30rem] gap-5 pb-18 md:pb-28 border-2 border-[#E0E0E0]">
            <p className="font-bold text-xl">Our Location</p>
            <p className="font-semibold">
              Mailing Address
              <p className="font-normal">
                404 Mainstreet Ave #1301, Toronto, <p>ON M5H 3C6, Canada</p>
              </p>{" "}
            </p>
            <p className="flex gap-2 font-medium text-[#073141]">
              View on google maps{" "}
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3.38574V5.38574H2V16.3857H13V11.3857H15V17.3857C15 17.938 14.5523 18.3857 14 18.3857H1C0.44772 18.3857 0 17.938 0 17.3857V4.38574C0 3.83346 0.44772 3.38574 1 3.38574H7ZM18 0.385742V8.38574H16L15.9999 3.79874L8.2071 11.5928L6.79289 10.1786L14.5849 2.38574H10V0.385742H18Z"
                  fill="#24BBE3"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
