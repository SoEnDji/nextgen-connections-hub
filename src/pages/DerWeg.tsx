import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import effizienzPrinzip from '@/assets/effizienz-prinzip.png';
import lifeDesignPrinzip from '@/assets/life-design-prinzip.png';

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.6, ease },
};

const DerWeg = () => {
  const { t } = useLanguage();

  const dimensions = [
    {
      name: t('Selbstklarheit', 'Self-Clarity'),
      meaning: t(
        'Ich weiß, was mich lebendig macht. Ich kenne meine Werte, meine Flow-Momente, meine Muster.',
        'I know what makes me come alive. I know my values, my flow moments, my patterns.'
      ),
      visible: t(
        'Kompass ausgefüllt. Kohärenz-Tagebuch zeigt wiederkehrende Muster. Eigene Worte für das, was zählt.',
        'Compass filled out. Coherence journal shows recurring patterns. Own words for what matters.'
      ),
    },
    {
      name: t('Entscheidungs\u00ADfähigkeit', 'Decision-Making Ability'),
      meaning: t(
        'Ich kann wählen, ohne alles wissen zu müssen. Ich entscheide, auch wenn es unsicher ist.',
        'I can choose without needing to know everything. I decide, even when it\'s uncertain.'
      ),
      visible: t(
        'Zukunftsvisionen entworfen. Optionen gegen Kompass geprüft. Entscheidung getroffen — auch eine kleine.',
        'Future visions designed. Options checked against compass. Decision made — even a small one.'
      ),
    },
    {
      name: t('Umsetzungs\u00ADfähigkeit', 'Implementation Ability'),
      meaning: t(
        'Ich komme ins Handeln. Ich probiere aus, statt nur nachzudenken.',
        'I take action. I try things out instead of just thinking.'
      ),
      visible: t(
        'Prototypen geplant und durchgeführt. Erfahrungen dokumentiert. Nächste Schritte definiert.',
        'Prototypes planned and executed. Experiences documented. Next steps defined.'
      ),
    },
    {
      name: t('Selbst\u00ADwirksamkeit', 'Self-Efficacy'),
      meaning: t(
        'Ich glaube, dass mein Handeln etwas bewirkt. Ich sehe mich als Gestalter:in, nicht als Passagier:in.',
        'I believe my actions make a difference. I see myself as a creator, not a passenger.'
      ),
      visible: t(
        'Reframing-Momente (Got To → Get To). Eigene Geschichte formuliert. Kompass-Werte werden zur Entscheidungsgrundlage.',
        'Reframing moments (Got To → Get To). Own story articulated. Compass values become decision basis.'
      ),
    },
    {
      name: t('Netzwerk\u00ADaktivierung', 'Network Activation'),
      meaning: t(
        'Ich aktiviere Menschen für meinen Weg. Ich hole mir Unterstützung und gebe sie.',
        'I activate people for my path. I seek support and give it.'
      ),
      visible: t(
        'Pod-Teilnahme. Prototyping-Gespräche. Wegbegleiter:innen kontaktiert. Feedback eingeholt.',
        'Pod participation. Prototyping conversations. Companions contacted. Feedback gathered.'
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h1
            {...fade}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            {t('Der Weg', 'The Path')}
          </motion.h1>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="font-heading text-lg md:text-xl text-accent-electric font-semibold"
          >
            {t('Kein Fahrplan. Eine Expedition.', 'No roadmap. An expedition.')}
          </motion.p>
        </div>
      </section>

      {/* Intro + Bilder */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t(
                'Die meisten Orientierungsangebote funktionieren wie ein Navi: Ziel eingeben, Route berechnen. Das Problem: Du kennst das Ziel noch nicht. 2Morrow Lab gibt dir die Werkzeuge, deinen Weg selbst zu finden.',
                'Most orientation programs work like a GPS: enter destination, calculate route. The problem: you don\'t know the destination yet. 2Morrow Lab gives you the tools to find your own path.'
              )}
            </p>
          </motion.div>

          {/* Prinzip-Vergleich Bilder */}
          <motion.div {...fade} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src={effizienzPrinzip}
              alt="Das alte Effizienz Prinzip — ein optimierter, direkter Pfad zum klar definierten Ziel"
              className="w-full rounded-2xl border border-border"
            />
            <img
              src={lifeDesignPrinzip}
              alt="Life Design Prinzip — mehrere Pfade, mehrere Startpunkte, veränderliche Ziele"
              className="w-full rounded-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Warum dieser Ansatz funktioniert */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              {t('Warum dieser Ansatz funktioniert', 'Why this approach works')}
            </h2>
            <p className="text-white/60 text-lg mb-12">
              {t(
                'Drei Prinzipien aus der Wissenschaft der Individualität:',
                'Three principles from the science of individuality:'
              )}
            </p>
          </motion.div>

          <div className="space-y-10">
            {/* Prinzip 1 */}
            <motion.div {...fade} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-3 block">
                01
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                {t('Dein Profil ist gezackt', 'Your profile is jagged')}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t(
                  'Dein Talent besteht aus vielen Dimensionen. Kein einzelner Test erfasst, wer du bist. Wir helfen dir, dein einzigartiges Profil zu sehen.',
                  'Your talent consists of many dimensions. No single test captures who you are. We help you see your unique profile.'
                )}
              </p>
            </motion.div>

            {/* Prinzip 2 */}
            <motion.div {...fade} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-3 block">
                02
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                {t('Kontext bestimmt alles', 'Context determines everything')}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t(
                  'Du bist introvertiert WENN du auf Events bist, extrovertiert WENN du mit Freunden am Tisch sitzt. Diese Muster zu kennen, ist mächtiger als jedes Label.',
                  'You\'re introverted WHEN you\'re at events, extroverted WHEN you\'re sitting with friends. Knowing these patterns is more powerful than any label.'
                )}
              </p>
            </motion.div>

            {/* Prinzip 3 */}
            <motion.div {...fade} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-3 block">
                03
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                {t('Es gibt keinen normalen Weg', 'There is no normal path')}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t(
                  'Forscher fanden 25 Arten zu krabbeln, 7 Pfade zum wissenschaftlichen Erfolg. Tempo hat nichts mit Fähigkeit zu tun.',
                  'Researchers found 25 ways to crawl, 7 paths to scientific success. Pace has nothing to do with ability.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dein Handlungskraft-Profil */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade} className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('Dein Handlungskraft-Profil', 'Your Agency Profile')}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
              <p>
                {t(
                  'Wie weißt du, dass du weiterkommst? Nicht durch eine Note. Nicht durch einen Test. Sondern dadurch, dass du spürst: Ich handle anders als vor drei Monaten. Ich entscheide klarer. Ich weiß besser, wer ich bin.',
                  'How do you know you\'re making progress? Not through a grade. Not through a test. But by sensing: I act differently than three months ago. I decide more clearly. I know better who I am.'
                )}
              </p>
              <p>
                {t(
                  'Dein Handlungskraft-Profil macht das sichtbar. Fünf Dimensionen, die sich unabhängig voneinander entwickeln — wie ein gezacktes Profil, nicht wie ein Thermometer.',
                  'Your Agency Profile makes this visible. Five dimensions that develop independently — like a jagged profile, not like a thermometer.'
                )}
              </p>
            </div>
          </motion.div>

          {/* Dimensionen-Tabelle */}
          <motion.div {...fade} className="mb-12">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
              {t('Die fünf Dimensionen', 'The five dimensions')}
            </h3>

            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left font-heading font-bold text-foreground p-4 w-[20%]">
                      {t('Dimension', 'Dimension')}
                    </th>
                    <th className="text-left font-heading font-bold text-foreground p-4 w-[40%]">
                      {t('Was sie bedeutet', 'What it means')}
                    </th>
                    <th className="text-left font-heading font-bold text-foreground p-4 w-[40%]">
                      {t('Wie sie sichtbar wird', 'How it becomes visible')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dimensions.map((dim, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 font-heading font-bold text-accent-lime align-top">
                        {dim.name}
                      </td>
                      <td className="p-4 text-muted-foreground leading-relaxed align-top">
                        {dim.meaning}
                      </td>
                      <td className="p-4 text-muted-foreground leading-relaxed align-top">
                        {dim.visible}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {dimensions.map((dim, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-heading font-bold text-accent-lime mb-2">{dim.name}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{dim.meaning}</p>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed border-t border-border pt-3">
                    {dim.visible}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wichtig-Hinweis */}
          <motion.div {...fade} className="max-w-3xl">
            <div className="rounded-2xl border border-accent-lime/20 bg-accent-lime/5 p-6 mb-12">
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">
                  {t('Wichtig:', 'Important:')}
                </strong>{' '}
                {t(
                  'Das ist kein Score und kein Ranking. Jede Dimension entwickelt sich in ihrem eigenen Tempo. Du kannst hohe Selbstklarheit und niedrige Umsetzungsfähigkeit haben — das ist kein Defizit, das ist dein gezacktes Profil. Genau wie bei Rose: Kein Mensch ist durchschnittlich.',
                  'This is not a score or ranking. Each dimension develops at its own pace. You can have high self-clarity and low implementation ability — that\'s not a deficit, that\'s your jagged profile. Just like Rose: no person is average.'
                )}
              </p>
            </div>

            {/* Wie du es erlebst */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
              {t('Wie du es erlebst', 'How you experience it')}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                {t(
                  'An drei Punkten auf deiner Reise stellst du dir ehrliche Fragen. Keine Ankreuz-Felder, keine Skalen von 1 bis 10. Sondern Fragen, die wirklich etwas zeigen: „Denk an die letzte wichtige Entscheidung. Wie hat sie sich angefühlt?"',
                  'At three points on your journey, you ask yourself honest questions. No checkboxes, no scales from 1 to 10. But questions that truly reveal something: "Think about the last important decision. How did it feel?"'
                )}
              </p>
              <p>
                {t(
                  'Dein Profil zeigt dir fünf Bereiche, die sich unabhängig voneinander entwickeln. Wie ein Equalizer, bei dem jeder Regler seinen eigenen Weg geht. Dazu siehst du deine eigenen Worte von damals neben denen von heute. Das ist ehrlicher als jede Zahl.',
                  'Your profile shows you five areas that develop independently. Like an equalizer where each slider goes its own way. Plus you see your own words from back then alongside today\'s. That\'s more honest than any number.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Was wir gerade bauen — Teaser */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-magenta mb-4 block">
              {t('Teaser', 'Teaser')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t('Was wir gerade bauen', 'What we\'re building')}
            </h2>
            <p className="text-white/80 leading-relaxed mb-10">
              {t(
                'Wir arbeiten an einem AI-Begleiter, der deinen Kompass kennt, Muster erkennt, dein Handlungskraft-Profil kontextualisiert und sich deinem Tempo anpasst. Bis er fertig ist, starten wir mit dem, was schon funktioniert.',
                'We\'re building an AI companion that knows your compass, recognizes patterns, contextualizes your agency profile, and adapts to your pace. Until it\'s ready, we start with what already works.'
              )}
            </p>

            {/* Companion-Beispiel */}
            <div className="rounded-2xl border border-accent-electric/20 bg-accent-electric/5 p-8 mb-10">
              <p className="text-xs font-heading font-bold tracking-[0.2em] uppercase text-accent-electric/60 mb-3">
                {t('Companion + Handlungskraft-Profil (später)', 'Companion + Agency Profile (later)')}
              </p>
              <p className="text-white/80 leading-relaxed italic">
                {t(
                  '„Deine Selbstklarheit hat sich stark entwickelt — du hast vor 6 Wochen geschrieben: ‚Ich weiß nicht, was ich will.\u2018 Heute hast du drei Kompass-Werte und ein Flow-Muster. Deine Umsetzungsfähigkeit wartet noch. Wollen wir einen kleinen Prototypen planen?"',
                  '"Your self-clarity has developed strongly — 6 weeks ago you wrote: \'I don\'t know what I want.\' Today you have three compass values and a flow pattern. Your implementation ability is still waiting. Shall we plan a small prototype?"'
                )}
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/newsletter"
                className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-10 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-transform duration-200"
              >
                {t('Early Access sichern', 'Get Early Access')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Media Section */}
            <div className="pt-12 flex flex-col items-center gap-6">
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {t(
                  'Keine Lust auf Newsletter oder Guidbook? Dann folge uns bei Insta oder abboniere unseren WhatsApp Channel',
                  "Not interested in the newsletter or guidebook? Follow us on Instagram or subscribe to our WhatsApp Channel"
                )}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/2morrow_lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-lime text-foreground hover:scale-110 transition-transform duration-200 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-lime text-foreground hover:scale-110 transition-transform duration-200 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-7 h-7" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drei Phasen */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
              {t('Drei Phasen', 'Three Phases')}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <motion.div {...fade} className="rounded-2xl border border-border bg-card p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-3 block">
                {t('Phase 1', 'Phase 1')}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                {t('Erkenne, was dich lebendig macht', 'Discover what makes you come alive')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t(
                  'Kompass, Kohärenz-Tagebuch, Flow-Radar, Staunen-Impulse.',
                  'Compass, Coherence Journal, Flow Radar, Wonder Impulses.'
                )}
              </p>
              <p className="text-accent-lime text-sm font-medium">
                {t('Stärkt vor allem: Selbstklarheit.', 'Primarily strengthens: Self-Clarity.')}
              </p>
            </motion.div>

            {/* Phase 2 */}
            <motion.div {...fade} className="rounded-2xl border border-border bg-card p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-electric mb-3 block">
                {t('Phase 2', 'Phase 2')}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                {t('Baue Prototypen statt Pläne', 'Build prototypes, not plans')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t(
                  'Zukunftsvisionen, Prototyping-Experimente, Reframing.',
                  'Future visions, Prototyping experiments, Reframing.'
                )}
              </p>
              <p className="text-accent-electric text-sm font-medium">
                {t(
                  'Stärkt vor allem: Entscheidungsfähigkeit + Umsetzungsfähigkeit.',
                  'Primarily strengthens: Decision-Making + Implementation.'
                )}
              </p>
            </motion.div>

            {/* Phase 3 */}
            <motion.div {...fade} className="rounded-2xl border border-border bg-card p-8">
              <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-magenta mb-3 block">
                {t('Phase 3', 'Phase 3')}
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                {t('Wachse mit Menschen, die es ernst meinen', 'Grow with people who mean it')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t(
                  'Formative Pods, Wegbegleiter:innen, Netzwerk.',
                  'Formative Pods, Companions, Network.'
                )}
              </p>
              <p className="text-accent-magenta text-sm font-medium">
                {t(
                  'Stärkt vor allem: Netzwerkaktivierung + Selbstwirksamkeit.',
                  'Primarily strengthens: Network Activation + Self-Efficacy.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fünf Haltungen */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
              {t('Fünf Haltungen', 'Five Mindsets')}
            </h2>
          </motion.div>

          <motion.ul {...fade} className="space-y-6">
            {[
              {
                de: 'Staunen — sich überraschen lassen',
                en: 'Wonder — let yourself be surprised',
              },
              {
                de: 'Bereitschaft — offen für das, was kommt',
                en: 'Readiness — open to what comes',
              },
              {
                de: 'Radikale Akzeptanz — sehen, was ist',
                en: 'Radical Acceptance — see what is',
              },
              {
                de: 'Voll dabei, gelassen losgelöst — alles geben, am Ergebnis nicht festklammern',
                en: 'Fully engaged, calmly detached — give everything, don\'t cling to the outcome',
              },
              {
                de: 'Gestalte deine Welt — du bist Autor:in. Jeden Tag.',
                en: 'Shape your world — you are the author. Every day.',
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-white/80 leading-relaxed"
              >
                <span className="font-heading text-accent-lime font-bold text-lg mt-0.5">•</span>
                <span>{t(item.de, item.en)}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2 {...fade} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t('Bereit für deinen nächsten ersten Schritt?', 'Ready for your next first step?')}
          </motion.h2>
          <motion.div {...fade}>
            <Link
              to="/newsletter"
              className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-10 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-transform duration-200"
            >
              {t('Early Access sichern', 'Get Early Access')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DerWeg;
