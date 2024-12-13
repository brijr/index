import '../globals.css'

import { pay } from 'site.config'
import type { Metadata } from 'next'

import { Inter as Font } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Section, Container } from '@/components/craft'

import Link from 'next/link'

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
      <a href="https://github.com/brijr" target="_blank">
        GitHub
      </a>
      <a href="https://x.com/bridgertower" target="_blank">
        X (Twitter)
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
