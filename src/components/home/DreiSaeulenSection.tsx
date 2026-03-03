import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const DreiSaeulenSection = () => {
  const { t } = useLanguage();
  const [reflection, setReflection] = useState('');

  const steps = [
    {
      num: '①',
      title: t('Erkenne, was dich lebendig macht', 'Discover what makes you come alive'),
      body: t(
        'Deine Werte. Deine Neugier. Die Momente, in denen du die Zeit vergisst. Dein Kompass: was du über Arbeit glaubst, was du über das Leben glaubst, und die Werte, die für dich nicht verhandelbar sind.',
        'Your values. Your curiosity. The moments when you lose track of time. Your compass: what you believe about work, what you believe about life, and the values that are non-negotiable for you.'
      ),
    },
    {
      num: '②',
      title: t('Baue Prototypen statt Pläne', 'Build prototypes, not plans'),
      body: t(
        'Du kannst dir 7 verschiedene Leben vorstellen. Also hör auf, das eine richtige auszuwählen. Probier sie aus. Ein Prototyp, der scheitert, bringt dir mehr als ein Plan, der nie startet.',
        "You can imagine 7 different lives. So stop trying to pick the right one. Try them out. A prototype that fails teaches you more than a plan that never starts."
      ),
    },
    {
      num: '③',
      title: t('Wachse mit Menschen, die es ernst meinen', 'Grow with people who mean it'),
      body: t(
        'Der größte Unterschied in Übergangsphasen machen nicht Tools. Es sind die richtigen Menschen. Eine Gemeinschaft, die gemeinsam erkundet, experimentiert und reflektiert.',
        "The biggest difference in transitions isn't tools. It's the right people. A community that explores, experiments, and reflects together."
      ),
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          {...fade}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16"
        >
          {t('So funktioniert 2Morrow Lab', 'How 2Morrow Lab works')}
        </motion.h2>

        {/* Steps 1-3 */}
        <div className="space-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-heading font-bold text-lg">{step.num}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed pl-9">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Step 4 — AI Companion (visually distinct) */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 rounded-2xl border border-accent-electric/20 bg-accent-electric/5 p-8 md:p-10"
        >
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-accent-electric font-heading font-bold text-lg">④</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-tight">
              {t('Ein Begleiter, der mit dir wächst', 'A companion that grows with you')}
            </h3>
          </div>

          <div className="pl-9 space-y-4 text-base leading-relaxed">
            <p className="text-foreground font-semibold">
              {t(
                'Wir bauen gerade etwas, das es so noch nicht gibt:',
                "We're building something that doesn't exist yet:"
              )}{' '}
              <span className="font-normal text-muted-foreground">
                {t(
                  'einen AI-Begleiter, der deine Muster erkennt, die richtigen Fragen stellt und mit dir wächst. Kein Chatbot mit generischen Tipps — ein Reflexionspartner, der deinen Kompass kennt und dein Tempo respektiert.',
                  "an AI companion that recognizes your patterns, asks the right questions, and grows with you. Not a chatbot with generic tips — a reflection partner that knows your compass and respects your pace."
                )}
              </span>
            </p>
            <p className="text-muted-foreground">
              {t(
                'Bis er fertig ist, starten wir mit dem, was kein AI ersetzen kann: echte Menschen, echte Fragen, echte Experimente. Der Kompass, die Micro-Practices, die Programme — alles funktioniert jetzt schon. Der Companion wird sie verbinden und noch besser machen.',
                "Until it's ready, we start with what no AI can replace: real people, real questions, real experiments. The compass, the micro-practices, the programs — everything works already. The companion will connect them and make them even better."
              )}
            </p>
          </div>
        </motion.div>

        {/* Reflection prompt */}
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 rounded-2xl border border-accent/20 bg-accent/5 p-8"
        >
          <p className="font-heading font-bold text-foreground mb-2">
            {t("Probier's aus — eine Frage zum Einstieg:", "Try it out — a question to get started:")}
          </p>
          <p className="text-accent italic mb-4">
            {t(
              '„Was war heute ein Moment, in dem du dich lebendig gefühlt hast?"',
              '"What was a moment today when you felt truly alive?"'
            )}
          </p>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder={t('Schreib hier...', 'Write here...')}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none min-h-[80px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DreiSaeulenSection;
