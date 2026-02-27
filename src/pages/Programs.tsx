import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import detailCourt from '@/assets/detail-court.jpg';
import detailWalking from '@/assets/detail-walking.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

const Programs = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance glow-text">
                {t('Programme', 'Programs')}
              </h1>
              <p className="text-lg md:text-xl text-text-hero/60 max-w-2xl">
                {t(
                  'Orientierung ist kein Ziel. Es ist ein Prozess. Unsere Programme begleiten dich dabei.',
                  "Orientation isn't a destination. It's a process. Our programs walk with you."
                )}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:grid grid-cols-2 gap-3">
              <img src={detailCourt} alt="" className="rounded-xl object-cover w-full aspect-[3/4] opacity-50 grayscale-[50%]" />
              <img src={detailWalking} alt="" className="rounded-xl object-cover w-full aspect-[3/4] mt-8 opacity-50 grayscale-[50%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUMMER LAB — IGNITE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
              Summer Lab — Ignite
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t('12 Wochen, in denen du dich ernst nimmst.', 'A 12-week journey.')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>{t(
                'Du klärst, was dir wichtig ist. Du probierst Neues aus. Du entwickelst konkrete nächste Schritte.',
                'Clarify what matters. Experiment. Build real next steps.'
              )}</p>
              <p className="font-heading font-semibold text-foreground">{t(
                'Nicht für den Lebenslauf. Für dein Leben.',
                'Not for your résumé. For your life.'
              )}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent/80 transition-all duration-300">
              {t('Mehr erfahren', 'Learn more')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIFE DESIGN YEAR — INTEGRATE */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent-electric/10 text-accent-electric px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent-electric/20">
              Life Design Year — Integrate
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('Ein Schuljahr, das Entwicklung systematisch verankert.', 'A school year that makes development intentional.')}
            </h2>
            <p className="text-lg text-white/60">
              {t(
                'Schüler:innen. Lehrkräfte. Schulleitung.',
                'Students. Teachers. School leaders.'
              )}
            </p>
            <div className="space-y-2 max-w-3xl">
              <p className="text-white/60 font-heading font-semibold">
                {t('Wir arbeiten entlang klarer Entwicklungsbausteine:', 'Built around clear development pillars:')}
              </p>
              <ul className="space-y-3">
                {[
                  t('Standortbestimmung und Zielklärung', 'Personal profiling & goal clarity'),
                  t('Praxisorientierte Entwicklungsprojekte', 'Practice-based development projects'),
                  t('KI-gestützte Reflexionsstruktur', 'AI-supported reflection structure'),
                  t('Agency Index und Wirkungsmessung', 'Agency Index & measurable impact'),
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60">
                    <ArrowRight className="w-4 h-4 mt-1 text-accent-electric flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
              {t(
                'Regelmäßige Reflexion. Konkrete Umsetzung. Messbare Entwicklung.',
                'Structured reflection. Real implementation. Visible growth.'
              )}
            </p>
            <p className="font-heading font-semibold text-white text-lg">
              {t(
                'Kein Zusatzprogramm. Ein integrierter Entwicklungsprozess.',
                'Not an add-on workshop. An integrated development process.'
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-electric text-white px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-electric/80 transition-all duration-300">
              {t('Mehr erfahren', 'Learn more')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM SUMMIT — LEAD */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent-magenta/10 text-accent-magenta px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent-magenta/20">
              Ecosystem Summit — Lead
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t('Zwei Tage, an denen Generationen zusammenkommen.', 'A 2-day regional leadership and future skills gathering.')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Schüler:innen. Schulleitungen. Unternehmer:innen.',
                'Students. School leaders. Business leaders.'
              )}
            </p>
            <div className="space-y-2 max-w-3xl">
              <p className="text-muted-foreground font-heading font-semibold">
                {t('Wir sprechen über echte Fragen:', 'We explore:')}
              </p>
              <ul className="space-y-3">
                {[
                  t('Wie bleiben Organisationen resilient?', 'How do we build resilient organizations?'),
                  t('Wie gewinnen und halten wir junge Talente?', 'How do we attract and retain Gen Z talent?'),
                  t('Welche Fähigkeiten brauchen wir morgen?', 'What leadership does rapid change require?'),
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 mt-1 text-accent-magenta flex-shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {t(
                'Gemeinsame Labs. Geschützte Leadership-Räume. Ehrlicher Austausch.',
                'Cross-generational labs. Leadership-only sessions. Real conversations.'
              )}
            </p>
            <p className="font-heading font-semibold text-foreground text-lg">
              {t(
                'Keine Karrieremesse. Ein Ort, an dem Zukunft gestaltet wird.',
                'Not a conference. A regional resilience lab.'
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-magenta text-white px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-magenta/80 transition-all duration-300">
              {t('Mehr erfahren', 'Learn more')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;