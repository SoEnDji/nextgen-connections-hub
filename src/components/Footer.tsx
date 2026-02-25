import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">2Morrow Lab</h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              {t(
                'Eine Plattform für Entwicklungspartnerschaften. Junge Menschen. Unternehmen. Schulen. Gemeinsam.',
                'A platform for development partnerships. Young people. Companies. Schools. Together.'
              )}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              {t('Navigation', 'Navigation')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link to="/programs" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('Programme', 'Programs')}
              </Link>
              <Link to="/schools" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('Für Schulen', 'For Schools')}
              </Link>
              <Link to="/companies" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('Für Unternehmen', 'For Companies')}
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('Über uns', 'About')}
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t('Kontakt', 'Contact')}
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
              {t('Rechtliches', 'Legal')}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <span className="text-sm text-primary-foreground/70">{t('Impressum', 'Imprint')}</span>
              <span className="text-sm text-primary-foreground/70">{t('Datenschutz', 'Privacy')}</span>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} 2Morrow Lab. {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
