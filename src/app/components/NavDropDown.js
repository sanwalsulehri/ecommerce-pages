import React, { useState } from 'react';

const NavDropDown = () => {
  const [showSection, setShowSection] = useState(1); // State to manage which sections should be visible
  const [activeArrow, setActiveArrow] = useState(null); // State to track the active arrow

  const handleClick = (section) => {
    setShowSection(section); // Update the visible section when clicked
    setActiveArrow(section === activeArrow ? null : section); // Toggle the active arrow
  };

  return (
    <>
      <div className="flex w-full h-auto lg:h-screen bg-gray-50">
        {/* Section 1 */}
        <div
          className={`!w-full transition-all duration-500 ease-in-out ${showSection >= 1 ? 'opacity-100' : 'opacity-0'}`}
        >
          <ul className="space-y-2">
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(2)} // Click to show 2nd section
            >
              Stationery
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 2 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            {/* Adding 4 more links in Section 1 */}
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>

            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>


            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>


            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div
          className={`!w-full transition-all duration-500 ease-in-out ${showSection >= 2 ? 'opacity-100 w-1/4' : 'opacity-0 w-0'}`}
        >
          <div className="flex items-center justify-between p-4 mb-4 gap-2 flex-wrap">
            <h2 className="font-semibold text-lg text-gray-700">Office Supplies</h2>
            <a href="#" className="text-[12px] underline text-[#0067C7]">
              All Office Supplies
            </a>
          </div>
          <ul className="space-y-2">
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(4)} // Click to show 4th section
            >
              Files / Folders
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 4 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            {/* Adding 5 more links in Section 2 */}
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div
          className={`!w-full transition-all duration-500 ease-in-out ${showSection >= 3 ? 'opacity-100 w-1/4' : 'opacity-0 w-0'}`}
        >
          <div className="flex items-center justify-between p-4 mb-4 gap-2 flex-wrap">
            <h2 className="font-semibold text-lg text-gray-700">Tapes</h2>
            <a href="#" className="text-[12px] underline text-[#0067C7]">
              All Tapes
            </a>
          </div>
          <ul className="space-y-2">
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(5)} // Click to show 5th section
            >
              Packing Tapes
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 5 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
            <li
              className="flex justify-between items-center text-gray-700 py-2 px-6 hover:bg-[#F3F9FF] cursor-pointer hover:font-bold group"
              onClick={() => handleClick(3)} // Click to show 3rd section
            >
              Kitchen Essentials
              <svg
                className={`h-auto w-4 group-hover:left-3 relative shrink-0 transform transition-transform duration-300 ${activeArrow === 3 ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10 17l5-5l-5-5"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className={`!w-full transition-all duration-500 ease-in-out`}>
          <img
            src="https://images.unsplash.com/photo-1558713089-d1aad46c19bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fancy Cards"
            className="mx-auto mb-4 rounded"
          />
          <p className="text-[24px] lg:text-[31px] font-bold mb-4 text-[#213550]">
            Fancy Cards For Fancy Occasions!
          </p>
          <button className="border border-[#213550] rounded-full font-semibold px-8 py-2 lg:px-12 lg:py-4">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default NavDropDown;
