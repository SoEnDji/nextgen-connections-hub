import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import schoolImg from '@/assets/editorial-school.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const ForSchools = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-electric/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="pill-tag bg-white/15 text-text-hero/80">
                {t('Für Schulen', 'For Schools')}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight text-balance glow-text">
                {t(
                  'Life Design Thinking und Berufsorientierung im Netzwerk: Schüler:innen Flügel geben',
                  'Life Design Thinking and career orientation in a network: Giving students wings'
                )}
              </h1>
              <p className="text-lg md:text-xl text-text-hero/60 max-w-2xl">
                {t(
                  'Schule ist heute mehr als Wissensvermittlung: Sie ist ein Übergangsraum. 2Morrow Lab bringt Energie in genau diesen Punkt – und macht Zukunft wieder greifbar und handhabbar.',
                  'School is more than knowledge transfer: It\'s a transition space. 2Morrow Lab brings energy to exactly this point — making the future tangible and manageable again.'
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent"
                >
                  {t('Pilot anfragen', 'Request a Pilot')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/25 text-text-hero px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  {t('Zukunftstag planen', 'Plan a Future Day')}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <img src={schoolImg} alt="" className="rounded-2xl object-cover w-full aspect-[4/3] opacity-50 grayscale-[40%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WARUM / KONTEXT ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t('Warum 2Morrow Lab für Schulen?', 'Why 2Morrow Lab for schools?')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>{t(
                'Genau dort verlieren viele Jugendliche Orientierung, Mut und Momentum. Das ist nicht überraschend, denn sie sollen Entscheidungen fürs Leben treffen, während sich die Welt schneller verändert als die meisten Systeme mithalten.',
                'This is exactly where many young people lose orientation, courage, and momentum. It\'s not surprising — they\'re asked to make life decisions while the world changes faster than most systems can keep up.'
              )}</p>
              <p>{t(
                'Wir übersetzen Unsicherheit in Bewegung, indem wir Jugendliche in einen klaren Life Design Thinking Prozess führen, der nicht bei Selbstreflexion stehen bleibt, sondern ins Umsetzen führt. Echte Begegnungen durch Entwicklungspartnerschaften ersetzen abstrakte Vorstellungen durch konkrete Einblicke. Prototyping macht Optionen testbar. Ein nächster Schritt wird verbindlich, konkret und sichtbar.',
                'We translate uncertainty into movement by guiding young people through a clear Life Design Thinking process that doesn\'t stop at self-reflection but leads to action. Real encounters through development partnerships replace abstract ideas with concrete insights. Prototyping makes options testable. A next step becomes binding, concrete, and visible.'
              )}</p>
              <p>{t(
                'Damit dieser Prozess nicht nur im Workshop stattfindet, wird er plattformgestützt begleitet. Die Plattform dient als Wissens- und Prozessmanagement und bietet eine digitale Begleitung inklusive KI Companion. Das Ganze ist DSGVO konform umgesetzt.',
                'So that this process doesn\'t just happen in a workshop, it is supported by a platform. The platform serves as knowledge and process management and offers digital guidance including an AI companion. Everything is implemented GDPR-compliant.'
              )}</p>
            </div>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  '2Morrow Lab ersetzt keine bestehende Berufsorientierung. Es wirkt komplementär und verstärkt, was Schulen bereits tun. Und weil wir den Schulalltag kennen, ist der Ansatz so gebaut, dass der zusätzliche Aufwand für Lehrkräfte minimal bleibt.',
                  '2Morrow Lab doesn\'t replace existing career orientation. It works complementarily and amplifies what schools already do. And because we know the school day, the approach is built so that the additional workload for teachers remains minimal.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WAS SCHULEN GEWINNEN ── */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('Was Schulen dadurch gewinnen', 'What schools gain')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  bold: t('Mehr Wirkung als klassische BO Termine:', 'More impact than traditional career orientation sessions:'),
                  text: t('Entscheidungen entstehen aus Tests und Begegnungen, nicht nur aus Recherche', 'Decisions emerge from tests and encounters, not just research'),
                },
                {
                  bold: t('Mehr Anschlussfähigkeit:', 'More connectivity:'),
                  text: t('Übergänge in Ausbildung, Studium, Praktikum werden klarer und stabiler', 'Transitions to apprenticeships, studies, internships become clearer and more stable'),
                },
                {
                  bold: t('Mehr Netzwerk-Power:', 'More network power:'),
                  text: t('Schule wird zum Knotenpunkt für Entwicklungspartnerschaften in der Region', 'School becomes a hub for development partnerships in the region'),
                },
                {
                  bold: t('Mehr Entlastung:', 'More relief:'),
                  text: t('Struktur, Moderation, Materialien und Partnerarbeit kommen aus einer Hand', 'Structure, moderation, materials, and partner work come from a single source'),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/15 bg-white/8">
                  <div className="w-2 h-2 rounded-full bg-accent-lime flex-shrink-0 mt-2" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-heading font-semibold text-white">{item.bold}</span>{' '}
                    <span className="text-white/80">{item.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── UNSER ANGEBOT ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t('Unser Angebot für Schulen', 'Our offer for schools')}
            </h2>
          </motion.div>

          {/* 1) Life Design Thinking Program */}
          <motion.div {...fadeUp} className="space-y-8 mb-16">
            <div>
              <span className="font-heading font-bold text-accent text-2xl mr-3">01</span>
              <h3 className="font-heading text-2xl font-bold text-foreground inline">
                {t('Life Design Thinking Program für Schüler:innen', 'Life Design Thinking Program for Students')}
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                'Ein schulbegleitendes Programm, das Jugendliche befähigt, werteorientiert zu entscheiden und nächste Schritte wirklich umzusetzen.',
                'A school-based program that empowers young people to make value-oriented decisions and actually implement next steps.'
              )}
            </p>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide mb-3">
                {t('Outcomes für Schüler:innen', 'Outcomes for Students')}
              </h4>
              <ul className="space-y-2">
                {[
                  t('Klarer Kompass statt diffusem Druck: Werte, Motivatoren und persönliche Kriterien werden sichtbar', 'Clear compass instead of diffuse pressure: Values, motivators, and personal criteria become visible'),
                  t('Selbstbild, das trägt: Stärken, Interessen, Lernfelder als Arbeitsgrundlage für Entscheidungen', 'Self-image that holds: Strengths, interests, learning fields as a working basis for decisions'),
                  t('Reale Optionen statt theoretischer Listen: Möglichkeiten werden nach Passung sortiert', 'Real options instead of theoretical lists: Possibilities are sorted by fit'),
                  t('Gesprächssicherheit: Fragen stellen, zuhören, auswerten, Schlussfolgerungen ziehen', 'Conversational confidence: Asking questions, listening, evaluating, drawing conclusions'),
                  t('Prototyping statt Grübeln: Dinge testen, statt sie nur zu denken', 'Prototyping instead of overthinking: Testing things instead of just thinking them'),
                  t('Entscheidungssicherheit: Kriterien, Ausschlusskriterien, nächste Experimente', 'Decision confidence: Criteria, exclusion criteria, next experiments'),
                  t('Konkreter nächster Schritt: ein klarer Plan mit Terminen, Kontakten, Aktionen', 'Concrete next step: A clear plan with dates, contacts, actions'),
                  t('Sprache für den eigenen Weg: den eigenen Prozess und die nächsten Schritte erklären können', 'Language for your own path: Being able to explain your own process and next steps'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wide mb-3">
                {t('Typische Bausteine (modular)', 'Typical building blocks (modular)')}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    bold: t('Einstieg und Orientierung:', 'Entry and orientation:'),
                    text: t('Life Design Basics, Zukunftskompass', 'Life Design Basics, future compass'),
                  },
                  {
                    bold: t('Vertiefung:', 'Deep dive:'),
                    text: t('Prototyping, Entscheidungskriterien, Umsetzung', 'Prototyping, decision criteria, implementation'),
                  },
                  {
                    bold: t('Begleitphase:', 'Companion phase:'),
                    text: t('plattformgestützte Dokumentation und Weiterarbeit', 'Platform-supported documentation and follow-up'),
                  },
                  {
                    bold: t('Optional:', 'Optional:'),
                    text: t('Seminarkurs oder Vertiefungsformat', 'Seminar course or advanced format'),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <p className="text-sm leading-relaxed">
                      <span className="font-heading font-semibold text-foreground">{item.bold}</span>{' '}
                      <span className="text-muted-foreground">{item.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2) Life Design Events */}
          <motion.div {...fadeUp} className="space-y-8 mb-16">
            <div>
              <span className="font-heading font-bold text-accent text-2xl mr-3">02</span>
              <h3 className="font-heading text-2xl font-bold text-foreground inline">
                {t('Life Design Events', 'Life Design Events')}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Zukunftstage */}
              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">
                  {t('Zukunftstage', 'Future Days')}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(
                    'Ein oder zwei Tage, die Orientierung beschleunigen und Beziehungen aktivieren.',
                    'One or two days that accelerate orientation and activate relationships.'
                  )}
                </p>
                <ul className="space-y-1.5">
                  {[
                    t('Vorbereitung: Suchrichtung, gute Fragen, Gesprächsleitfäden', 'Preparation: Search direction, good questions, conversation guides'),
                    t('Begegnungen: Unternehmen, Hochschulen, Mentor:innen, Alumni', 'Encounters: Companies, universities, mentors, alumni'),
                    t('Nachbereitung: Auswertung, Passung, nächste Schritte', 'Follow-up: Evaluation, fit, next steps'),
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zukunftskonferenz */}
              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <h4 className="font-heading font-bold text-foreground text-lg mb-2">
                  {t('2Morrow Lab Zukunftskonferenz', '2Morrow Lab Future Conference')}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t(
                    'Ein jährlicher Leuchtturm Anlass, der Schule als Zukunftsort sichtbar macht.',
                    'An annual lighthouse event that makes school visible as a place of the future.'
                  )}
                </p>
                <ul className="space-y-1.5">
                  {[
                    t('Perspektiven aus Region, Wirtschaft, Gesellschaft, Alumni', 'Perspectives from the region, business, society, alumni'),
                    t('Mitmachformate statt Frontalprogramm', 'Participatory formats instead of frontal programs'),
                    t('Startpunkt für neue Entwicklungspartnerschaften', 'Starting point for new development partnerships'),
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3) Community Entwicklung */}
          <motion.div {...fadeUp} className="space-y-8">
            <div>
              <span className="font-heading font-bold text-accent text-2xl mr-3">03</span>
              <h3 className="font-heading text-2xl font-bold text-foreground inline">
                {t('Community Entwicklung', 'Community Development')}
              </h3>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground text-base mb-3">
                {t('Schule als Zentrum eines Lern- und Entwicklungsökosystems', 'School as the center of a learning and development ecosystem')}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  'Wir bauen gemeinsam ein belastbares Netzwerk, nicht als Adressliste, sondern als verbindliche Entwicklungspartnerschaften.',
                  'Together we build a resilient network — not as a contact list, but as committed development partnerships.'
                )}
              </p>
              <ul className="space-y-2">
                {[
                  t('Strategische Vernetzung mit lokalen und regionalen Akteuren', 'Strategic networking with local and regional stakeholders'),
                  t('Entwicklung von passenden Partnerformaten und Begegnungslogik', 'Development of suitable partner formats and encounter logic'),
                  t('Community Events: Roundtables, Partnerabende, Alumni-Formate, Elternformate', 'Community events: Roundtables, partner evenings, alumni formats, parent formats'),
                  t('Verstetigung: wiederkehrende Formate, klare Rollen, saubere Übergaben', 'Sustainability: recurring formats, clear roles, clean handovers'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LEISTUNGSPAKETE ── */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('Leistungspakete', 'Service Packages')}
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: t('Paket Start', 'Package Start'),
                  desc: t('Für schnellen Einstieg mit klarer Wirkung.', 'For a quick start with clear impact.'),
                  items: [
                    t('Kick-off und Zielbild', 'Kick-off and target vision'),
                    t('1 bis 2 Workshops', '1 to 2 workshops'),
                    t('1 Zukunftstag light', '1 Future Day light'),
                    t('Auswertung und Empfehlung für den Ausbau', 'Evaluation and recommendation for expansion'),
                  ],
                },
                {
                  title: t('Paket Journey', 'Package Journey'),
                  desc: t('Für ein Schuljahr mit sichtbarer Entwicklungsreise.', 'For a school year with a visible development journey.'),
                  items: [
                    t('Einstieg plus Vertiefung in relevanten Jahrgängen', 'Entry plus deep dive in relevant grades'),
                    t('Projektwoche oder intensives Vertiefungsformat', 'Project week or intensive deep-dive format'),
                    t('1 Eventformat mit Partnern', '1 event format with partners'),
                    t('Dokumentierte Outcomes und nächste Übergänge', 'Documented outcomes and next transitions'),
                  ],
                },
                {
                  title: t('Paket Ökosystem', 'Package Ecosystem'),
                  desc: t('Für Schulen, die sich als regionaler Knotenpunkt positionieren wollen.', 'For schools that want to position themselves as a regional hub.'),
                  items: [
                    t('Mehrjährige Journey über Jahrgänge hinweg', 'Multi-year journey across grade levels'),
                    t('Aufbau und Pflege eines Partnernetzwerks', 'Building and maintaining a partner network'),
                    t('Wiederkehrende Community Events, optional Zukunftskonferenz', 'Recurring community events, optional future conference'),
                  ],
                },
              ].map((pkg, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm card-hover">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-1.5">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/80 leading-relaxed">
                        <span className="text-accent-lime mt-0.5 flex-shrink-0">→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ZUSAMMENARBEIT ABLAUF ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('So läuft die Zusammenarbeit ab', 'How the collaboration works')}
            </h2>

            <div className="space-y-0">
              {[
                {
                  step: '1',
                  title: t('Sondierung', 'Exploration'),
                  items: [
                    t('Ziele, Jahrgänge, vorhandene BO Strukturen, Engpässe', 'Goals, grades, existing career orientation structures, bottlenecks'),
                  ],
                },
                {
                  step: '2',
                  title: 'Design',
                  items: [
                    t('Bausteine, Zeitplan, Rollen, Partner-Setup', 'Building blocks, schedule, roles, partner setup'),
                  ],
                },
                {
                  step: '3',
                  title: t('Umsetzung', 'Implementation'),
                  items: [
                    t('Workshops, Events, Begegnungen, Nachbereitung', 'Workshops, events, encounters, follow-up'),
                  ],
                },
                {
                  step: '4',
                  title: t('Verstetigung', 'Sustainability'),
                  items: [
                    t('Playbook, Routinen, Netzwerkpflege', 'Playbook, routines, network maintenance'),
                  ],
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-sm flex-shrink-0">
                      {s.step}
                    </div>
                    {i < 3 && <div className="w-px flex-1 bg-border my-1" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading font-bold text-foreground text-lg">{s.title}</h3>
                    <ul className="mt-2 space-y-1">
                      {s.items.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-accent mt-0.5 flex-shrink-0">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hero-gradient noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-hero glow-text">
              {t('Nächster Schritt', 'Next Step')}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-accent-glow transition-all duration-300 glow-accent"
              >
                {t('Pilot anfragen', 'Request a Pilot')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/25 text-text-hero px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                {t('Zukunftstag planen', 'Plan a Future Day')}
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 border border-white/25 text-text-hero px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Rocket className="w-4 h-4" />
                {t('Ökosystem Gespräch führen', 'Ecosystem Conversation')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForSchools;
