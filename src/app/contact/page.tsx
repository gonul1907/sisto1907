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
    <div className="w-full">
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-6">Vul het formulier in of bel ons direct voor een afspraak of vrijblijvende offerte.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium">Naam</label>
          <input value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" placeholder="Jouw naam" />
        </div>

        <div>
          <label className="block text-sm font-medium">E-mail of telefoon</label>
          <input value={contact} onChange={e => setContact(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" placeholder="E-mail of telefoon" />
        </div>

        <div>
          <label className="block text-sm font-medium">Bericht</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} className="mt-1 block w-full border rounded px-3 py-2" rows={4} placeholder="Wat kunnen we voor je doen?"></textarea>
        </div>

        <button type="submit" disabled={status === 'sending'} className="inline-block px-4 py-2 rounded bg-beige-500 text-white">{status === 'sending' ? 'Verzenden...' : 'Verstuur'}</button>

        {status === 'sent' && <p className="text-green-600">Bedankt, je bericht is verzonden.</p>}
        {status === 'error' && <p className="text-red-600">Er ging iets mis, probeer het later opnieuw.</p>}
        </form>
      </div>
    </div>
  )
}
