import React, { useState } from "react";
import NavDropDown from "./NavDropDown"; // Importing your dropdown component
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white relative shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          {/* Dropdown Toggle */}
          <div className="">
            <button
              onClick={handleDropdownToggle}
              className="hover:underline focus:outline-none"
            >
              Dropdown
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md">
                <NavDropDown />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={handleDropdownToggle}
        >
          <span className="sr-only">Toggle Dropdown</span>
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isDropdownOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="p-4 space-y-2">
            <Link href="/about" className="block py-2 hover:underline">
              About
            </Link>
            <Link href="/services" className="block py-2 hover:underline">
              Services
            </Link>
            <div className="mt-2">
              <NavDropDown />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
