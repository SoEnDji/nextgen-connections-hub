import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import workshopImg from '@/assets/workshop.jpg';
import aboutImg from '@/assets/about.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance"
          >
            {t('Warum es 2Morrow Lab gibt', 'Why 2Morrow Lab exists')}
          </motion.h1>
        </div>
      </section>

      {/* WARUM */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t(
              'Junge Menschen wachsen in einer Welt auf, in der sich Rahmenbedingungen schneller verändern, als man sie planen kann.',
              'Young people are growing up in a world where conditions shift faster than anyone can plan for.'
            )}</p>
            <p>{t(
              'Gleichzeitig wird von ihnen erwartet, früh klar zu sein. Sich festzulegen. Sich zu entscheiden.',
              "At the same time, they are expected to have it figured out. To commit. To decide."
            )}</p>
            <p className="text-foreground font-medium text-xl">{t(
              'Orientierung entsteht nicht durch Druck. Sondern durch Selbstkenntnis, Erfahrung und tragfähige Beziehungen.',
              "Orientation doesn't come from pressure. It comes from self-knowledge, experience, and meaningful relationships."
            )}</p>
            <p>{t(
              'Aus dieser Überzeugung ist 2Morrow Lab entstanden.',
              'This conviction is what gave birth to 2Morrow Lab.'
            )}</p>
          </motion.div>
        </div>
      </section>

      {/* UNSERE ERFAHRUNG */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <img src={workshopImg} alt={t('Workshop', 'Workshop')} className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('Unsere Erfahrung', 'Our Experience')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t(
                  'Schule kennen wir nicht nur aus Konzeptpapieren.',
                  "We don't know school from concept papers alone."
                )}</p>
                <p>{t(
                  'Als Fellows bei Teach First Deutschland waren wir zwei Jahre an herausfordernden Schulen tätig – in einem Umfeld mit hohen sozialen und strukturellen Anforderungen.',
                  "As Teach First Deutschland fellows, we spent two years at high-challenge schools \u2014 in environments with intense social and structural demands."
                )}</p>
                <p>{t(
                  'Heute arbeiten wir mit jungen Menschen, Schulen und Organisationen an Fragen von Selbstführung, Leadership und Zukunftsgestaltung.',
                  'Today, we work with young people, schools, and organizations on questions of self-leadership, leadership development, and shaping the future.'
                )}</p>
                <p className="text-foreground font-medium">{t(
                  '2Morrow Lab verbindet beide Welten.',
                  '2Morrow Lab connects both worlds.'
                )}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORAUF WIR AUFBAUEN */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('Worauf wir aufbauen', 'What we build on')}</h2>
            <p className="text-lg text-foreground font-medium">{t(
              '2Morrow Lab ist kein Konzept auf dem Papier.',
              "2Morrow Lab isn't a concept on paper."
            )}</p>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{t(
                'Über 120 junge Menschen haben bereits an unseren Pilotprogrammen teilgenommen.',
                'Over 120 young people have already participated in our pilot programs.'
              )}</p>
              <p>{t(
                'Mit der Sportschule Potsdam entwickeln wir Schule als Ökosystem weiter – mit jungen Leistungssportlerinnen und -sportlern.',
                "Together with Sportschule Potsdam, we are evolving school as an ecosystem \u2014 with young competitive athletes."
              )}</p>
              <p>{t(
                'Gemeinsam mit dem United World College Mostar entwickeln wir Formate für innovatives Alumni-Engagement – geführt von aktuellen Schülerinnen und Schülern aus aller Welt.',
                "With United World College Mostar, we are developing formats for innovative alumni engagement \u2014 led by current students from around the world."
              )}</p>
            </div>

            <div className="pt-8">
              <p className="font-heading font-semibold text-foreground mb-6">{t('Unsere Arbeit verbindet:', 'Our work connects:')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Life Design Thinking',
                  'Adaptive Leadership',
                  t('Entwicklungspartnerschaften', 'Development Partnerships'),
                  t('Schule als Ökosystem', 'School as Ecosystem'),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-heading font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-foreground font-medium pt-4">
              {t('Nicht als Theorie. Sondern als Praxis.', 'Not as theory. As practice.')}
            </p>

            {/* Partner logos placeholder */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-heading">{t('Partner', 'Partners')}</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="px-6 py-3 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">Sportschule Potsdam</div>
                <div className="px-6 py-3 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">UWC Mostar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
