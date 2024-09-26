"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import NavBar from "../components/NavBar";
import { div } from "framer-motion/client";

const sidebar = [
  { title: "Introduction", href: "#introduction" },
  { title: "What Is the Living NFT Standard?", href: "#what-is-lnft" },
  { title: "Key Features", href: "#key-features" },
  { title: "Benefits", href: "#benefits" },
  { title: "The Future of NFTs", href: "#future" },
];

const DocumentationPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="flex relative h-[calc(100vh-100px)] overflow-y-hidden">
        {/* Fixed sidebar for larger screens */}
        <aside className="hidden md:block absolute left-0 top-0 bottom-0 w-64 bg-dark-green border-r border-r-neutral-600 overflow-y-auto">
          <nav className="mt-10">
            <ul>
              {sidebar.map((item) => (
                <li key={item.href} className="mb-2">
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Mobile sidebar */}
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: sidebarOpen ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg md:hidden"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <RiCloseLine size={24} />
            </button>
          </div>
          <nav className="mt-10">
            <ul>
              {sidebar.map((item) => (
                <li key={item.href} className="mb-2">
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>

        {/* Main content */}
        <main className="flex-1 md:ml-64 pt-10 p-8 overflow-y-scroll">
          <div className="max-w-3xl mx-auto">
            <div className="md:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-500 hover:text-gray-700"
              >
                <RiMenuLine size={24} />
              </button>
            </div>

            <h1 className="text-4xl font-bold mb-8">
              Introducing the Living NFT Standard: Revolutionizing Dynamic
              Digital Assets
            </h1>

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Introduction: The Evolution of NFTs
              </h2>
              <p className="mb-4">
                Non-Fungible Tokens (NFTs) have rapidly become a game-changer in
                the digital world. These unique assets have transformed how we
                think about ownership and value across art, gaming, and even
                real estate. However, NFTs in their current form are static —
                they are defined at creation and rarely change throughout their
                lifespan. But what if NFTs could evolve with time, experiences,
                and interactions?
              </p>
              <p>
                Welcome to the{" "}
                <strong>Living NFT Standard (LNFT Standard)</strong>, the next
                step in the evolution of digital assets. Created by the Ravolo
                Protocol, the LNFT Standard introduces a revolutionary concept
                of dynamic NFTs, assets that can grow, change, and evolve as
                players interact with them across multiple games and platforms.
              </p>
            </section>

            <section id="what-is-lnft" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                What Is the Living NFT Standard?
              </h2>
              <p className="mb-4">
                The <strong>Living NFT Standard</strong> (LNFT Standard) is a
                set of rules and criteria that defines how NFTs can evolve based
                on certain conditions and interactions. Unlike traditional NFTs,
                which remain static, Living NFTs are dynamic and have the
                ability to undergo transformations throughout their lifespan.
              </p>
              <p>
                This means that a digital asset, such as an in-game character or
                item, can improve its attributes, change its appearance, and
                become more valuable through various actions taken by its owner.
                Imagine owning a sword in a game that becomes stronger after
                defeating enemies, or a car in a racing game that upgrades
                itself after winning races. That's the power of Living NFTs.
              </p>
            </section>

            <section id="key-features" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Key Features of the Living NFT Standard
              </h2>
              <ol className="list-decimal list-inside space-y-8">
                <li>
                  <strong>Base Asset Metadata</strong>
                  <p className="mt-2">
                    Each Living NFT starts with a core set of attributes that
                    define the asset. These attributes could include
                    characteristics like strength, durability, or skill levels
                    for in-game items, or visual features for collectible items
                    like digital art.
                  </p>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                    <code>{`{
    "name": "Warrior's Shield",
    "symbol": "WSHIELD",
    "attributes": {
        "defense": 50,
        "durability": 70
    },
    "evolution_capacity": true
    }`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Evolution Criteria</strong>
                  <p className="mt-2">
                    The LNFT Standard introduces criteria for evolution, meaning
                    that assets evolve based on certain triggers or milestones.
                    These triggers can include in-game achievements, usage
                    milestones, or even the passage of time.
                  </p>
                  <p className="mt-2">Example criteria include:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                      <strong>Usage-based</strong>: The asset evolves after
                      being used in 100 games.
                    </li>
                    <li>
                      <strong>Achievement-based</strong>: The asset evolves
                      after the player reaches a certain level or wins a
                      specific number of battles.
                    </li>
                    <li>
                      <strong>Time-based</strong>: The asset evolves after a
                      certain period of ownership.
                    </li>
                  </ul>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                    <code>{`{
    "evolution_criteria": {
        "type": "usage_based",
        "condition": {
        "games_played": 100
        }
    }
    }`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Evolution Rules</strong>
                  <p className="mt-2">
                    The LNFT Standard also defines the rules for how assets
                    evolve:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>
                      <strong>Attribute Changes</strong>: Attributes such as
                      strength, speed, or rarity may increase as the asset
                      evolves.
                    </li>
                    <li>
                      <strong>Multiple Evolution Paths</strong>: Assets can
                      evolve along different paths, allowing for customization
                      and unique evolution outcomes.
                    </li>
                    <li>
                      <strong>Evolution Limits</strong>: Developers can set a
                      maximum number of evolutions for an asset or determine
                      specific resets during evolution.
                    </li>
                  </ul>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                    <code>{`{
    "evolution_rules": {
        "new_attributes": {
        "defense": 75,
        "durability": 90
        },
        "evolution_path": ["path_of_fire", "path_of_ice"],
        "max_evolutions": 5
    }
    }`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Cross-Game Compatibility</strong>
                  <p className="mt-2">
                    One of the standout features of the Living NFT Standard is
                    cross-game compatibility. Assets created under this standard
                    are not limited to a single game. They can carry their
                    attributes and evolutionary progress between games in the
                    Ravolo Protocol ecosystem.
                  </p>
                  <p className="mt-2">
                    For instance, a sword that levels up in one game might also
                    retain its enhanced strength in another game, allowing
                    players to transfer their progress across different
                    experiences.
                  </p>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                    <code>{`{
    "cross_game_attributes": {
        "global_strength": 85,
        "global_rarity": "legendary"
    },
    "game_specific_attributes": {
        "game_a": {
        "power_level": 20
        },
        "game_b": {
        "magic_skill": 50
        }
    }
    }`}</code>
                  </pre>
                </li>
                <li>
                  <strong>Asset History & Provenance</strong>
                  <p className="mt-2">
                    As an asset evolves, its history is tracked and recorded.
                    This history creates provenance, which can increase the
                    value of an asset over time, especially for rare or unique
                    evolutions.
                  </p>
                  <p className="mt-2">
                    Tracking evolution also adds transparency, so each change to
                    the asset's state is logged and visible to owners and
                    buyers, building trust and enhancing asset value.
                  </p>
                  <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                    <code>{`{
    "evolution_history": [
        {
        "from_state": {
            "defense": 50,
            "durability": 70
        },
        "to_state": {
            "defense": 75,
            "durability": 90
        },
        "timestamp": "2024-09-22T10:00:00Z",
        "trigger": "games_played_100"
        }
    ]
    }`}</code>
                  </pre>
                </li>
              </ol>
            </section>

            <section id="benefits" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of the Living NFT Standard
              </h2>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong>Increased Player Engagement</strong>
                  <p className="mt-2">
                    By allowing NFTs to evolve based on player interaction, the
                    LNFT Standard incentivizes players to stay engaged with a
                    game over a longer period. Players now have a reason to keep
                    playing to evolve their assets, whether for personal
                    enjoyment or potential profit.
                  </p>
                </li>
                <li>
                  <strong>Enhanced Asset Value</strong>
                  <p className="mt-2">
                    As assets evolve, they become more valuable, especially if
                    they unlock rare attributes or abilities. This dynamic
                    value-creation mechanism could significantly impact how
                    in-game economies work, adding new layers of rarity and
                    desirability.
                  </p>
                </li>
                <li>
                  <strong>Cross-Game Portability</strong>
                  <p className="mt-2">
                    With assets transferable between games, the LNFT Standard
                    encourages collaboration across games and developers. This
                    portability could form a larger interconnected ecosystem
                    where players' achievements and assets are relevant beyond
                    just one title.
                  </p>
                </li>
                <li>
                  <strong>New Revenue Models</strong>
                  <p className="mt-2">
                    Developers can create additional revenue streams by allowing
                    players to upgrade or evolve their NFTs via in-game
                    purchases or challenges. This opens up new possibilities for
                    monetization in both free-to-play and premium games.
                  </p>
                </li>
              </ol>
            </section>

            <section id="future" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">
                The Future of NFTs: A Dynamic, Interconnected World
              </h2>
              <p className="mb-4">
                The <strong>Living NFT Standard</strong> is just the beginning
                of how digital assets can become more than static
                representations of ownership. By introducing evolution, history,
                and cross-platform portability, Ravolo Protocol is taking a bold
                step towards building a richer, more immersive digital world
                where assets live, grow, and adapt with their users.
              </p>
              <p className="mb-4">
                The standard promises to revolutionize gaming economies, enhance
                player engagement, and create new opportunities for developers
                to build unique, evolving experiences. Whether you are a game
                developer, a player, or an investor, the Living NFT Standard
                marks a new era for NFTs — one where the value of your assets is
                not fixed but grows with you.
              </p>
              <p className="font-semibold mt-4">Are you ready to evolve?</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
