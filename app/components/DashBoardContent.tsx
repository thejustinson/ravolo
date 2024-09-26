"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  RiBarChartLine,
  RiBook2Line,
  RiCodeSSlashLine,
  RiFolderLine,
  RiGamepadLine,
  RiSettings3Line,
} from "@remixicon/react";

const DashBoardContent = () => {
  const menuItems = [
    "My Games",
    "Registry",
    "Analytics",
    "Ravolo SDK"
  ];

  const cardItems = [
    {
      icon: RiGamepadLine,
      title: "Create New Game",
      description: "Easily register your game on the Ravolo Protocol by filling in essential details such as the game name, description, and creating collections and assets."
    },
    {
      icon: RiFolderLine,
      title: "Manage Collections",
      description: "Create and organize collections of in-game assets. Customize collections to group assets by rarity, type, or any criteria, making it easier to manage evolving NFTs within your game."
    },
    {
      icon: RiSettings3Line,
      title: "Manage Assets",
      description: "View, create, and update your game's digital assets. Set evolving conditions, define asset metadata, and ensure cross-game compatibility."
    },
    {
      icon: RiBarChartLine,
      title: "View Analytics",
      description: "Track the evolution of assets, their usage across different players and games, and their impact on the game economy."
    },
    {
      icon: RiCodeSSlashLine,
      title: "Use the SDK",
      description: "Access our SDK and documentation to integrate evolving assets, player data tracking, and cross-game interoperability with minimal effort."
    },
    {
      icon: RiBook2Line,
      title: "The LNFT Standard",
      description: "Understand the criteria that allow assets to evolve, ensuring they maintain their value and utility across multiple games."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <motion.div 
        className="w-full md:w-[200px] md:h-[calc(100vh-100px)] border-b md:border-r border-neutral-600 py-5 shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-neutral-500 space-y-5 border-l border-neutral-600 py-5">
          {menuItems.map((item, index) => (
            <motion.li 
              key={index}
              className="hover:border-main-green hover:border-l-2 px-5 cursor-pointer"
              whileHover={{ x: 5, color: "#00ff00" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div className="p-5 md:p-10 w-full">
        <motion.div 
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-neutral-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cardItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-2 p-5 border-neutral-600 rounded-lg group hover:border-main-green duration-200 hover:bg-main-green hover:bg-opacity-10 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="group-hover:text-main-green" size={30} />
              <h3 className="text-lg font-bold mt-5">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoardContent;