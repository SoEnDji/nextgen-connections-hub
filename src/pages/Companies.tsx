import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CompaniesModuleMenu from '@/components/companies/CompaniesModuleMenu';
import CompaniesMiniCases from '@/components/companies/CompaniesMiniCases';
import companiesImg from '@/assets/editorial-companies.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Companies = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-magenta/15 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="pill-tag bg-white/15 text-text-hero/80">
                {t('Für Unternehmen', 'For Companies')}
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight text-balance glow-text">
                {t(
                  'Talente finden. Talente halten. Talente entwickeln. Organisationen zukunftsfähig machen.',
                  'Find talent. Retain talent. Develop talent. Future-proof organizations.'
                )}
              </h1>
              <p className="text-lg md:text-xl text-text-hero/60 max-w-2xl">
                {t(
                  '2Morrow Lab verbindet Unternehmen mit jungen Talenten früher, passender und nachhaltiger als klassisches Recruiting – und unterstützt (bei Bedarf) den Umbau zur Organisation, in der Top-Talente bleiben und wachsen.',
                  '2Morrow Lab connects companies with young talent earlier, more precisely, and more sustainably than traditional recruiting — and supports (where needed) the transformation into an organization where top talent stays and grows.'
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent"
                >
                  {t('Partnerschaft anfragen', 'Request Partnership')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/25 text-text-hero px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="w-4 h-4" />
                  {t('20-Min-Kennenlerncall buchen', 'Book a 20-min intro call')}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <img src={companiesImg} alt="" className="rounded-2xl object-cover w-full aspect-[4/3] opacity-50 grayscale-[40%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WARUM JETZT ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t('Warum jetzt: Kulturclash & Realität', 'Why now: Culture clash & reality')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>{t(
                'Viele Organisationen erleben keinen „Fachkräftemangel", sondern einen Attraktivitäts- und Kulturmismatch. Gen Z (und bald Gen Alpha) bewertet Arbeitgeber anders: weniger Titel, mehr Sinn; weniger „Befehl", mehr Beteiligung; weniger Hochglanz, mehr Echtheit.',
                'Many organizations don\'t face a "skills shortage" — they face an attractiveness and culture mismatch. Gen Z (and soon Gen Alpha) evaluates employers differently: less titles, more purpose; less "command", more participation; less polish, more authenticity.'
              )}</p>
              <p>{t(
                'Dazu kommt ein zweiter Treiber, der gerade unterschätzt wird: KI ersetzt überproportional genau jene Aufgaben, die traditionell Einstiegsrollen ausmachen. Recherche, Dokumentation, Standard-Analysen, Routine-Kommunikation, erste Entwürfe, einfache Auswertungen. Das verschiebt die Logik von „Junior = macht Fleißarbeit" hin zu: Einstieg muss anders gebaut werden.',
                'There\'s a second driver being underestimated right now: AI is disproportionately replacing exactly the tasks that traditionally define entry-level roles. Research, documentation, standard analyses, routine communication, first drafts, simple evaluations. This shifts the logic from "junior = does grunt work" to: onboarding must be built differently.'
              )}</p>
              <p className="font-heading font-semibold text-foreground text-base">
                {t('Für Unternehmen heißt das:', 'For companies, this means:')}
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  {t(
                    'Neue Einstiegsmöglichkeiten schaffen (früher, begleiteter, stärker lernorientiert).',
                    'Create new entry pathways (earlier, more guided, more learning-oriented).'
                  )}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  {t(
                    'Talenten früher verantwortungsvolle, wirkungsvolle Aufgaben geben – gerade weil KI Routinen abnimmt.',
                    'Give talent meaningful, impactful tasks earlier — precisely because AI takes over routines.'
                  )}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">→</span>
                  {t(
                    'Führung, Onboarding und Lernpfade so designen, dass junge Menschen nicht „überfordert reingeworfen", sondern gezielt befähigt werden.',
                    'Design leadership, onboarding, and learning paths so young people aren\'t "thrown in overwhelmed" but purposefully empowered.'
                  )}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="font-heading font-semibold text-foreground text-base md:text-lg mb-2">
                {t('Provokativ, aber wahr:', 'Provocative, but true:')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Instagram- und TikTok-Content ersetzt keine Kultur. Wenn ihr dort Freiheit, Sinn und Entwicklung versprecht, müsst ihr das im Alltag verkörpern – sonst wird Recruiting teuer, Retention schlecht, und euer Ruf kippt.',
                  'Instagram and TikTok content doesn\'t replace culture. If you promise freedom, purpose, and growth there, you need to embody it in daily work — otherwise recruiting gets expensive, retention suffers, and your reputation tips.'
                )}
              </p>
              <p className="text-sm text-accent font-heading font-semibold mt-3">
                #GenZReadiness #GenAlphaReadiness
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DER 2ML ANSATZ ── */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('Der 2ML Ansatz', 'The 2ML Approach')}
            </h2>
            <p className="text-lg opacity-70 leading-relaxed">
              {t(
                'Wir sind keine Jobbörse. Wir sind eine Entwicklungsplattform im Ökosystem Schule/Hochschule – und bauen mit Unternehmen passgenaue Partnerschaften, die sich aus Modulen zusammensetzen.',
                'We are not a job board. We are a development platform in the school/university ecosystem — building tailored partnerships with companies, composed of modules.'
              )}
            </p>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 opacity-90">
                {t('Was das konkret bedeutet:', 'What this means concretely:')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    bold: t('Früher Kontaktpunkt:', 'Early contact point:'),
                    text: t('Talente werden sichtbar, bevor sie sich festlegen.', 'Talent becomes visible before they commit.'),
                  },
                  {
                    bold: t('Passung statt Zufall:', 'Fit instead of chance:'),
                    text: t('Matching über Skills und Interessen/Werte/Entwicklungsziele.', 'Matching via skills and interests/values/development goals.'),
                  },
                  {
                    bold: t('Beziehungslogik statt Transaktion:', 'Relationship logic instead of transaction:'),
                    text: t('Mentoring, Projekte, Praktika, Ausbildung/duales Studium als Journey.', 'Mentoring, projects, internships, apprenticeships/dual studies as a journey.'),
                  },
                  {
                    bold: t('Vertrauen & Datenhoheit:', 'Trust & data sovereignty:'),
                    text: t('Grundlage für glaubwürdige Beziehung statt „Lead-Gen".', 'Foundation for credible relationships instead of "lead-gen".'),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <p className="text-sm leading-relaxed">
                      <span className="font-heading font-semibold text-foreground">{item.bold}</span>{' '}
                      <span className="opacity-70">{item.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERSCHAFT: MODULAR ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t('Unsere Partnerschaft: modular, passgenau, skalierbar', 'Our partnership: modular, tailored, scalable')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                'Es gibt bei uns kein One-Size-Fits-All. Wir setzen eine Partnerschaft aus Modulen zusammen – je nach Rolle, Region, Zielgruppe und Organisationsreife.',
                'There is no one-size-fits-all with us. We assemble a partnership from modules — depending on role, region, target group, and organizational maturity.'
              )}
            </p>
          </motion.div>

          {/* Leistungen */}
          <motion.div {...fadeUp} className="mt-12 space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {t('Leistungen (kurz & klar)', 'Services (short & clear)')}
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  num: '01',
                  title: t('Talente finden', 'Find Talent'),
                  items: [
                    t('Beratung & Begleitung bei Talentansprache und Akquise', 'Consulting & support for talent outreach and acquisition'),
                    t('Rollen-/Zielgruppenprofil, Ansprache-Strategie, Funnel-Design', 'Role/target group profile, outreach strategy, funnel design'),
                    t('Training für Auswahl & Gespräche (Potential Hiring)', 'Training for selection & conversations (potential hiring)'),
                    t('Talent Matching aus dem 2ML Talentpool', 'Talent matching from the 2ML talent pool'),
                    t('Matching nach Skills + Interessen + Werte + Zielen', 'Matching by skills + interests + values + goals'),
                    t('Shortlists + Warm Intros (optional)', 'Shortlists + warm intros (optional)'),
                    t('Employer Branding (glaubwürdig, nicht geschniegelt)', 'Employer branding (credible, not slick)'),
                    t('Entwicklungsversprechen, Realistic Job Preview, klare Erwartungen', 'Development promise, realistic job preview, clear expectations'),
                    t('Content: echte Einblicke statt Imagefilm', 'Content: real insights instead of image films'),
                    t('Vernetzung mit Schulen', 'School networking'),
                    t('Schulpartnerschaften, Formate, Koordination/Moderation', 'School partnerships, formats, coordination/moderation'),
                  ],
                },
                {
                  num: '02',
                  title: t('Talente halten', 'Retain Talent'),
                  items: [
                    t('Talent-Onboarding (30/60/90 Tage)', 'Talent onboarding (30/60/90 days)'),
                    t('Onboarding ist kein „Willkommenspaket", sondern ein Übergang mit Abbruchrisiko. Wir unterstützen direkt im Onboardingprozess – nicht nur in der Konzeption.', 'Onboarding isn\'t a "welcome package" — it\'s a transition with dropout risk. We support directly in the onboarding process — not just in concept.'),
                    t('Onboarding Coaching: Coaching für Talente und/oder Mentor:innen/Teamleads während der ersten Wochen (Check-ins, Erwartungsklärung, Integration, frühe Konfliktprävention).', 'Onboarding Coaching: Coaching for talent and/or mentors/team leads during the first weeks (check-ins, expectation alignment, integration, early conflict prevention).'),
                    t('Individuelle Onboarding Journeys schnell bauen: Mit unserer Companion App könnt ihr leicht und schnell rollen- und personenspezifische Onboarding-Journeys erstellen (30/60/90), anpassen und steuern – ohne jedes Mal das Rad neu zu erfinden.', 'Build individual onboarding journeys fast: With our Companion App you can easily and quickly create role- and person-specific onboarding journeys (30/60/90), customize and manage them — without reinventing the wheel every time.'),
                    t('Ziele, Check-ins, Feedbackschleifen (Rhythmus + Gesprächsleitfäden)', 'Goals, check-ins, feedback loops (rhythm + conversation guides)'),
                    t('Mentor:innen-Setup + Frühwarnsignale & Interventionen', 'Mentor setup + early warning signals & interventions'),
                    t('Ergebnis: weniger Abbrüche, schnellere Integration, klarere Entwicklung von Tag 1.', 'Result: fewer dropouts, faster integration, clearer development from day 1.'),
                    'Talent Culture',
                    t('Diagnose der Talent-Experience', 'Talent experience diagnosis'),
                    t('Micro-Rituale + Alignment in HR/Ausbildung/Führung', 'Micro-rituals + alignment in HR/training/leadership'),
                  ],
                },
                {
                  num: '03',
                  title: t('Talente empowern & entwickeln', 'Empower & Develop Talent'),
                  items: [
                    'Talent Development System',
                    t('Lernpfade, Entwicklungsarchitektur, Messlogik', 'Learning paths, development architecture, measurement logic'),
                    'Talent Leadership Coaching & Consulting',
                    t('Coaching für Teamleads/Ausbilder:innen', 'Coaching for team leads/trainers'),
                    t('Sparring bei kritischen Fällen + Toolkits', 'Sparring on critical cases + toolkits'),
                  ],
                },
                {
                  num: '04',
                  title: t('Organisation zukunftsfähig machen (Transformation) — mit Thrive (Berlin)', 'Future-proof the Organization (Transformation) — with Thrive (Berlin)'),
                  items: [
                    t(
                      'Hier geht es um den umfassenden Umbau zur Organisation, für die Top-Talente gern an den Start gehen und in der sie langfristig ihr Potenzial entfalten. Das umfasst Kultur, Führung, Entscheidungslogik und Zusammenarbeit – und schließt explizit die Option ein, sich jenseits klassischer Hierarchie in Richtung Self-Governance weiterzuentwickeln (z.B. nach Sociocracy 3.0 / „Living Organisations"), wenn eure Realität zeigt, dass Command-and-Control Talente kostet.',
                      'This is about the comprehensive transformation into an organization where top talent happily gets started and unfolds their potential long-term. This includes culture, leadership, decision-making logic, and collaboration — and explicitly includes the option to evolve beyond classical hierarchy toward self-governance (e.g. Sociocracy 3.0 / "Living Organisations"), when your reality shows that command-and-control costs talent.'
                    ),
                  ],
                },
              ].map((service) => (
                <div key={service.num} className="p-6 rounded-2xl bg-card border border-border card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading font-bold text-accent text-2xl">{service.num}</span>
                    <h4 className="font-heading font-bold text-foreground text-base">{service.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.num === '04' && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm font-heading font-semibold text-foreground">
                        {t('Kernnutzen:', 'Core benefit:')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {t(
                          'Ihr müsst nicht nur modern wirken – ihr müsst modern funktionieren. Und wenn ihr auf Social Media Sinn, Freiheit und Entwicklung zeigt, dann muss die Organisation genau das im Alltag verkörpern. Alles andere wird von Gen Z/Gen Alpha schneller entlarvt, als ihr neue Videos schneiden könnt.',
                          'You don\'t just need to look modern — you need to function modern. And if you show purpose, freedom, and growth on social media, the organization must embody exactly that in daily work. Anything else gets exposed by Gen Z/Gen Alpha faster than you can cut new videos.'
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNERSCHAFT ABLAUF ── */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('So läuft eine Partnerschaft ab', 'How a partnership works')}
            </h2>
            <p className="text-lg opacity-60">
              {t('(Beispiel – wird modular zusammengestellt)', '(Example — assembled modularly)')}
            </p>

            <div className="space-y-0">
              {[
                {
                  step: '1',
                  title: t('Diagnose & Match', 'Diagnosis & Match'),
                  time: t('2–3 Wochen', '2–3 weeks'),
                  items: [
                    t('Ziele, Rollen, Regionen, Engpässe, Kulturrealität', 'Goals, roles, regions, bottlenecks, culture reality'),
                    t('Auswahl der Module + Verantwortlichkeiten', 'Selection of modules + responsibilities'),
                  ],
                },
                {
                  step: '2',
                  title: 'Setup',
                  time: t('4–6 Wochen', '4–6 weeks'),
                  items: [
                    t('Funnel/Matching/Schulformate + Employer-Profil', 'Funnel/matching/school formats + employer profile'),
                    t('Onboarding-/Mentoring-Design (falls enthalten)', 'Onboarding/mentoring design (if included)'),
                  ],
                },
                {
                  step: '3',
                  title: t('Aktivierung', 'Activation'),
                  time: t('laufend', 'ongoing'),
                  items: [
                    'Shortlists & Warm Intros',
                    t('Formate im Ökosystem Schule/Hochschule', 'Formats in the school/university ecosystem'),
                  ],
                },
                {
                  step: '4',
                  title: t('Bindung & Entwicklung', 'Retention & Development'),
                  time: t('laufend', 'ongoing'),
                  items: [
                    'Onboarding-Journey, Talent Culture, Leadership Enablement',
                  ],
                },
                {
                  step: '5',
                  title: t('Transformation (optional, mit Thrive)', 'Transformation (optional, with Thrive)'),
                  time: '',
                  items: [
                    t('Diagnose → Zielbild → Umsetzung → Messung & Iteration', 'Diagnosis → target vision → implementation → measurement & iteration'),
                    t('optional: Self-Governance Pilot → Skalierung', 'optional: self-governance pilot → scaling'),
                  ],
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-sm flex-shrink-0">
                      {s.step}
                    </div>
                    {i < 4 && <div className="w-px flex-1 bg-white/15 my-1" />}
                  </div>
                  <div className="pb-8">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-heading font-bold text-foreground text-lg">{s.title}</h3>
                      {s.time && <span className="text-xs font-heading text-accent opacity-80">{s.time}</span>}
                    </div>
                    <ul className="mt-2 space-y-1">
                      {s.items.map((item, j) => (
                        <li key={j} className="text-sm opacity-60 leading-relaxed flex items-start gap-2">
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

      {/* ── MODULE MENU ── */}
      <CompaniesModuleMenu />

      {/* ── MINI CASES ── */}
      <CompaniesMiniCases />

      {/* ── KLARTEXT ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="p-8 md:p-10 rounded-2xl border-2 border-accent/30 bg-accent/5">
            <p className="font-heading font-bold text-accent text-sm uppercase tracking-wider mb-4">Klartext</p>
            <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug">
              {t(
                'Wenn ihr Top-Talente wollt, reicht es nicht, „jung" zu kommunizieren. Ihr müsst eine Organisation bauen, die Verantwortung, Lernräume, Beteiligung und Echtheit im Alltag möglich macht. Alles andere ist kurzfristig – und wird von Gen Z/Gen Alpha entlarvt.',
                'If you want top talent, it\'s not enough to communicate "young." You need to build an organization that makes responsibility, learning spaces, participation, and authenticity possible in daily work. Everything else is short-term — and gets exposed by Gen Z/Gen Alpha.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hero-gradient noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-hero glow-text">
              {t('Bereit für eine Partnerschaft?', 'Ready for a partnership?')}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-accent-glow transition-all duration-300 glow-accent"
              >
                {t('Partnerschaft anfragen', 'Request Partnership')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/25 text-text-hero px-8 py-4 rounded-lg font-heading font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-4 h-4" />
                {t('20-Min-Kennenlerncall buchen', 'Book a 20-min intro call')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
