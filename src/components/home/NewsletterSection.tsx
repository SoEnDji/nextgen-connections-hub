import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const NewsletterSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 bg-foreground">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...fade} className="space-y-8">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
            {t('Bleib nah dran.', "If you're ready to build something that fits you —")}
          </h2>
          <p className="text-xl text-white/50">
            {t(
              'Einladungen. Impulse. Neue Formate. Direkt in dein Postfach.',
              'Step in.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
            <input
              type="email"
              placeholder={t('Deine E-Mail-Adresse', 'Your email address')}
              className="flex-1 px-6 py-4 rounded-full border-0 bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent-lime/50 backdrop-blur-sm text-sm"
            />
            <button className="bg-accent-lime text-foreground px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200 whitespace-nowrap">
              {t('Newsletter abonnieren', 'Subscribe')}
            </button>
          </div>
          <p className="text-xs text-white/30">
            {t('Newsletter-Integration kommt bald.', 'Newsletter integration coming soon.')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
