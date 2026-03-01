import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* HERO */}
      <section className="hero-gradient noise-overlay relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent-magenta/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-text-hero/70 px-4 py-2 rounded-full font-heading font-semibold text-sm border border-white/10">
              {t('Manifest', 'Manifesto')}
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-text-hero leading-[1.1] text-balance glow-text">
              {t('Weil die Zukunft nicht mehr wartet', 'Because the future won\'t wait')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* OPENING NARRATIVE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                {t(
                  'Montag, 7:42 Uhr. Zwischen Mathe und Deutsch sitzt eine Schülerin im Flur, das Handy in der Hand, den Blick zwischen Bildschirm und Boden. Dreiundzwanzig offene Tabs: Studiengänge, Ausbildungswege, Tests, Rankings, ein Video über „Jobs der Zukunft", ein Beitrag über KI, ein anderer über Klimakrise. Viel Information. Wenig Orientierung. Sie sucht nicht einfach den nächsten Abschluss. Sie sucht eine Richtung für ihr Leben.',
                  'Monday, 7:42 AM. Between math and German class, a student sits in the hallway, phone in hand, eyes shifting between screen and floor. Twenty-three open tabs: degree programs, training paths, tests, rankings, a video about "jobs of the future," a post about AI, another about the climate crisis. Lots of information. Little orientation. She\'s not just looking for her next qualification. She\'s looking for a direction for her life.'
                )}
              </p>
              <p className="text-foreground font-heading font-semibold text-xl">
                {t('Und sie ist damit nicht allein.', 'And she is not alone.')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE WORLD WE LIVE IN */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                {t(
                  'Wir leben in einer Zeit, in der sich viele Gewissheiten gleichzeitig auflösen: Ökosysteme geraten unter Druck, Gesellschaften polarisieren sich, Demokratien ermüden, Arbeitswelten verschieben sich in rasantem Tempo. Künstliche Intelligenz beschleunigt diese Dynamik noch einmal. Was gestern als sicher galt, kann morgen automatisiert sein. Was heute als unmöglich erscheint, ist übermorgen Standard.',
                  'We live in a time when many certainties are dissolving simultaneously: ecosystems are under pressure, societies are polarizing, democracies are fatiguing, and the world of work is shifting at breakneck speed. Artificial intelligence accelerates this dynamic even further. What was considered secure yesterday could be automated tomorrow. What seems impossible today may be standard the day after.'
                )}
              </p>
              <p className="text-white font-heading font-semibold text-xl">
                {t(
                  'Diese Lage ist beides: Zumutung und Einladung.',
                  'This situation is both: a burden and an invitation.'
                )}
              </p>
              <p>{t('Eine Zumutung, weil sie vielen Menschen den Boden unter den Füßen wegzieht.', 'A burden because it pulls the ground from under many people\'s feet.')}</p>
              <p>{t('Eine Einladung dazu, träumen und über uns hinaus zu wachsen.', 'An invitation to dream and to grow beyond ourselves.')}</p>
            </div>

            <blockquote className="border-l-4 border-accent-lime pl-6 py-2">
              <p className="text-xl md:text-2xl text-white font-heading font-bold leading-snug">
                {t(
                  'Eine Einladung, die uns zwingt, die eigentliche Frage wieder ernst zu nehmen:',
                  'An invitation that compels us to take the real question seriously again:'
                )}
              </p>
            </blockquote>

            <div className="space-y-4 text-lg text-white/60 leading-relaxed">
              <p>
                {t(
                  'Nicht nur Was werde ich? – sondern Wer bin ich und wie will ich leben?',
                  'Not just What will I become? — but Who am I and how do I want to live?'
                )}
              </p>
              <p>
                {t(
                  'Nicht nur Welchen Job bekomme ich? – sondern Wofür will ich meine Zeit, meine Fähigkeiten, mein Leben einsetzen?',
                  'Not just Which job will I get? — but What do I want to dedicate my time, my abilities, my life to?'
                )}
              </p>
            </div>

            <p className="text-white font-heading font-semibold text-xl">
              {t('In dieser Frage liegt der Kern von Bildung.', 'At the heart of this question lies the essence of education.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BILDUNG */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                {t(
                  'Bildung als Entwicklung von Persönlichkeit, Urteilskraft, Handlungsfähigkeit und Verantwortung. Bildung als Fähigkeit, mit Unsicherheit umzugehen, ohne die eigene Integrität zu verlieren. Bildung als Weg, den eigenen Platz in der Welt zu finden – und diesen Platz nicht nur zu besetzen, sondern mitzugestalten.',
                  'Education as the development of personality, judgment, agency, and responsibility. Education as the ability to navigate uncertainty without losing one\'s integrity. Education as a path to finding one\'s place in the world — and not just occupying that place, but co-creating it.'
                )}
              </p>
            </div>
            <p className="text-foreground font-heading font-bold text-2xl md:text-3xl">
              {t('Genau hier setzt 2Morrow Lab an.', 'This is exactly where 2Morrow Lab comes in.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY — NORDSTERN */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold glow-text">
              {t('Warum? Unser Nordstern', 'Why? Our North Star')}
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p className="text-white font-heading font-semibold text-xl">
                {t(
                  'Wir glauben an eine lernende und gesunde Gesellschaft, in der alle Menschen als Gestalter:innen Verantwortung für sich und ihre Mitwelt übernehmen und füreinander ihr volles Potenzial entfalten.',
                  'We believe in a learning and healthy society where all people, as shapers, take responsibility for themselves and their world and unlock their full potential for one another.'
                )}
              </p>
              <p>
                {t(
                  'Wir glauben, jeder Mensch ist einzigartig und besitzt ein einzigartiges, ungenutztes Potenzial.',
                  'We believe every person is unique and possesses a unique, untapped potential.'
                )}
              </p>
              <p>
                {t(
                  'Es gibt immer mehr als einen Weg hin zu diesem Potenzial und diese sind so einzigartig und vielfältig wie die Menschen selbst, egal ob langsam oder schnell, auf Umwegen oder direkt.',
                  'There is always more than one path to that potential, and these paths are as unique and diverse as the people themselves — whether slow or fast, winding or direct.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              {t('Wie?', 'How?')}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                {t(
                  'Deshalb hilft 2Morrow Lab junge Menschen und Talente, sich selbst gut zu kennen und befähigt sie dazu, ihren ganz individuellen Weg zu entdecken und zu gestalten, um in ihre Kraft und Potenzial zu wachsen und gutes und bedeutungsvolles Leben zu leben.',
                  'That is why 2Morrow Lab helps young people and talents know themselves well and empowers them to discover and shape their own individual path — to grow into their strength and potential and live a good and meaningful life.'
                )}
              </p>
              <p>
                {t(
                  'Dafür erschaffen und moderieren wir physische und virtuelle Räume, in denen Entwicklung über Lebensphasen hinweg strukturell unterstützt wird und Schulen als Knotenpunkte eines Netzwerks aus Familien, Zivilgesellschaft, Wirtschaft und Institutionen wirken.',
                  'To achieve this, we create and facilitate physical and virtual spaces where development is structurally supported across life phases, and schools act as nodes in a network of families, civil society, business, and institutions.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT — MISSION */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold glow-text">
              {t('Was? Unsere Mission', 'What? Our Mission')}
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                {t(
                  '2Morrow Lab entwickelt eine Plattform und eine Gemeinschaft auf Überzeugungstäter:innen, und stellt Informationen, Werkzeuge und Unterstützung bereit, damit junge Talente ihren Weg finden und gestalten. Im Kern steht dabei ein Life Design Thinking Ansatz, der junge Menschen mit Hilfe von KI und individueller menschlicher Begleitung dazu befähigt, Entscheidungen für die besten ersten Schritte hin zu ihren Platz in der Welt zu treffen und diese konkrete Schritte wirksam und erfolgreich umsetzen.',
                  '2Morrow Lab develops a platform and a community of passionate change-makers, providing information, tools, and support so that young talents can find and shape their path. At its core is a Life Design Thinking approach that empowers young people — with the help of AI and individual human guidance — to make decisions for the best first steps toward their place in the world and to implement those concrete steps effectively and successfully.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE SPACE WE BUILD */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                {t(
                  '2Morrow Lab ist die Absicht, einen fehlenden Raum zu bauen: einen Raum, in dem junge Menschen ihr Leben entwerfen, Entscheidungen prüfen, Schritte gehen und dabei verlässlich begleitet werden.',
                  '2Morrow Lab is the intention to build a missing space: a space where young people design their lives, test decisions, take steps, and are reliably supported along the way.'
                )}
              </p>
              <p className="text-foreground font-heading font-semibold text-xl">
                {t(
                  'Einen Raum, in dem aus abstrakter Zukunft konkrete Handlung wird.',
                  'A space where abstract futures become concrete action.'
                )}
              </p>
              <p>
                {t(
                  'Dieser Raum hat zwei Seiten, die untrennbar zusammengehören.',
                  'This space has two sides that are inseparably connected.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO SIDES */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-12">
            {/* Personal side */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-lime">
                {t('Die erste Seite ist persönlich:', 'The first side is personal:')}
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                {t(
                  'Junge Menschen brauchen Klarheit darüber, was ihnen wichtig ist, was sie können, worin sie wachsen wollen und welchen Beitrag sie leisten möchten. Sie brauchen die Chance, Wege nicht nur theoretisch zu vergleichen, sondern praktisch zu testen. Sie brauchen den Mut, sich zu entscheiden – und die Freiheit, Entscheidungen lernend weiterzuentwickeln.',
                  'Young people need clarity about what matters to them, what they can do, where they want to grow, and what contribution they want to make. They need the chance to not just compare paths theoretically, but to test them practically. They need the courage to decide — and the freedom to evolve decisions through learning.'
                )}
              </p>
            </div>

            {/* Systemic side */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-magenta">
                {t('Die zweite Seite ist systemisch:', 'The second side is systemic:')}
              </h3>
              <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                <p>
                  {t(
                    'Schule, Eltern, Unternehmen und eine fülle an Akteuren in unsrer Gesellschaft folgen der Absicht, junge Menschen zu fördern und zu fordern, um ihnen zu ermöglichen, ihr volles Potenzial zu entfalten. Keiner der Akteure kann dies allein leisten und was fehlt, ist ein tragfähiges Zusammenspiel.',
                    'Schools, parents, businesses, and a wealth of actors in our society share the intention to support and challenge young people so they can unlock their full potential. None of these actors can achieve this alone — what is missing is a viable interplay.'
                  )}
                </p>
                <p>
                  {t(
                    'Darum versteht 2Morrow Lab Schule als Knotenpunkt eines Entwicklungsökosystems, einem lebendigen Netzwerk aus Schule, Eltern, zivilgesellschaftlichen Akteuren, Wirtschaft, Mentor:innen, Hochschulen und lokalen Institutionen.',
                    'That is why 2Morrow Lab sees school as a node in a development ecosystem — a living network of schools, parents, civil society actors, business, mentors, universities, and local institutions.'
                  )}
                </p>
                <p>
                  {t(
                    'Nicht als lose Kontaktliste, sondern als funktionierendes Gefüge mit klaren Rollen, Übergaben und gemeinsamer Verantwortung. Ein Verbund von Menschen und Organisationen, der Informationen, Unterstützung und Möglichkeiten dorthin bringt, wo sie gebraucht werden.',
                    'Not as a loose contact list, but as a functioning structure with clear roles, handoffs, and shared responsibility. An alliance of people and organizations that brings information, support, and opportunities where they are needed.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY & HUMAN STEPS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                {t(
                  'Dabei nutzen wir Technologie, insbesondere KI, um den individuellen Ausgangssituationen und Fragen von Talenten passgenau adressieren und begleiten zu können',
                  'We use technology, especially AI, to precisely address and support the individual starting points and questions of talents.'
                )}
              </p>
              <p>
                {t(
                  'Wir bieten einen leichten und passgenauen Zugang zu Information, Wissen und Skills, um informierte Entscheidungen zu treffen und genau jene Kompetenzen zu entwickeln, die es für die erfolgreichen nächsten Schritte braucht.',
                  'We offer easy and tailored access to information, knowledge, and skills — to make informed decisions and develop exactly those competencies needed for successful next steps.'
                )}
              </p>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-xl md:text-2xl text-foreground font-heading font-bold leading-snug">
                {t(
                  'Denn die entscheidenden Schritte bleiben menschlich:',
                  'Because the decisive steps remain human:'
                )}
              </p>
            </blockquote>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'ein Gespräch, das Mut macht; eine Rückmeldung, die trägt; ein Praktikum, das Perspektive öffnet; ein Projekt, das Selbstwirksamkeit erfahrbar macht; eine Entscheidung, die aus dem eigenen Inneren kommt und zugleich die Welt mitdenkt.',
                'a conversation that inspires courage; feedback that carries; an internship that opens perspective; a project that makes self-efficacy tangible; a decision that comes from within and considers the world at the same time.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* A DIFFERENT UNDERSTANDING */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white">
              {t('So entsteht ein anderes Verständnis von Leistung:', 'This creates a different understanding of achievement:')}
            </h2>
            <div className="space-y-4">
              {[
                { de: 'nicht nur Output, sondern Reifung.', en: 'not just output, but maturation.' },
                { de: 'nicht nur Anpassung, sondern Gestaltung.', en: 'not just adaptation, but creation.' },
                { de: 'nicht nur Karriereplanung, sondern Lebensführung.', en: 'not just career planning, but life leadership.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-1 text-accent-lime flex-shrink-0" />
                  <p className="text-lg text-white/70 font-heading font-semibold">{t(item.de, item.en)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-white/60 leading-relaxed pt-4">
              <p>
                {t(
                  'Leadership und Entrepreneurship Education sind in diesem Verständnis keine Elitethemen, sondern Grundkompetenzen und Leitprinzipien einer demokratischen und von technologischen Möglichkeiten geprägten Zukunft.',
                  'In this understanding, leadership and entrepreneurship education are not elite topics, but core competencies and guiding principles of a democratic future shaped by technological possibilities.'
                )}
              </p>
              <p>
                {t(
                  'Mit Agency als gemeinsamen Nenner, d.h. Sich selbst führen können, mit anderen Verantwortung tragen, Ideen in Handlung übersetzen, an realen Problemen arbeiten, Rückschläge verarbeiten, neu ansetzen. Immer wieder. Nicht für ein "Höher, schneller, weiter", sondern für mehr Wirkung für die Menschen und Themen, die wirklich wichtig sind.',
                  'With agency as the common denominator: being able to lead yourself, share responsibility with others, translate ideas into action, work on real problems, process setbacks, start again. Over and over. Not for "higher, faster, further," but for more impact for the people and topics that truly matter.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INNER STANDARD */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
              {t(
                'Das ist auch der innere Maßstab von 2Morrow Lab:',
                'This is also the inner standard of 2Morrow Lab:'
              )}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t(
                'Demut vor der Größe der Aufgabe, Hingabe in der Umsetzung, hoher Anspruch an Qualität und Wirkung.',
                'Humility before the scale of the task, dedication in execution, high standards for quality and impact.'
              )}
            </p>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p className="text-foreground font-heading font-semibold">
                {t(
                  '2Morrow Lab tritt nicht an, um junge Menschen zu „optimieren".',
                  '2Morrow Lab does not set out to "optimize" young people.'
                )}
              </p>
              <p className="text-foreground font-heading font-semibold">
                {t('Wir treten an, um sie ernst zu nehmen.', 'We set out to take them seriously.')}
              </p>
              <p>
                {t(
                  'Nicht als Mangelwesen, die nur „fit gemacht" werden müssen.',
                  'Not as deficient beings who just need to be "made fit."'
                )}
              </p>
              <p>
                {t(
                  'Sondern als zentrale Mitgestalter:innen einer Welt, die gerade neu verhandelt, was Fortschritt, Arbeit, Wohlstand und gutes Leben bedeuten.',
                  'But as central co-creators of a world that is currently renegotiating what progress, work, prosperity, and a good life mean.'
                )}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT THEY NEED */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                {t(
                  'Wenn diese Generation lernen soll, mit Komplexität zu leben, dann braucht sie mehr als Informationen.',
                  'If this generation is to learn to live with complexity, it needs more than information.'
                )}
              </p>
              <div className="space-y-3 pl-2">
                {[
                  { de: 'Sie braucht Orte, Beziehungen und Werkzeuge, die Entwicklung möglich machen.', en: 'It needs places, relationships, and tools that make development possible.' },
                  { de: 'Sie braucht ein verlässliches Gegenüber.', en: 'It needs a reliable counterpart.' },
                  { de: 'Sie braucht ein System, das zuhört.', en: 'It needs a system that listens.' },
                ].map((item, i) => (
                  <p key={i} className="text-white font-heading font-semibold text-xl">{t(item.de, item.en)}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR ASPIRATION */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8">
            <p className="text-lg md:text-xl text-foreground font-heading font-semibold">
              {t(
                'Darum ist unser Anspruch bei 2Morrow Lab klar:',
                'That is why our aspiration at 2Morrow Lab is clear:'
              )}
            </p>
            <div className="space-y-4">
              {[
                { de: 'Eine Gesellschaft mitzugestalten, in der junge Menschen nicht allein durch Übergänge stolpern, sondern begleitet in Verantwortung hineinwachsen.', en: 'To co-create a society where young people don\'t stumble through transitions alone, but grow into responsibility with support.' },
                { de: 'Eine Schule mitzuentwickeln, die nicht nur vorbereitet, sondern verbindet.', en: 'To co-develop a school that doesn\'t just prepare, but connects.' },
                { de: 'Eine Praxis aufzubauen, in der Zukunft nicht verwaltet, sondern gemeinsam entworfen wird.', en: 'To build a practice where the future is not managed, but co-designed.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                  <p className="text-lg text-muted-foreground leading-relaxed">{t(item.de, item.en)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-dark noise-overlay py-20 md:py-28">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="space-y-8 text-center">
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p className="text-white font-heading font-semibold text-xl">
                {t('Das ist kein schneller Hack.', 'This is not a quick hack.')}
              </p>
              <p>{t('Es ist eine langfristige Arbeit.', 'It is long-term work.')}</p>
              <p>{t('Aber sie beginnt immer gleich:', 'But it always starts the same way:')}</p>
            </div>

            <div className="space-y-2 text-white font-heading text-xl md:text-2xl font-bold">
              <p>{t('mit einem jungen Menschen,', 'with a young person,')}</p>
              <p>{t('einer ehrlichen Frage,', 'an honest question,')}</p>
              <p>{t('einem nächsten Schritt.', 'a next step.')}</p>
            </div>

            <p className="text-accent-lime font-heading font-semibold text-lg md:text-xl pt-4">
              {t(
                'Und mit dem gemeinsamen Entschluss, aus diesem Schritt eine Richtung zu machen.',
                'And with the shared resolve to turn that step into a direction.'
              )}
            </p>

            <blockquote className="pt-8 border-t border-white/10 mt-8">
              <p className="text-white/40 italic text-lg">
                {t(
                  '„Wenn du schnell gehen willst, geh allein. Wenn du weit gehen willst, geh zusammen."',
                  '"If you want to go fast, go alone. If you want to go far, go together."'
                )}
              </p>
            </blockquote>

            <div className="space-y-4 pt-8">
              <p className="text-white/60 text-lg">
                {t(
                  'Unser Weg bei 2Morrow Lab hat gerade erst begonnen und ist noch weit. Sehr weit.',
                  'Our journey at 2Morrow Lab has just begun and the road ahead is long. Very long.'
                )}
              </p>
              <p className="text-white font-heading font-semibold text-xl">
                {t(
                  'Willst du mitgehen, mitgestalten oder inspirieren? Dann melde dich bei uns:',
                  'Want to walk with us, co-create, or inspire? Get in touch:'
                )}
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent-lime text-foreground font-heading font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-lg"
                >
                  {t('Kontakt aufnehmen', 'Get in touch')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Manifesto;
