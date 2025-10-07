export default function Home() {
  return (
    <main className="w-full min-h-screen flex justify-center py-4">
      <section className="w-full max-w-2xl bg-white min-h-[85vh] p-8 sm:p-12 mx-4 sm:mx-0 shadow-lg">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Sisto Realisatie</h1>
            <p className="mb-6 text-base sm:text-lg leading-relaxed">
              Welkom bij Sisto Realisatie — jouw lokale vakman voor kleine én middelgrote klussen met grote impact. 
              Of je nu je trap wil renoveren, een frisse verflaag op de muren wilt, tegels wilt leggen of laminaat zoekt: 
              wij staan voor je klaar. We leveren geen massawerk, maar maatwerk, netjes afgewerkt en op tijd.
            </p>

            <ul className="text-center space-y-3 mb-8 text-base sm:text-lg">
              <li>• Transparante offertes zonder verrassingen</li>
              <li>• Vakkundig werk met hoogwaardige materialen</li>
              <li>• Persoonlijk contact en duidelijke communicatie</li>
            </ul>

            <a href="/diensten" className="inline-block px-8 py-4 rounded bg-white text-[var(--accent)] font-semibold shadow-sm border border-[var(--accent)] hover:bg-[var(--beige-50)] transition-colors">
              Meer over onze diensten
            </a>
          </div>

          <div className="pt-12">
            <div className="w-full h-48 bg-gradient-to-br from-[var(--beige-50)] to-[var(--beige-100)] rounded-lg flex items-center justify-center">
              <p className="text-sm text-[var(--accent)]">Voorbeeldfoto&apos;s van projecten komen hier</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
