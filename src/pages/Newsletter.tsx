import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const Newsletter = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient noise-overlay relative overflow-hidden py-32 md:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-text-hero/50">
              {t('Newsletter', 'Newsletter')}
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight glow-text">
              {t('Bleib auf dem Laufenden', 'Stay in the Loop')}
            </h1>
            <p className="text-lg text-text-hero/60 max-w-2xl">
              {t(
                'Melde dich für den 2morrow Lab Newsletter an und erhalte Updates zu Programmen, Insights und Early-Access-Möglichkeiten.',
                'Sign up for the 2morrow Lab newsletter and get updates on programs, insights, and early access opportunities.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <iframe
              src="https://ef9fdca1.sibforms.com/serve/MUIFAFKCfXrkUJy1k5jZLkXSHUrM82zTU-h428AlVvOQm_AoHduOR1SDpLFKeHrNqat1tdVhPlUv-DzY8pY8-QniwLexyOTxHO8K4QX7Tfbz2bP4h9I_vVcniuNt5nHYvUlLbTr98T81qIXqbwvMzCCZwBYvtvzdYcrUe539-Ge30QlGxkxHlYubByLWkDtip1oDP1_3jiGSjtMe6A=="
              width="100%"
              height="520"
              frameBorder="0"
              scrolling="auto"
              className="rounded-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
