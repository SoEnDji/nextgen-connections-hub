import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '@/assets/editorial-hero.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}>

            <p className="text-accent-lime font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-6">
              {t('SINN STATT AUTOPILOT', 'PURPOSE OVER AUTOPILOT')}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="font-heading text-[clamp(2.5rem,8vw,6rem)] font-bold text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">

            <span className="text-white">
              {t('Du brauchst keinen Masterplan.', "You don't need a masterplan.")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-lime via-accent-electric to-accent bg-clip-text text-transparent">
              {t('Du brauchst einen Prototypen.', 'You need a prototype.')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-lg md:text-xl max-w-md leading-relaxed mb-10 text-secondary">

            {t(
              'Dein Leben ist ein Designprojekt. Kein Rätsel, das gelöst werden muss.\n2Morrow Lab hilft dir herauszufinden, was dich wirklich lebendig macht und wie du leben möchtest, um dann daraus deine Zukunft zu bauen.',
              "Your life is a design project. Not a puzzle to be solved.\n2Morrow Lab helps you discover what truly makes you come alive and how you want to live — then build your future from it."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-wrap gap-4">

            <Link
              to="/der-weg"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-heading font-semibold text-sm hover:bg-white/10 transition-colors duration-200">

              {t('Wie funktioniert das?', 'How does it work?')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
