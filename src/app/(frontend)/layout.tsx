import '../globals.css'

import { pay } from 'site.config'
import type { Metadata } from 'next'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

import { Inter as Font } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Section, Container } from '@/components/craft'

export const metadata: Metadata = {
  title: pay.title,
  description: pay.desc,
  metadataBase: new URL(pay.url),
}

const font = Font({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="min-h-screen font-light bg-accent selection:bg-indigo-100 dark:selection:bg-indigo-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Section>
              <Container className="space-y-12">
                <Nav />
                {children}
                <Footer />
              </Container>
            </Section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

const Nav = () => {
  return (
    <div className="sm:flex gap-4 justify-between items-start">
      <Link className="reset-link" href="/">
        <Image
          className="invert dark:invert-0 mb-8"
          src={Logo}
          alt="Bridger Tower Logo"
          width={48}
          height={39.09}
        />
      </Link>{' '}
      <div className="flex gap-2 text-muted-foreground text-sm">
        <a className="reset-link hover:text-foreground" href="https://github.com/brijr">
          GitHub
        </a>
        <a className="reset-link hover:text-foreground" href="https://x.com/bridgertower">
          Twitter
        </a>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="pt-24 text-muted-foreground text-sm flex gap-2 justify-between items-center">
      <Links />
      <ThemeToggle />
    </footer>
  )
}

const Links = () => {
  return (
    <div className="flex lowercase gap-2">
      <p>bridger.to</p>
      <p>/</p>
      <a href="https://youtube.com/@bridgertower" target="_blank">
        YouTube
      </a>
      <a href="https://linkedin.com/in/brijr" target="_blank">
        LinkedIn
      </a>
      <a href="https://resume.bridger.to" target="_blank">
        Resume
      </a>
      <a href="mailto:bridgertower@gmail.com">Email</a>
    </div>
  )
}
