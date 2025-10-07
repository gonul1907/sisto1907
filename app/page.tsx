export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-2xl card p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Sisto Realisatie</h1>
        <p className="mb-6">Welkom bij Sisto Realisatie - jouw lokale vakman voor kleine én middelgrote klussen met grote impact. Of je nu je trap wil renoveren, een frisse verflaag op de muren wilt, tegels wilt leggen of laminaat zoekt: wij staan voor je klaar. We leveren geen massawerk, maar maatwerk — netjes afgewerkt, op tijd, met oog voor detail.</p>

        <ul className="text-left list-disc ml-6 mb-6">
          <li>Transparante offertes zonder verrassingen;</li>
          <li>Vakkundig werk met hoogwaardige materialen;</li>
          <li>Persoonlijk contact en duidelijke communicatie;</li>
        </ul>

        <a href="/diensten" className="inline-block px-6 py-2 rounded bg-beige-500 text-white">Meer over onze diensten</a>
      </section>
    </main>
  )
}
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
  <h1 className="text-4xl font-bold mb-4">Sisto Realisatie</h1>
  <p className="text-lg mb-8 max-w-xl text-center" style={{ color: '#736635' }}>
        Welkom bij Sisto Realisatie - jouw lokale vakman voor kleine én middelgrote klussen met grote impact. Of je nu je trap wil renoveren, een frisse verflaag op de muren wilt, tegels wilt leggen of laminaat zoekt: wij staan voor je klaar. We leveren geen massawerk, maar maatwerk — netjes afgewerkt, op tijd, met oog voor detail.<br /><br />
        Wat kun je van ons verwachten:<br />
        • Transparante offertes zonder verrassingen;<br />
        • Vakkundig werk met hoogwaardige materialen;<br />
        • Persoonlijk contact en duidelijke communicatie;<br />
        • Een service waar je op kunt bouwen.<br /><br />
        Bekijk onze dienstverlening hieronder en ontdek hoe we jouw woonplezier kunnen vergroten. Klaar om je project aan te pakken? Wij denken graag mee. Vraag vandaag nog een vrijblijvende offerte aan!
      </p>
      <a
        href="/over-ons"
  className="px-6 py-2 bg-[#736635] text-white rounded-lg shadow border border-[#d5d1c2] hover:bg-[#aba386] hover:text-[#736635] transition-colors"
      >
  Leer meer over ons
      </a>
    </main>
  );
}
