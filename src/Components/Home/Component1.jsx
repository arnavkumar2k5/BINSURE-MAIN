import React, { useState } from "react";
import { Timestamp } from "firebase/firestore";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

function Component1() {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const SUBMIT_FORM_ENDPOINT = import.meta.env.VITE_SUBMIT_FORM_ENDPOINT;

  console.log("API_BASE_URL", API_BASE_URL);
  console.log("SUBMIT_FORM_ENDPOINT", SUBMIT_FORM_ENDPOINT);

  const handleSelectInsurance = (type) => {
    setSelectedInsurance(type);
    setIsFormVisible(true);
  };
  const handleCloseForm = () => {
    setSelectedInsurance(null);
    setIsQuoteSubmitted(false);
    setIsFormVisible(false);
  };

  const handleGetQuoteClick = () => {
    setIsFormVisible(true);
  };

  const validateFormData = (formData) => {
    if (!formData.lookingFor) return "Please select the insurance type.";
    if (!["Life", "Travel", "Auto", "Commercial"].includes(formData.lookingFor))
      return "Invalid insurance type selected.";
    if (!formData.planningToBuy) return "Please select when you plan to buy.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.name || formData.name.length < 2)
      return "Please enter a valid name (at least 2 characters).";
    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
      return "Please enter a valid 10-digit contact number.";
    if (
      !formData.contactNumber ||
      !/^\d{10}$/.test(formData.contactNumber)
    )
      return "Please enter a valid 10-digit contact number.";

    if (!formData.countryCode) return "Please select a country code.";
    return null;
  };

  // Form submission he
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      lookingFor: (event.currentTarget[0]).value,
      planningToBuy: (event.currentTarget[1]).value,
      email: (event.currentTarget[2]).value,
      name: (event.currentTarget[3]).value,
      contactNumber: (event.currentTarget[5]).value,
      countryCode: (event.currentTarget[4]).value,
      timestamp: Timestamp.now(),
      readableTimestamp: new Date().toLocaleString(),
    };

    const validationError = validateFormData(formData);
    if (validationError) {
      alert("Validation Error: " + validationError);
      return;
    } else {
      // console.log("Form Data:", formData);
      setSelectedInsurance(null);
      setIsQuoteSubmitted(false);
      setIsFormVisible(false);

    }

    try {
      const response = await fetch(`${API_BASE_URL}${SUBMIT_FORM_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setIsQuoteSubmitted(true);
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed:"+ result.message);
      }
    } catch (error) {
      alert("Form submission error:"+error);
    }
  };

  // .........................
  return (
    <div className="text-[1rem] md:text-[0.8rem] flex flex-col justify-center items-center relative">
      <div className="text-2xl md:text-5xl text-center mt-20 md:mt-30 mb-10 md:mb-20 mx-1">
        <p className="font-semibold inline text-gray-800">Compare & Buy</p> from Canada's
        <p>Top Insurers and Save BIG</p>
      </div>
      <>
        <img
          src="/Home/img1.png"
          alt="img"
          className="absolute left-0 bottom-80 md:bottom-20 h-32 md:h-[50vh]"
        />
        <img
          src="/backgroundBoy.png"
          alt="img"
          className="absolute right-0 bottom-20 hidden md:block h-[50vh]"
        />
      </>
      <div className="optionContainer z-20">
        {!isFormVisible}
      </div>

      <div className="w-[90%] md:w-[55%] z-30 min-h-[50vh] p-5 md:p-10 shadow-xl rounded-2xl relative bg-white flex flex-col items-center gap-5 md:gap-10">
        {!isFormVisible && (
          <>
            <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5">
              {["Life", "Travel", "Auto", "Commercial"].map((type) => (
                <div
                  key={type}
                  onClick={() => handleSelectInsurance(type)}
                  className={`bg-white h-28 w-full border-2 border-gray-200 rounded-lg p-2 flex flex-col cursor-pointer transition-colors duration-400 ease-in-out hover:bg-[#c3f2ff] ${selectedInsurance === type ? "border-cyan-400" : ""
                    }`}
                >
                  <p className="font-semibold">{type}</p>
                  <p>Insurance</p>
                  <div className="self-end">
                    <img
                      src={`/${type}.png`}
                      alt={type}
                      className="h-10 md:h-16"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              onClick={handleGetQuoteClick}
              className="homeButton p-2 md:p-3 border-2 border-gray-300 hover:border-white hover:bg-cyan-400 hover:text-white inline font-bold cursor-pointer w-2/3 md:w-1/3 text-center rounded-full text-sm text-cyan-400 transition-colors duration-300 ease-in-out"
            >
              GET A FREE QUOTE
            </div>
            <div className="text-sm md:text-2xl mx-5 text-[#7F7F7F] text-center" id="ca">
              Canada's fast-growing travel and life insurance broker
            </div>
          </>
        )}

        {isFormVisible && !isQuoteSubmitted && (
          <div className="w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg md:text-xl font-bold">
                Help us with a few details
              </h2>
              <button
                onClick={handleCloseForm}
                className="text-white bg-black w-8 h-8 flex items-center justify-center rounded"
              >
                ✖
              </button>
            </div>
            <form className="space-y-4 bg-white" onSubmit={handleSubmit}>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:flex-1">
                  <label className="block font-semibold">Looking for</label>
                  <select
                    className="border rounded px-3 py-2 w-full"
                    defaultValue={selectedInsurance}
                  >
                    {["Life", "Travel", "Auto", "Commercial"].map((type) => (
                      <option key={type} value={type}>
                        {type} Insurance
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:flex-1">
                  <label className="block font-semibold">Planning to buy</label>
                  <select className="border rounded px-3 py-2 w-full">
                    <option>1-2 Weeks</option>
                    <option>2-4 Weeks</option>
                    <option>1 Month</option>
                  </select>
                </div>
                <div className="w-full md:flex-1">
                  <label className="block font-semibold">Email address</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="border rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:flex-1">
                  <label className="block font-semibold">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="border rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="w-full md:flex-1">
                  <label className="block font-semibold">
                    Contact number <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center gap-2 rounded-full border-2 border-gray-300 p-2">
                    <select className="bg-white focus:outline-none" defaultValue="+40">
                      <option value="+91">+91</option>
                      <option value="+40">+40</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Contact number"
                      className="flex-1 focus:outline-none focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-64 mx-auto bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-full mt-4 block transition-colors duration-300 ease-in-out font-semibold">
                GET A FREE QUOTE
              </button>
              <p className="text-sm text-center text-gray-500 mt-4">
                By continuing, you agree to our <span className="underline">Terms of Service</span> and{" "}
                <span>Privacy Policy</span>.
              </p>
              <p className="text-xs text-center text-gray-400">
                Your data is secured with us. We do not share your data with anyone except our insurance partners.
              </p>
            </form>
          </div>
        )}
      </div>

      {isQuoteSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bg-white p-4 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[55%] z-50">
            <div className="flex flex-col items-center h-full">
              <div className="flex justify-between items-center w-full mb-0">
                <button
                  onClick={handleCloseForm}
                  className="text-white bg-black w-8 h-8 flex items-center justify-center rounded"
                >
                  ✖
                </button>
              </div>
              <img src="/thankyou.png" alt="Thank You Image" className="w-20 h-28 mb-0" />
              <h2 className="text-lg md:text-2xl font-bold">Thank you!</h2>
              <p className="text-center mt-0">
                We’ve sent your personalized quote to your inbox.
              </p>
              <button
                onClick={handleCloseForm}
                className="mt-4 text-cyan-400 border-2 border-cyan-400 text-xs font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full"
              >
                CHECK OTHER QUOTES
              </button>
              <p className="text-xs md:text-sm text-center text-gray-400 mt-4 flex gap-1">
                <img src="/Home/img27.png" alt="Data Security" className="max-w-[20px] h-auto" />
                Your data is secured with us. We do not share your data with anyone except our insurance partners.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Component1;
