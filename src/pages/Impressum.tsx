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
                  2Morrow Lab™ {t('ist eine Marke der', 'is a brand of')} <br />
                  <br />
                  Kairos & Fortuna Ventures GmbH <br />
                  <br />
                  Boxhagener Straße 96 <br />
                  10245 Berlin-Friedrichshain<br />
                  HRB 242263
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Vertreten durch', 'Represented by')}
                </h2>
                <p>Dr. Sohrab Noorsalehi-Garakani und Vera Plümer</p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Kontakt', 'Contact')}
                </h2>
                <p>
                  E-Mail: info@2morrowlab.org
                </p>
              </div>

              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {t('Haftungsbeschränkung', 'Limitation of Liability')}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Inhalte dieser Website', 'Website Content')}</h3>
                    <p>
                      {t(
                        'Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers/der Nutzerin. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors oder der jeweiligen Autorin und nicht immer die Meinung des Anbieters wieder.',
                        'The contents of this website are created with the utmost care. However, the provider assumes no liability for the correctness, completeness and timeliness of the contents provided. The use of the website contents is at the user\'s own risk. Contributions marked by name reflect the opinion of the respective author and not always the opinion of the provider.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Verfügbarkeit der Website', 'Website Availability')}</h3>
                    <p>
                      {t(
                        'Der Anbieter wird sich bemühen, den Dienst möglichst unterbrechungsfrei zum Abruf anzubieten. Auch bei aller Sorgfalt können aber Ausfallzeiten nicht ausgeschlossen werden. Der Anbieter behält sich das Recht vor, sein Angebot jederzeit zu ändern oder einzustellen.',
                        'The provider will endeavor to offer the service as uninterrupted as possible. However, downtimes cannot be excluded despite all care. The provider reserves the right to modify or discontinue its services at any time.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Externe Links', 'External Links')}</h3>
                    <p>
                      {t(
                        'Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.',
                        'This website contains links to websites of third parties ("external links"). These websites are the responsibility of their respective operators. The provider reviewed the external content for any legal violations at the time of initial linking. At that time, no legal violations were apparent. The provider has no influence over the current and future design and content of the linked pages. Linking to external sites does not imply that the provider adopts the content behind the reference or link. Continuous monitoring of these external links is not reasonable for the provider without concrete evidence of legal violations. However, upon becoming aware of any legal violations, such external links will be deleted immediately.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Kein Vertragsverhältnis', 'No Contractual Relationship')}</h3>
                    <p>
                      {t(
                        'Mit der Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande. Insofern ergeben sich auch keinerlei vertragliche oder quasivertragliche Ansprüche gegen den Anbieter.',
                        'The use of the provider\'s website does not create any contractual relationship between the user and the provider. Therefore, no contractual or quasi-contractual claims arise against the provider.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Urheberrecht', 'Copyright')}</h3>
                    <p>
                      {t(
                        'Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers/Rechteinhaberin. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.\n\nLinks zur Website des Anbieters sind jederzeit willkommen und bedürfen keiner Zustimmung durch den Anbieter der Website. Die Darstellung dieser Website in fremden Frames ist nur mit Erlaubnis zulässig.',
                        'The contents published on this website are subject to German copyright law. Any use not permitted by German copyright law requires the prior written consent of the provider or the respective copyright holder. This applies in particular to reproduction, editing, translation, storage, processing or reproduction of content in databases or other electronic media and systems. Third-party content and rights are identified as such. Unauthorized reproduction or distribution of individual content or entire pages is not permitted and is punishable. Only the creation of copies and downloads for personal, private and non-commercial use is permitted.\n\nLinks to the provider\'s website are always welcome and do not require permission from the website provider. The display of this website in foreign frames is only permissible with permission.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Anwendbares Recht', 'Applicable Law')}</h3>
                    <p>
                      {t(
                        'Es gilt ausschließlich das maßgebliche Recht der Bundesrepublik Deutschland.',
                        'Exclusively the applicable law of the Federal Republic of Germany shall apply.'
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t('Besondere Nutzungsbedingungen', 'Special Terms of Use')}</h3>
                    <p>
                      {t(
                        'Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Punkten (1) bis (4) abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.',
                        'To the extent that special conditions for individual uses of this website deviate from the aforementioned points (1) to (4), this will be explicitly indicated at the corresponding location. In such cases, the special terms of use shall apply in the respective individual case.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
