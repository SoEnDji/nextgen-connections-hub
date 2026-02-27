import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const ShiftSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fade} className="space-y-10">
          <div className="inline-block">
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-magenta bg-accent-magenta/10 px-4 py-2 rounded-full">
              {t('Der Wandel', 'The Shift')}
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight text-foreground max-w-3xl">
            {t(
              'Die Welt verändert sich schnell. Die Möglichkeiten sind viele. Die Erwartungen sind hoch.',
              'There was a time when choosing once meant choosing for life.'
            )}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 pt-4">
            <div className="space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Von jungen Menschen wird früh erwartet, sich festzulegen – in einem System, das für gerade Lebensläufe gemacht wurde.',
                  "That time has passed. Today, paths shift. Industries evolve. New ideas appear overnight."
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Nur gibt es heute nicht mehr den einen klaren Weg, auf den man sich verlassen kann.',
                  "That's not chaos. It's possibility."
                )}
              </p>
            </div>
            <div className="flex items-end">
              <p className="font-heading font-bold text-2xl md:text-3xl leading-snug bg-gradient-to-r from-accent via-accent-magenta to-accent-electric bg-clip-text text-transparent">
                {t(
                  '',
                  'And possibility asks one thing: Who are you? And what will you build with it?'
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShiftSection;
