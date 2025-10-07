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
          <main className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
