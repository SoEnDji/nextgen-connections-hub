import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Landmark, Factory, X, ChevronRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

interface MiniCase {
  icon: typeof Building2;
  tag: string;
  title: string;
  ausgangslage: string[];
  modules: string[];
  duration: string;
  ergebnis: string[];
}

const CompaniesMiniCases = () => {
  const { t } = useLanguage();
  const [openCase, setOpenCase] = useState<number | null>(null);

  const cases: MiniCase[] = [
    {
      icon: Factory,
      tag: t('Mittelstand (200–800 MA)', 'Mid-size (200–800 employees)'),
      title: t(
        '„Azubi- & Dual-Studium Pipeline stabilisieren"',
        '"Stabilize apprenticeship & dual study pipeline"'
      ),
      ausgangslage: [
        t('Wenige passende Bewerbungen, hohe Abbruchquote im 1. Jahr', 'Few suitable applications, high drop-out rate in year 1'),
        t('Employer Branding wirkt „nett", Alltag frisst Versprechen', 'Employer branding looks "nice", daily reality eats promises'),
      ],
      modules: [
        'A1 Early-Talent-Strategie & Funnel',
        'A3 School Access & Partnerschaften',
        t('A4 Employer Branding als Entwicklungsversprechen', 'A4 Employer Branding as Development Promise'),
        'B1 Onboarding 30/60/90',
        t('B2 Mentor:innen- & Buddy-System', 'B2 Mentor & Buddy System'),
        t('C2 Leadership Coaching (Ausbilder:innen/Teamleads)', 'C2 Leadership Coaching (trainers/team leads)'),
      ],
      duration: t('12 Monate', '12 months'),
      ergebnis: [
        t('planbarer Funnel statt Kampagnen-Strohfeuer', 'predictable funnel instead of campaign flash-in-the-pan'),
        t('weniger Frühabbrüche, schnellere Integration, stabilere Bindung', 'fewer early drop-outs, faster integration, more stable retention'),
      ],
    },
    {
      icon: Building2,
      tag: t('Konzern/Scale-up (1.000+ MA)', 'Enterprise/Scale-up (1,000+ employees)'),
      title: t(
        '„Engpassrollen + GenZ-Readiness"',
        '"Bottleneck roles + GenZ readiness"'
      ),
      ausgangslage: [
        t('Viel Reichweite, geringe Passung (Streuen statt Treffen)', 'High reach, low fit (scattering instead of hitting)'),
        t('Kulturclash: Erwartungen an Autonomie/Feedback/Tempo vs. interne Prozesse', 'Culture clash: expectations of autonomy/feedback/pace vs. internal processes'),
      ],
      modules: [
        t('A2 Talentpool-Matching (Engpassrollen)', 'A2 Talent Pool Matching (bottleneck roles)'),
        'A4 Employer Branding + Realistic Job Preview',
        t('B3 Talent Culture (Diagnose + Rituale)', 'B3 Talent Culture (diagnosis + rituals)'),
        t('C1 Talent Development System (Lernpfade)', 'C1 Talent Development System (learning paths)'),
        t('D2 Leadership- & Kulturentwicklung (mit Thrive)', 'D2 Leadership & Culture Development (with Thrive)'),
        t('D3 Operating Model & Zusammenarbeit', 'D3 Operating Model & Collaboration'),
      ],
      duration: t('9–18 Monate', '9–18 months'),
      ergebnis: [
        t('bessere Passung in Engpassrollen', 'better fit in bottleneck roles'),
        t('weniger Fluktuation bei High Potentials', 'less turnover among high potentials'),
        t('spürbarere Führungsqualität im Alltag', 'more tangible leadership quality in daily work'),
      ],
    },
    {
      icon: Landmark,
      tag: t('Kommune/öffentliche Organisation', 'Municipality/public organization'),
      title: t(
        '„Nachwuchs gewinnen, Sinn & Stabilität nutzen"',
        '"Winning new talent, leveraging purpose & stability"'
      ),
      ausgangslage: [
        t('Sinn ist da, Image ist alt; Prozesse wirken schwerfällig', 'Purpose is there, image is old; processes seem cumbersome'),
        t('Nachwuchs will Beitrag und Wirksamkeit, nicht Warteschleifen', 'Young talent wants contribution and impact, not waiting loops'),
      ],
      modules: [
        'A1 Early-Talent-Strategie & Funnel',
        t('A3 School Access (regionale Schulnetzwerke)', 'A3 School Access (regional school networks)'),
        t('A4 Employer Branding als Entwicklungsversprechen', 'A4 Employer Branding as Development Promise'),
        'B1 Onboarding 30/60/90 + B2 Buddy-System',
        t('D1 Organisationsdiagnose & Zielbild (mit Thrive)', 'D1 Organizational Diagnosis & Target Vision (with Thrive)'),
        t('D4 Self-Governance Pilot (z.B. in einem Amt/Team) + D5 Change-Architektur', 'D4 Self-Governance Pilot (e.g. in a department/team) + D5 Change Architecture'),
      ],
      duration: t('12–24 Monate', '12–24 months'),
      ergebnis: [
        t('moderner Einstieg, klarere Wirksamkeit, weniger Reibung', 'modern onboarding, clearer impact, less friction'),
        t('Pilot-Self-Governance zeigt: schneller entscheiden, klarer verantwortlich, besser zusammenarbeiten', 'Self-governance pilot shows: faster decisions, clearer accountability, better collaboration'),
      ],
    },
  ];

  return (
    <section className="section-dark noise-overlay py-16 md:py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp} className="space-y-4 mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
            {t('3 Beispielpartnerschaften', '3 Example Partnerships')}
          </h2>
          <p className="text-lg opacity-60">
            {t('Klicke auf eine Karte, um das Modul-Setup und Ergebnisbild zu sehen.', 'Click a card to see the module setup and results.')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.button
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setOpenCase(i)}
              className="text-left p-6 rounded-2xl border border-white/10 gradient-card bg-white/5 backdrop-blur-sm card-hover group cursor-pointer"
            >
              <c.icon className="w-8 h-8 text-accent mb-4" />
              <span className="pill-tag bg-accent/15 text-accent mb-3">{c.tag}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-3 mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{c.ausgangslage[0]}</p>
              <div className="flex items-center gap-1 text-accent text-sm font-heading font-semibold mt-4 group-hover:gap-2 transition-all">
                {t('Details ansehen', 'View details')}
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Full-screen overlay modal */}
        {openCase !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenCase(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenCase(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {(() => {
                const c = cases[openCase];
                return (
                  <div className="space-y-6">
                    <div>
                      <span className="pill-tag bg-accent/15 text-accent mb-2">{c.tag}</span>
                      <h3 className="font-heading text-2xl font-bold text-foreground mt-2">{c.title}</h3>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide mb-2">
                        {t('Ausgangslage', 'Starting Situation')}
                      </h4>
                      <ul className="space-y-1.5">
                        {c.ausgangslage.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-0.5 flex-shrink-0">→</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide mb-2">
                        {t('Modul-Setup', 'Module Setup')} ({c.duration})
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {c.modules.map((m, j) => (
                          <span key={j} className="inline-flex px-3 py-1.5 rounded-lg text-xs font-heading font-medium bg-accent/10 text-accent border border-accent/20">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide mb-2">
                        {t('Ergebnisbild', 'Expected Results')}
                      </h4>
                      <ul className="space-y-1.5">
                        {c.ergebnis.map((e, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent-lime mt-0.5 flex-shrink-0">✓</span>{e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CompaniesMiniCases;
