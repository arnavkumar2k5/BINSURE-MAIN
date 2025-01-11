import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#353535] text-white py-10 pt-20 px-5">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row justify-between sm:justify-center gap-16 sm:gap-[35rem]">
        <div className="mb-16 sm:mb-0 sm:text-left">
          <div className="mb-6">
            <img src="logo2.png" alt="logo" className="h-20 md:h-28 sm:mx-0" />
          </div>
          <p className="text-lg font-medium">P.O. Box 9999, Station B</p>
          <p className="text-lg font-medium">Montreal, ON M5M 3R4</p>
          <p className="mt-6 text-lg font-medium">999-888-0000</p>
          <p className="text-lg font-medium">care@b-insure.ca</p>
        </div>
        <div className="flex sm:flex-row sm:text-left justify-between">
          <div className="flex flex-col sm:mr-20 mb-8 sm:mb-0">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/site" className="hover:underline">
                  Sitemap
                </Link>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/lifeInsurance" className="hover:underline">
                  Insurance
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xl font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 ">
              <li>
                <Link to="/boiler" className="hover:underline">
                  Terms of use
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-t w-full sm:w-[70%] m-auto border-gray-700 mt-12 pt-8 text-center sm:text-start text-base text-white">
          Copyright © 2024 Inc. All rights reserved.
        </div>

        <div className="text-center mt-6">
          <button
            onClick={scrollToTop}
          >
            <img src="/top.png" alt="top" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
