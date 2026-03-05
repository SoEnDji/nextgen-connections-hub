import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: t('8 von 10', '8 out of 10'),
      desc: t(
        'Schüler:innen fühlen sich vor dem Abitur nicht ausreichend auf das Leben danach vorbereitet.',
        'students feel insufficiently prepared for life after graduation.'
      ),
    },
    {
      value: '89 %',
      desc: t(
        'der Gen Z sagen, dass ein Gefühl von Sinn für ihre Zufriedenheit im Job entscheidend ist.',
        'of Gen Z say a sense of purpose is essential for job satisfaction.'
      ),
    },
    {
      value: '87 %',
      desc: t(
        'berichten von berufsbezogenen Ängsten — von Entscheidungsparalyse bis zur Angst, das Falsche zu wählen.',
        'report career-related anxiety — from decision paralysis to fear of choosing wrong.'
      ),
    },
    {
      value: t('1,1 Jahre', '1.1 years'),
      desc: t(
        'beträgt die durchschnittliche Verweildauer im ersten Job. Viele treffen Entscheidungen, die nicht zu ihnen passen.',
        'is the average tenure in a first job. Many make decisions that don\'t fit them.'
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-foreground noise-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-magenta bg-accent-magenta/10 px-4 py-2 rounded-full">
            {t('Warum das wichtig ist', 'Why this matters')}
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/15 bg-white/8 p-8"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-accent-lime mb-4 tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fade}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed"
        >
          {t(
            'Das Problem ist nicht zu wenig Information. Das Problem ist zu wenig Klarheit darüber, wer du bist und was dich lebendig macht.',
            "The problem isn't too little information. The problem is too little clarity about who you are and what makes you come alive."
          )}
        </motion.p>
      </div>
    </section>
  );
};

export default StatsSection;
