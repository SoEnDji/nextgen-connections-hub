import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import collabImg from '@/assets/detail-court.jpg';
import teamworkImg from '@/assets/editorial-teamwork.jpg';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const EmpowermentSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Block 1 — image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div {...fade}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={collabImg}
                alt={t('Junge Menschen arbeiten zusammen', 'Young people collaborating')}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fade} className="space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight text-foreground">
              {t(
                '2Morrow Lab baut eine Plattform für Entwicklungspartnerschaften.',
                "You don't need to have everything figured out."
              )}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t(
                'Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                'You need self-knowledge. You need courage. You need people who believe in you.'
              )}
            </p>
            <p className="text-base text-foreground leading-relaxed font-medium">
              {t(
                'So wird dein Weg etwas, das du bewusst gestaltest, nicht etwas, das dem Zufall überlassen bleibt.',
                "2Morrow Lab brings those things together. So your next step is something you choose — not something you guess."
              )}
            </p>
          </motion.div>
        </div>

        {/* Block 2 — text left, image right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div {...fade} className="order-2 md:order-1 space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold leading-[1.15] tracking-tight text-foreground">
              {t(
                'Die Zukunft gehört denen, die ihren eigenen Weg finden.',
                'We connect young people, schools, and companies to create real development partnerships.'
              )}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t(
                'Wenn sich die Spielregeln ändern, bleibst du nicht stehen. Du gehst weiter.',
                "Not as candidates. Not as test subjects. But as collaborators."
              )}
            </p>
            <p className="text-base font-heading font-semibold bg-gradient-to-r from-accent-lime to-accent-electric bg-clip-text text-transparent">
              {t(
                'Mit Mut. Mit Weitblick. Mit Menschen, die an dich glauben.',
                "Because leadership doesn't start later. It starts when you decide to take yourself seriously."
              )}
            </p>
          </motion.div>
          <motion.div {...fade} className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={teamworkImg}
                alt=""
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmpowermentSection;
