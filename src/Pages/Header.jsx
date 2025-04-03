import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "./QuoteForm";

function Header() {
  const [selectedHeading, setSelectedHeading] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    individual: false,
    commercial: false,
    support: false,
  });

  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);  
        closeAllDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOpenQuoteForm = () => setIsQuoteOpen(true);
  const handleCloseQuoteForm = () => setIsQuoteOpen(false);

  const headingClick = (heading, e) => {
    if (e) e.preventDefault();
    setSelectedHeading(heading);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      individual: menu === "individual" ? !prevDropdowns.individual : false,
      commercial: menu === "commercial" ? !prevDropdowns.commercial : false,
      support: menu === "support" ? !prevDropdowns.support : false,
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({ individual: false, commercial: false, support: false });
  };

  const handleSubItemClick = (mainItem, subItem) => {
    // First close dropdowns and then navigate
    setDropdowns({ individual: false, commercial: false, support: false });
    setIsOpen(false);
    setSelectedHeading(mainItem.name);
    
    // Use setTimeout to ensure state updates before navigation
    setTimeout(() => {
      navigate(subItem.link);
    }, 10);
  };

  const navItems = [
    { name: "Home", navPage: "/" },
    {
      name: "Individual",
      subMenu: [
        { name: "Life", description: "Protect your loved ones", link: "/lifeInsurance" },
        { name: "Automobile", description: "Protect your vehicle", link: "/automobileinsurance" },
        { name: "Home", description: "Protect your dream home", link: "/homeinsurance" },
      ],
    },
    {
      name: "Commercial",
      subMenu: [
        { name: "Auto", description: "For your Fleet", link: "/auto" },
        { name: "General Liability", description: "Travel around the world care free", link: "/general" },
        { name: "Warehouse", description: "Protect your warehouse", link: "/warehouse" },
        { name: "Restaurants", description: "Protect your food business", link: "/restaurantinsurance" },
      ],
    },
    { name: "Travel", navPage: "/travel" },
    {
      name: "Support",
      subMenu: [
        { name: "Contact us", description: "We've got your back", link: "/contact" },
        { name: "About us", description: "Why you matter", link: "/about" },
        { name: "How it works", description: "How we do things", link: "/how" },
        { name: "FAQs", description: "General topics", link: "/faq" },
        { name: "Blog", description: "Insurance Knowledge Resource", link: "/blog" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm" ref={headerRef}>
      <nav className="flex justify-between md:justify-center items-center p-2 w-full">
        <div className="md:w-1/3 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-12 md:h-[3rem] md:pl-[100px]" />
          <p id="bi">B-Insure</p>
        </div>
          <img
            src="hamburger.png"
            alt="menu"
            className="h-8 w-8 cursor-pointer md:hidden"
            onClick={toggleMenu}
          />
        </div>

        <div
          ref={menuRef}  
          className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-40 p-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="text-lg font-semibold">
                <div
                  onClick={(e) => {
                    if (item.subMenu) {
                      toggleDropdown(item.name.toLowerCase());
                    } else {
                      closeAllDropdowns();
                      setIsOpen(false);
                      headingClick(item.name, e);
                      navigate(item.navPage);
                    }
                  }}
                >
                  {item.name}
                </div>
                {item.subMenu && dropdowns[item.name.toLowerCase()] && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.subMenu.map((subItem) => (
                      <div
                        key={subItem.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubItemClick(item, subItem);
                        }}
                        className="cursor-pointer text-gray-600 hover:text-gray-800"
                      >
                        <strong>{subItem.name}</strong>
                        <p className="text-sm">{subItem.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li
              className="bg-[#24BBE3] hover:bg-cyan-400 text-white p-3 rounded-xl text-center cursor-pointer"
              onClick={() => {
                headingClick("Get a Quote");
                handleOpenQuoteForm();
                toggleMenu();
              }}
            >
              Get a Quote
            </li>
            <li>
              <img src="find.png" alt="search" className="h-10" />
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:w-2/3 justify-center items-center gap-5">
          <ul className="flex gap-10 items-center text-sm">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="text-sm relative hidden md:flex hover:text-gray-500"
                onClick={(e) => {
                  if (item.subMenu) {
                    e.preventDefault();
                    e.stopPropagation();
                    headingClick(item.name, e);
                    toggleDropdown(item.name.toLowerCase());
                  } else {
                    headingClick(item.name, e);
                    closeAllDropdowns();
                    navigate(item.navPage);
                  }
                }}
              >
                <div className={`cursor-pointer ${selectedHeading === item.name ? "font-semibold" : ""}`}>
                  {item.name}
                </div>
                {selectedHeading === item.name && (
                  <div className="absolute h-[3px] bg-blue-500 w-full bottom-[-23px] left-0"></div>
                )}
                {item.subMenu && dropdowns[item.name.toLowerCase()] && (
                  <div 
                    className="z-50 absolute top-[3rem] w-[13vw] left-0 bg-white shadow-lg p-4 rounded-lg cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSubItemClick(item, subItem);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <strong>{subItem.name}</strong>
                        <p className="text-sm text-gray-500">{subItem.description}</p>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li
              className="hidden md:block bg-[#24BBE3] hover:bg-cyan-400 text-white p-3 pl-7 rounded-xl cursor-pointer"
              onClick={() => {
                headingClick("Get a Quote");
                handleOpenQuoteForm();
              }}
            >
              Get a Quote
            </li>
            <li>
              <img src="find.png" alt="search" className="h-5 border-l-2 pl-2" />
            </li>
          </ul>
        </div>
      </nav>
      {isQuoteOpen && <QuoteForm onClose={handleCloseQuoteForm} />}
    </header>
  );
}

export default Header;