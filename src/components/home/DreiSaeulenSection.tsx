import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Compass, Blocks, Flame } from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const DreiSaeulenSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      num: '①',
      title: t('Erkenne, was dich lebendig macht', 'Discover what makes you come alive'),
      body: t(
        'Es geht nicht darum, was du kannst. Es geht darum, was dich bewegt.\n\nDeine Werte. Deine Neugier. Die Momente, in denen du die Zeit vergisst. Wir nennen es deinen Kompass: eine Kombination aus dem, was du über Arbeit glaubst, was du über das Leben glaubst, und den Werten, die für dich nicht verhandelbar sind.\n\nDas ist kein Quiz, das dich in eine Schublade sortiert. Es ist ein Spiegel, der dir zeigt, was schon da ist — du hast es nur noch nicht in Worte gefasst.',
        "It's not about what you can do. It's about what moves you.\n\nYour values. Your curiosity. The moments when you lose track of time. We call it your compass: a combination of what you believe about work, what you believe about life, and the values that are non-negotiable for you.\n\nThis isn't a quiz that sorts you into a box. It's a mirror that shows you what's already there — you just haven't put it into words yet."
      ),
      quote: t(
        '„Ich wusste gar nicht, dass mir das so wichtig ist. Aber als ich es aufgeschrieben habe, hat alles Sinn ergeben."',
        '"I didn\'t even know this mattered so much to me. But when I wrote it down, everything made sense."'
      ),
    },
    {
      icon: Blocks,
      num: '②',
      title: t('Baue Prototypen statt Pläne', 'Build prototypes, not plans'),
      body: t(
        'Du kannst dir im Durchschnitt 7 verschiedene Leben vorstellen, die du gerne leben würdest. Also hör auf, das eine richtige auszuwählen. Probier sie aus.\n\nEin Prototyp ist keine Lebensentscheidung. Es ist ein kleines, risikoarmes Experiment: Ein Gespräch mit jemandem, der den Job macht, der dich interessiert. Ein Wochenende, an dem du etwas ausprobierst. Ein Mini-Projekt, das dir zeigt, ob sich etwas richtig anfühlt — oder eben nicht.\n\nEin Prototyp, der scheitert, bringt dir mehr als ein Plan, der nie startet.\n\n2Morrow Lab gibt dir die Struktur, verschiedene Lebensentwürfe zu skizzieren, zu testen und daraus zu lernen. Kein Druck. Kein „richtig oder falsch." Nur: ausprobieren, reflektieren, weiterentwickeln.',
        "On average, you can imagine 7 different lives you'd love to live. So stop trying to pick the one right one. Try them out.\n\nA prototype isn't a life decision. It's a small, low-risk experiment: A conversation with someone who does the job you're curious about. A weekend where you try something new. A mini-project that shows you whether something feels right — or not.\n\nA prototype that fails teaches you more than a plan that never starts.\n\n2Morrow Lab gives you the structure to sketch, test, and learn from different life designs. No pressure. No \"right or wrong.\" Just: try, reflect, evolve."
      ),
    },
    {
      icon: Flame,
      num: '③',
      title: t('Wachse mit Menschen, die es ernst meinen', 'Grow with people who mean it'),
      body: t(
        'Die Forschung ist eindeutig: Der größte Unterschied für junge Menschen in Übergangsphasen ist nicht das beste Tool, nicht die beste Information und nicht der beste Plan.\n\nEs sind die richtigen Menschen.\n\nNicht einfach ein Netzwerk. Nicht einfach Mentoren. Sondern eine Gemeinschaft von Menschen auf derselben Reise — die gemeinsam erkunden, experimentieren und reflektieren. Die dich ehrlich herausfordern und deine Experimente feiern, nicht nur deine Erfolge.\n\n2Morrow Lab verbindet dich mit Gleichgesinnten in kleinen Gruppen und mit Menschen, die deinen Weg schon gehen. Damit du nicht alleine im Dunkeln stochern musst.',
        "Research is clear: The biggest difference for young people in transition isn't the best tool, the best information, or the best plan.\n\nIt's the right people.\n\nNot just a network. Not just mentors. But a community of people on the same journey — exploring, experimenting, and reflecting together. People who honestly challenge you and celebrate your experiments, not just your successes.\n\n2Morrow Lab connects you with like-minded peers in small groups and with people who are already walking your path. So you don't have to fumble in the dark alone."
      ),
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-electric bg-accent-electric/10 px-4 py-2 rounded-full">
            {t('Drei Säulen', 'Three Pillars')}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-lime/15 flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-accent-lime" />
              </div>
              <span className="text-accent-lime font-heading font-bold text-sm mb-2">{pillar.num}</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                {pillar.title}
              </h3>
              <div className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line flex-1">
                {pillar.body}
              </div>
              {pillar.quote && (
                <p className="mt-6 text-sm italic text-accent-magenta border-l-2 border-accent-magenta/30 pl-4">
                  {pillar.quote}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreiSaeulenSection;
