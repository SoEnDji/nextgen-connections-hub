import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, School, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import heroImg from '@/assets/editorial-hero.jpg';
import collabImg from '@/assets/editorial-collab.jpg';
import detailNotebook from '@/assets/detail-notebook.jpg';
import detailCourt from '@/assets/detail-court.jpg';
import teamworkImg from '@/assets/editorial-teamwork.jpg';

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
      <section className="hero-gradient noise-overlay relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        </div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-electric/15 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-hero leading-[1.1] mb-6 text-balance glow-text">
              {t(
                'Du bist nicht hier, um zu funktionieren.',
                "You're not here to fit in."
              )}
              <br />
              <span className="bg-gradient-to-r from-accent-glow via-accent-electric to-accent bg-clip-text text-transparent">
                {t('Du bist hier, um zu gestalten.', "You're here to shape what's next.")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-hero/60 max-w-xl leading-relaxed mb-10">
              {t(
                'Die Zukunft ist nicht linear. Orientierung beginnt bei dir.',
                "The future isn't linear.\nMake it yours."
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent"
              >
                {t('Zur Early Cohort', 'Join the Early Cohort')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-text-hero/20 text-text-hero px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                {t('Gespräch starten', 'Start a conversation')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SHIFT — with image mosaic */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div {...fadeUp} className="lg:col-span-3 space-y-6">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
                {t(
                  'Die Welt verändert sich schnell. Die Möglichkeiten sind viele. Die Erwartungen sind hoch.',
                  'There was a time when choosing once meant choosing for life.'
                )}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed max-w-2xl opacity-70">
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
                <p className="font-heading font-semibold opacity-100">
                  {t(
                    '',
                    'And possibility asks one thing: Who are you? And what will you build with it?'
                  )}
                </p>
              </div>
            </motion.div>
            {/* Image cluster */}
            <motion.div {...fadeUp} className="lg:col-span-2 grid grid-cols-2 gap-3">
              <img
                src={detailNotebook}
                alt=""
                className="rounded-xl object-cover w-full aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-500"
              />
              <img
                src={detailCourt}
                alt=""
                className="rounded-xl object-cover w-full aspect-[3/4] mt-8 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMPOWERMENT — split layout with inline image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
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
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t(
                  'So wird dein Weg etwas, das du bewusst gestaltest, nicht etwas, das dem Zufall überlassen bleibt.',
                  "2Morrow Lab brings those things together. So your next step is something you choose — not something you guess."
                )}
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="relative group"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 via-transparent to-accent-electric/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={collabImg}
                alt={t('Junge Menschen arbeiten zusammen', 'Young people collaborating')}
                className="relative rounded-2xl shadow-lg w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PLATFORM — with layered image */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div {...fadeUp} className="lg:col-span-2 relative">
              <div className="relative">
                <img
                  src={teamworkImg}
                  alt=""
                  className="rounded-2xl object-cover w-full aspect-square grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--section-dark))] via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-3 space-y-8 text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance glow-text">
                {t(
                  'Die Zukunft gehört denen, die ihren eigenen Weg finden.',
                  'We connect young people, schools, and companies to create real development partnerships.'
                )}
              </h2>
              <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                {t(
                  'Wenn sich die Spielregeln ändern, bleibst du nicht stehen. Du gehst weiter.',
                  "Not as candidates. Not as test subjects. But as collaborators."
                )}
              </p>
              <p className="text-lg font-heading font-semibold bg-gradient-to-r from-accent-glow via-accent-electric to-accent bg-clip-text text-transparent">
                {t('Mit Mut. Mit Weitblick. Mit Menschen, die an dich glauben.', "Because leadership doesn't start later. It starts when you decide to take yourself seriously.")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROLLENBLOCK */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="bg-gradient-to-r from-accent to-accent-electric bg-clip-text text-transparent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              {t('Starte bei dir.', 'Start with you.')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {t('Hier beginnt es.', 'This is where it starts.')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  className="group block bg-card rounded-2xl p-7 border border-border hover:border-accent/40 card-hover h-full"
                >
                  <card.icon className="w-7 h-7 text-accent mb-4" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{card.title}</h3>
                  <div className="space-y-2 mb-5">
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
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent-glow px-4 py-2 rounded-full font-heading font-semibold text-sm border border-accent/20">
              <Sparkles className="w-4 h-4" />
              {t('Dein KI-Co-Pilot', 'Your AI Co-Pilot')}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight glow-text">
              {t('Du gestaltest dein Leben.', 'Your AI co-pilot helps you think clearly.')}
            </h2>
            <div className="space-y-4 text-lg opacity-70 leading-relaxed max-w-2xl">
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
              <p className="opacity-100 font-medium">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
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
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-all duration-300 glow-accent whitespace-nowrap">
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
