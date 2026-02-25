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

      {/* WHAT YOU GET */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">
              {t('Was dich erwartet', 'What awaits you')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'Life Design Thinking', desc: t('Finde heraus, was dir wirklich wichtig ist.', 'Discover what truly matters to you.') },
                { title: 'Adaptive Leadership', desc: t('Lerne, in Unsicherheit handlungsfähig zu bleiben.', 'Learn to stay capable of action in uncertainty.') },
                { title: t('KI-Co-Pilot', 'AI Co-Pilot'), desc: t('Dein persönlicher Denkpartner.', 'Your personal thinking partner.') },
                { title: t('Begegnungen', 'Encounters'), desc: t('Echte Gespräche mit Menschen aus Wirtschaft und Gesellschaft.', 'Real conversations with people from business and society.') },
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
    </Layout>
  );
};

export default Programs;
