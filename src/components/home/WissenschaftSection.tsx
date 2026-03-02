import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const WissenschaftSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fade} className="space-y-8">
          <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-electric bg-accent-electric/10 px-4 py-2 rounded-full">
            {t('Wissenschaft, die nicht langweilig ist', 'Science that isn\'t boring')}
          </span>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t(
              '2Morrow Lab basiert auf den Methoden des Life Design — entwickelt an der Stanford University, erprobt mit tausenden jungen Menschen weltweit. Kein theoretisches Konzept, sondern ein praktischer Prozess: erkunden, ausprobieren, reflektieren, weitermachen.',
              '2Morrow Lab is based on Life Design methods — developed at Stanford University, tested with thousands of young people worldwide. Not a theoretical concept, but a practical process: explore, experiment, reflect, move forward.'
            )}
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
            {t(
              'Wir haben diesen Ansatz für deine Realität angepasst: für die Übergangsphase von Schule oder Studium ins Leben. Für eine Generation, die mehr Möglichkeiten hat als jede zuvor — und genau deshalb einen Kompass braucht, keine weitere Optionenliste.',
              "We've adapted this approach for your reality: for the transition from school or university into life. For a generation with more options than ever before — and that's exactly why you need a compass, not another list of options."
            )}
          </p>

          <Link
            to="/manifesto"
            className="group inline-flex items-center gap-2 text-accent-lime font-heading font-bold text-sm hover:gap-3 transition-all"
          >
            {t('Mehr über den Weg erfahren', 'Learn more about the path')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WissenschaftSection;
