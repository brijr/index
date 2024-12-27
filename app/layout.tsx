import "./globals.css";

import { Inter as Font } from "next/font/google";
import type { Metadata } from "next";

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
        className={`${font.className} antialiased scroll-smooth selection:bg-indigo-100 dark:selection:bg-indigo-900`}
      >
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

const Nav = () => {
  return (
    <nav className="fade-in-up flex gap-4 justify-between items-start">
      <Link className="reset-link" href="/">
        <Image
          className="invert dark:invert-0 mb-8"
          src={Logo}
          alt="Bridger Tower Logo"
          width={36}
          height={29.31}
        />
      </Link>{" "}
      <div className="flex gap-2 text-muted-foreground text-sm">
        <a
          className="reset-link hover:text-foreground"
          href="https://github.com/brijr"
        >
          GitHub
        </a>
        <a
          className="reset-link hover:text-foreground"
          href="https://x.com/bridgertower"
        >
          X.com
        </a>
      </div>
    </nav>
  );
};
