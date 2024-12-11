import '../globals.css'

import { Inter as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Section, Container } from '@/components/craft'
import { SocialLinks } from '@/components/site/social-links'

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
      <body className="min-h-screen font-light">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <nav className="flex gap-4 justify-between items-start uppercase">
          <div>
            <h1>Bridger Tower *</h1>
            <SocialLinks />
          </div>
          <h2 className="text-muted-foreground sr-only sm:not-sr-only">Designer / Engineer</h2>
        </nav>
      </Container>
    </Section>
  )
}

const Footer = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <footer className="text-muted-foreground flex gap-2 justify-between items-center">
          <p>
            © {pay.name}, 2025 / made at <a href="https://9d8.dev">9d8</a>
          </p>
          <ThemeToggle />
        </footer>
      </Container>
    </Section>
  )
}
