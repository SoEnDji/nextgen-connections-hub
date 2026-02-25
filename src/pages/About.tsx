import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import workshopImg from '@/assets/workshop.jpg';
import aboutImg from '@/assets/about.jpg';
import founderSohrabImg from '@/assets/founder-vera.jpg';
import founderVeraImg from '@/assets/founder-sohrab.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 md:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance"
          >
            {t('Warum es 2Morrow Lab gibt', 'Why 2Morrow Lab exists')}
          </motion.h1>
        </div>
      </section>

      {/* WARUM */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t(
              'Junge Menschen wachsen in einer Welt auf, in der sich Rahmenbedingungen schneller verändern, als man sie planen kann.',
              'Young people are growing up in a world where conditions shift faster than anyone can plan for.'
            )}</p>
            <p>{t(
              'Gleichzeitig wird von ihnen erwartet, früh klar zu sein. Sich festzulegen. Sich zu entscheiden.',
              "At the same time, they are expected to have it figured out. To commit. To decide."
            )}</p>
            <p className="text-foreground font-medium text-xl">{t(
              'Orientierung entsteht nicht durch Druck. Sondern durch Selbstkenntnis, Erfahrung und tragfähige Beziehungen.',
              "Orientation doesn't come from pressure. It comes from self-knowledge, experience, and meaningful relationships."
            )}</p>
            <p>{t(
              'Aus dieser Überzeugung ist 2Morrow Lab entstanden.',
              'This conviction is what gave birth to 2Morrow Lab.'
            )}</p>
          </motion.div>
        </div>
      </section>

      {/* TRANSITION BRIDGE */}
      <section className="py-16 md:py-20 section-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p {...fadeUp} className="text-xl md:text-2xl text-foreground font-heading font-medium leading-relaxed">
            {t(
              'Diese Haltung prägt nicht nur unsere Arbeit. Sie prägt auch uns.',
              "This mindset doesn't just shape our work. It shapes us."
            )}
          </motion.p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            {t('Die Menschen hinter 2Morrow Lab', 'The People Behind 2Morrow Lab')}
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Sohrab */}
            <motion.div {...fadeUp} className="space-y-6">
              <img src={founderSohrabImg} alt="Dr. Sohrab Noorsalehi-Garakani" className="rounded-2xl aspect-square object-cover w-full max-w-sm mx-auto shadow-xl" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Dr. Sohrab Noorsalehi-Garakani</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t(
                  'Dr. Sohrab Noorsalehi-Garakani arbeitet als Leadership Coach und Trainer. Er begleitet Führungskräfte und Teams dabei, in komplexen Situationen Orientierung zu gewinnen und handlungsfähig zu bleiben.',
                  'Dr. Sohrab Noorsalehi-Garakani works as a leadership coach and trainer. He supports leaders and teams in staying oriented and effective in complex, fast-changing environments.'
                )}</p>
                <p>{t(
                  'Im Zentrum seiner Arbeit stehen Selbstführung, Teamdynamik und die Frage, wie Verantwortung in Zeiten von Unsicherheit bewusst übernommen werden kann.',
                  'His work focuses on self-leadership, team dynamics, and how responsibility can be consciously embraced in times of uncertainty.'
                )}</p>
                <p>{t(
                  'Basketball ist für ihn mehr als ein Sport. Er glaubt, dass man über Teamgeist, Verantwortung und das Wiederaufstehen nach Rückschlägen viel über Führung lernen kann.',
                  'For him, basketball represents more than a sport. It reflects teamwork, decision-making under pressure, and the ability to get back up after setbacks.'
                )}</p>
                <p className="text-foreground font-medium">{t(
                  'Er ist überzeugt: Resilienz entsteht nicht durch Druck, sondern durch Beziehung, Klarheit und Verantwortung.',
                  'His core belief: resilience grows from clarity, relationships, and responsibility.'
                )}</p>
              </div>
            </motion.div>
            {/* Vera */}
            <motion.div {...fadeUp} className="space-y-6">
              <img src={founderVeraImg} alt="Vera Plümer" className="rounded-2xl aspect-square object-cover w-full max-w-sm mx-auto shadow-xl" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Vera Plümer</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t(
                  'Vera arbeitet als Coach und Dozentin mit Studierenden. Sie begleitet junge Menschen dabei, nicht nur einen Beruf zu wählen, sondern ihren eigenen Weg zu entwickeln.',
                  'Vera works as a coach and lecturer with university students. She supports young people in shaping not just a career, but a direction that genuinely fits who they are.'
                )}</p>
                <p>{t(
                  'In ihrer Arbeit nutzt sie unter anderem das Life Design Framework. Es geht um Selbstkenntnis, Experimente und bewusste Entscheidungen – nicht um schnelle Antworten oder vorgefertigte Lösungen.',
                  "Her work draws on the Life Design framework. It's about self-awareness, experimentation, and making thoughtful decisions — not chasing quick answers."
                )}</p>
                <p className="text-foreground font-medium">{t(
                  'Sie glaubt daran, dass Klarheit und Handlungsfähigkeit entstehen, wenn junge Menschen sich selbst ernst nehmen, ausprobieren und Verantwortung für ihren Weg übernehmen.',
                  'She believes clarity and agency grow when young people take themselves seriously, explore, and step into responsibility for their own path.'
                )}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UNSERE ERFAHRUNG */}
      <section className="section-alt py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <img src={workshopImg} alt={t('Workshop', 'Workshop')} className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('Unsere Erfahrung', 'Our Experience')}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t(
                  'Schule kennen wir nicht nur aus Konzeptpapieren.',
                  "We don't know school from concept papers alone."
                )}</p>
                <p>{t(
                  'Als Fellows bei Teach First Deutschland waren wir zwei Jahre an herausfordernden Schulen tätig – in einem Umfeld mit hohen sozialen und strukturellen Anforderungen.',
                  "As Teach First Deutschland fellows, we spent two years at high-challenge schools \u2014 in environments with intense social and structural demands."
                )}</p>
                <p>{t(
                  'Heute arbeiten wir mit jungen Menschen, Schulen und Organisationen an Fragen von Selbstführung, Leadership und Zukunftsgestaltung.',
                  'Today, we work with young people, schools, and organizations on questions of self-leadership, leadership development, and shaping the future.'
                )}</p>
                <p className="text-foreground font-medium">{t(
                  '2Morrow Lab verbindet beide Welten.',
                  '2Morrow Lab connects both worlds.'
                )}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORAUF WIR AUFBAUEN */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t('Worauf wir aufbauen', 'What we build on')}</h2>
            <p className="text-lg text-foreground font-medium">{t(
              '2Morrow Lab ist kein Konzept auf dem Papier.',
              "2Morrow Lab isn't a concept on paper."
            )}</p>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{t(
                'Über 120 junge Menschen haben bereits an unseren Pilotprogrammen teilgenommen.',
                'Over 120 young people have already participated in our pilot programs.'
              )}</p>
              <p>{t(
                'Mit der Sportschule Potsdam entwickeln wir Schule als Ökosystem weiter – mit jungen Leistungssportlerinnen und -sportlern.',
                "Together with Sportschule Potsdam, we are evolving school as an ecosystem \u2014 with young competitive athletes."
              )}</p>
              <p>{t(
                'Gemeinsam mit dem United World College Mostar entwickeln wir Formate für innovatives Alumni-Engagement – geführt von aktuellen Schülerinnen und Schülern aus aller Welt.',
                "With United World College Mostar, we are developing formats for innovative alumni engagement \u2014 led by current students from around the world."
              )}</p>
            </div>

            <div className="pt-8">
              <p className="font-heading font-semibold text-foreground mb-6">{t('Unsere Arbeit verbindet:', 'Our work connects:')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Life Design Thinking',
                  'Adaptive Leadership',
                  t('Entwicklungspartnerschaften', 'Development Partnerships'),
                  t('Schule als Ökosystem', 'School as Ecosystem'),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-secondary">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-heading font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-foreground font-medium pt-4">
              {t('Nicht als Theorie. Sondern als Praxis.', 'Not as theory. As practice.')}
            </p>

            {/* Partner logos placeholder */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-heading">{t('Partner', 'Partners')}</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="px-6 py-3 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">Sportschule Potsdam</div>
                <div className="px-6 py-3 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">UWC Mostar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
