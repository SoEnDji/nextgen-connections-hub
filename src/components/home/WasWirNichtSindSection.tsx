import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const WasWirNichtSindSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-foreground noise-overlay">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fade} className="space-y-8">
          <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-magenta bg-accent-magenta/10 px-4 py-2 rounded-full">
            {t('Was wir nicht sind', 'What we are not')}
          </span>

          <p className="font-heading text-xl md:text-2xl font-bold text-white leading-snug italic">
            {t(
              'Wir sind kein Berufstest. Kein Persönlichkeitsquiz. Kein weiterer Ratgeber, der dir sagt, du sollst „deiner Leidenschaft folgen."',
              "We're not a career test. Not a personality quiz. Not another guide telling you to \"follow your passion.\""
            )}
          </p>

          <p className="font-heading text-lg md:text-xl font-bold text-accent-lime">
            {t(
              '(Spoiler: Das ist der nutzloseste Rat aller Zeiten.)',
              "(Spoiler: That's the most useless advice of all time.)"
            )}
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            {t(
              'Die meisten Tools zur Berufsorientierung geben dir noch mehr Informationen, noch mehr Optionen, noch mehr Ergebnisse, in die du reinpassen sollst. Das Ergebnis: noch mehr Verwirrung.',
              'Most career orientation tools give you even more information, even more options, even more results you\'re supposed to fit into. The result: even more confusion.'
            )}
          </p>

          <p className="text-white/80 text-lg leading-relaxed">
            {t(
              '2Morrow Lab macht das Gegenteil. Wir helfen dir, tiefer zu gehen statt breiter. Nicht „hier sind 500 Berufsfelder, die zu deinem Profil passen." Sondern: Was bringt dich zum Leuchten? Und wie baust du daraus etwas, das trägt?',
              '2Morrow Lab does the opposite. We help you go deeper, not wider. Not "here are 500 career fields that match your profile." Instead: What makes you light up? And how do you build something from it that lasts?'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WasWirNichtSindSection;
