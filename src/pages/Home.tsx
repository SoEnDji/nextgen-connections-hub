import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, School, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImg from '@/assets/editorial-hero.jpg';
import collabImg from '@/assets/editorial-collab.jpg';
import detailNotebook from '@/assets/detail-notebook.jpg';
import teamworkImg from '@/assets/editorial-teamwork.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-foreground min-h-[92vh] flex items-end pb-16 md:pb-24">
        {/* full-bleed image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              {t(
                'Du bist nicht hier, um zu funktionieren.',
                "You're not here to fit in."
              )}
              <br />
              <span className="bg-gradient-to-r from-accent-magenta via-accent to-accent-electric bg-clip-text text-transparent">
                {t('Du bist hier, um zu gestalten.', "You're here to shape what's next.")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed mb-10">
              {t(
                'Die Zukunft ist nicht linear. Orientierung beginnt bei dir.',
                "The future isn't linear.\nMake it yours."
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-white text-foreground px-7 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
              >
                {t('Zur Early Cohort', 'Join the Early Cohort')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/25 text-white px-7 py-4 rounded-full font-heading font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
              >
                {t('Gespräch starten', 'Start a conversation')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ THE SHIFT ═══ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div {...fadeUp} className="lg:col-span-3 space-y-6">
              <div className="pill-tag bg-accent/10 text-accent">
                {t('Der Wandel', 'The Shift')}
              </div>
              <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                {t(
                  'Die Welt verändert sich schnell. Die Möglichkeiten sind viele. Die Erwartungen sind hoch.',
                  'There was a time when choosing once meant choosing for life.'
                )}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                <p>
                  {t(
                    'Von jungen Menschen wird früh erwartet, sich festzulegen – in einem System, das für gerade Lebensläufe gemacht wurde.',
                    "That time has passed. Today, paths shift. Industries evolve. New ideas appear overnight."
                  )}
                </p>
                <p>
                  {t(
                    'Nur gibt es heute nicht mehr den einen klaren Weg, auf den man sich verlassen kann.',
                    "That's not chaos. It's possibility."
                  )}
                </p>
                <p className="font-heading font-semibold text-foreground">
                  {t(
                    '',
                    'And possibility asks one thing: Who are you? And what will you build with it?'
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={detailNotebook}
                  alt=""
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EMPOWERMENT — bold split ═══ */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent via-accent-magenta to-accent-electric text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} className="space-y-6 order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                {t(
                  '2Morrow Lab baut eine Plattform für Entwicklungspartnerschaften.',
                  "You don't need to have everything figured out."
                )}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {t(
                  'Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                  'You need self-knowledge. You need courage. You need people who believe in you.'
                )}
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                {t(
                  'So wird dein Weg etwas, das du bewusst gestaltest, nicht etwas, das dem Zufall überlassen bleibt.',
                  "2Morrow Lab brings those things together. So your next step is something you choose — not something you guess."
                )}
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={collabImg}
                  alt={t('Junge Menschen arbeiten zusammen', 'Young people collaborating')}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM — light editorial ═══ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={teamworkImg}
                  alt=""
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-electric/20 to-accent-magenta/10 mix-blend-multiply" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                {t(
                  'Die Zukunft gehört denen, die ihren eigenen Weg finden.',
                  'We connect young people, schools, and companies to create real development partnerships.'
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Wenn sich die Spielregeln ändern, bleibst du nicht stehen. Du gehst weiter.',
                  "Not as candidates. Not as test subjects. But as collaborators."
                )}
              </p>
              <p className="text-lg font-heading font-semibold bg-gradient-to-r from-accent via-accent-magenta to-accent-electric bg-clip-text text-transparent">
                {t('Mit Mut. Mit Weitblick. Mit Menschen, die an dich glauben.', "Because leadership doesn't start later. It starts when you decide to take yourself seriously.")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ROLE CARDS ═══ */}
      <section className="py-20 md:py-32 section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
              {t('Dein nächster Schritt', 'Choose Your Move.')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Users,
                color: 'bg-accent',
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
                color: 'bg-accent-lime',
                title: t('Unternehmen', 'Companies'),
                lines: [
                  t('Begegne der nächsten Generation.', 'Meet the next generation.'),
                  t('Im Dialog. Auf Augenhöhe. Voneinander lernend.', 'In dialogue. As equals. Learning from each other.'),
                ],
                cta: t('Gespräch vereinbaren', 'Schedule a Conversation'),
                link: '/companies',
              },
            ].map((card, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link
                  to={card.link}
                  className="group block bg-card rounded-3xl p-7 border border-border hover:border-accent/30 card-hover h-full"
                >
                  <div className={`w-10 h-10 ${card.color} rounded-2xl flex items-center justify-center mb-5`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{card.title}</h3>
                  <div className="space-y-2 mb-6">
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:gap-2.5 transition-all">
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI CO-PILOT ═══ */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="pill-tag bg-white/10 text-accent-electric border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              {t('Dein KI-Co-Pilot', 'Your AI Co-Pilot')}
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
              {t('Du gestaltest dein Leben.', 'Your AI co-pilot helps you think clearly.')}
            </h2>
            <div className="space-y-4 text-lg text-white/50 leading-relaxed max-w-2xl">
              <p>
                {t(
                  'Dein KI-Co-Pilot hilft dir, klarer zu denken, Zusammenhänge zu erkennen und Ideen in konkrete Schritte zu bringen.',
                  'See patterns. Turn ideas into action.'
                )}
              </p>
              <p>
                {t(
                  'Nicht um für dich zu entscheiden. Sondern um Möglichkeiten zu erweitern.',
                  "It doesn't design your life. You do. It simply helps you move with intention."
                )}
              </p>
              <p className="text-white/80 font-medium">
                {t(
                  'In jede 2Morrow Lab Erfahrung integriert.',
                  'Built into every 2Morrow Lab experience.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {t('Bleib nah dran.', "If you're ready to build something that fits you —")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Einladungen. Impulse. Neue Formate. Direkt in dein Postfach.',
                'Step in.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('Deine E-Mail-Adresse', 'Your email address')}
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-foreground text-background px-7 py-3.5 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200 whitespace-nowrap">
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
