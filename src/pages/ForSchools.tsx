import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import schoolImg from '@/assets/school.jpg';

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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={schoolImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance">
              {t(
                'Schule als Ökosystem denken.',
                'Rethinking school as an ecosystem.'
              )}
            </h1>
            <p className="text-lg md:text-xl text-text-hero/70 max-w-2xl">
              {t(
                'Entwicklung nachhaltig verankern – für Schüler:innen, Lehrkräfte und die ganze Schulgemeinschaft.',
                "Embedding growth sustainably \u2014 for students, educators, and the entire school community."
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-colors"
            >
              {t('Pilotgespräch vereinbaren', 'Schedule a Pilot Talk')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t(
                'Schulen sind mehr als Lernorte. Sie sind Lebensräume.',
                'Schools are more than learning spaces. They are living ecosystems.'
              )}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{t(
                '2Morrow Lab arbeitet mit Schulen, die bereit sind, Entwicklung neu zu denken – nicht als Zusatzprojekt, sondern als Teil der Schulkultur.',
                "2Morrow Lab partners with schools ready to rethink development \u2014 not as an add-on, but as part of school culture."
              )}</p>
              <p>{t(
                'Unsere Programme verbinden Life Design, Adaptive Leadership und echte Begegnung – eingebettet in den schulischen Alltag.',
                "Our programs connect Life Design, Adaptive Leadership, and real encounter \u2014 embedded in daily school life."
              )}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                t('Pilotprogramme für Schulentwicklung', 'Pilot programs for school development'),
                t('Workshops für Schüler:innen', 'Workshops for students'),
                t('Fortbildungen für Lehrkräfte', 'Training for educators'),
                t('Langfristige Entwicklungspartnerschaften', 'Long-term development partnerships'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-heading font-semibold text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-hero">
              {t('Bereit, Schule neu zu denken?', 'Ready to rethink school?')}
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-accent-glow transition-colors"
            >
              {t('Pilotgespräch vereinbaren', 'Schedule a Pilot Talk')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ForSchools;
