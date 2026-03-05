import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';

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
          <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-white/50">
            {t('Dein nächster Schritt', 'Your Next Step')}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.08]">
            {t(
              'Es gibt nicht den einen richtigen Weg. Aber es gibt deinen nächsten Schritt. Und der beginnt hier.',
              "There's no single right path. But there is your next step. And it starts here."
            )}
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t(
              '🚀 Wir launchen bald! Abonniere unseren Newsletter, um als Erste:r vom Start zu erfahren – oder lade dir jetzt unser kostenloses 2Morrow Lab Life Design Guidebook herunter. Du möchtest 2Morrow Lab aktiv mitgestalten? Über den Newsletter-Signup kannst du dich direkt an der Entwicklung beteiligen.',
              "🚀 We're launching soon! Subscribe to our newsletter to be the first to know – or download our free 2Morrow Lab Life Design Guidebook now. Want to actively shape 2Morrow Lab? Through the newsletter signup, you can directly participate in its development."
            )}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/newsletter"
              className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-10 py-5 rounded-full font-heading font-bold text-base hover:scale-105 transition-transform duration-200"
            >
              {t('Newsletter abonnieren', 'Subscribe to Newsletter')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/newsletter"
              className="group inline-flex items-center gap-2 border-2 border-white/20 text-white px-10 py-5 rounded-full font-heading font-bold text-base hover:bg-white/10 transition-colors duration-200"
            >
              {t('Free Guidebook Download', 'Free Guidebook Download')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
