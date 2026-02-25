import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, School, Building2, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImg from '@/assets/editorial-hero.jpg';
import collabImg from '@/assets/editorial-collab.jpg';
import detailNotebook from '@/assets/detail-notebook.jpg';
import teamworkImg from '@/assets/editorial-teamwork.jpg';

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* ═══ 1 · HERO — text-first, bright ═══ */}
      <section className="relative bg-background min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* decorative accent blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[35vw] h-[35vw] rounded-full bg-accent-magenta/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="pill-tag bg-accent/10 text-accent mx-auto mb-8">
              <Zap className="w-3.5 h-3.5" />
              {t('Orientierung neu gedacht', 'Orientation, reimagined')}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tight mb-6">
              {t(
                'Du bist nicht hier, um zu funktionieren.',
                "You're not here to fit in."
              )}
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-magenta to-accent-electric bg-clip-text text-transparent">
                {t('Du bist hier, um zu gestalten.', "You're here to shape what's next.")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10">
              {t(
                'Die Zukunft ist nicht linear. Orientierung beginnt bei dir.',
                "The future isn't linear. Make it yours."
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200"
              >
                {t('Zur Early Cohort', 'Join the Early Cohort')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-foreground/15 text-foreground px-8 py-4 rounded-full font-heading font-semibold text-sm hover:bg-foreground/5 transition-colors duration-200"
              >
                {t('Gespräch starten', 'Start a conversation')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* hero image strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-4 md:-mt-4"
        >
          <div className="rounded-3xl overflow-hidden aspect-[3/1] md:aspect-[4/1]">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* ═══ 2 · ROLE CARDS — immediate action ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...stagger} className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
              {t('Dein nächster Schritt', 'Choose Your Move.')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Users,
                accent: 'from-accent to-accent-magenta',
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
                accent: 'from-accent-magenta to-accent',
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
                accent: 'from-accent-electric to-accent',
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
                accent: 'from-accent-lime to-accent-electric',
                title: t('Unternehmen', 'Companies'),
                lines: [
                  t('Begegne der nächsten Generation.', 'Meet the next generation.'),
                  t('Im Dialog. Auf Augenhöhe. Voneinander lernend.', 'In dialogue. As equals. Learning from each other.'),
                ],
                cta: t('Gespräch vereinbaren', 'Schedule a Conversation'),
                link: '/companies',
              },
            ].map((card, i) => (
              <motion.div key={i} {...stagger} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link
                  to={card.link}
                  className="group relative block rounded-2xl p-6 border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden"
                >
                  {/* top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent}`} />
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-4`}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{card.title}</h3>
                  <div className="space-y-1.5 mb-5">
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

      {/* ═══ 3 · THE SHIFT — full-width manifesto ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* background image wash */}
        <div className="absolute inset-0">
          <img src={detailNotebook} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div {...stagger} className="space-y-8">
            <p className="pill-tag bg-white/10 text-accent-lime border border-white/10 mx-auto">
              {t('Der Wandel', 'The Shift')}
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              {t(
                'Die Welt verändert sich schnell. Die Möglichkeiten sind viele. Die Erwartungen sind hoch.',
                'There was a time when choosing once meant choosing for life.'
              )}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
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
              <p className="text-white font-heading font-semibold text-xl">
                {t(
                  '',
                  'And possibility asks one thing: Who are you? And what will you build with it?'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4 · EMPOWERMENT + PLATFORM — side-by-side blocks ═══ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Empowerment */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...stagger}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={collabImg}
                  alt={t('Junge Menschen arbeiten zusammen', 'Young people collaborating')}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...stagger} className="space-y-5">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
                {t(
                  '2Morrow Lab baut eine Plattform für Entwicklungspartnerschaften.',
                  "You don't need to have everything figured out."
                )}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  'Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                  'You need self-knowledge. You need courage. You need people who believe in you.'
                )}
              </p>
              <p className="text-lg text-foreground leading-relaxed font-medium">
                {t(
                  'So wird dein Weg etwas, das du bewusst gestaltest, nicht etwas, das dem Zufall überlassen bleibt.',
                  "2Morrow Lab brings those things together. So your next step is something you choose — not something you guess."
                )}
              </p>
            </motion.div>
          </div>

          {/* Platform */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...stagger} className="space-y-5 order-2 lg:order-1">
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
            <motion.div {...stagger} className="order-1 lg:order-2">
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

      {/* ═══ 5 · AI CO-PILOT — accent card ═══ */}
      <section className="py-20 md:py-28 section-alt">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            {...stagger}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-10 md:p-16"
          >
            {/* glow */}
            <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-accent/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-accent-electric/15 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-2xl">
              <div className="pill-tag bg-white/10 text-accent-electric border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                {t('Dein KI-Co-Pilot', 'Your AI Co-Pilot')}
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white">
                {t('Du gestaltest dein Leben.', 'Your AI co-pilot helps you think clearly.')}
              </h2>
              <div className="space-y-3 text-lg text-white/50 leading-relaxed">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6 · NEWSLETTER — gradient banner ═══ */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-accent via-accent-magenta to-accent-electric">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...stagger} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              {t('Bleib nah dran.', "If you're ready to build something that fits you —")}
            </h2>
            <p className="text-lg text-white/70">
              {t(
                'Einladungen. Impulse. Neue Formate. Direkt in dein Postfach.',
                'Step in.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('Deine E-Mail-Adresse', 'Your email address')}
                className="flex-1 px-5 py-3.5 rounded-full border-0 bg-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
              />
              <button className="bg-white text-foreground px-7 py-3.5 rounded-full font-heading font-bold text-sm hover:scale-105 transition-transform duration-200 whitespace-nowrap">
                {t('Newsletter abonnieren', 'Subscribe')}
              </button>
            </div>
            <p className="text-xs text-white/50">
              {t('Newsletter-Integration kommt bald.', 'Newsletter integration coming soon.')}
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
