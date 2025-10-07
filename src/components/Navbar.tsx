"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.svg 
        width="36" 
        height="36" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
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
      </motion.svg>
      <div>
        <span className="text-xl font-bold text-[var(--accent)]">SISTO REALISATIE</span>
        <div className="text-sm text-gray-600 bg-white px-2 py-1 rounded shadow-sm">Bouw, verbouw & renovatie</div>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="w-full bg-white shadow-lg border-b-2 border-[var(--accent)] px-0 sm:px-0">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4 py-2">
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
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sm:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="mx-4 mt-4 mb-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-black/5"
              initial={{ y: -10, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
