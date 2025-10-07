"use client"

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<null | 'idle' | 'sending' | 'sent' | 'error'>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !contact || !message) return alert('Vul alle velden in')
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      })
      if (!res.ok) throw new Error('Network error')
      setStatus('sent')
      setName('')
      setContact('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <main className="w-full min-h-screen flex justify-center py-4">
      <section className="w-full max-w-2xl bg-white min-h-[85vh] p-8 sm:p-12 mx-4 sm:mx-0 shadow-lg">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="mb-8 text-base sm:text-lg leading-relaxed">
              Vul het formulier in of bel ons direct voor een afspraak of vrijblijvende offerte.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto text-left">
            <div>
              <label className="block text-sm font-medium mb-2">Naam</label>
              <input 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className="w-full border border-[var(--beige-200)] rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none" 
                placeholder="Jouw naam" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail of telefoon</label>
              <input 
                value={contact} 
                onChange={e => setContact(e.target.value)} 
                className="w-full border border-[var(--beige-200)] rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none" 
                placeholder="E-mail of telefoon" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bericht</label>
              <textarea 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                className="w-full border border-[var(--beige-200)] rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none" 
                rows={5} 
                placeholder="Wat kunnen we voor je doen?"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit" 
                disabled={status === 'sending'} 
                className="px-8 py-4 rounded-lg bg-[var(--accent)] text-white font-semibold hover:brightness-95 transition-all"
              >
                {status === 'sending' ? 'Verzenden...' : 'Verstuur'}
              </button>
            </div>

            {status === 'sent' && (
              <p className="text-green-600 text-center">Bedankt, je bericht is verzonden.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Er ging iets mis, probeer het later opnieuw.</p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
