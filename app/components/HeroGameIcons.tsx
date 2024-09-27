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
      animate={{ y: [-5, 5, -5] }}
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
        width={150}
        height={150}
        className="w-[130px]"
      />
    </motion.div>
  );
};

export default HeroGameIcons;