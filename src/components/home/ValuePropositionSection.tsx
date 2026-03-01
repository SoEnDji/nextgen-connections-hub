import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: '01',
    de: { title: 'Verstehen', desc: 'Du klärst, wer du bist, was dir wichtig ist und wie du leben willst.' },
    en: { title: 'Understand', desc: 'You clarify who you are, what matters to you, and how you want to live.' },
  },
  {
    num: '02',
    de: { title: 'Entscheiden', desc: 'Du entwickelst Optionen und triffst eine gute Next-Step-Entscheidung ohne Perfektionsdruck.' },
    en: { title: 'Decide', desc: 'You develop options and make a good next-step decision — without pressure for perfection.' },
  },
  {
    num: '03',
    de: { title: 'Testen', desc: 'Du probierst deinen Weg in kleinen realen Experimenten aus — allein und im Team.' },
    en: { title: 'Test', desc: 'You try out your path in small real-world experiments — alone and in a team.' },
  },
  {
    num: '04',
    de: { title: 'Umsetzen', desc: 'Du planst die nächsten Schritte und setzt sie mit Companion, Mentor:innen und Community konsequent um.' },
    en: { title: 'Implement', desc: 'You plan your next steps and follow through with your Companion, mentors, and community.' },
  },
  {
    num: '05',
    de: { title: 'Weiterentwickeln', desc: 'Du reflektierst, lernst aus Erfahrung, teilst Learnings mit anderen und schärfst deinen Weg im nächsten Loop.' },
    en: { title: 'Evolve', desc: 'You reflect, learn from experience, share learnings with others, and sharpen your path in the next loop.' },
  },
];

const ValuePropositionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-foreground text-white overflow-hidden noise-overlay">
      {/* Top intro */}
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-12 md:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-lg md:text-xl leading-relaxed text-white/70 max-w-3xl"
        >
          {t(
            '2Morrow Lab bringt dich vom Grübeln ins Machen — mit AI Companion, echten Projekten und einer Community, mit der du deinen Weg nicht allein gehst.',
            '2Morrow Lab takes you from overthinking to action — with an AI Companion, real projects, and a community so you never walk your path alone.'
          )}
        </motion.p>
      </div>

      {/* Loop headline */}
      <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-heading text-2xl md:text-4xl font-bold leading-tight"
        >
          {t(
            'Aus 5 mach 1',
            'From 5 to 1'
          )}
          <span className="block text-white/50 font-medium text-lg md:text-2xl mt-2">
            {t(
              'Dein Life Design Loop in 5 Schritten für den besten ersten Schritt ins Leben.',
              'Your Life Design Loop in 5 steps for the best first step into life.'
            )}
          </span>
        </motion.h2>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid gap-0 border-t border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group flex items-start gap-6 py-6 md:py-8 border-b border-white/10 hover:bg-white/[0.03] transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="font-heading text-accent-lime text-sm font-bold tracking-widest mt-1 shrink-0 w-8">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-1 group-hover:text-accent-lime transition-colors">
                  {t(step.de.title, step.en.title)}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {t(step.de.desc, step.en.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl"
        >
          <span className="text-white/70">
            {t(
              'Und genau daraus entsteht, was heute am meisten zählt: ',
              "And that's exactly what creates what matters most today: "
            )}
          </span>
          <span className="text-accent-lime font-semibold">
            <br />
            {t(
              'Klarheit für deinen Weg, Mut zum nächsten Schritt',
              'Clarity for your path, courage for the next step,'
            )}
            <br />
            {t(
              'und Zuversicht für alles, was vor dir liegt.',
              'and confidence for everything ahead.'
            )}
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
