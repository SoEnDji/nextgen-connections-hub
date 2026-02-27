import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import editorialWorkshop from '@/assets/editorial-workshop.jpg';
import detailCourt from '@/assets/detail-court.jpg';
import detailWalking from '@/assets/detail-walking.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Programs = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO — tighter with image cluster */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6"
            >
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
              className="lg:col-span-2 hidden lg:grid grid-cols-2 gap-3"
            >
              <img src={detailCourt} alt="" className="rounded-xl object-cover w-full aspect-[3/4] opacity-50 grayscale-[50%]" />
              <img src={detailWalking} alt="" className="rounded-xl object-cover w-full aspect-[3/4] mt-8 opacity-50 grayscale-[50%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* EARLY COHORT — split layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div {...fadeUp} className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
                {t('Jetzt bewerben', 'Apply now')}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {t('Early Cohort', 'Early Cohort')}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t(
                  'Die Early Cohort ist der erste Jahrgang von 2Morrow Lab. Für junge Menschen, die nicht warten wollen, bis sich der Weg von selbst zeigt.',
                  "The Early Cohort is the first class of 2Morrow Lab. For young people who aren't waiting for the path to reveal itself."
                )}</p>
                <p>{t(
                  'Du arbeitest an deinen eigenen Fragen — mit einem KI-Co-Piloten, in echten Begegnungen mit Unternehmen und mit einem Netzwerk, das dich trägt.',
                  "You work on your own questions — with an AI Co-Pilot, in real encounters with companies, and with a network that supports you."
                )}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent"
              >
                {t('Zur Early Cohort', 'Join the Early Cohort')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-2 relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/15 to-accent-electric/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src={editorialWorkshop} alt={t('Workshop', 'Workshop')} className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUMMER LAB — IGNITE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
                {t('12 Wochen', '12 weeks')}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Summer Lab — <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">Ignite</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Eine 12-wöchige Sommerreise. Kläre, was dir wichtig ist. Experimentiere. Baue echte nächste Schritte.',
                  'A 12-week summer journey. Clarify what matters. Experiment. Build real next steps.'
                )}
              </p>
              <p className="text-base font-heading font-semibold text-foreground">
                {t(
                  'Nicht für deinen Lebenslauf. Für dein Leben.',
                  'Not for your résumé. For your life.'
                )}
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/15 to-accent-glow/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src={detailCourt} alt={t('Sommercamp', 'Summer lab')} className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIFE DESIGN YEAR — INTEGRATE */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
              {t('Schulpartnerschaft', 'School partnership')}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text leading-tight">
              Life Design Year — <span className="text-accent">Integrate</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              {t(
                'Eine ganzjährige Schulpartnerschaft. Reflexion. Experimentieren. KI-gestützte Check-ins. Messbares Wachstum durch den Agency Index.',
                'A full-year school partnership. Reflection. Experimentation. AI-supported check-ins. Measurable growth through the Agency Index.'
              )}
            </p>
            <p className="text-base font-heading font-semibold text-white">
              {t(
                'Entwicklung ist kein einmaliger Workshop. Es ist etwas, das du übst.',
                "Development isn't a one-off workshop. It's something you practice."
              )}
            </p>
            <div className="grid sm:grid-cols-2 gap-5 pt-4">
              {[
                { title: t('Reflexion', 'Reflection'), desc: t('Regelmäßige Selbstreflexion als Praxis.', 'Regular self-reflection as practice.') },
                { title: t('Experimentieren', 'Experimentation'), desc: t('Neue Wege ausprobieren — mit Begleitung.', 'Try new paths — with support.') },
                { title: t('KI-Check-ins', 'AI Check-ins'), desc: t('Dein persönlicher Denkpartner begleitet dich.', 'Your personal thinking partner walks with you.') },
                { title: 'Agency Index', desc: t('Messbares Wachstum über das Jahr.', 'Measurable growth across the year.') },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl gradient-card border border-white/10 card-hover">
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ECOSYSTEM SUMMIT — LEAD */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
              {t('2 Tage', '2 days')}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Ecosystem Summit — <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">Lead</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {t(
                'Ein 2-tägiges regionales Treffen zu Leadership und Future Skills. Schüler:innen. Schulleiter:innen. Unternehmensführer:innen.',
                'A 2-day regional leadership and future skills gathering. Students. School leaders. Business leaders.'
              )}
            </p>
            <div className="space-y-3">
              <p className="text-base font-heading font-semibold text-foreground">
                {t('Wir erkunden:', 'We explore:')}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  t('Wie bauen wir resiliente Organisationen?', 'How do we build resilient organizations?'),
                  t('Wie gewinnen und halten wir Gen-Z-Talente?', 'How do we attract and retain Gen Z talent?'),
                  t('Welche Führung erfordert schneller Wandel?', 'What leadership does rapid change require?'),
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t(
                'Generationenübergreifende Labs. Leadership-Sessions. Echte Gespräche.',
                'Cross-generational labs. Leadership-only sessions. Real conversations.'
              )}
            </p>
            <p className="text-base font-heading font-semibold text-foreground">
              {t(
                'Keine Konferenz. Ein regionales Resilienz-Lab.',
                'Not a conference. A regional resilience lab.'
              )}
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
