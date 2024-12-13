import '../globals.css'

import { Inter as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'
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
                <Header />
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

const Header = () => {
  return (
    <nav className="sm:flex gap-4 justify-between items-start">
      <div>
        <h1>Bridger Tower *</h1>
      </div>
      <h2 className="text-muted-foreground sr-only sm:not-sr-only">Designer / Engineer</h2>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="text-muted-foreground text-sm flex gap-2 justify-between items-center">
      <div>
        <p>bridger.to / </p>
        <p>designer</p>
      </div>
      <ThemeToggle />
    </footer>
  )
}
