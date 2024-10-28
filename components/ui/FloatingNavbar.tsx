"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="logo-bg"></div> {/* Add your logo styling */}
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Ishmam
          </span>
        </Link>

        {/* Buttons and menu toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="https://github.com" target="_blank">
            <button
              type="button"
              className="text-white bg-[#192dac] focus:outline-none font-medium rounded-2xl text-sm px-4 py-3 text-center border"
            >
              Github
            </button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="menu-toggle inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <IoMenu className="w-5 h-5" />
          </button>
        </div>

        {/* Links for desktop */}
        <div
          className={cn(
            "items-center pr-10 justify-between hidden w-full md:flex md:w-auto md:order-1",
            { hidden: !menuOpen } // Only show on mobile when toggled
          )}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2 mt-4 font-medium border border-gray-500 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-[#434343dd]">
            {navItems.map((navItem, idx) => (
              <li key={idx}>
                <Link
                  href={navItem.link}
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-[#192dac] md:hover:text-white md:text-white dark:hover:bg-[#192dac]"
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
