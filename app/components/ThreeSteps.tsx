import React, { useRef } from "react";
import {
  RiDashboardLine,
  RiPlugLine,
  RiRocketLine,
} from "@remixicon/react";
import { motion, useInView } from "framer-motion";

interface OneStepProps {
  icon: React.ReactElement;
  bgIcon: React.ReactElement;
  title: string;
  text: string;
  index: number;
}

const OneStep: React.FC<OneStepProps> = ({
  icon,
  bgIcon,
  title,
  text,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden space-y-2 bg-dark-green p-5 rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute opacity-10 text-secondary-green font-extrabold -rotate-45 right-[-60px] bottom-[-60px]"
        initial={{ rotate: -90, scale: 0.5 }}
        animate={
          isInView ? { rotate: -45, scale: 1 } : { rotate: -45, scale: 0.5 }
        }
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {bgIcon}
      </motion.div>
      <motion.div
        className="relative text-secondary-green"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.2 + 0.1,
        }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="relative text-lg font-bold"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="relative text-neutral-400"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

const ThreeSteps: React.FC = () => {
  const steps: Omit<OneStepProps, "index">[] = [
    {
      icon: <RiPlugLine size={24} />,
      bgIcon: <RiPlugLine size={300} />,
      title: "Integrate the SDK",
      text: "Start by integrating the Ravolo SDK into your game. With minimal setup, you can introduce evolving assets that seamlessly transfer between games. Create a richer experience for your players without overhauling your existing infrastructure.",
    },
    {
      icon: <RiDashboardLine size={24} />,
      bgIcon: <RiDashboardLine size={300} />,
      title: "Manage Assets with the GUI",
      text: "Use our GUI to create and manage collections and assets effortlessly. Define evolution conditions, assign attributes, and set cross-game compatibility rules. Empower your players with assets that evolve based on gameplay milestones.",
    },
    {
      icon: <RiRocketLine size={24} />,
      bgIcon: <RiRocketLine size={300} />,
      title: "Launch Your Game with Player-Driven Assets",
      text: "Deploy assets that players truly own and evolve across games. Enhance engagement and loyalty with interoperable assets that grow with your players, enriching their gaming experience.",
    },
  ];

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <div className="px-4 sm:px-6 lg:px-20 pt-20 pb-10">
      <motion.h2
        ref={titleRef}
        className="text-3xl text-center md:text-left sm:text-4xl font-bold max-w-[450px] mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        3-Steps Away from Traditional Gaming
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <OneStep key={index} {...step} index={index} />
        ))}
      </div>

      <div className="border-y border-dark-green py-10 flex flex-col items-center justify-center mt-5 gap-5">
        <h1 className="text-4xl md:text-6xl text-center font-extrabold">Join the Future of Gaming</h1>
        <button className="bg-main-green text-dark-green font-bold py-2 px-6 rounded-lg hover:bg-opacity-60 transition duration-300 active:scale-75">
          Join the Waitlist
        </button>
      </div>

      <p className="text-center py-10">
        <a href="https://">Community</a>
      </p>
    </div>
  );
};

export default ThreeSteps;
