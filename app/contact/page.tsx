export default function Contact() {
  return (
    <section className="card p-8 rounded">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p>Bel of mail ons voor een vrijblijvende offerte.</p>
      <ul className="mt-4">
        <li>Tel: 06-12345678</li>
        <li>Email: info@sistorealisatie.nl</li>
      </ul>
    </section>
  )
}
import React from 'react';

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-xl text-center" style={{ color: '#736635' }}>
  Wil je weten wat jouw klus gaat kosten? Neem contact op via <a href="mailto:sistorealisatie@gmail.com" style={{ color: '#736635', textDecoration: 'underline' }}>sistorealisatie@gmail.com</a> en we maken samen een offerte op maat. Geen verrassingen, wél kwaliteit.
      </div>
    </main>
  );
}
