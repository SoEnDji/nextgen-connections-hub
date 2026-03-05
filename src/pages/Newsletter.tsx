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
        <div className="max-w-xl mx-auto px-6">
          <motion.div {...fadeUp}>
            {status === 'success' ? (
              <div className="text-center space-y-6 p-10 rounded-2xl bg-card border border-border">
                <CheckCircle className="w-12 h-12 text-accent-lime mx-auto" />
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {t('Du bist dabei!', "You're in!")}
                </h2>
                <p className="text-muted-foreground">
                  {t(
                    'Danke für deine Anmeldung. Wir melden uns bald bei dir.',
                    'Thanks for subscribing. We\'ll be in touch soon.'
                  )}
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 p-8 md:p-10 rounded-2xl bg-card border border-border"
              >
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground" htmlFor="newsletter-email">
                    {t('E-Mail-Adresse', 'Email address')}
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('deine@email.de', 'your@email.com')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(e) => setOptIn(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 rounded border-border accent-accent"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {t(
                      'Ich stimme dem Erhalt des Newsletters zu und akzeptiere die Datenschutzerklärung. Du kannst dich jederzeit über den Link im Newsletter abmelden.',
                      'I agree to receive the newsletter and accept the data privacy statement. You may unsubscribe at any time using the link in our newsletter.'
                    )}
                  </span>
                </label>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {t(
                      'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
                      'Something went wrong. Please try again.'
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !email || !optIn}
                  className="w-full group inline-flex items-center justify-center gap-2 bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'loading'
                    ? t('Wird gesendet...', 'Submitting...')
                    : t('Newsletter abonnieren', 'Subscribe to Newsletter')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  {t(
                    'Kostenlos. Deine Daten gehören dir.',
                    'Free. Your data belongs to you.'
                  )}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;
