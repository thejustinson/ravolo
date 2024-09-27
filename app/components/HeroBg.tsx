import React from "react";
import HeroGameIcons from "./HeroGameIcons";
import { motion } from 'framer-motion';

const HeroBg: React.FC = () => {
  const desktopIcons = [
    { image: "/game-icons/game-icon-1.png", position: "bottom-24 right-[calc(100vw/6)]", delay: 0 },
    { image: "/game-icons/game-icon-2.png", position: "bottom-10 right-[calc(100vw/2.6)]", delay: 0.5 },
    { image: "/game-icons/game-icon-b.png", position: "bottom-0 left-1/4", delay: 1 },
    { image: "/game-icons/game-icon-l.png", position: "bottom-40 left-[-10px] scale-90", delay: 1.5 },
    { image: "/game-icons/game-icon-r.png", position: "bottom-40 right-[-25px] scale-75", delay: 2 },
  ];

  const mobileIcons = [
    { image: "/game-icons/game-icon-l.png", position: "bottom-20 left-[-25px] scale-[0.8]", delay: 0 },
    { image: "/game-icons/game-icon-r.png", position: "bottom-[120px] right-[-40px] scale-[0.6]", delay: 0.5 },
    { image: "/game-icons/game-icon-b.png", position: "bottom-0 right-[-20px] z[-1]", delay: 1 },
    { image: "/game-icons/game-icon-2.png", position: "bottom-[-50px] left-[20px]", delay: 1.5 },
    { image: "/game-icons/game-icon-1.png", position: "bottom-24 right-1/3", delay: 2 },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="hidden md:block">
        {desktopIcons.map((icon, index) => (
          <HeroGameIcons key={index} {...icon} />
        ))}
      </div>
      <div className="md:hidden">
        {mobileIcons.map((icon, index) => (
          <HeroGameIcons key={index} {...icon} />
        ))}
      </div>
      <motion.div 
        className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-dark-green"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

export default HeroBg;