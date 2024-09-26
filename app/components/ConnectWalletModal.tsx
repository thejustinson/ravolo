"use client";
import { useState, useEffect } from 'react';
import { RiArrowLeftLine } from "@remixicon/react";
import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';

interface ConnectWalletModalOptions {
    ConnectWalletModalIsOpen: boolean;
    setConnectWalletModalIsOpen: (ConnectWalletModalIsOpen: boolean) => void;
}

const ConnectWalletModal = ({ ConnectWalletModalIsOpen, setConnectWalletModalIsOpen }: ConnectWalletModalOptions) => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async (walletName: 'Phantom' | 'Solflare') => {
    let wallet;
    if (walletName === 'Phantom') {
      wallet = new PhantomWalletAdapter();
    } else {
      wallet = new SolflareWalletAdapter();
    }

    try {
      await wallet.connect();
      const publicKey = wallet.publicKey;
      if (publicKey) {
        setWalletAddress(publicKey.toString());
        localStorage.setItem('walletAddress', publicKey.toString())
        router.push('/developer/dashboard');
      }
    } catch (error) {
      console.error(`Error connecting to ${walletName}:`, error);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      setConnectWalletModalIsOpen(false);
    }
  }, [walletAddress, setConnectWalletModalIsOpen]);

  return (
    <AnimatePresence>
      {ConnectWalletModalIsOpen && (
        <m.div
          className="fixed top-0 left-0 w-screen h-screen bg-neutral-900 z-[999] px-5 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-5 left-5 md:top-10 md:left-10">
            <RiArrowLeftLine onClick={() => setConnectWalletModalIsOpen(false)} />
          </div>
          <m.div className="w-full flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2 w-full md:w-[500px]">Select your wallet</h2>
            <m.div
              className="border rounded-md border-neutral-700 p-5 md:px-10 w-full md:w-[500px]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <div className="flex flex-col gap-y-2">
                <h3 className="text-sm font-semibold mb-3">Recommended</h3>
                <RecommendedWallet image="/Solflare.png" walletName="Solflare" onConnect={() => connectWallet('Solflare')} />
                <RecommendedWallet image="/Phantom.png" walletName="Phantom" onConnect={() => connectWallet('Phantom')} />
              </div>
            </m.div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectWalletModal;

interface RecommendedWalletOption {
  image: string;
  walletName: string;
  onConnect: () => void;
}

const RecommendedWallet = ({ image, walletName, onConnect }: RecommendedWalletOption) => {
  return (
    <button 
      className="flex w-full rounded-md gap-3 items-center p-2 border border-neutral-700 active:scale-90 duration-200"
      onClick={onConnect}
    >
      <Image
        src={image}
        alt={walletName}
        width={40}
        height={40}
        className="rounded"
      />
      <span className="font-semibold">{walletName}</span>
    </button>
  );
};