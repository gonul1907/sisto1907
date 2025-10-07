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
