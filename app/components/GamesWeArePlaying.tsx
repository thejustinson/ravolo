import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Game {
  name: string;
  image: string;
  description: string;
  link: string;
}


const games: Game[] = [
  {
    name: "Pup Pup",
    image: "/games-we-are-playing/pup-pup.png",
    description:
      "Experience a heartwarming adventure as you guide a lost puppy through a vibrant world filled with friendly characters and challenging puzzles. Explore charming towns, discover hidden treasures, and make new furry friends along the way!",
    link: "#",
  },
  {
    name: "Pup Pup",
    image: "/games-we-are-playing/pup-pup.png",
    description:
      "Experience a heartwarming adventure as you guide a lost puppy through a vibrant world filled with friendly characters and challenging puzzles. Explore charming towns, discover hidden treasures, and make new furry friends along the way!",
    link: "#",
  },
  {
    name: "Pup Pup",
    image: "/games-we-are-playing/pup-pup.png",
    description:
      "Experience a heartwarming adventure as you guide a lost puppy through a vibrant world filled with friendly characters and challenging puzzles. Explore charming towns, discover hidden treasures, and make new furry friends along the way!",
    link: "#",
  },
];

const GameCard: React.FC<Game> = ({ name, image, description, link }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="border-2 border-main-green p-4 rounded-lg flex items-center group hover:bg-main-green hover:bg-opacity-10 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-lg"
      />
      <div className="ml-5 space-y-2">
        <p className="text-lg font-bold group-hover:text-main-green transition duration-300">
          {name}
        </p>
        <p className="text-sm text-neutral-400 line-clamp-3">{description}</p>
        <motion.a
          href={link}
          className="bg-main-green text-dark-green px-4 py-1 rounded-full text-sm inline-block hover:bg-opacity-80 transition duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Play Now
        </motion.a>
      </div>
    </motion.div>
  );
};

const GamesWeArePlaying: React.FC = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-20">
      <motion.div
        className="border-y border-dark-green py-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          ref={titleRef}
          className="text-3xl sm:text-4xl text-center font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Games We Are Playing
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard key={`${game.name}-${index}`} {...game} />
          ))}
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href=""
            className="bg-main-green text-dark-green px-4 py-2 rounded-full active:scale-75 duration-200 hover:opacity-60"
          >
            See more
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GamesWeArePlaying;
