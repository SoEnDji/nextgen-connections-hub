import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Datenschutz = () => {
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
              {t('Datenschutzerklärung', 'Privacy Policy')}
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('1. Verantwortlicher', '1. Data Controller')}
                </h2>
                <p>
                  {t(
                    'Verantwortlicher für die Datenverarbeitung auf dieser Website ist:',
                    'The data controller for data processing on this website is:'
                  )}
                </p>
                <p className="mt-2">
                  2Morrow Lab™ ist eine Marke der<br />
                  Kairos & Fortuna Ventures GmbH<br />
                  <br />
                  Boxhagener Straße 96<br />
                  10245 Berlin-Friedrichshain<br />
                  <br />
                  {t('Vertreten durch', 'Represented by')}: Dr. Sohrab Noorsalehi-Garakani und Vera Plümer<br />
                  <br />
                  E-Mail: info@2morrowlab.org
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('2. Erhebung und Speicherung personenbezogener Daten', '2. Collection and Storage of Personal Data')}
                </h2>
                <p>
                  {t(
                    'Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliche Daten.',
                    'When you visit our website, information of a general nature is automatically collected. This information (server log files) includes the type of web browser, the operating system used, the domain name of your Internet service provider, and similar data.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('3. Newsletter', '3. Newsletter')}
                </h2>
                <p>
                  {t(
                    'Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse. Die Anmeldung erfolgt über unseren Dienstleister Brevo (ehemals Sendinblue). Ihre Daten werden ausschließlich für den Versand des Newsletters verwendet.',
                    'If you would like to receive the newsletter offered on the website, we require an email address from you. Registration is handled through our service provider Brevo (formerly Sendinblue). Your data will only be used for sending the newsletter.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('4. Ihre Rechte', '4. Your Rights')}
                </h2>
                <p>
                  {t(
                    'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich dazu an: hello@2morrowlab.com',
                    'You have the right to access, rectification, deletion, restriction of processing, data portability, and objection. Please contact: hello@2morrowlab.com'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('5. Cookies', '5. Cookies')}
                </h2>
                <p>
                  {t(
                    'Unsere Website verwendet keine Tracking-Cookies. Es werden nur technisch notwendige Cookies eingesetzt.',
                    'Our website does not use tracking cookies. Only technically necessary cookies are used.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('6. Hosting', '6. Hosting')}
                </h2>
                <p>
                  {t(
                    'Diese Website wird gehostet von einem externen Dienstleister (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.',
                    'This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the servers of the hoster.'
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

export default Datenschutz;
