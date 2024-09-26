"use client"

import { RiSearch2Line, RiUserLine, RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 sm:py-6 lg:py-8 border-b border-b-neutral-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center gap-4 sm:gap-10">
            <div className="w-[30px] sm:w-[40px]">
              <Image
                src="/logo.png"
                alt="Ravolo Protocol"
                width={100}
                height={100}
                className="w-full"
              />
            </div>
          </div>

          {/* Desktop Search and Wallet */}
          <div className="hidden md:flex items-center gap-4 lg:gap-10">
            <div className="px-3 py-2 rounded bg-dark-green w-[200px] lg:w-[400px] flex items-center gap-x-2 text-neutral-500">
              <RiSearch2Line />
              <input
                type="text"
                className="bg-transparent w-full outline-none"
                placeholder="Search Games, Collections, Assets"
              />
            </div>
            <button className="py-2 px-3 lg:px-5 bg-main-green rounded text-dark-green flex gap-2 items-center active:scale-90 duration-200 text-sm lg:text-base">
              <RiUserLine />
              <span className="hidden lg:inline">{"WalletAddress"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-500 hover:text-neutral-300"
            >
              <RiMenuLine size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col gap-2 text-neutral-500">
              <li className="hover:text-neutral-300 cursor-pointer">My games</li>
              <li className="hover:text-neutral-300 cursor-pointer">Registry</li>
              <li className="hover:text-neutral-300 cursor-pointer">Analytics</li>
            </ul>
            <div className="mt-4 flex flex-col gap-4">
              <div className="px-3 py-2 rounded bg-neutral-800 flex items-center gap-x-2 text-neutral-500">
                <RiSearch2Line />
                <input
                  type="text"
                  className="bg-transparent w-full outline-none"
                  placeholder="Search Games, Collections, Assets"
                />
              </div>
              <button className="py-2 px-3 bg-main-green rounded text-dark-green flex gap-2 items-center justify-center active:scale-90 duration-200">
                <RiUserLine />
                <span>{"WalletAddress"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;