"use client"

import { useState } from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {/* Sisto Realisatie logo gebaseerd op de geüploade afbeelding */}
        <g transform="translate(20, 15)">
          {/* Huis vorm met overlappende lijnen */}
          <path d="M30 10 L45 25 L45 35 L40 35 L40 30 L35 30 L35 35 L30 35 L30 25 L15 25 L15 35 L10 35 L10 30 L5 30 L5 35 L0 35 L0 25 L15 10 L30 10 Z" fill="#D4A574" stroke="#B8935A" strokeWidth="1"/>
          <path d="M15 10 L30 25 L30 35 L25 35 L25 30 L20 30 L20 35 L15 35 L15 25 L0 25 L0 35" fill="none" stroke="#B8935A" strokeWidth="1.5"/>
          <path d="M0 25 L15 10 L30 25" fill="none" stroke="#B8935A" strokeWidth="2"/>
          
          {/* Extra architecturale lijnen */}
          <rect x="8" y="28" width="4" height="7" fill="#B8935A"/>
          <rect x="18" y="28" width="4" height="7" fill="#B8935A"/>
        </g>
      </svg>
      <div>
        <span className="text-xl font-bold text-[var(--accent)]">SISTO REALISATIE</span>
        <div className="text-sm text-gray-600 bg-white px-2 py-1 rounded shadow-sm">Bouw, verbouw & renovatie</div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-[var(--accent)] shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-[var(--accent)] hover:text-[var(--beige-200)] font-semibold text-lg transition-colors"
          >
            HOME
          </Link>
          
          <Link 
            href="/diensten" 
            className="text-[var(--accent)] hover:text-[var(--beige-200)] font-semibold text-lg transition-colors"
          >
            DIENSTEN
          </Link>

          <Link 
            href="/wie-zijn-wij" 
            className="text-[var(--accent)] hover:text-[var(--beige-200)] font-semibold text-lg transition-colors"
          >
            WIE ZIJN WIJ
          </Link>
          
          <Link 
            href="/contact" 
            className="text-[var(--accent)] hover:text-[var(--beige-200)] font-semibold text-lg transition-colors"
          >
            CONTACT
          </Link>
        </nav>

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
      <div className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mx-4 mt-4 mb-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-black/5">
          <nav className="p-4 space-y-3">
            <Link 
              href="/" 
              className="block px-4 py-3 rounded-lg text-center bg-[var(--accent)] text-white hover:opacity-90 transition-all duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/diensten" 
              className="block px-4 py-3 rounded-lg text-center bg-[var(--accent)] text-white hover:opacity-90 transition-all duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Diensten
            </Link>
            <Link 
              href="/wie-zijn-wij" 
              className="block px-4 py-3 rounded-lg text-center bg-[var(--accent)] text-white hover:opacity-90 transition-all duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Wie zijn wij
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 rounded-lg text-center bg-[var(--accent)] text-white hover:opacity-90 transition-all duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
