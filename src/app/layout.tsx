import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Sisto Realisatie',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <div className="min-h-screen bg-beige flex flex-col items-center">
          <Navbar />
          <main className="w-full max-w-3xl px-6 py-12">{children}</main>
        </div>
      </body>
    </html>
  )
}
