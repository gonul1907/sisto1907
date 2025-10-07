"use client"

import { useState } from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#b59f7a" />
        <path d="M6 15L10 9L14 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-semibold">Sisto Realisatie</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-transparent py-4 border-b border-black/[.06]">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
        <Logo />

        <div className="hidden sm:flex items-center gap-3">
          <Link href="/" className="px-4 py-2 rounded-full bg-[var(--accent)] text-white hover:opacity-95">Home</Link>
          <Link href="/diensten" className="px-4 py-2 rounded-full bg-white border border-black/[.06] hover:shadow-sm">Diensten</Link>
          <Link href="/wie-zijn-wij" className="px-4 py-2 rounded-full bg-white border border-black/[.06] hover:shadow-sm">Wie zijn wij</Link>
          <Link href="/contact" className="px-4 py-2 rounded-full bg-[var(--accent)] text-white hover:opacity-95">Contact</Link>
        </div>

        <div className="sm:hidden">
          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded bg-[var(--accent)] text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`sm:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="px-4 pt-4 pb-6 flex flex-col gap-2">
          <Link href="/" className="block px-4 py-2 rounded-full text-center bg-[var(--accent)] text-white">Home</Link>
          <Link href="/diensten" className="block px-4 py-2 rounded-full text-center bg-white border border-black/[.06]">Diensten</Link>
          <Link href="/wie-zijn-wij" className="block px-4 py-2 rounded-full text-center bg-white border border-black/[.06]">Wie zijn wij</Link>
          <Link href="/contact" className="block px-4 py-2 rounded-full text-center bg-[var(--accent)] text-white">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
