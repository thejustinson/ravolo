import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroGameIconsProps {
  image: string;
  position: string;
  delay?: number;
}

const HeroGameIcons: React.FC<HeroGameIconsProps> = ({ image, position, delay = 0 }) => {
  return (
    <motion.div
      className={`absolute ${position}`}
      initial={{ y: 0 }}
      animate={{ y: [-3, 3, -3] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <Image
        src={image}
        alt='Game Icon'
        width={100}
        height={100}
        className="w-[80px] sm:w-[100px] md:w-[130px]"
      />
    </motion.div>
  );
};

export default HeroGameIcons;