export const metadata = {
  title: 'Wie zijn wij - Sisto Realisatie',
}

export default function WieZijnWij() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Decoratieve gradient rand */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-[var(--beige-200)] to-[var(--accent)] rounded-2xl blur-sm opacity-20"></div>
        
        {/* Hoofdinhoud */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-white/50 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--accent)]">Wie zijn wij</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--beige-200)] mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Sisto Realisatie is een kleinschalig aannemersbedrijf gespecialiseerd in kwaliteitswerk voor particuliere woningen. We geloven in persoonlijk contact, heldere offertes en nette afwerking.
            </p>

            <div className="bg-gradient-to-r from-[var(--beige-50)] to-white rounded-xl p-6 border-l-4 border-[var(--accent)]">
              <h3 className="font-semibold text-xl mb-4 text-[var(--accent)]">Onze aanpak</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></span>
                  <span>Persoonlijk advies en duidelijke communicatie</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></span>
                  <span>Transparante prijzen zonder verborgen kosten</span>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0"></span>
                  <span>Schone werkomgeving en oplevering met nazorg</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              Onze klanten waarderen ons om betrouwbaarheid en vakmanschap. Wil je referenties of foto&apos;s van afgeronde klussen? Vraag ernaar via het contactformulier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}