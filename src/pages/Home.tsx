import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, School, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImg1 from '@/assets/hero-1.jpg';
import collabImg from '@/assets/collaboration.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg1} alt="" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-hero leading-[1.1] mb-6 text-balance">
              {t(
                'Du bist nicht hier, um zu funktionieren.',
                "You're not here to fit in."
              )}
              <br />
              <span className="text-accent-glow">
                {t('Du bist hier, um zu gestalten.', "You're here to shape what's next.")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-hero/70 max-w-xl leading-relaxed mb-10">
              {t(
                'Die Zukunft ist nicht linear. Orientierung beginnt bei dir.',
                "The future isn't linear. Make it yours."
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-colors"
              >
                {t('Zur Early Cohort', 'Join the Early Cohort')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-text-hero/30 text-text-hero px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:border-text-hero/60 transition-colors"
              >
                {t('Gespräch starten', 'Start a conversation')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REALITAETSBLOCK */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              {t(
                'Die Welt verändert sich schnell. Die Möglichkeiten sind viele. Die Erwartungen sind hoch.',
                'The world is moving fast. The options are endless. The expectations are high.'
              )}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                {t(
                  'Von jungen Menschen wird früh erwartet, sich festzulegen – in einem System, das für gerade Lebensläufe gemacht wurde.',
                  "Young people are expected to commit early \u2014 in a system built for straight-line careers."
                )}
              </p>
              <p>
                {t(
                  'Nur gibt es heute nicht mehr den einen klaren Weg, auf den man sich verlassen kann.',
                  'But there is no single clear path to rely on anymore.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATTFORM-BLOCK */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {t(
                  '2Morrow Lab baut eine Plattform für Entwicklungspartnerschaften.',
                  '2Morrow Lab is building a platform for development partnerships.'
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                  'Young people. Companies. Schools. Together.'
                )}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t(
                  'So wird dein Weg etwas, das du bewusst gestaltest, nicht etwas, das dem Zufall überlassen bleibt.',
                  "So your path becomes something you shape intentionally \u2014 not something left to chance."
                )}
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <img
                src={collabImg}
                alt={t('Junge Menschen arbeiten zusammen', 'Young people collaborating')}
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HALTUNGSBLOCK */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              {t(
                'Die Zukunft gehört denen, die ihren eigenen Weg finden.',
                'The future belongs to those who find their own way.'
              )}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t(
                'Wenn sich die Spielregeln ändern, bleibst du nicht stehen. Du gehst weiter.',
                "When the rules change, you don't stand still. You keep moving."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-heading font-semibold text-foreground">
              <span>{t('Mit Mut.', 'With courage.')}</span>
              <span className="text-accent">{t('Mit Weitblick.', 'With vision.')}</span>
              <span>{t('Mit Menschen, die an dich glauben.', 'With people who believe in you.')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROLLENBLOCK */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              {t('Starte bei dir.', 'Start with you.')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('Hier beginnt es.', 'This is where it starts.')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
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
                title: t('Unternehmen', 'Companies'),
                lines: [
                  t('Begegne der nächsten Generation.', 'Meet the next generation.'),
                  t('Im Dialog. Auf Augenhöhe. Voneinander lernend.', 'In dialogue. As equals. Learning from each other.'),
                ],
                cta: t('Gespräch vereinbaren', 'Schedule a Conversation'),
                link: '/companies',
              },
            ].map((card, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link
                  to={card.link}
                  className="group block bg-background rounded-2xl p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full"
                >
                  <card.icon className="w-8 h-8 text-accent mb-5" />
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{card.title}</h3>
                  <div className="space-y-2 mb-6">
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KI SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-heading font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              {t('Dein KI-Co-Pilot', 'Your AI Co-Pilot')}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t('Du gestaltest dein Leben.', 'You design your life.')}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                {t(
                  'Dein KI-Co-Pilot hilft dir, klarer zu denken, Zusammenhänge zu erkennen und Ideen in konkrete Schritte zu bringen.',
                  'Your AI Co-Pilot helps you think more clearly, see connections, and turn ideas into concrete steps.'
                )}
              </p>
              <p>
                {t(
                  'Nicht um für dich zu entscheiden. Sondern um Möglichkeiten zu erweitern.',
                  "Not to decide for you. But to expand what's possible."
                )}
              </p>
              <p className="text-foreground font-medium">
                {t(
                  'In jede 2Morrow Lab Erfahrung integriert.',
                  'Built into every 2Morrow Lab experience.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('Bleib nah dran.', 'Stay close.')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Einladungen. Impulse. Neue Formate. Direkt in dein Postfach.',
                'Invitations. Insights. New formats. Straight to your inbox.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('Deine E-Mail-Adresse', 'Your email address')}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-colors whitespace-nowrap">
                {t('Newsletter abonnieren', 'Subscribe')}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t('Newsletter-Integration kommt bald.', 'Newsletter integration coming soon.')}
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
