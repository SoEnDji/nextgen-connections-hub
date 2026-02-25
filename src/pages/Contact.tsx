import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-16"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t('Kontakt', 'Get in touch')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t(
                'Du hast Fragen, willst mehr erfahren oder ein Gespräch starten? Wir freuen uns, von dir zu hören.',
                "Have questions, want to learn more, or start a conversation? We'd love to hear from you."
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div {...fadeUp} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">E-Mail</h3>
                    <p className="text-muted-foreground">hello@2morrowlab.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {t('Gespräch vereinbaren', 'Schedule a conversation')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(
                        'Schreib uns und wir melden uns innerhalb von 48 Stunden.',
                        "Reach out and we'll get back to you within 48 hours."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t('Name', 'Name')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('Dein Name', 'Your name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('Deine E-Mail-Adresse', 'Your email address')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('Ich bin...', 'I am...')}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>{t('Junge:r Mensch', 'Young person')}</option>
                    <option>{t('Elternteil', 'Parent')}</option>
                    <option>{t('Schule / Lehrkraft', 'School / Educator')}</option>
                    <option>{t('Unternehmen', 'Company')}</option>
                    <option>{t('Sonstiges', 'Other')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('Nachricht', 'Message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder={t('Deine Nachricht...', 'Your message...')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-accent-glow transition-colors"
                >
                  {t('Nachricht senden', 'Send message')}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  {t('Kontaktformular-Integration kommt bald.', 'Contact form integration coming soon.')}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
