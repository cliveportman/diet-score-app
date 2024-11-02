import type { Metadata } from "next";
import Head from 'next/head'

// Inter font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Image from "next/image";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Way of the Goat",
  description: "Diet scoring app for endurance athletes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
    <Head>
      <link
          rel="icon"
          href="/icon.svg"
          type="image/svg+xml"
          sizes="any"
      />
    </Head>
    <body className="antialiased bg-slate-950 text-slate-100">
    <header className="flex-col items-center max-w-[800px] mx-auto my-12">
        <Image
            className="dark:invert block w-28 h-28 sm:w-60 sm:h-60 mx-auto mb-6"
            src="/images/goat-moon.svg"
            alt="Way of the Goat logo"
            width={100}
            height={100}
            priority
        />
      <h1 className="text-4xl sm:text-7xl font-bold text-slate-100 text-center mb-1.5 sm:mb-12">Way of the Goat</h1>
    </header>
    <main className="flex flex-col">
        {children}
    </main>
    </body>
    </html>
  );
}
