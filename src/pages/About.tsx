import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import editorialWorkshop from '@/assets/editorial-workshop.jpg';
import aboutImg from '@/assets/editorial-collab.jpg';
import founderSohrabImg from '@/assets/founder-vera.jpg';
import founderVeraImg from '@/assets/founder-sohrab.jpg';
import detailNotebook from '@/assets/detail-notebook.jpg';

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
      {/* HERO — tighter, no full-bleed image */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
          <div className="grid lg:grid-cols-5 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-text-hero leading-tight text-balance glow-text">
                {t('Warum es 2Morrow Lab gibt', 'Why 2Morrow Lab exists')}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <img
                src={aboutImg}
                alt=""
                className="rounded-2xl object-cover w-full aspect-[4/3] opacity-60 grayscale-[40%]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WARUM */}
      <section className="py-16 md:py-24 bg-background">
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
              'Diese Haltung prägt nicht nur unsere Arbeit. Sie prägt auch uns.',
              "This mindset doesn't just shape our work. It shapes us."
            )}</p>
          </motion.div>
        </div>
      </section>

      {/* UNSERE ERFAHRUNG — split layout with smaller image */}
      <section className="section-dark noise-overlay py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div {...fadeUp} className="lg:col-span-2 relative group">
              <div className="grid grid-cols-2 gap-3">
                <img src={editorialWorkshop} alt={t('Workshop', 'Workshop')} className="rounded-xl w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <img src={detailNotebook} alt="" className="rounded-xl w-full aspect-[3/4] object-cover mt-6 grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-3 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold glow-text">{t('Unsere Erfahrung', 'Our Experience')}</h2>
              <div className="space-y-4 text-lg opacity-70 leading-relaxed">
                <p>{t(
                  'Schule kennen wir nicht nur aus Konzeptpapieren.',
                  "We don't know school from concept papers alone."
                )}</p>
                <p>{t(
                  'Als Fellows bei Teach First Deutschland waren wir zwei Jahre an herausfordernden Schulen tätig – in einem Umfeld mit hohen sozialen und strukturellen Anforderungen.',
                  "As Teach First Deutschland fellows, we spent two years at high-challenge schools — in environments with intense social and structural demands."
                )}</p>
                <p>{t(
                  'Heute arbeiten wir mit jungen Menschen, Schulen und Organisationen an Fragen von Selbstführung, Leadership und Zukunftsgestaltung.',
                  'Today, we work with young people, schools, and organizations on questions of self-leadership, leadership development, and shaping the future.'
                )}</p>
                <p className="opacity-100 font-medium">{t(
                  '2Morrow Lab verbindet beide Welten.',
                  '2Morrow Lab connects both worlds.'
                )}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('Die Menschen hinter 2Morrow Lab', 'The People Behind 2Morrow Lab')}
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sohrab */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img src={founderSohrabImg} alt="Dr. Sohrab Noorsalehi-Garakani" className="rounded-2xl aspect-square object-cover w-full md:w-44 shadow-lg" />
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">Dr. Sohrab Noorsalehi-Garakani</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
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
              </div>
            </motion.div>
            {/* Vera */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img src={founderVeraImg} alt="Vera Plümer" className="rounded-2xl aspect-square object-cover w-full md:w-44 shadow-lg" />
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-foreground">Vera Plümer</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WORAUF WIR AUFBAUEN */}
      <section className="py-16 md:py-24 bg-background">
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
                "Together with Sportschule Potsdam, we are evolving school as an ecosystem — with young competitive athletes."
              )}</p>
              <p>{t(
                'Gemeinsam mit dem United World College Mostar entwickeln wir Formate für innovatives Alumni-Engagement – geführt von aktuellen Schülerinnen und Schülern aus aller Welt.',
                "With United World College Mostar, we are developing formats for innovative alumni engagement — led by current students from around the world."
              )}</p>
            </div>

            <div className="pt-6">
              <p className="font-heading font-semibold text-foreground mb-5">{t('Unsere Arbeit verbindet:', 'Our work connects:')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Life Design Thinking',
                  'Adaptive Leadership',
                  t('Entwicklungspartnerschaften', 'Development Partnerships'),
                  t('Schule als Ökosystem', 'School as Ecosystem'),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-hover">
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
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-5 uppercase tracking-wider font-heading">{t('Partner', 'Partners')}</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="px-5 py-2.5 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground card-hover">Sportschule Potsdam</div>
                <div className="px-5 py-2.5 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground card-hover">UWC Mostar</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
