import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, School, Building2 } from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const RoleCardsSection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Users,
      color: 'bg-accent-lime',
      textColor: 'text-foreground',
      title: t('Junge Menschen', 'Young People'),
      lines: [
        t('Sei von Anfang an dabei.', 'Be part of it from day one.'),
        t('Finde heraus, was dir wichtig ist.', 'Discover what matters to you.'),
        t('Gestalte deinen Weg mit echter Unterstützung.', 'Shape your path with real support.'),
      ],
      cta: t('Zur Early Cohort', 'Join the Early Cohort'),
      link: '/programs',
    },
    {
      icon: Users,
      color: 'bg-accent-magenta',
      textColor: 'text-white',
      title: t('Eltern', 'Parents'),
      lines: [
        t('Erhalte unseren Orientierungsleitfaden.', 'Get our orientation guide.'),
        t('Bleib informiert und im Austausch.', 'Stay informed and connected.'),
      ],
      cta: t('Leitfaden anfordern', 'Request Guide'),
      link: '/contact',
    },
    {
      icon: School,
      color: 'bg-accent-electric',
      textColor: 'text-white',
      title: t('Schulen', 'Schools'),
      lines: [
        t('Schule als Ökosystem denken.', 'Rethink school as an ecosystem.'),
        t('Und Entwicklung nachhaltig verankern.', 'And embed growth sustainably.'),
      ],
      cta: t('Pilotgespräch vereinbaren', 'Schedule Pilot Talk'),
      link: '/schools',
    },
    {
      icon: Building2,
      color: 'bg-accent',
      textColor: 'text-white',
      title: t('Unternehmen', 'Companies'),
      lines: [
        t('Begegne der nächsten Generation.', 'Meet the next generation.'),
        t('Im Dialog. Auf Augenhöhe. Voneinander lernend.', 'In dialogue. As equals. Learning from each other.'),
      ],
      cta: t('Gespräch vereinbaren', 'Schedule a Conversation'),
      link: '/companies',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-16">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            {t('Dein nächster Schritt', 'Choose Your Move.')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={card.link}
                className={`group relative block rounded-3xl p-8 md:p-10 ${card.color} ${card.textColor} hover:scale-[1.02] transition-transform duration-300 h-full`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{card.title}</h3>
                <div className="space-y-2 mb-8">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-sm opacity-80 leading-relaxed">{line}</p>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-heading font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                  {card.cta}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCardsSection;
