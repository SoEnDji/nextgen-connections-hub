import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import founderSohrabImg from '@/assets/founder-vera.jpg';
import founderVeraImg from '@/assets/founder-sohrab.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 }
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO — typographic, no image */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent-magenta/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-white/10 text-text-hero/70 px-4 py-2 rounded-full font-heading font-semibold text-sm border border-white/10">
              {t('Über uns', 'About')}
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-hero leading-[1.1] text-balance glow-text">
              {t('Warum es 2Morrow Lab gibt', 'Why 2Morrow Lab exists')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* WHY — narrative block */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>{t(
                  'Junge Menschen wachsen in einer Welt auf, in der sich Rahmenbedingungen schneller verändern, als man sie planen kann.',
                  'Young people are growing up in a world where conditions shift faster than anyone can plan for.'
                )}</p>
              <p>{t(
                  'Gleichzeitig wird von ihnen erwartet, früh klar zu sein. Sich festzulegen. Sich zu entscheiden.',
                  "At the same time, they are expected to have it figured out. To commit. To decide."
                )}</p>
            </div>
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-xl md:text-2xl text-foreground font-heading font-bold leading-snug">{t(
                  'Orientierung entsteht nicht durch Druck. Sondern durch Selbstkenntnis, Erfahrung und tragfähige Beziehungen.',
                  "Orientation doesn't come from pressure. It comes from self-knowledge, experience, and meaningful relationships."
                )}</p>
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed">{t(
                'Diese Haltung prägt nicht nur unsere Arbeit. Sie prägt auch uns.',
                "This mindset doesn't just shape our work. It shapes us."
              )}</p>
          </motion.div>
        </div>
      </section>

      {/* OUR EXPERIENCE */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold glow-text">
              {t('Unsere Erfahrung', 'Our Experience')}
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
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
            </div>
            <p className="font-heading font-semibold text-white text-xl">
              {t('2Morrow Lab verbindet beide Welten.', '2Morrow Lab connects both worlds.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16">
            {t('Die Menschen hinter 2Morrow Lab', 'The People Behind 2Morrow Lab')}
          </motion.h2>

          <div className="space-y-20">
            {/* Sohrab */}
            <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <img
                  src={founderSohrabImg}
                  alt="Dr. Sohrab Noorsalehi-Garakani"
                  className="rounded-2xl aspect-[3/4] object-cover w-full shadow-xl" />
                
              </div>
              <div className="md:col-span-2 space-y-5">
                <h3 className="font-heading text-2xl font-bold text-foreground">Dr. Sohrab Noorsalehi-Garakani aka "Dr. So"</h3>
                <p className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">
                  Leadership Coach
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                  <p className="text-foreground font-heading font-semibold">{t(
                      'Er ist überzeugt: Resilienz entsteht nicht durch Druck, sondern durch Beziehung, Klarheit und Verantwortung.',
                      'His core belief: resilience grows from clarity, relationships, and responsibility.'
                    )}</p>
                </div>
              </div>
            </motion.div>

            {/* Vera */}
            <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 md:order-last">
                <img
                  src={founderVeraImg}
                  alt="Vera Plümer"
                  className="rounded-2xl aspect-[3/4] object-cover w-full shadow-xl" />
                
              </div>
              <div className="md:col-span-2 space-y-5">
                <h3 className="font-heading text-2xl font-bold text-foreground">Vera Plümer</h3>
                <p className="text-sm font-heading font-semibold text-accent-magenta uppercase tracking-wider">
                  Life Design Coach
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t(
                      'Vera arbeitet als Coach und Dozentin mit Studierenden. Sie begleitet junge Menschen dabei, nicht nur einen Beruf zu wählen, sondern ihren eigenen Weg zu entwickeln.',
                      'Vera works as a coach and lecturer with university students. She supports young people in shaping not just a career, but a direction that genuinely fits who they are.'
                    )}</p>
                  <p>{t(
                      'In ihrer Arbeit nutzt sie unter anderem das Life Design Framework. Es geht um Selbstkenntnis, Experimente und bewusste Entscheidungen – nicht um schnelle Antworten oder vorgefertigte Lösungen.',
                      "Her work draws on the Life Design framework. It's about self-awareness, experimentation, and making thoughtful decisions — not chasing quick answers."
                    )}</p>
                  <p className="text-foreground font-heading font-semibold">{t(
                      'Sie glaubt daran, dass Klarheit und Handlungsfähigkeit entstehen, wenn junge Menschen sich selbst ernst nehmen, ausprobieren und Verantwortung für ihren Weg übernehmen.',
                      'She believes clarity and agency grow when young people take themselves seriously, explore, and step into responsibility for their own path.'
                    )}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD ON */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              {t('Worauf wir aufbauen', 'What we build on')}
            </h2>
            <p className="text-xl text-foreground font-heading font-semibold">{t(
                '2Morrow Lab ist kein Konzept auf dem Papier.',
                "2Morrow Lab isn't a concept on paper."
              )}</p>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
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

            <div className="pt-4">
              <p className="font-heading font-semibold text-foreground mb-6 text-lg">
                {t('Unsere Arbeit verbindet:', 'Our work connects:')}
              </p>
              <ul className="space-y-3">
                {[
                'Life Design Thinking',
                'Adaptive Leadership',
                t('Entwicklungspartnerschaften', 'Development Partnerships'),
                t('Schule als Ökosystem', 'School as Ecosystem')].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <span className="font-heading font-semibold text-foreground">{item}</span>
                  </li>
                )}
              </ul>
            </div>

            <p className="text-xl text-foreground font-heading font-semibold pt-4">
              {t('Nicht als Theorie. Sondern als Praxis.', 'Not as theory. As practice.')}
            </p>

            {/* Partners */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-5 uppercase tracking-wider font-heading">
                {t('Partner', 'Partners')}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="px-5 py-2.5 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">
                  Sportschule Potsdam
                </div>
                <div className="px-5 py-2.5 rounded-lg border border-border text-sm font-heading font-semibold text-muted-foreground">
                  UWC Mostar
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>);

};

export default About;