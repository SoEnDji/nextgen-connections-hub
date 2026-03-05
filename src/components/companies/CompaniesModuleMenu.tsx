import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, Heart, Rocket, Building2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

interface ModuleItem {
  code: string;
  title: string;
  bullets: string[];
}

interface ModuleCategory {
  key: string;
  icon: typeof Search;
  label: string;
  modules: ModuleItem[];
}

const CompaniesModuleMenu = () => {
  const { t } = useLanguage();

  const categories: ModuleCategory[] = [
    {
      key: 'A',
      icon: Search,
      label: t('Talente finden', 'Find Talent'),
      modules: [
        {
          code: 'A1',
          title: 'Early-Talent-Strategie & Funnel',
          bullets: [
            t('Zielgruppen-/Rollenprofil (Potenzial, Lernkurve, Kontext)', 'Target group/role profile (potential, learning curve, context)'),
            t('Ansprache-Strategie (Touchpoints, Sprache, Formate)', 'Outreach strategy (touchpoints, language, formats)'),
            t('Prozessdesign vom Erstkontakt bis Einstieg', 'Process design from first contact to onboarding'),
          ],
        },
        {
          code: 'A2',
          title: 'Talentpool-Matching',
          bullets: [
            t('Matching nach Skills + Interessen + Werte + Zielen', 'Matching by skills + interests + values + goals'),
            t('Shortlists inkl. Match-Begründung', 'Shortlists incl. match rationale'),
            t('Warm Intros / moderierte Erstgespräche (optional)', 'Warm intros / moderated first conversations (optional)'),
            t('Zusatz: Matching auf komplementäre, „gezackte" Profile und Kontext-Passung – nicht gegen „Durchschnitt".', 'Additional: Matching for complementary, "jagged" profiles and context fit — not against "average."'),
          ],
        },
        {
          code: 'A3',
          title: 'School Access & Partnerschaften',
          bullets: [
            t('Vernetzung mit passenden Schulen/Clustern', 'Connecting with suitable schools/clusters'),
            t('Co-Design von Formaten (Projektwochen, Praxisprojekte, Lern-Labs)', 'Co-design of formats (project weeks, practical projects, learning labs)'),
            t('Koordination & Moderation', 'Coordination & moderation'),
          ],
        },
        {
          code: 'A4',
          title: t('Employer Branding als Entwicklungsversprechen', 'Employer Branding as Development Promise'),
          bullets: [
            t('Organisationsprofil & Karriere-Landing', 'Organization profile & career landing'),
            t('Realistic Job Preview (Erwartungen, Lernpfade, Alltag)', 'Realistic job preview (expectations, learning paths, daily life)'),
            t('Content-Formate (echte Einblicke statt Hochglanz)', 'Content formats (real insights instead of high gloss)'),
          ],
        },
      ],
    },
    {
      key: 'B',
      icon: Heart,
      label: t('Talente halten', 'Retain Talent'),
      modules: [
        {
          code: 'B1',
          title: t('Onboarding-Journey 30/60/90 (mit Coaching & Companion App)', 'Onboarding Journey 30/60/90 (with Coaching & Companion App)'),
          bullets: [
            t('Onboarding Coaching: Begleitung von Talenten und/oder Mentor:innen/Teamleads in den ersten Wochen (Check-ins, Erwartungsklärung, Integration, frühe Konfliktprävention)', 'Onboarding Coaching: Supporting talent and/or mentors/team leads in the first weeks (check-ins, expectation alignment, integration, early conflict prevention)'),
            t('Companion App: individuelle Onboarding-Journeys pro Rolle und Person schnell bauen (30/60/90, Lernziele, Check-ins, Rituale, Frühwarnsignale)', 'Companion App: quickly build individual onboarding journeys per role and person (30/60/90, learning goals, check-ins, rituals, early warning signals)'),
            t('Ziele, Feedbackschleifen, Rhythmus + Gesprächsleitfäden', 'Goals, feedback loops, rhythm + conversation guides'),
            t('Frühwarnsignale & Interventionen', 'Early warning signals & interventions'),
          ],
        },
        {
          code: 'B2',
          title: t('Mentor:innen- & Buddy-System', 'Mentor & Buddy System'),
          bullets: [
            t('Rollenklärung, Matching, Rhythmus', 'Role clarification, matching, rhythm'),
            t('Gesprächsleitfäden, Eskalationspfade', 'Conversation guides, escalation paths'),
            t('Enablement für Mentor:innen', 'Enablement for mentors'),
          ],
        },
        {
          code: 'B3',
          title: 'Talent Culture',
          bullets: [
            t('Talent-Journey-Diagnose (Touchpoints, Führung, Lernraum)', 'Talent journey diagnosis (touchpoints, leadership, learning space)'),
            t('Micro-Rituale (Feedback, Anerkennung, Lernschleifen)', 'Micro-rituals (feedback, recognition, learning loops)'),
            t('Alignment HR/Ausbildung/Teamleads', 'Alignment HR/training/team leads'),
          ],
        },
      ],
    },
    {
      key: 'C',
      icon: Rocket,
      label: t('Talente empowern & entwickeln', 'Empower & Develop Talent'),
      modules: [
        {
          code: 'C1',
          title: 'Talent Development System',
          bullets: [
            t('Kompetenz- & Lernpfade (Future Skills + rollenspezifisch)', 'Competency & learning paths (future skills + role-specific)'),
            t('Entwicklungsarchitektur (Projekte, Reflexion, Transfer)', 'Development architecture (projects, reflection, transfer)'),
            t('Messlogik (Time-to-Competence, Bindung, Drop-out-Risiko)', 'Measurement logic (time-to-competence, retention, drop-out risk)'),
            t('Zusatz: individuelle Lernpfade statt Einheitscurriculum – Pathways nach Person/Rolle.', 'Additional: individual learning paths instead of standard curriculum — pathways per person/role.'),
          ],
        },
        {
          code: 'C2',
          title: 'Talent Leadership Coaching & Consulting',
          bullets: [
            t('Coaching für Teamleads/Ausbilder:innen', 'Coaching for team leads/trainers'),
            t('Sparring bei Drop-out-Risiko, Konflikten, Teamfit', 'Sparring on drop-out risk, conflicts, team fit'),
            t('Toolkits für Entwicklungsgespräche, Feedback, Lernzielplanung', 'Toolkits for development talks, feedback, learning goal planning'),
          ],
        },
      ],
    },
    {
      key: 'D',
      icon: Building2,
      label: t('Organisation zukunftsfähig machen (Transformation) — in Zusammenarbeit mit unserem Partner Thrive', 'Future-proof the Organization (Transformation) — in collaboration with our partner Thrive'),
      modules: [
        {
          code: 'D1',
          title: t('Organisationsdiagnose & Zielbild', 'Organizational Diagnosis & Target Vision'),
          bullets: [
            t('Kultur, Entscheidungen, Verantwortungslogik, Führungsrealität', 'Culture, decisions, responsibility logic, leadership reality'),
            t('Konkretes Zielbild (Prinzipien, Verhaltensanker, Betriebsmodell)', 'Concrete target vision (principles, behavioral anchors, operating model)'),
          ],
        },
        {
          code: 'D2',
          title: t('Leadership- & Kulturentwicklung', 'Leadership & Culture Development'),
          bullets: [
            t('Führung als Enablement statt Kontrolle', 'Leadership as enablement instead of control'),
            t('Feedbackkultur, psychologische Sicherheit, Lernräume', 'Feedback culture, psychological safety, learning spaces'),
            t('GenZ/GenAlpha-Readiness als gelebte Praxis', 'GenZ/GenAlpha readiness as lived practice'),
          ],
        },
        {
          code: 'D3',
          title: t('Operating Model & Zusammenarbeit', 'Operating Model & Collaboration'),
          bullets: [
            t('Rollen, Schnittstellen, Governance, Meeting-/Entscheidungsdesign', 'Roles, interfaces, governance, meeting/decision design'),
            t('Priorisierung, Fokus, Transparenz, Accountability', 'Prioritization, focus, transparency, accountability'),
          ],
        },
        {
          code: 'D4',
          title: t('Self-Governance jenseits klassischer Hierarchie (optional)', 'Self-Governance Beyond Classical Hierarchy (optional)'),
          bullets: [
            t(
              'Wenn Hierarchie bremst, bauen wir (schrittweise) Organisationsformen mit Self-Governance auf – z.B. orientiert an Sociocracy 3.0 und Prinzipien „Living Organisations". Ziel ist nicht „hierarchiefrei" als Ideologie, sondern klare Entscheidungs- und Verantwortungsmechanismen ohne Command-and-Control: schneller entscheiden, näher am Problem, mehr Ownership, mehr Lernfähigkeit.',
              'When hierarchy slows things down, we (gradually) build organizational forms with self-governance — e.g. oriented on Sociocracy 3.0 and "Living Organisations" principles. The goal is not "hierarchy-free" as ideology, but clear decision-making and accountability without command-and-control: faster decisions, closer to the problem, more ownership, more learning capacity.'
            ),
            t('Vorgehen typischerweise: Pilotbereiche → Skalierung → institutionalisierte Lernschleifen.', 'Typical approach: pilot areas → scaling → institutionalized learning loops.'),
          ],
        },
        {
          code: 'D5',
          title: t('Change-Architektur & Umsetzung', 'Change Architecture & Implementation'),
          bullets: [
            t('Kommunikations- und Beteiligungsformate', 'Communication and participation formats'),
            t('Change-Roadmap, Messpunkte, Iteration', 'Change roadmap, measurement points, iteration'),
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fadeUp} className="space-y-4 mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {t('Unsere Angebotsmodule für Maßgenschneiderte Lösungen und Programme:', 'Our service modules for customized solutions and programs:')}
          </h2>
        </motion.div>

        <motion.div {...fadeUp}>
          <Accordion type="multiple" className="space-y-3">
            {categories.map((cat) => (
              <AccordionItem
                key={cat.key}
                value={cat.key}
                className="border border-border rounded-xl overflow-hidden bg-card px-0 data-[state=open]:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <cat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-foreground text-base md:text-lg">
                        {cat.key}) {cat.label}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-2">
                    {cat.modules.map((mod) => (
                      <div
                        key={mod.code}
                        className="p-4 rounded-lg border border-border/60 bg-background"
                      >
                        <h4 className="font-heading font-semibold text-foreground text-sm md:text-base mb-2">
                          <span className="text-accent font-bold mr-2">{mod.code}</span>
                          {mod.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {mod.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                              <span className="text-accent mt-1.5 flex-shrink-0">→</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {cat.key === 'D' && (
                    <div className="mt-4 p-4 rounded-lg border border-accent/20 bg-accent/5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(
                          'Wenn die Organisation nicht hält, was das Employer Branding verspricht, verliert ihr die Besten – selbst bei perfektem Recruiting. Für tiefgreifende Organisations- und Leadershipentwicklung bieten wir gemeinsam mit unserer Berliner Partnerorganisation Thrive einen umfassenden Transformationsprozess.',
                          "If the organization doesn't deliver what employer branding promises, you lose the best — even with perfect recruiting. For deep organizational and leadership development, we offer a comprehensive transformation process together with our Berlin partner organization Thrive."
                        )}
                      </p>
                      <p className="text-sm text-foreground font-medium mt-3">
                        {t(
                          'Worum es geht: Eine Organisation zu gestalten, in der Top-Talente gern an den Start gehen, bleiben und ihr Potenzial langfristig entfalten – strukturell, kulturell und führungsseitig.',
                          'What it\'s about: Designing an organization where top talent happily gets started, stays, and unfolds their potential long-term — structurally, culturally, and in terms of leadership.'
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        {t(
                          'Warum das hier dazugehört (Averagarianism im Betrieb): Viele Organisationen sind noch nach Standardisierung gebaut: Einheitsrollen, Einheitsprozesse, Einheitsbewertungen. Das ist Averagarianism in der Praxis. Zukunftsfähige Organisationen ersetzen das durch Equal Fit: Rollen, Lernräume, Entscheidungslogik und Führung so gestalten, dass unterschiedliche Profile wirksam werden können.',
                          'Why this belongs here (Averagarianism in practice): Many organizations are still built on standardization: uniform roles, uniform processes, uniform evaluations. That\'s Averagarianism in practice. Future-proof organizations replace this with Equal Fit: designing roles, learning spaces, decision-making logic, and leadership so that different profiles can be effective.'
                        )}
                      </p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesModuleMenu;
