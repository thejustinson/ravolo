"use client";

import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 sm:px-6 lg:py-6 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
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

        <div className="hidden md:block">
          <ul className="flex gap-6">
            <a href="https://x.com/useravolo" target="_blank">
              <li className="hover:text-main-green cursor-pointer">
                Community
              </li>
            </a>
            <a
              href="#join-waitlist"
              className="hover:text-main-green cursor-pointer"
            >
              Join Waitlist
            </a>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <a href="https://x.com/useravolo" target="_blank">
              <li className="hover:text-main-green cursor-pointer">
                Community
              </li>
            </a>
            <a
              href="#join-waitlist"
              className="hover:text-main-green cursor-pointer"
            >
              Join Waitlist
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
