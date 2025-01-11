import React, { useState } from "react";
import QuoteForm from "../../Pages/QuoteForm";

function Component3() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuoteForm = () => {
    console.log("Opening quote form...");
    setIsQuoteOpen(true);
  };

  const handleCloseQuoteForm = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div
      style={{
        background: "linear-gradient(108.97deg, #EFFCFF -0.69%, #C0ECF7 99.69%)",
      }}
      className="py-10 md:py-40 "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center pb-5 md:px-52 gap-20">
        <div className="self-start pl-4 md:pl-0">
          <img src="/Home/img9.png" alt="" />
        </div>
        <div className="md:w-2/3 p-5 md:p-0 text-sm leading-6">
          <p className="text-xl md:text-3xl font-bold mb-3 text-black md:mb-5">
            Get insurance quotes securely online in minutes
          </p>
          <p>
            It’s simple! Just answer a few questions and customize your
            insurance coverage. Then, buy directly online. Our secure online
            platform protects your info from start to finish.
          </p>
          <br />
          <p>
            This includes the details you share during and after your quote.
            Plus, Your data is secured with us; we do not share your data with
            anyone except our insurance partners.
          </p>
          <div>
            <button
              className="text-[1rem] bg-[#24BBE3] text-white p-3 px-5 rounded-lg font-semibold mt-5"
              onClick={() => {
                handleOpenQuoteForm();
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <div className="px-52">
        <img src="/Home/img8.png" alt="" />
      </div>
      {isQuoteOpen && <QuoteForm onClose={handleCloseQuoteForm} />}
    </div>
  );
}

export default Component3;
