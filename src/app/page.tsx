export default function Home() {
  return (
    <main className="w-full flex justify-center py-8">
      <section className="w-full max-w-4xl bg-white/95 backdrop-blur card p-6 sm:p-12 rounded-lg text-left mx-4 sm:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold mb-4">Sisto Realisatie</h1>
            <p className="mb-4 text-sm sm:text-base">Welkom bij Sisto Realisatie — jouw lokale vakman voor kleine én middelgrote klussen met grote impact. Of je nu je trap wil renoveren, een frisse verflaag op de muren wilt, tegels wilt leggen of laminaat zoekt: wij staan voor je klaar. We leveren geen massawerk, maar maatwerk, netjes afgewerkt en op tijd.</p>

            <ul className="text-left list-disc ml-4 sm:ml-6 mb-6 text-sm sm:text-base">
              <li>Transparante offertes zonder verrassingen;</li>
              <li>Vakkundig werk met hoogwaardige materialen;</li>
              <li>Persoonlijk contact en duidelijke communicatie;</li>
            </ul>

            <a href="/diensten" className="inline-block px-6 py-3 rounded bg-[var(--accent)] text-white font-semibold shadow-sm hover:brightness-95">Meer over onze diensten</a>
          </div>

          <div className="hidden lg:block">
            <div className="w-full h-56 bg-gradient-to-br from-[rgba(181,164,127,0.12)] to-[rgba(181,164,127,0.06)] rounded-lg flex items-center justify-center">
              <p className="text-sm text-[rgba(0,0,0,0.6)]">Voorbeeldfoto's of project-samples kunnen hier komen.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <section className="w-full max-w-2xl bg-white/70 backdrop-blur card p-6 sm:p-12 rounded-lg shadow-lg text-center mx-4 sm:mx-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Sisto Realisatie</h1>
        <p className="mb-4 text-sm sm:text-base">Welkom bij Sisto Realisatie - jouw lokale vakman voor kleine én middelgrote klussen met grote impact. Of je nu je trap wil renoveren, een frisse verflaag op de muren wilt, tegels wilt leggen of laminaat zoekt: wij staan voor je klaar. We leveren geen massawerk, maar maatwerk netjes afgewerkt, op tijd, met oog voor detail.</p>

        <ul className="text-left list-disc ml-4 sm:ml-6 mb-6 text-sm sm:text-base">
          <li>Transparante offertes zonder verrassingen;</li>
          <li>Vakkundig werk met hoogwaardige materialen;</li>
          <li>Persoonlijk contact en duidelijke communicatie;</li>
        </ul>

        <a href="/diensten" className="inline-block px-6 py-2 rounded bg-beige-500 text-white">Meer over onze diensten</a>
      </section>
    </main>
  )
}
