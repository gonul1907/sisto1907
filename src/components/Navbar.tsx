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
    <Link href="/" className="px-3 py-1 rounded-full bg-[var(--accent)] text-white !text-white hover:opacity-95 flex items-center gap-3 text-sm mx-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" fill="white"/></svg>Home</Link>
    <Link href="/diensten" className="px-3 py-1 rounded-full bg-[var(--accent)] text-white !text-white hover:opacity-95 flex items-center gap-3 text-sm mx-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Diensten</Link>
    <Link href="/wie-zijn-wij" className="px-3 py-1 rounded-full bg-[var(--accent)] text-white !text-white hover:opacity-95 flex items-center gap-3 text-sm mx-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.2"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Wie zijn wij</Link>
    <Link href="/contact" className="px-3 py-1 rounded-full bg-[var(--accent)] text-white !text-white hover:opacity-95 flex items-center gap-3 text-sm mx-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Contact</Link>
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
      <div className={`sm:hidden transition-max-height overflow-hidden ${open ? 'menu-open' : 'menu-closed'}`}>
        <nav className="px-4 pt-4 pb-6 flex flex-col gap-3">
          <Link href="/" className="block px-4 py-3 rounded-full text-center bg-[var(--accent)] text-white flex items-center justify-center gap-2 text-white">Home</Link>
          <Link href="/diensten" className="block px-4 py-3 rounded-full text-center bg-[var(--accent)] text-white flex items-center justify-center text-white">Diensten</Link>
          <Link href="/wie-zijn-wij" className="block px-4 py-3 rounded-full text-center bg-[var(--accent)] text-white flex items-center justify-center text-white">Wie zijn wij</Link>
          <Link href="/contact" className="block px-4 py-3 rounded-full text-center bg-[var(--accent)] text-white flex items-center justify-center text-white">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
