import "./globals.css";

import { Inter as Font } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased scroll-smooth selection:bg-orange-100 dark:selection:bg-orange-600/50 p-6 sm:p-12 lg:p-24`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-2xl mx-auto space-y-12">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
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
        <a href="https://github.com/brijr">GitHub</a>
        <a href="https://x.com/bridgertower">Twitter</a>
      </div>
    </nav>
  );
};
