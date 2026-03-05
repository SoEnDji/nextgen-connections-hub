import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('Impressum', 'Imprint')}
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Angaben gemäß § 5 TMG', 'Information according to § 5 TMG')}
                </h2>
                <p>
                  2Morrow Lab<br />
                  [Straße und Hausnummer]<br />
                  [PLZ Ort]<br />
                  {t('Deutschland', 'Germany')}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Vertreten durch', 'Represented by')}
                </h2>
                <p>[Name der vertretungsberechtigten Person(en)]</p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Kontakt', 'Contact')}
                </h2>
                <p>
                  E-Mail: hello@2morrowlab.com
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV', 'Responsible for content according to § 55 Abs. 2 RStV')}
                </h2>
                <p>[Name und Anschrift]</p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Haftungsausschluss', 'Disclaimer')}
                </h2>
                <p>
                  {t(
                    'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
                    'Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
