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
              {t('Die Menschen hinter 2Morrow Lab', 'The People Behind 2Morrow Lab')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* INTRO — narrative block */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>{t(
                'Wir kennen Schule und Lebensrealität nicht nur aus Konzeptpapieren. Als Fellows bei Teach First Deutschland waren wir zwei Jahre an herausfordernden Schulen – mitten in hohen sozialen und strukturellen Anforderungen.',
                "We don't know school and real life from concept papers alone. As Teach First Deutschland fellows, we spent two years at high-challenge schools — right in the middle of intense social and structural demands."
              )}</p>
            <p>{t(
                'Daraus ist unsere Kernüberzeugung entstanden: Orientierung entsteht nicht durch Druck, sondern durch Selbstkenntnis, Erfahrung und tragfähige Beziehungen.',
                "From this, our core conviction emerged: orientation doesn't come from pressure, but from self-knowledge, experience, and meaningful relationships."
              )}</p>
            <p>{t(
                'Heute arbeiten wir mit jungen Menschen, Schulen und Organisationen an Selbstführung, Leadership und Zukunftsgestaltung – gerade weil sich die Welt schneller verändert, als man sie planen kann.',
                'Today, we work with young people, schools, and organizations on self-leadership, leadership development, and shaping the future — precisely because the world is changing faster than anyone can plan for.'
              )}</p>
            <p className="font-heading font-semibold text-foreground text-xl">{t(
                '2Morrow Lab verbindet diese Praxis mit einem zukunftsfähigen Ansatz.',
                '2Morrow Lab connects this practice with a future-ready approach.'
              )}</p>
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
                <p className="text-sm font-heading font-semibold text-accent uppercase tracking-wider">CO-FOUNDER & IN:SPIRATEUR

                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t(
                      'Mein name Sohrab  "So" und für viele Menschen wirke oft klar und strukturiert. Aber das kommt auch daher, dass ich Unsicherheit gut kenne. Viele meiner wichtigsten Lernschritte kamen nicht aus Erfolgen, sondern aus Umwegen, Fehlannahmen und Momenten, in denen ich mich neu sortieren musste.',
                      'My name is Sohrab "So" and to many people I often seem clear and structured. But that also comes from knowing uncertainty well. Many of my most important learning steps came not from successes, but from detours, wrong assumptions, and moments where I had to reorient myself.'
                    )}</p>
                  <p>{t(
                      'In über 15 Jahren in Wissenschaft, Bildung und Wirtschaft habe ich gesehen, wie schnell Menschen in leistungsstarken Umfeldern anfangen zu funktionieren – statt zu gestalten. Und wie sehr Orientierung leidet, wenn niemand hilft, die wichtigen Fragen auszuhalten: Was ist mir wichtig? Wer will ich werden? Was ist der nächste echte Schritt?',
                      'In over 15 years in science, education, and business, I have seen how quickly people in high-performance environments start to function — instead of creating. And how much orientation suffers when no one helps to sit with the important questions: What matters to me? Who do I want to become? What is the next real step?'
                    )}</p>
                  <p>{t(
                      '2Morrow Lab baue ich, weil junge Menschen an Übergängen nicht noch mehr „Ratgeber" brauchen, sondern eine tragfähige Infrastruktur, Ermutigung und kontinuierliche, individuelle Begleitung: Life Design als Praxis, eine KI als Begleiter (nicht als Ersatz), und echte Entwicklungspartnerschaften mit Menschen, die mitgehen.',
                      'I am building 2Morrow Lab because young people at transitions don\'t need more "advisors" — they need sustainable infrastructure, encouragement, and continuous, individual support: Life Design as practice, an AI as companion (not replacement), and real development partnerships with people who walk alongside them.'
                    )}</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  {[
                    { text: t('Mutig und bescheiden handeln', 'Act with courage and humility'), color: 'bg-accent/15 text-accent border-accent/30' },
                    { text: t('Neugieriges und offenes Lernen und Erkunden', 'Curious and open learning and exploring'), color: 'bg-accent-magenta/15 text-accent-magenta border-accent-magenta/30' },
                    { text: t('Dankbarer, wertschätzender und ehrlicher Umgang', 'Grateful, appreciative and honest interaction'), color: 'bg-accent/15 text-accent border-accent/30' },
                    { text: t('Gesundheit & Vitalität stärken', 'Strengthen health & vitality'), color: 'bg-accent-magenta/15 text-accent-magenta border-accent-magenta/30' },
                  ].map((val, i) => (
                    <span key={i} className={`inline-block px-4 py-2 rounded-full text-sm font-heading font-semibold border ${val.color}`}>
                      {val.text}
                    </span>
                  ))}
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
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5">
                {t('Unsere Partner', 'Our Partners')}
              </h3>
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