import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target, Users, Building2, Heart, Globe } from 'lucide-react';
import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ecosystemDiagram from '@/assets/ecosystem-diagram.png';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const NetworkPartners = () => {
  const { t } = useLanguage();

  const segments = [
    {
      icon: Building2,
      title: t('Organisationen & Programme', 'Organisations & Programmes'),
      desc: t(
        'Macht eure Angebote auffindbar und anschlussfähig im Ökosystem.',
        'Make your offers discoverable and connectable within the ecosystem.'
      ),
    },
    {
      icon: Users,
      title: t('Coaches & Trainingsanbieter', 'Coaches & Training Providers'),
      desc: t(
        'Erreicht Talente, die aktiv nächste Schritte suchen – nicht nur Content-Konsumenten.',
        'Reach talents actively seeking next steps — not just content consumers.'
      ),
    },
    {
      icon: Heart,
      title: t('Stiftungen & Förderer', 'Foundations & Funders'),
      desc: t(
        'Seht, welche Angebote wirken, wo Bedarf entsteht und wie Förderung Hebel wird.',
        'See which offers work, where demand arises, and how funding creates leverage.'
      ),
    },
    {
      icon: Building2,
      title: t('Unternehmen', 'Companies'),
      desc: t(
        'Schafft Einstiegsmöglichkeiten und echte Entwicklungspartnerschaften.',
        'Create entry opportunities and genuine development partnerships.'
      ),
    },
    {
      icon: Globe,
      title: t('Netzwerke & Communities', 'Networks & Communities'),
      desc: t(
        'Verbindet eure Reichweite mit konkreten Möglichkeiten und Kooperationen.',
        'Connect your reach with concrete opportunities and collaborations.'
      ),
    },
  ];

  const benefits = [
    {
      title: t('Sichtbarkeit dort, wo Talente suchen', 'Visibility where talents search'),
      desc: t(
        'Ihr seid präsent im Marktplatz der Möglichkeiten – in dem Moment, in dem Talente aktiv Orientierung und nächste Schritte suchen.',
        "You're present in the Marketplace of Opportunities — the moment talents actively seek guidance and next steps."
      ),
    },
    {
      title: t('Mehr Passung, weniger Streuverlust', 'Better fit, less scatter loss'),
      desc: t(
        'Kategorien, Kriterien und kuratierte Empfehlungen helfen, dass eure Angebote bei den richtigen Talenten landen – statt im Rauschen zu verschwinden.',
        'Categories, criteria, and curated recommendations ensure your offers reach the right talents — instead of disappearing in the noise.'
      ),
    },
    {
      title: t('Eine Schnittstelle statt Parallelwelten', 'One interface instead of parallel worlds'),
      desc: t(
        '2Morrow Lab verbindet Akteure untereinander und mit Talenten. Das senkt Reibung und macht Kooperation einfacher.',
        '2Morrow Lab connects actors with each other and with talents. This reduces friction and makes collaboration easier.'
      ),
    },
    {
      title: t('Gemeinsame Wirkung statt Einzelerfolg', 'Shared impact instead of isolated success'),
      desc: t(
        'Ihr werdet Teil einer gemeinsamen Wirkungslogik: kontinuierliche Entwicklung statt punktueller Maßnahmen.',
        "You become part of a shared impact logic: continuous development instead of one-off measures."
      ),
    },
  ];

  const steps = [
    {
      num: '01',
      title: t('Profil anlegen (5–10 Min)', 'Create profile (5–10 min)'),
      desc: t(
        'Minimalprofil: Wer seid ihr, was bietet ihr, für wen, Voraussetzungen, Link/Kontakt.',
        'Minimal profile: Who you are, what you offer, for whom, prerequisites, link/contact.'
      ),
    },
    {
      num: '02',
      title: t('Kuration & Freischaltung', 'Curation & Activation'),
      desc: t(
        'Wir prüfen Anschlussfähigkeit und Klarheit. Ziel: Qualität, Passung, Verständlichkeit für Talente.',
        'We review connectivity and clarity. Goal: quality, fit, and comprehensibility for talents.'
      ),
    },
    {
      num: '03',
      title: t('Sichtbarkeit & Verbindung', 'Visibility & Connection'),
      desc: t(
        'Euer Angebot ist im Marktplatz sichtbar und anschlussfähig an Formate, Kooperationen und Entwicklungspartnerschaften.',
        'Your offer is visible in the marketplace and connectable to formats, collaborations, and development partnerships.'
      ),
    },
  ];

  const faqs = [
    {
      q: t('Was kostet das?', 'What does it cost?'),
      a: t(
        'In der Pilotphase ist die Teilnahme kostenfrei. Weitere Modelle werden transparent kommuniziert.',
        'Participation is free during the pilot phase. Further models will be communicated transparently.'
      ),
    },
    {
      q: t('Wie viel Aufwand ist das?', 'How much effort is involved?'),
      a: t(
        'Minimalprofil in 5–10 Minuten. Details können später ergänzt werden.',
        'Minimal profile in 5–10 minutes. Details can be added later.'
      ),
    },
    {
      q: t('Welche Angebote werden aufgenommen?', 'Which offers are accepted?'),
      a: t(
        'Anschlussfähige Angebote, die Talente konkret unterstützen. Qualität und Verständlichkeit sind entscheidend.',
        'Connectable offers that concretely support talents. Quality and clarity are decisive.'
      ),
    },
    {
      q: t('Wie läuft die Kontaktaufnahme?', 'How does the initial contact work?'),
      a: t(
        'Über euer Partnerprofil oder direkte Absprache per E-Mail.',
        'Through your partner profile or direct coordination via email.'
      ),
    },
    {
      q: t('Welche Region deckt ihr ab? Remote möglich?', 'Which region do you cover? Is remote possible?'),
      a: t(
        'Aktuell DACH-Raum. Remote-Angebote sind ausdrücklich willkommen.',
        'Currently DACH region. Remote offers are explicitly welcome.'
      ),
    },
    {
      q: t('Datenschutz / DSGVO?', 'Data protection / GDPR?'),
      a: t(
        'Nur notwendige Daten, transparente Nutzung, vollständig DSGVO-konform.',
        'Only necessary data, transparent usage, fully GDPR-compliant.'
      ),
    },
  ];

  const marketplaceItems = [
    t('Programme & Lernangebote', 'Programmes & Learning Offers'),
    t('Coaching, Training & Workshops', 'Coaching, Training & Workshops'),
    t('Stipendien, Förderungen & Mentoring', 'Scholarships, Funding & Mentoring'),
    t('Praktika, Traineeships, Projekte, Einstiegsmöglichkeiten', 'Internships, Traineeships, Projects, Entry Opportunities'),
    t('Communities, Netzwerke, lokale Initiativen', 'Communities, Networks, Local Initiatives'),
  ];

  const talentUse = [
    t('Suchen und filtern nach Bedarf, Standort, Voraussetzungen, Format (remote/präsenz)', 'Search and filter by need, location, prerequisites, format (remote/in-person)'),
    t('Vergleichen und verstehen: „passt das zu mir – jetzt?"', 'Compare and understand: "does this fit me — right now?"'),
    t('Finden konkrete nächste Schritte statt nur Inspiration', 'Find concrete next steps instead of just inspiration'),
  ];

  return (
    <Layout>
      {/* ──── 1) HERO ──── */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-foreground/40" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 pt-32">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-accent-lime font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-6">
                {t('NETZWERKPARTNER', 'NETWORK PARTNERS')}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-bold text-white leading-[1] tracking-tight mb-8"
            >
              {t(
                'Mach dein Angebot sichtbar – und bring es zu den Talenten, die es jetzt brauchen.',
                'Make your offer visible — and bring it to the talents who need it now.'
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl max-w-2xl leading-relaxed mb-8 text-secondary"
            >
              {t(
                '2Morrow Lab verbindet engagierte Akteure und ihre Angebote mit Talenten in Übergangsphasen. Kernstück ist unsere Plattform mit dem Marktplatz der Möglichkeiten: die kuratierte Schnittstelle zwischen Angeboten und jungen Menschen auf dem Weg ins Leben.',
                '2Morrow Lab connects committed actors and their offers with talents in transition. At the core is our platform with the Marketplace of Opportunities: the curated interface between offers and young people on their way into life.'
              )}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 mb-10 text-white/80"
            >
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent-lime mt-0.5 shrink-0" />
                <span>{t('In 5–10 Minuten gelistet (Profil später erweiterbar)', 'Listed in 5–10 minutes (profile expandable later)')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent-lime mt-0.5 shrink-0" />
                <span>{t('Mehr Passung statt Streuverlust durch klare Kategorien und Kriterien', 'Better fit instead of scatter loss through clear categories and criteria')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent-lime mt-0.5 shrink-0" />
                <span>{t('Teil eines gemeinsamen Entwicklungsökosystems, nicht nur „Eintrag in einer Liste"', 'Part of a shared development ecosystem, not just "an entry in a list"')}</span>
              </li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mb-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
              >
                {t('Partnerprofil anlegen', 'Create Partner Profile')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-heading font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
              >
                {t('Kurz sprechen (15 Min)', 'Quick call (15 min)')}
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-white/40"
            >
              {t(
                'Wir melden uns mit den nächsten Schritten. Kein Sales-Funnel, klare Absprachen.',
                `We'll get back to you with next steps. No sales funnel, clear agreements.`
              )}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ──── 2) PROBLEM / KONTEXT ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-foreground">
              {t('Viele gute Angebote. Zu wenig Anschluss.', 'Many great offers. Too little connection.')}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                'Jugendliche verlieren an Übergängen oft Orientierung, Mut und Momentum. Gleichzeitig existieren viele starke Programme, Coachings, Förderungen und Entwicklungsangebote. Was fehlt, ist eine Struktur, die diese Vielfalt auffindbar macht, sinnvoll verbindet und Talente kontinuierlich begleitet – statt nur punktuell zu informieren.',
                `Young people often lose orientation, courage, and momentum at transitions. At the same time, many strong programmes, coaching offers, funding, and development opportunities exist. What's missing is a structure that makes this diversity discoverable, connects it meaningfully, and supports talents continuously — instead of just informing them at isolated moments.`
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── 3) LÖSUNG / WAS 2ML IST ──── */}
      <section className="py-24 md:py-32 section-dark noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
              {t('2Morrow Lab: Collective Action + Plattform', '2Morrow Lab: Collective Action + Platform')}
            </h2>
            <p className="text-lg leading-relaxed opacity-80 mb-10">
              {t(
                '2Morrow Lab ist eine Netzwerkorganisation und Collective Action Plattform für eine gemeinsame Vision: Eine Gesellschaft, in der junge Menschen nicht allein entscheiden müssen, sondern ein verlässliches Entwicklungsnetz haben, das sie über Übergänge hinweg begleitet.',
                `2Morrow Lab is a network organisation and Collective Action platform for a shared vision: A society where young people don't have to decide alone, but have a reliable development network that supports them across transitions.`
              )}
            </p>
            <div className="border-l-4 border-accent-lime pl-6 py-4">
              <p className="text-lg md:text-xl font-heading font-semibold">
                {t(
                  'Wir bündeln Angebote, reduzieren Reibung und erhöhen Passung – damit Talente schneller in echte nächste Schritte kommen.',
                  'We bundle offers, reduce friction, and increase fit — so talents reach real next steps faster.'
                )}
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-16 flex justify-center">
            <img
              src={ecosystemDiagram}
              alt={t(
                '2Morrow Lab Ökosystem – Talent Plattform verbindet Eltern & Familien, Unternehmen, Vereine & Verbände sowie Netzwerkpartner & Talentfördernde',
                '2Morrow Lab Ecosystem – Talent Platform connecting parents & families, companies, associations, and network partners'
              )}
              className="w-full max-w-4xl rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ──── 4) MARKTPLATZ DER MÖGLICHKEITEN ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t('Der Marktplatz der Möglichkeiten', 'The Marketplace of Opportunities')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Der Marktplatz ist die kuratierte Schnittstelle zwischen Angeboten und Talenten.',
                'The Marketplace is the curated interface between offers and talents.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground">
                {t('Was dort sichtbar wird', 'What becomes visible')}
              </h3>
              <ul className="space-y-3">
                {marketplaceItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp}>
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground">
                {t('Wie Talente ihn nutzen', 'How talents use it')}
              </h3>
              <ul className="space-y-3">
                {talentUse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
            >
              {t('Angebot im Marktplatz platzieren', 'Place Offer in Marketplace')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              {t('Start mit Minimalprofil – Details später ergänzen.', 'Start with a minimal profile — add details later.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── 5) FÜR WEN ──── */}
      <section className="py-24 md:py-32 section-dark noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              {t('Für wen das Partnernetzwerk gedacht ist', 'Who the partner network is for')}
            </h2>
            <p className="text-lg opacity-70">
              {t(
                'Für alle Akteure, die Talente auf dem Weg ins Leben stärken – mit Angeboten, Ressourcen oder Entwicklungsmöglichkeiten.',
                'For all actors who strengthen talents on their way into life — with offers, resources, or development opportunities.'
              )}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border border-white/10 rounded-2xl p-8 hover:border-accent-lime/30 transition-colors"
              >
                <seg.icon className="w-6 h-6 text-accent-lime mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">{seg.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{seg.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-12">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
            >
              {t('Partnerprofil anlegen', 'Create Partner Profile')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── 6) WAS PARTNER BEKOMMEN ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16 text-foreground">
              {t('Was Partner bekommen', 'What partners get')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="border border-border rounded-2xl p-8"
              >
                <span className="text-accent-lime font-heading font-bold text-sm mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── 7) SO LÄUFT'S AB ──── */}
      <section className="py-24 md:py-32 section-dark noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">
              {t("So läuft's ab", 'How it works')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              >
                <span className="text-accent-lime font-heading text-4xl font-bold block mb-4">{step.num}</span>
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-14">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
            >
              {t('Jetzt Partnerprofil anlegen', 'Create Partner Profile Now')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── 8) PERSPEKTIVE: HOME BASE ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-10 text-foreground">
              {t(
                'Perspektive: Startplatz und Home Base für gute Initiativen',
                'Perspective: Launchpad and Home Base for great initiatives'
              )}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                {t(
                  'Vielfalt ist kein „Nice-to-have", sondern der Kern eines lebendigen Entwicklungsökosystems: unterschiedliche Formate, Methoden, Zielgruppen-Zugänge und regionale Kontexte erhöhen die Chance, dass Talente wirklich etwas finden, das zu ihnen passt.',
                  `Diversity is not a "nice-to-have" — it's the core of a vibrant development ecosystem: different formats, methods, audience access points, and regional contexts increase the chance that talents truly find something that fits them.`
                )}
              </p>
              <p>
                {t(
                  'Es gibt schon heute – und zukünftig immer wieder – starke Angebote für Talente, die nicht am Inhalt scheitern, sondern an Finanzierung, Trägerschaft, Administration, Abrechnung, Kommunikation oder organisatorischem Overhead. Viele Initiativen verschwinden, obwohl sie genau das liefern, was Talente brauchen.',
                  `There are already — and will continue to be — strong offers for talents that don't fail due to content, but due to financing, sponsorship, administration, billing, communication, or organisational overhead. Many initiatives disappear even though they deliver exactly what talents need.`
                )}
              </p>
              <p>
                {t(
                  'Genau hier soll 2Morrow Lab perspektivisch ansetzen: als Startplatz und Home Base, an die Initiativen andocken können, ohne jedes Mal bei Null zu beginnen. Mit geteilter Infrastruktur, Standards, Sichtbarkeit, Netzwerkzugang und der Möglichkeit, Projekte stabil zu tragen und weiterzuentwickeln.',
                  'This is exactly where 2Morrow Lab aims to step in: as a launchpad and home base where initiatives can dock without starting from zero every time. With shared infrastructure, standards, visibility, network access, and the ability to sustainably carry and develop projects.'
                )}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:bg-accent/10 transition-colors duration-200 mt-8"
            >
              {t('Interesse an Incubation/Trägerschaft vormerken', 'Register interest in incubation/sponsorship')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──── 9) FAQ ──── */}
      <section className="py-24 md:py-32 section-dark noise-overlay">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">FAQ</h2>
          </motion.div>

          <motion.div {...fadeUp}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="opacity-70 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ──── 10) FINALER CTA ──── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {t('Teil des Entwicklungsökosystems werden', 'Become part of the development ecosystem')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t(
                'Wenn du Angebote, Ressourcen oder Entwicklungsmöglichkeiten für junge Menschen hast, mach sie sichtbar im Marktplatz der Möglichkeiten. Werde Netzwerkpartner und verbinde Wirkung mit Passung.',
                'If you have offers, resources, or development opportunities for young people, make them visible in the Marketplace of Opportunities. Become a network partner and connect impact with fit.'
              )}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
              >
                {t('Partnerprofil anlegen', 'Create Partner Profile')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-full font-heading font-semibold text-sm hover:bg-accent/10 transition-colors duration-200"
              >
                {t('Kurz sprechen (15 Min)', 'Quick call (15 min)')}
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              {t(
                'Du kannst mit einem Minimalprofil starten und später erweitern.',
                'You can start with a minimal profile and expand later.'
              )}
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NetworkPartners;
