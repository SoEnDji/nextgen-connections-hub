import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.6, ease },
};

const DerWeg = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h1
            {...fade}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            {t('Der Weg', 'The Path')}
          </motion.h1>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="font-heading text-lg md:text-xl text-accent-electric font-semibold"
          >
            {t('Kein Fahrplan. Eine Expedition.', 'No roadmap. An expedition.')}
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade} className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t(
                'Die meisten Orientierungsangebote funktionieren wie ein Navi: Ziel eingeben, Route berechnen, losfahren. Das Problem: Du kennst das Ziel noch nicht. Und die Straße wird gerade erst gebaut.',
                'Most orientation programs work like a GPS: enter destination, calculate route, go. The problem: you don\'t know the destination yet. And the road is still being built.'
              )}
            </p>
            <p>
              {t(
                '2Morrow Lab funktioniert anders. Statt dir den Weg zu zeigen, geben wir dir die Werkzeuge, ihn selbst zu finden. Schritt für Schritt. In deinem Tempo. Und du musst dabei nicht alleine gehen.',
                '2Morrow Lab works differently. Instead of showing you the way, we give you the tools to find it yourself. Step by step. At your own pace. And you don\'t have to walk alone.'
              )}
            </p>
            <p>
              {t(
                'Es ist kein linearer Prozess — du kannst an jedem Punkt einsteigen, zurückspringen oder Abkürzungen nehmen. Aber es gibt drei große Phasen, die sich bewährt haben:',
                'It\'s not a linear process — you can jump in at any point, go back, or take shortcuts. But there are three major phases that have proven effective:'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 1 */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-4 block">
              {t('Phase 1', 'Phase 1')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t('Erkenne, was dich lebendig macht', 'Discover what makes you come alive')}
            </h2>
            <p className="text-accent-magenta italic text-lg md:text-xl mb-10 border-l-2 border-accent-magenta/30 pl-5">
              {t(
                '„Du kannst nicht herausfinden, wohin du willst, wenn du nicht weißt, wer du bist."',
                '"You can\'t figure out where you want to go if you don\'t know who you are."'
              )}
            </p>
            <p className="text-white/80 leading-relaxed mb-12">
              {t(
                'Diese Phase handelt nicht von Berufsfeldern, Branchen oder Gehaltsstufen. Sie handelt von dir. Nicht davon, was du kannst — sondern davon, was dich bewegt, was dir wichtig ist und was dich zum Leuchten bringt.',
                'This phase isn\'t about career fields, industries, or salary brackets. It\'s about you. Not what you can do — but what moves you, what matters to you, and what makes you light up.'
              )}
            </p>
          </motion.div>

          {/* Dein Kompass */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Dein Kompass', 'Your Compass')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              {t(
                'Der Kompass ist das Herzstück von 2Morrow Lab. Er besteht aus drei Teilen, die zusammen ein Bild davon ergeben, wer du bist und was dich antreibt:',
                'The Compass is the heart of 2Morrow Lab. It consists of three parts that together paint a picture of who you are and what drives you:'
              )}
            </p>
            <ul className="space-y-6 text-white/80 leading-relaxed">
              <li>
                <strong className="text-accent-lime">{t('Dein Blick auf Arbeit (Workview):', 'Your View on Work (Workview):')}</strong>{' '}
                {t(
                  'Was glaubst du, wofür Arbeit da ist? Was macht gute Arbeit aus? Was erwartest du von einem Job — jenseits vom Gehalt? Das sind keine Fragen, auf die du sofort eine Antwort haben musst. Aber sie helfen dir zu verstehen, was du von der Arbeitswelt erwartest.',
                  'What do you believe work is for? What makes good work? What do you expect from a job — beyond salary? These aren\'t questions you need to answer immediately. But they help you understand what you expect from the working world.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Dein Blick aufs Leben (Lifeview):', 'Your View on Life (Lifeview):')}</strong>{' '}
                {t(
                  'Was zählt für dich wirklich? Was gibt dir das Gefühl, dass ein Tag gut war? Was würdest du bereuen, wenn du es nie gemacht hättest? Hier geht es um die großen Fragen — aber in deinen Worten, nicht in philosophischen Formeln.',
                  'What truly counts for you? What gives you the feeling a day was good? What would you regret never having done? This is about the big questions — but in your words, not in philosophical formulas.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Deine Kompass-Werte:', 'Your Compass Values:')}</strong>{' '}
                {t(
                  'Aus diesen beiden Perspektiven destillierst du 3–5 Werte, die für dich nicht verhandelbar sind. Das sind die Fixpunkte, an denen du jede Entscheidung messen kannst. Nicht was die Gesellschaft von dir erwartet — was DIR wichtig ist.',
                  'From these two perspectives, you distill 3–5 values that are non-negotiable for you. These are the fixed points against which you can measure every decision. Not what society expects from you — what matters to YOU.'
                )}
              </li>
            </ul>
            <p className="mt-6 text-accent-lime/90 font-medium text-sm border-l-2 border-accent-lime/30 pl-4">
              {t(
                'Ergebnis: Ein persönlicher Kompass, der dir Orientierung gibt — nicht indem er dir sagt, was richtig ist, sondern indem er dir zeigt, was zu dir passt.',
                'Result: A personal compass that gives you orientation — not by telling you what\'s right, but by showing you what fits you.'
              )}
            </p>
          </motion.div>

          {/* Kohärenz-Tagebuch */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Kohärenz-Tagebuch', 'Coherence Journal')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Kohärenz bedeutet: Wenn das, was du tust, zu dem passt, wer du bist und was du glaubst, fühlt sich das Leben stimmig an. Und dieses Gefühl kannst du trainieren — indem du es bemerkst.',
                'Coherence means: when what you do matches who you are and what you believe, life feels aligned. And you can train that feeling — by noticing it.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t(
                'Das Kohärenz-Tagebuch ist eine einfache, tägliche Übung: Notiere einen Moment am Tag, in dem du dich stimmig gefühlt hast. Das kann etwas Kleines sein — ein Gespräch, eine Aufgabe, eine Beobachtung. Über Wochen entsteht daraus ein Muster, das dir mehr über dich verrät als jeder Persönlichkeitstest.',
                'The Coherence Journal is a simple daily exercise: note one moment each day when you felt aligned. It can be something small — a conversation, a task, an observation. Over weeks, a pattern emerges that reveals more about you than any personality test.'
              )}
            </p>
          </motion.div>

          {/* Flow-Radar */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Flow-Radar', 'Flow Radar')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Kennst du das Gefühl, wenn du so in etwas vertieft bist, dass du alles um dich herum vergisst? Das ist Flow — und die Momente, in denen du ihn erlebst, sind Hinweisschilder zu dem, was dich wirklich erfüllt.',
                'You know that feeling when you\'re so absorbed in something that you forget everything around you? That\'s flow — and the moments you experience it are signposts to what truly fulfills you.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t(
                'Das Flow-Radar hilft dir, diese Momente bewusst wahrzunehmen und festzuhalten. Wann passiert es? Wobei? Mit wem? Was genau macht dich dabei so lebendig? Die Antworten stecken nicht in deinem Kopf — sie stecken in deinem Alltag.',
                'The Flow Radar helps you consciously notice and capture these moments. When does it happen? During what? With whom? What exactly makes you so alive? The answers aren\'t in your head — they\'re in your daily life.'
              )}
            </p>
          </motion.div>

          {/* Neugier + Staunen */}
          <motion.div {...fade}>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Neugier + Staunen', 'Curiosity + Wonder')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Die meisten Orientierungstools arbeiten nur mit Neugier: Was interessiert dich? Was möchtest du wissen? Das ist wichtig — aber es ist nur die Hälfte.',
                'Most orientation tools only work with curiosity: What interests you? What do you want to know? That\'s important — but it\'s only half the story.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Die andere Hälfte ist Staunen: die Bereitschaft, nicht alles zu wissen. Sich von etwas überraschen zu lassen. Zuzulassen, dass die Welt rätselhafter ist, als dein Instagram-Feed dir weismacht.',
                'The other half is wonder: the willingness to not know everything. To let yourself be surprised. To accept that the world is more mysterious than your Instagram feed makes you believe.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Neugier + Staunen = Wunder. Und Wunder ist das Gegengift gegen die Entscheidungsparalyse, die so viele von euch lähmt. Nicht mehr wissen macht den Unterschied — tiefer schauen.',
                'Curiosity + Wonder = Marvel. And marvel is the antidote to the decision paralysis that paralyzes so many of you. Not knowing more makes the difference — looking deeper.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t(
                '2Morrow Lab trainiert beides: gezielte Exploration und die Fähigkeit, offen für das Unerwartete zu bleiben.',
                '2Morrow Lab trains both: targeted exploration and the ability to stay open to the unexpected.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 2 */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-electric mb-4 block">
              {t('Phase 2', 'Phase 2')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('Baue Prototypen statt Pläne', 'Build prototypes, not plans')}
            </h2>
            <p className="text-accent-magenta italic text-lg md:text-xl mb-10 border-l-2 border-accent-magenta/30 pl-5">
              {t(
                '„Du enthältst viele Leben. Die Frage ist nicht: welches ist das richtige? Sondern: welches testest du als nächstes?"',
                '"You contain many lives. The question isn\'t: which one is right? But: which one do you test next?"'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              {t(
                'Wenn du deinen Kompass hast, ist es Zeit, Zukunft zu entwerfen — aber nicht als Masterplan, sondern als Designprojekt. Das bedeutet: Skizzieren. Testen. Lernen. Anpassen.',
                'Once you have your compass, it\'s time to design the future — not as a master plan, but as a design project. That means: sketch. Test. Learn. Adapt.'
              )}
            </p>
          </motion.div>

          {/* Zukunftsvisionen */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Zukunftsvisionen (Multiverse)', 'Future Visions (Multiverse)')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'In einem Forschungsexperiment wurden Menschen gefragt, wie viele verschiedene Leben sie gerne leben würden. Der Durchschnitt: 7. Sieben! Du bist nicht auf ein Leben beschränkt — also zeichne mehrere.',
                'In a research experiment, people were asked how many different lives they\'d like to live. The average: 7. Seven! You\'re not limited to one life — so sketch several.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                '2Morrow Lab lädt dich ein, mindestens drei verschiedene Zukunftsvisionen zu skizzieren. Nicht als Lebenslauf, sondern als Vorstellung: Wie sieht ein typischer Dienstag in diesem Leben aus? Was machst du morgens? Mit wem redest du? Was macht dich abends zufrieden?',
                '2Morrow Lab invites you to sketch at least three different future visions. Not as a CV, but as an imagination: What does a typical Tuesday look like in this life? What do you do in the morning? Who do you talk to? What satisfies you in the evening?'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Es geht nicht darum, die „richtige" Vision zu finden. Es geht darum, überhaupt erst mal zu sehen, was alles möglich ist.',
                'It\'s not about finding the "right" vision. It\'s about seeing what\'s possible in the first place.'
              )}
            </p>
          </motion.div>

          {/* Prototyping-Experimente */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Prototyping-Experimente', 'Prototyping Experiments')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                'Ein Prototyp im Life Design ist kein Praktikum und keine Bewerbung. Es ist ein kleines, risikoarmes Experiment, das dir hilft herauszufinden, ob eine Idee zu dir passt. Drei Typen:',
                'A prototype in Life Design isn\'t an internship or a job application. It\'s a small, low-risk experiment that helps you find out if an idea fits you. Three types:'
              )}
            </p>
            <ul className="space-y-6 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-accent-lime">{t('Gespräche:', 'Conversations:')}</strong>{' '}
                {t(
                  'Finde jemanden, der das macht, was dich interessiert, und führe ein ehrliches Gespräch. Nicht „Wie komme ich in den Job?" sondern „Wie fühlt sich dein Alltag an? Was überrascht dich? Was würdest du anders machen?"',
                  'Find someone who does what interests you and have an honest conversation. Not "How do I get this job?" but "What does your daily life feel like? What surprises you? What would you do differently?"'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Erfahrungen:', 'Experiences:')}</strong>{' '}
                {t(
                  'Probier etwas aus. Ein Tag bei einer NGO. Ein Wochenend-Workshop. Ein Mini-Projekt. Nicht um deinen Lebenslauf zu füllen, sondern um zu spüren, wie es sich anfühlt.',
                  'Try something out. A day at an NGO. A weekend workshop. A mini-project. Not to fill your CV, but to feel what it\'s like.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Recherchen:', 'Research:')}</strong>{' '}
                {t(
                  'Tauche tief in ein Thema ein. Lies, schau, hör zu. Aber mit einer klaren Frage: Passt das zu meinen Kompass-Werten?',
                  'Dive deep into a topic. Read, watch, listen. But with a clear question: Does this match my compass values?'
                )}
              </li>
            </ul>
          </motion.div>

          {/* Sein – Tun – Werden */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Sein – Tun – Werden', 'Being – Doing – Becoming')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Die meisten Karriereratgeber funktionieren so: Entscheide, was du werden willst → tu, was dafür nötig ist → dann wirst du es sein.',
                'Most career guides work like this: Decide what you want to become → do what\'s necessary → then you\'ll be it.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                '2Morrow Lab dreht die Reihenfolge um: Finde heraus, wer du bist (Sein) → Handle danach (Tun) → Dann entsteht daraus, wer du wirst (Werden). Identität zuerst, Karriere als Ergebnis.',
                '2Morrow Lab reverses the order: Find out who you are (Being) → Act accordingly (Doing) → Then who you become emerges (Becoming). Identity first, career as result.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Das klingt philosophisch, ist aber äußerst praktisch: Es schützt dich davor, einen Weg einzuschlagen, der nicht zu dir passt, nur weil er von außen gut aussieht.',
                'It sounds philosophical, but it\'s extremely practical: it protects you from taking a path that doesn\'t fit you, just because it looks good from the outside.'
              )}
            </p>
          </motion.div>

          {/* Reframing */}
          <motion.div {...fade}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Reframing: Wenn du feststeckst', 'Reframing: When you\'re stuck')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Manchmal hängt man fest — nicht weil die Situation unlösbar ist, sondern weil man sie falsch rahmt. „Ich muss mich jetzt entscheiden" wird zu „Ich darf jetzt experimentieren." „Ich habe keine Leidenschaft" wird zu „Ich habe noch nicht genug ausprobiert."',
                'Sometimes you get stuck — not because the situation is unsolvable, but because you\'re framing it wrong. "I have to decide now" becomes "I get to experiment now." "I have no passion" becomes "I haven\'t tried enough yet."'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                '2Morrow Lab hilft dir, festgefahrene Gedanken umzuformulieren — nicht um Probleme schönzureden, sondern um neue Lösungswege sichtbar zu machen. Im Design Thinking nennt man das Reframing, und es ist eine der mächtigsten Techniken, die es gibt.',
                '2Morrow Lab helps you reframe stuck thoughts — not to sugarcoat problems, but to make new solutions visible. In Design Thinking, it\'s called Reframing, and it\'s one of the most powerful techniques there is.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PHASE 3 */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <span className="font-heading text-xs font-bold tracking-[0.25em] uppercase text-accent-lime mb-4 block">
              {t('Phase 3', 'Phase 3')}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              {t('Wachse mit Menschen, die es ernst meinen', 'Grow with people who mean it')}
            </h2>
            <p className="text-accent-magenta italic text-lg md:text-xl mb-10 border-l-2 border-accent-magenta/30 pl-5">
              {t(
                '„Der größte Unterschied in Übergangsphasen machen nicht Tools. Es sind die richtigen Menschen."',
                '"The biggest difference in transitions isn\'t made by tools. It\'s made by the right people."'
              )}
            </p>
            <p className="text-white/80 leading-relaxed mb-12">
              {t(
                'Du kannst den besten Kompass der Welt haben und die kreativsten Prototypen — wenn du den Weg alleine gehst, verlierst du irgendwann den Mut oder die Perspektive. Darum ist Gemeinschaft keine nette Zugabe bei 2Morrow Lab. Sie ist das dritte tragende Element.',
                'You can have the best compass in the world and the most creative prototypes — if you walk the path alone, you\'ll eventually lose courage or perspective. That\'s why community isn\'t a nice add-on at 2Morrow Lab. It\'s the third pillar.'
              )}
            </p>
          </motion.div>

          {/* Formative Pods */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Formative Pods', 'Formative Pods')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Es gibt drei Arten von Gemeinschaft: Gemeinschaften, in denen man Spaß hat (sozial), Gemeinschaften, in denen man Dinge erledigt (kollaborativ), und Gemeinschaften, in denen man gemeinsam wächst (formativ). Die dritte Art ist die seltenste — und die wirksamste.',
                'There are three types of community: communities where you have fun (social), communities where you get things done (collaborative), and communities where you grow together (formative). The third type is the rarest — and the most effective.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              {t(
                'Ein Formativer Pod ist eine kleine Gruppe von 4–8 Menschen, die sich regelmäßig trifft (alle 2–4 Wochen), um gemeinsam zu wachsen. Keine Selbsthilfegruppe. Keine Networking-Veranstaltung. Sondern ein geschützter Raum mit einer klaren Struktur:',
                'A Formative Pod is a small group of 4–8 people who meet regularly (every 2–4 weeks) to grow together. Not a support group. Not a networking event. But a safe space with a clear structure:'
              )}
            </p>
            <ul className="space-y-6 text-white/80 leading-relaxed mb-6">
              <li>
                <strong className="text-accent-lime">{t('Erleben:', 'Experience:')}</strong>{' '}
                {t(
                  'Jede:r bringt eine aktuelle Erfahrung oder Frage mit — ein Prototyp, der gescheitert ist, eine Entscheidung, die ansteht, ein Moment, der überrascht hat.',
                  'Everyone brings a current experience or question — a prototype that failed, a decision that\'s coming up, a moment that surprised.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Reflektieren:', 'Reflect:')}</strong>{' '}
                {t(
                  'Gemeinsam anschauen, was passiert ist. Was fällt den anderen auf, das du selbst nicht siehst? Welche Muster tauchen auf? Was sagt das über deine Werte?',
                  'Look together at what happened. What do others notice that you don\'t see yourself? What patterns emerge? What does that say about your values?'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Erzählen:', 'Narrate:')}</strong>{' '}
                {t(
                  'Die Geschichte deiner Erfahrung in eigene Worte fassen. Denn erst wenn du etwas formulieren kannst, wird es zu echtem Wissen über dich selbst.',
                  'Put the story of your experience into your own words. Because only when you can articulate something does it become real self-knowledge.'
                )}
              </li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              {t(
                'Die Forschung aus Stanford zeigt: Menschen, die diesen Prozess durchlaufen, berichten von einer Art Transformation, die sie in keiner anderen Erfahrung erlebt haben. Nicht weil der Inhalt so besonders ist — sondern weil die Struktur Tiefe ermöglicht, die in normalen Gesprächen nie entsteht.',
                'Research from Stanford shows: people who go through this process report a kind of transformation they haven\'t experienced in any other setting. Not because the content is so special — but because the structure enables a depth that never emerges in normal conversations.'
              )}
            </p>
          </motion.div>

          {/* Wegbegleiter:innen */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Wegbegleiter:innen', 'Companions')}
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {t(
                'Neben den Pods verbindet 2Morrow Lab dich mit Menschen, die einen ähnlichen Weg schon gegangen sind — nicht als formale Mentoren mit Powerpoint-Präsentationen, sondern als echte Gesprächspartner:innen.',
                'In addition to the Pods, 2Morrow Lab connects you with people who have already walked a similar path — not as formal mentors with PowerPoint presentations, but as real conversation partners.'
              )}
            </p>
            <p className="text-white/80 leading-relaxed">
              {t(
                'Du willst wissen, wie es sich anfühlt, in der Sozialarbeit zu arbeiten? Oder ob ein Informatikstudium wirklich zu dir passt? Oder wie man den Sprung in die Selbstständigkeit wagt? Wir verbinden dich mit Menschen, die dir offen und ehrlich davon erzählen — nicht die glänzende Version, sondern die echte.',
                'You want to know what it feels like to work in social work? Or whether a computer science degree really suits you? Or how to take the leap into self-employment? We connect you with people who tell you openly and honestly — not the shiny version, but the real one.'
              )}
            </p>
          </motion.div>

          {/* Dein Netzwerk */}
          <motion.div {...fade}>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {t('Dein Netzwerk', 'Your Network')}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {t(
                '2Morrow Lab ist eingebettet in ein Ökosystem aus Organisationen, Einrichtungen und Initiativen, die junge Menschen unterstützen. Von der Studienberatung bis zum Startup-Inkubator, von der Ausbildungsagentur bis zur Kreativwerkstatt. Aber statt dir eine endlose Liste zu geben, filtert 2Morrow Lab für dich: basierend auf deinem Kompass, deinen Prototypen und dem, was du gerade brauchst.',
                '2Morrow Lab is embedded in an ecosystem of organizations, institutions, and initiatives that support young people. From academic counseling to startup incubators, from training agencies to creative workshops. But instead of giving you an endless list, 2Morrow Lab filters for you: based on your compass, your prototypes, and what you currently need.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Was diesen Weg besonders macht */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fade}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
              {t('Was diesen Weg besonders macht', 'What makes this path special')}
            </h2>
          </motion.div>

          {/* Kein linearer Prozess */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Kein linearer Prozess', 'Not a linear process')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Echtes Leben ist nicht linear, und dieser Prozess auch nicht. Du kannst jederzeit zurück zur Kompass-Phase, wenn du merkst, dass sich etwas verändert hat. Du kannst parallel prototypen und reflektieren. Du kannst mit Phase 3 anfangen und erst später in die Tiefe gehen. Dein Weg, dein Tempo.',
                'Real life isn\'t linear, and neither is this process. You can always go back to the compass phase if you notice something has changed. You can prototype and reflect in parallel. You can start with Phase 3 and go deeper later. Your path, your pace.'
              )}
            </p>
          </motion.div>

          {/* Fünf Haltungen */}
          <motion.div {...fade} className="mb-14">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Fünf Haltungen, die alles verändern', 'Five mindsets that change everything')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                'Hinter den Werkzeugen stehen fünf innere Haltungen, die wir mit dir trainieren. Sie sind das unsichtbare Betriebssystem für ein sinnvolles Leben:',
                'Behind the tools are five inner mindsets that we train with you. They are the invisible operating system for a meaningful life:'
              )}
            </p>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-accent-lime">{t('Staunen:', 'Wonder:')}</strong>{' '}
                {t(
                  'Die Fähigkeit, mit offenen Augen durch die Welt zu gehen. Nicht alles schon zu wissen. Sich überraschen zu lassen.',
                  'The ability to walk through the world with open eyes. Not knowing everything already. Letting yourself be surprised.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Bereitschaft:', 'Readiness:')}</strong>{' '}
                {t(
                  'Offen sein für das, was kommt. Glück ist kein Zufall — es begegnet denen, die bereit sind.',
                  'Being open to what comes. Luck isn\'t random — it meets those who are ready.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Radikale Akzeptanz:', 'Radical Acceptance:')}</strong>{' '}
                {t(
                  'Die Realität sehen, wie sie ist — nicht wie du sie gerne hättest. Erst wenn du akzeptierst, wo du stehst, kannst du wirklich losgehen.',
                  'Seeing reality as it is — not as you\'d like it to be. Only when you accept where you stand can you truly start moving.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Voll dabei, gelassen losgelöst:', 'Fully engaged, calmly detached:')}</strong>{' '}
                {t(
                  'Alles geben, aber am Ergebnis nicht festklammern. Den Prozess kontrollieren, nicht das Resultat.',
                  'Give everything, but don\'t cling to the outcome. Control the process, not the result.'
                )}
              </li>
              <li>
                <strong className="text-accent-lime">{t('Gestalte deine Welt:', 'Shape your world:')}</strong>{' '}
                {t(
                  'Du bist nicht Passagier deines Lebens. Du bist Autor:in. Und jeder Tag ist eine neue Seite.',
                  'You\'re not a passenger in your life. You\'re the author. And every day is a new page.'
                )}
              </li>
            </ul>
          </motion.div>

          {/* Nicht finden — gestalten */}
          <motion.div {...fade}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {t('Nicht „finden" — gestalten', 'Not "finding" — designing')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t(
                'Der wichtigste Gedanke, den wir dir mitgeben wollen: Du musst dein Leben nicht finden. Du darfst es gestalten. Es gibt kein fertiges Ich, das irgendwo versteckt auf dich wartet. Es gibt ein Ich, das sich mit jeder Erfahrung, jeder Entscheidung und jeder ehrlichen Reflexion weiter entfaltet.',
                'The most important thought we want to leave you with: You don\'t have to find your life. You get to design it. There\'s no finished self hiding somewhere waiting for you. There\'s a self that unfolds with every experience, every decision, and every honest reflection.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Das macht den Druck raus. Und den Spaß rein.',
                'That takes the pressure off. And puts the fun in.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fade}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              {t('Bereit?', 'Ready?')}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              {t(
                'Du musst nicht alles wissen. Du musst nicht alles können. Du musst nur bereit sein, den ersten Schritt zu machen.',
                'You don\'t have to know everything. You don\'t have to be able to do everything. You just have to be ready to take the first step.'
              )}
            </p>
            <p className="text-white/60 text-lg mb-10">
              {t(
                'Und wenn du das hier liest, bist du es wahrscheinlich schon.',
                'And if you\'re reading this, you probably already are.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2 bg-accent-lime text-foreground px-10 py-4 rounded-full font-heading font-bold text-base hover:scale-105 transition-transform duration-200"
              >
                {t('Starte deine Reise', 'Start Your Journey')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-heading font-semibold text-sm transition-colors"
              >
                {t('Zurück zur Startseite', 'Back to Home')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DerWeg;
