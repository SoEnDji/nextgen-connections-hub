import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Lightbulb, Handshake, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import companiesImg from '@/assets/companies.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Companies = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: t('Strategische Orientierung in komplexen Zeiten', 'Strategic orientation in complex times'),
      desc: t(
        'Reflexionsräume für Führungsteams, um Wandel bewusst zu gestalten.',
        'Reflection spaces for leadership teams to navigate change intentionally.'
      ),
    },
    {
      icon: Users,
      title: t('Führungskräfteentwicklung im Kontext realer Veränderung', 'Leadership development in real-world change'),
      desc: t(
        'Leadership wird im Dialog mit der nächsten Generation weitergedacht.',
        'Leadership evolves in dialogue with the next generation.'
      ),
    },
    {
      icon: Lightbulb,
      title: t('Perspektivvielfalt als Innovationsquelle', 'Diversity of perspective as innovation source'),
      desc: t(
        'Direkter Austausch mit jungen Menschen, die neue Denkweisen einbringen.',
        'Direct exchange with young people who bring fresh thinking.'
      ),
    },
    {
      icon: Handshake,
      title: t('Langfristige Talentbeziehungen', 'Long-term talent relationships'),
      desc: t(
        'Früher Kontakt zu jungen Menschen, die Verantwortung übernehmen wollen.',
        'Early contact with young people who want to take responsibility.'
      ),
    },
    {
      icon: Eye,
      title: t('Sichtbarkeit mit Substanz', 'Visibility with substance'),
      desc: t(
        'Engagement, das strukturell wirkt und glaubwürdig wahrgenommen wird.',
        'Engagement that has structural impact and is perceived as credible.'
      ),
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={companiesImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance">
              {t(
                'Die Zukunft Ihrer Organisation entscheidet sich im Umgang mit Veränderung.',
                'The future of your organization depends on how you navigate change.'
              )}
            </h1>
            <p className="text-lg md:text-xl text-text-hero/70 max-w-2xl">
              {t(
                'In einer nichtlinearen Welt braucht Führung neue Perspektiven und echten Dialog.',
                'In a nonlinear world, leadership needs fresh perspectives and authentic dialogue.'
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-colors"
            >
              {t('Gespräch vereinbaren', 'Schedule a Conversation')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* REALITAET */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              {t(
                'Märkte verschieben sich. Technologien verändern Geschäftsmodelle. Erwartungen an Führung steigen.',
                'Markets are shifting. Technology is reshaping business models. Leadership expectations are rising.'
              )}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>{t(
                'Strategische Entscheidungen müssen unter Unsicherheit getroffen werden. Langfristige Planung wird anspruchsvoller. Gleichzeitig verändert sich, was junge Talente von Organisationen erwarten.',
                'Strategic decisions must be made under uncertainty. Long-term planning is becoming more demanding. And what young talent expects from organizations is changing.'
              )}</p>
              <p className="text-foreground font-medium">{t(
                'Nichtlinearität betrifft heute beide Seiten:',
                'Nonlinearity affects both sides today:'
              )}</p>
              <p className="text-foreground font-heading font-semibold text-xl">{t(
                'Unternehmen. Und die nächste Generation.',
                'Companies. And the next generation.'
              )}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UNSER ANSATZ */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('Unser Ansatz', 'Our Approach')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(
              '2Morrow Lab schafft strukturierte Begegnungsräume zwischen Führungskräften und der nächsten Generation.',
              '2Morrow Lab creates structured spaces of encounter between leaders and the next generation.'
            )}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(
              'Es entstehen Entwicklungsräume, in denen Perspektiven zusammenkommen und Verantwortung gemeinsam gedacht wird.',
              'These become development spaces where perspectives converge and responsibility is thought through together.'
            )}</p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                'Life Design Thinking',
                'Adaptive Leadership',
                t('Intergenerationellen Dialog', 'Intergenerational Dialogue'),
                t('Schule als Ökosystem', 'School as Ecosystem'),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-heading font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-2 text-lg text-foreground font-medium">
              <p>{t('Im Zentrum steht die Frage:', 'At the center stands the question:')}</p>
              <p className="text-muted-foreground">{t('Wie entsteht Orientierung in Unsicherheit?', 'How does orientation emerge in uncertainty?')}</p>
              <p className="text-muted-foreground">{t('Wie bleibt man handlungsfähig?', 'How do you stay capable of action?')}</p>
              <p className="text-muted-foreground">{t('Wie gestaltet man Wandel bewusst?', 'How do you shape change intentionally?')}</p>
              <p className="pt-2">{t(
                'Diese Fragen betreffen junge Menschen ebenso wie Organisationen.',
                'These questions matter to young people and organizations alike.'
              )}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WAS UNTERNEHMEN GEWINNEN */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
              {t('Was Unternehmen gewinnen', 'What Companies Gain')}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl bg-secondary border border-border">
                <b.icon className="w-8 h-8 text-accent mb-5" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-hero">
              {t('Bereit für den Dialog?', 'Ready for dialogue?')}
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:bg-accent-glow transition-colors"
            >
              {t('Gespräch vereinbaren', 'Schedule a Conversation')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
