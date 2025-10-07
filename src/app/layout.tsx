import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Sisto Realisatie',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <div className="min-h-screen bg-beige flex flex-col items-center">
          <Navbar />
          {/* wider max width so pages feel less cramped */}
          <main className="w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
