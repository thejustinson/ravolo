import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Ravolo Protocol",
  description: "Ravolo Protocol is a decentralized platform that revolutionizes the gaming industry by enabling the creation, management, and monetization of evolving digital assets transferable across multiple games and platforms. Built on blockchain technology, Ravolo introduces an era of interoperable gaming experiences where players' progress, assets, and achievements transcend individual game boundaries.",
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
