"use client";

import EasyToUse from "./components/EasyToUse";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GamesWeArePlaying from "./components/GamesWeArePlaying";
import Hero from "./components/Hero";
import HomeNav from "./components/HomeNav";
import ThreeSteps from "./components/ThreeSteps";

const Home = () => {
  return (
    <>
      <HomeNav />
      <Hero />
      <Features />
      <GamesWeArePlaying />
      <EasyToUse />
      <ThreeSteps />
      <Footer/>
    </>
  );
};

export default Home;
