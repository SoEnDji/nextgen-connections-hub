import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      {/* HERO — split with inline image */}
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
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance glow-text">
                {t(
                  'Schule als Ökosystem denken.',
                  'Rethinking school as an ecosystem.'
                )}
              </h1>
              <p className="text-lg md:text-xl text-text-hero/60 max-w-2xl">
                {t(
                  'Entwicklung nachhaltig verankern – für Schüler:innen, Lehrkräfte und die ganze Schulgemeinschaft.',
                  "Embedding growth sustainably — for students, educators, and the entire school community."
                )}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent"
              >
                {t('Pilotgespräch vereinbaren', 'Schedule a Pilot Talk')}
                <ArrowRight className="w-4 h-4" />
              </Link>
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

      {/* VISION */}
      <section className="py-16 md:py-24 bg-background">
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
                '2Morrow Lab arbeitet mit Schulen, die bereit sind, die Entwicklung und Zukunftsgestaltung ihrer Schülerinnen und Schüler neu zu denken. Nicht als Zusatzprojekt, sondern als Teil der Schulkultur.',
                "2Morrow Lab partners with schools ready to rethink how their students grow and shape their futures. Not as an add-on, but as part of school culture."
              )}</p>
              <p>{t(
                'Unsere Programme verbinden Life Design, Adaptive Leadership und echte Begegnung – eingebettet in den schulischen Alltag.',
                "Our programs connect Life Design, Adaptive Leadership, and real encounter — embedded in daily school life."
              )}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                t('Pilotprogramme für Schulentwicklung', 'Pilot programs for school development'),
                t('Workshops für Schüler:innen', 'Workshops for students'),
                t('Fortbildungen für Lehrkräfte', 'Training for educators'),
                t('Langfristige Entwicklungspartnerschaften', 'Long-term development partnerships'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-hover">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-heading font-semibold text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-hero glow-text">
              {t('Bereit, Schule neu zu denken?', 'Ready to rethink school?')}
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-accent-glow transition-all duration-300 glow-accent"
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
