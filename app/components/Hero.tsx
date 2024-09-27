"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import HeroBg from './HeroBg';

const Hero = () => {
  return (
    <div className="py-16 sm:py-12 md:py-16 lg:py-20 px-10 h-[calc(100vh-60px)] lg:h-[calc(100vh-85px)] lg:px-20 relative">
      <div className="relative max-w-3xl mx-auto z-[5]">
        <motion.p 
          className="text-center mx-auto text-main-green bg-main-green py-1 px-3 rounded-full border border-main-green bg-opacity-20 text-xs sm:text-sm flex items-center gap-1 mb-5 max-w-fit"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Star size={16} /> Your Assets, Evolving Across All Worlds
        </motion.p>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock the Future of Gaming
        </motion.h1>
        <motion.p 
          className="text-center text-xs sm:text-sm md:text-base mt-5 max-w-2xl mx-auto text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The future of interoperable gaming. Create and own assets that grow, evolve,
          and adapt with you across multiple worlds. Seamlessly transition
          between games with assets that reflect your journey and achievements.
        </motion.p>
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            className="bg-main-green text-dark-green font-bold py-2 px-6 rounded-lg hover:bg-opacity-60 transition duration-300 active:scale-75"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </div>

      <HeroBg/>
    </div>
  );
};

export default Hero;