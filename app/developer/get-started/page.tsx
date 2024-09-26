"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ConnectWalletModal from "../../components/ConnectWalletModal";

const Developer = () => {
  const [connectWalletModalIsOpen, setConnectWalletModalIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8">
      <motion.div 
        className="flex flex-col items-center gap-y-4 sm:gap-y-6 max-w-[90%] sm:max-w-[80%] md:max-w-[500px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          variants={itemVariants}
        >
          Join the Ravolo-tion
        </motion.h1>
        <motion.p 
          className="text-center text-xs sm:text-sm text-neutral-500"
          variants={itemVariants}
        >
          Create interesting and dynamic assets that evolve across multiple games. Seamlessly integrate cross-game economies, while players experience true asset ownership and progression.
        </motion.p>
        <motion.button 
          className="bg-main-green text-dark-green text-base sm:text-lg py-2 px-6 sm:px-10 rounded active:scale-90 duration-200 hover:bg-opacity-90 transition-all"
          onClick={() => setConnectWalletModalIsOpen(true)}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect Wallet
        </motion.button>
      </motion.div>
      <ConnectWalletModal
        ConnectWalletModalIsOpen={connectWalletModalIsOpen}
        setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
      />
    </div>
  );
};

export default Developer;