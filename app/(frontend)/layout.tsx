import "../globals.css";

import { Inter as Font } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";

const font = Font({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bridger Tower / Design Engineer",
  description:
    "Product designer and software engineer exploring user interface design, applied artificial intelligence, and human computer interaction.",
  metadataBase: new URL("https://bridger.to"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-background text-foreground antialiased scroll-smooth p-6 sm:p-12 md:p-24`}
      >
        <main className="max-w-xl mx-auto space-y-12 sm:space-y-16">
          <Nav />
          {children}
          <Footer />
        </main>
        <Toaster position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className="fade-in-up flex gap-4 justify-between items-start">
      <Link href="/">
        <Image
          className="invert dark:invert-0 mb-8"
          src={Logo}
          alt="Bridger Tower Logo"
          width={36}
          height={29.31}
        />
      </Link>
      <div className="flex gap-3 text-sm">
        <a className="link" href="https://github.com/brijr">
          GitHub
        </a>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="mt-24 fade-in-up delay-footer sm:flex text-sm justify-between items-center">
      <div className="flex gap-3 flex-wrap">
        <a target="_blank" className="link" href="/x">
          X.com
        </a>
        <a target="_blank" className="link" href="/linkedin">
          LinkedIn
        </a>
        <a target="_blank" className="link" href="/youtube">
          YouTube
        </a>
        <a target="_blank" className="link" href="/resume">
          Resume
        </a>
      </div>
      <p className="sr-only sm:not-sr-only">&copy; 2025, Bridger Tower</p>
    </footer>
  );
};
