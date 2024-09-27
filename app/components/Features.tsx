import React from "react";
import {
  RiCodeSSlashLine,
  RiCurrencyLine,
  RiDashboardLine,
  RiLinksLine,
  RiShape2Line,
  RiUserStarLine,
} from "@remixicon/react";

interface FeatureProps {
  index: number;
  icon: React.ReactElement;
  title: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ index, icon, title, text }) => {
  return (
    <div
      className={`
        space-y-2 px-5 py-10 border-dark-green border-t
        ${index == 1 ? "lg:border-r lg:border-b lg:border-t-0" : ""} 
        ${index == 2 ? "lg:border-x lg:border-b lg:border-t-0" : ""}
        ${index == 3 ? "lg:border-l lg:border-b lg:border-t-0" : ""} 
        ${index == 4 ? "lg:border-r" : ""} 
        ${index == 5 ? "lg:border-x" : ""}
        ${index == 6 ? "lg:border-l" : ""} 
      `}
    >
      <div className="">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-neutral-400">{text}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const featureItems = [
    {
      icon: <RiLinksLine size={24} className="text-secondary-green" />,
      title: "Cross-Game Compatibility",
      text: "Break the boundaries between games. Ravolo enables assets to move seamlessly across titles, unlocking new gameplay possibilities and a shared experience.",
    },

    {
      icon: <RiShape2Line size={24} className="text-secondary-green" />,
      title: "Evolving Digital Assets",
      text: "Your in-game assets aren't static. With Ravolo, assets evolve as you progress, carrying your achievements and experiences across multiple games, allowing for dynamic and personalized growth",
    },

    {
      icon: <RiCurrencyLine size={24} className="text-secondary-green" />,
      title: "In-Game Economy Tools",
      text: "Build dynamic economies within and across your games. Ravolo offers powerful tools for creating interconnected, monetizable assets that enhance player retention and engagement.",
    },
    {
      icon: <RiDashboardLine size={24} className="text-secondary-green" />,
      title: "Ravolo GUI",
      text: "Easily create, manage, and evolve your in-game collections and assets with Ravolo's intuitive GUI. Whether you're building from scratch or managing existing assets, our interface simplifies the process of asset creation, evolution, and cross-game compatibility.",
    },
    {
      icon: <RiCodeSSlashLine size={24} className="text-secondary-green" />,
      title: "Ravolo SDK for Developers",
      text: "Equip yourself with the tools to seamlessly integrate evolving, cross-platform assets into your game. Ravolo's SDK enables cutting-edge asset interoperability, giving developers the power to create dynamic and immersive experiences for players.",
    },
    {
      icon: <RiUserStarLine size={24} className="text-secondary-green" />,
      title: "Player Empowerment",
      text: "Ravolo puts players in control. Own your assets, transfer them between worlds, and let your in-game progression continue regardless of the game you play next.",
    },
  ];

  return (
    <div className="py-20 px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold max-w-[450px] mb-12">
        Dynamic Cross-Game NFT Experiences
      </h2>
      <div className="grid div grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureItems.map((featureItem, index) => (
          <Feature
            key={index}
            index={index + 1}
            icon={featureItem.icon}
            title={featureItem.title}
            text={featureItem.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
